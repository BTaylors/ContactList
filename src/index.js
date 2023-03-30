import React from "react";
import ReactDOM from "react-dom";

const Main = () => {
	return (
		<div id="main">
			<div id="navbar">
				<div>Contact List</div>
			</div>
			<div id="container">{table}</div>
		</div>
	);
};

ReactDOM.render(<Main />, document.getElementById("app"));
