import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import ErrorMessage from "../errorMessage/";
import GotService from "../../services/gotService";
import { withRouter } from "react-router-dom";

class BooksPage extends Component {
	state = {
		error: false,
	};

	gotService = new GotService();

	componentDidCatch() {
		this.setState({ error: true });
	}

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		return (
			<ItemList
				onItemSelected={(itemId) => {
					this.props.history.push(itemId);
				}}
				getData={this.gotService.getAllBooks}
				renderItem={({ name, numberOfPages }) =>
					`${name} (${numberOfPages} pages) `
				}
			/>
		);
	}
}

export default withRouter(BooksPage);
