import React, { Component } from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./components/app/";

// свойсва и состояния компонентов
// class WhoAmI extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			years: 26,
// 		};
// 		// this.nextYears = this.nextYears.bind(this);
// 		// this.nextYears = () => {
// 		// 	this.setState((state) => ({
// 		// 		years: ++state.years,
// 		// 	}));
// 		// };
// 	}

// 	nextYears = () => {
// 		this.setState((state) => ({
// 			years: ++state.years,
// 		}));
// 	};

// 	// nextYears() {
// 	// 	console.log(1);
// 	// 	// this.state.years++
// 	// 	this.setState((state) => ({
// 	// 		years: ++state.years,
// 	// 	}));
// 	// }

// 	render() {
// 		const { name, surname, link } = this.props;
// 		const { years } = this.state;
// 		return (
// 			<>
// 				<button onClick={this.nextYears}>++</button>
// 				<h1>
// 					My name is {name}, surname - {surname}, years - {years}
// 				</h1>
// 				<a href={link}>My profile</a>
// 			</>
// 		);
// 	}
// }

// const All = () => {
// 	return (
// 		<>
// 			<WhoAmI name="Jho" surname="Jh" link="facebook.com" />
// 			<WhoAmI name="J" surname="Smith" link="face.com" />
// 			<WhoAmI name="ho" surname="Sgepa" link="book.com" />
// 		</>
// 	);
// };

ReactDOM.render(<App />, document.getElementById("root"));
