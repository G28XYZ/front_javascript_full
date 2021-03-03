import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import Details, { Field } from "../details/";
import ErrorMessage from "../errorMessage/";
import RowBlock from "../rowBlock/";
import GotService from "../../services/gotService";

export default class BooksPage extends Component {
	state = {
		selectedBooks: null,
		error: false,
	};

	gotService = new GotService();

	componentDidCatch() {
		this.setState({ error: true });
	}

	onItemSelected = (id) => {
		this.setState({ selectedBooks: id });
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllBooks}
				renderItem={({ name, numberOfPages }) =>
					`${name} (${numberOfPages} pages) `
				}
			/>
		);

		const booksDetails = (
			<Details
				Id={this.state.selectedBooks}
				getDetails={this.gotService.getBook}
			>
				<Field field="numberOfPages" label="Number of pageas" />
				<Field field="publisher" label="Publisher" />
				<Field field="released" label="Released" />
			</Details>
		);

		return <RowBlock left={itemList} right={booksDetails} />;
	}
}
