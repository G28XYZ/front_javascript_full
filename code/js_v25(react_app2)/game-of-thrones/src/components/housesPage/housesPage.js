import React, { Component } from "react";
import { Col, Row, Container } from "reactstrap";
import ItemList from "../itemList";
import Details, { Field } from "../details/";
import ErrorMessage from "../errorMessage/";
import RowBlock from "../rowBlock/";
import GotService from "../../services/gotService";

export default class HousesPage extends Component {
	state = {
		selectedHouse: null,
		error: false,
	};

	gotService = new GotService();

	componentDidCatch() {
		this.setState({ error: true });
	}

	onItemSelected = (id) => {
		this.setState({ selectedHouse: id });
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllHouses}
				renderItem={({ name, region }) => `${name} (${region})`}
			/>
		);

		const housesDetails = (
			<Details
				Id={this.state.selectedHouse}
				getDetails={this.gotService.getHouse}
			>
				<Field field="region" label="Region" />
				<Field field="words" label="Words" />
			</Details>
		);

		return <RowBlock left={itemList} right={housesDetails} />;
	}
}
