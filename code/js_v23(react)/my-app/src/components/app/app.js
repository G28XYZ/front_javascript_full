import React, { Component } from "react";
import AppHeader from "../app-header/";
import SearchPanel from "../search-panel/";
import PostStatusFilter from "../post-status-filter/";
import PostList from "../post-list/";
import PostAddForm from "../post-add-form";

// import style from "./app.module.css";
import styled from "styled-components";

const AppBlock = styled.div`
	margin: 0 auto;
	max-width: 800px;
`;

const StyledAppBlock = styled(AppBlock)`
	backgroud-color: grey;
`;

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					label: "Going to learn React",
					important: true,
					like: false,
					id: 1,
				},
				{ label: "That is good", important: false, like: false, id: 2 },
				{
					label: "I need a break...",
					important: false,
					like: false,
					id: 3,
				},
			],
		};
		this.deleteItem = this.deleteItem.bind(this);
		this.addItem = this.addItem.bind(this);
		this.onToggleImportant = this.onToggleImportant.bind(this);
		this.onToggleLiked = this.onToggleLiked.bind(this);

		this.maxId = 4;
	}

	deleteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id == id);
			const copyData = [...data];
			copyData.splice(index, 1);
			return { data: copyData };
		});
	}

	addItem(body) {
		const newItem = { label: body, important: false, id: this.maxId++ };

		this.setState(({ data }) => {
			const newArr = [...data, newItem];
			return {
				data: newArr,
			};
		});
	}

	onToggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id == id);
			const copyData = [...data];
			copyData[index].important = !copyData[index].important;
			return { data: copyData };
		});
	}

	onToggleLiked(id) {
		this.setState(({ data }) => {
			const index = data.findIndex((elem) => elem.id == id);
			const copyData = [...data];
			copyData[index].like = !copyData[index].like;
			return { data: copyData };
		});
	}

	render() {
		const { data } = this.state;
		const liked = data.filter((item) => item.like).length;
		const allPosts = data.length;
		return (
			<StyledAppBlock>
				<AppHeader liked={liked} allPosts={allPosts} />
				<div className="search-panel d-flex">
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deleteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm onAdd={this.addItem} />
			</StyledAppBlock>
		);
	}
}
