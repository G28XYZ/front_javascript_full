import React, { Component } from "react";
import ItemList from "../itemList";
import Details, { Field } from "../details/";
import ErrorMessage from "../errorMessage/";
import RowBlock from "../rowBlock/";
import GotService from "../../services/gotService";

export default class CharacterPage extends Component {
	state = {
		selectedChar: null,
		error: false,
	};

	gotService = new GotService();

	componentDidCatch() {
		this.setState({ error: true });
	}

	onItemSelected = (id) => {
		this.setState({ selectedChar: id });
	};

	render() {
		if (this.state.error) {
			return <ErrorMessage />;
		}

		const itemList = (
			<ItemList
				onItemSelected={this.onItemSelected}
				getData={this.gotService.getAllCharacters}
				renderItem={({ name, gender }) => `${name} (${gender})`}
			/>
		);

		const charDetails = (
			<Details
				Id={this.state.selectedChar}
				getDetails={this.gotService.getCharacter}
			>
				<Field field="gender" label="Gender" />
				<Field field="born" label="Born" />
				<Field field="died" label="Died" />
				<Field field="culture" label="Culture" />
			</Details>
		);

		return <RowBlock left={itemList} right={charDetails} />;
	}
}
