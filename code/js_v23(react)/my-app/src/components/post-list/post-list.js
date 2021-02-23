import React from "react";

import PostListItem from "../post-list-item/";

import { ListGroup } from "reactstrap";

import "./post-list.css";

// <PostListItem label={item.label} important={item.important} />

const PostList = ({ posts, onDelete }) => {
	const elements = posts.map((item) => {
		const { id, ...itemProps } = item;

		return (
			<li key={id} className="list-group-item">
				<PostListItem {...itemProps} onDelete={() => onDelete(id)} />
			</li>
		);
	});

	return <ListGroup className="app-list">{elements}</ListGroup>;
};

export default PostList;
