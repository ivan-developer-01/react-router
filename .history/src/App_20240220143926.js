import { Component } from "react";
import { Link, Router } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<>
				<h1>Hello World</h1>
				
				<p>Would you like to go somewhere? ;)</p>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact</Link></li>
					<li><Link to="/abracadabra">AbraCadabra</Link></li>
					<li><Link to="/story">Tell me a story!</Link></li>
				</ul>

				<div className="content">
					<h3>This is the content of the page you are in:</h3>

					<Router>
						<Home path="/" />
						<About path="/about" />
						<Contact path="/contact" />
						<AbraCadabra path="/abracadabra" />
						<Story path="/story" />
					</Router>
				</div>
			</>
		);
	}
}

export default App;
