import React, { Component, useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import App from "./components/app";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";

// ReactDOM.render(<App />, document.getElementById("root"));

function App() {
	const [count, setCount] = useState(0);
	const [data, refreshData] = useState([{ name: "Ivan", sex: "mail" }]);

	useEffect(() => {
		console.log(Math.random());
	});

	return (
		<div>
			<p>
				Вы кликнули {count}
				{count.toString()[count.toString().length - 1] == "2"
					? " разa"
					: " раз"}
			</p>
			<button onClick={() => setCount(count + 1)}>Click ME</button>

			{data.map((item, i) => {
				return (
					<div key={i}>
						Name: {item.name}, sex: {item.sex}
					</div>
				);
			})}
			<button
				onClick={() =>
					refreshData((data) => [
						...data,
						{ name: "Alex", sex: "male" },
					])
				}
			>
				Добваить данные
			</button>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));
