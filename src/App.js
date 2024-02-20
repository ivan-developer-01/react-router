import { Component } from "react";
import * as React from "react";
import { Link, Route, Router, Routes, BrowserRouter } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<>
				<h1>Hello World</h1>
				
				<p>Would you like to go somewhere? ;)</p>
				{/* <ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="about">About</Link></li>
					<li><Link to="contact">Contact</Link></li>
					<li><Link to="abracadabra">AbraCadabra</Link></li>
					<li><Link to="story">Tell me a story!</Link></li>
				</ul> */}

				<div className="content">
					<h3>This is the content of the page you are in:</h3>

					<BrowserRouter>
						<Routes>
							<Route path="/" element={<h1>Home</h1>} />
							<Route path="/about" />
							<Route path="/contact" />
							<Route path="/abracadabra" />
							<Route path="/story" />
						</Routes>
					</BrowserRouter>
				</div>
			</>
		);
	}
}

export default App;
