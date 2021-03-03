import React, { Component } from "react";
import "./details.css";
import GotService from "../../services/gotService";

const Field = ({ details, field, label }) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{details[field]}</span>
        </li>
    );
};

export { Field };

export default class Details extends Component {
    gotService = new GotService();

    state = { details: null };

    componentDidMount() {
        this.updateDetails();
    }

    componentDidUpdate(prevProps) {
        if (
            this.props.Id != prevProps.Id &&
            this.props.getDetails == prevProps.getDetails
        ) {
            this.updateDetails();
        }
    }

    updateDetails() {
        const { Id, getDetails } = this.props;

        if (!Id) {
            return;
        }

        getDetails(Id).then((details) => {
            this.setState({ details });
        });
    }

    render() {
        if (!this.state.details) {
            return <span className="select-error">Please select item</span>;
        }

        const { details } = this.state;

        const { name } = details;
        return (
            <div className="details rounded">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {React.Children.map(this.props.children, (child) => {
                        return React.cloneElement(child, { details });
                    })}
                </ul>
            </div>
        );
    }
}
