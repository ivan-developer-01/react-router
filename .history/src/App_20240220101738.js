import { Component } from "react";
import { Link } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<>
				<h1>Hello World</h1>
				
				<p>Would you like to go somewhere? ;)</p>
				<ul>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/abracadabra">AbraCadabra</a></li>
					<li><a href="/story">Tell me a story!</a></li>
				</ul>
			</>
		);
	}
}

export default App;
