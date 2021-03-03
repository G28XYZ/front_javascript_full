import React, { Component } from "react";
import GotService from "../../services/gotService";
import Details, { Field } from "../details/";

export default class BooksItem extends Component {
	gotService = new GotService();

	render() {
		return (
			<Details
				Id={this.props.bookId}
				getDetails={this.gotService.getBook}
			>
				<Field field="numberOfPages" label="Number of pageas" />
				<Field field="publisher" label="Publisher" />
				<Field field="released" label="Released" />
			</Details>
		);
	}
}
