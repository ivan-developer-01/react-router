import { Link, Outlet } from "react-router-dom";

export default function Home() {
	return (
		<>
			<h1>Hello World</h1>

			Ja ja ja!
				
			<p>Would you like to go somewhere? ;)</p>
			<ul>
				<li><Link to="/">Home</Link></li>
				<li><Link to="about">About</Link></li>
				<li><Link to="contact">Contact</Link></li>
				<li><Link to="abracadabra">AbraCadabra</Link></li>
				<li><Link to="story">Tell me a story!</Link></li>
				<li><Link to="fun/nonsensePhrases">Nonsense phrases</Link></li>
				<li><Link to="fun/quotes">Quotes</Link></li>
				<li><Link to="fun/something">Anything</Link></li>
			</ul>

			<div className="content">
				<h3>This is the content of the page you are in:</h3>

				<Outlet />
			</div>
		</>
	)
}