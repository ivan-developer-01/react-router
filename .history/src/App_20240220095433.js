import { Component } from "react";

class App extends Component {
	render() {
		return (
			<div>
				<h1>Hello World</h1>
				
				<p>Would you like to go somewhere? ;)</p>
				<ul>
					<li><a href="/about">About</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/abracadabra">AbraCadabra</a></li>
				</ul>
			</div>
		);
	}
}

export default App;
