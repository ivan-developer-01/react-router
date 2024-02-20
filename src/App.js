import { Component } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AbraCadabra from "./pages/AbraCadabra";
import Story from "./pages/Story";

class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Routes>
					<Route element={<Home />}>
						<Route path="/" element={<h1>Home</h1>} />
						<Route path="about" element={<About />} />
						<Route path="contact" element={<Contact />} />
						<Route path="/abracadabra" element={<AbraCadabra />} />
						<Route path="/story" element={<Story />} />
					</Route>
				</Routes>
			</BrowserRouter>
		);
	}
}

export default App;
