import { Component } from "react";

export default class Story extends Component {
	constructor(props) {
		super(props);
		this.state = {
			// story: "A red dog sat on Ferrari and bumped into a Lamborghini. The cars became larger from the explosion of chocolate bumpers and became a truck with tiny wheels. A biker saw the truck and was afraid to drive so he grabbed the front brake and did a front-flip. The truck driver was impressed and jumped out on the chocolate road to try it as well but the biker didn't agree to give his bike and then the truck driver and the biker were dragging the bike by its wheels and have freed the bike from the burden of wheels. The bike attached red wings to itself and flew away, leaving the truck driver and biker with nothing. Then suddenly they came up with an idea, the truck driver held the front wheel's axis and spinning the pedals on the rear wheel that the biker pulled out from the truck driver's nose. Then they saw a red dog sitting on Ferrari. And the story is all over again..."
			story: "A red dog sat on green Ferrari and bumped into a purple Lamborghini. The mixed cars became larger from the big explosion of yummmy chocolate bumpers and became a purple truck holding cats with tiny wheels. A biker saw the blue truck and was afraid to drive so he grab grabbed the strong front brake like afraid and did a front-flip. The truck driver poked his nose and was impressed and jumped out on the chocolate road but was ready to be passed out to try it as well but the biker didn't agree to give his bike and he enraged and then the truck driver and the biker were dragging the bike by its wheels because of the jealousy and have freed the bike from its wheely burden of wheels. The bike attached red wings to itself and flew away poking through the chocolate, leaving the truck driver and biker with nothing. Then suddenly they came up with an stupid idea, the chain truck driver held the front wheel's axis and spinning the pedals on the rear wheel that the biker pulled out from the truck driver's nose. But then something went unusual wrong. They saw a red dog sitting on Ferrari. And the story is all over again..."
		}
	}

	shuffle(array) {
		let currentIndex = array.length, randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex > 0) {

			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			if (Math.random() > 0.90) {
				[array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
			}
		}

		return array;
	}

	onDemandShuffle = () => {
		this.setState(({ story }) => {
			const newStory = this.shuffle(story.split(" ")).join(" ");

			return {
				story: newStory
			}
		});
	}

	render() {
		return (
			<>
				<h3>Here is your story!</h3>

				<p>{this.state.story}</p>
				<button onClick={this.onDemandShuffle}>Shuffle that or I'll close the site!</button>
			</>
		);
	}
}