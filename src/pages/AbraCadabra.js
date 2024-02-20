import { Component } from "react";

export default class AbraCadabra extends Component {
	constructor(props) {
		super(props);
		
		this.state = {
			abracadabra: "Mpfpfp mph mpfhmpf!",
			counter: 0,
			anyMoreClicks: true
		};
	}

	onMeWannaMore = () => {
		if (!this.state.anyMoreClicks) {
			return;
		}

		let newAbracadabra = this.state.abracadabra + "\n";
		let weHaveLuck/*Yet*/ = true;

		if (this.state.counter > 9) {
			newAbracadabra += "Now, close your mouth and take my abracadabra!";
			weHaveLuck = false;
			this.setState({ anyMoreClicks: false });
		}

		const who = ["developer", "teacher", "student", "programmer", "engineer", "scientist", "gardener", "biker"];
		const what = ["kicked the", "bit the", "stole a laptop from", "ran away from", "broke the computer of the", "helped the", "got angry on", "baked a cake for", "got happy with a", "was offended by a"];
		const when = ["1 year ago", "11 months ago", "10 months ago", "9 months ago", "8 months ago", "7 months ago", "6 months ago", "5 months ago", "4 months ago", "3 months ago", "2 months ago", "a month ago", "a week ago", "a few days ago", "a day before yesterday", "yesterday", "today", "1 hour ago", "just now"];
		const names = ["Ivan", "Patrik", "Greta", "Johanna", "Johannes", "Mikael", "Simon", "Ludvig", "Mats", "Niklas", "Mads", "Jesper", "Peter", "Johan"];

		// random value
		const rndv = array => array[Math.floor(Math.random() * array.length)];

		if (weHaveLuck) newAbracadabra += `A ${rndv(who)} called ${rndv(names)} ${rndv(what)} ${rndv(who)} ${rndv(names)}, it happened ${rndv(when)}.`;
		
		this.setState(currentState => ({
			counter: currentState.counter + 1,
			abracadabra: newAbracadabra
		}));
	}

	render() {
		return (
			<>
				<h3>AbraCadabra</h3>

				<p style={{ whiteSpace: "pre-wrap" }}>{this.state.abracadabra}</p>

				<button style={{ scale: 0.8 }} onClick={this.onMeWannaMore}>I wanna more abracadabra!</button>
			</>
		);
	}
}