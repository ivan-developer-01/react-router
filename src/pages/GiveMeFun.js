import { Component } from "react";
import { useParams } from "react-router-dom";

export default function GiveMeFun() {
	const params = useParams();
	return <BypassingHooks type={params.type} />;
}

class BypassingHooks extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fun: "Wait a little bit bro..."
		};

		this.funSentences = {
			nonsensePhrases: [
				"I am a piece of code, but I can give you fun",
				"But can't you give me some fun?",
				"Talk is cheap, show me the Fun!",
				"Here Is The Only One Way To Write Recursion In Java. You Must First Write Recursion.",
			],
			quotes: [
				"Talk is cheap. Show me the code. -- Linus Torvalds",
				"To understand recursion, one must first understand recursion. -- Stephen Hawking",
				"Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program. -- Linus Torvalds",
				"Any fool can write code that a computer can understand. Good programmers write code that humans can understand. -- Martin Fowler",
				"Java is to JavaScript what car is to Carpet. -- Chris Heilmann",
				"First, solve the problem. Then, write the code. -- John Johnson",
				"Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live. -- John Woods",
				"Code is like humor. When you have to explain it, it's bad. -- Cory House", // "Code is like humor. When you have to House it, it's bad. -- Cory explain",
				"In fact, if you don't make any mistakes, it means you're a bad programmer. -- Ivan Kolosov",
				"The best way to predict the future is to invent it. -- Alan Kay",
			],
			something: [
				"A red dog is the dog who likes to ride on green Ferrari and bumps into a purple Lamborghini.",
				"A rainbow is actually a multicolored candy bar.",
				"Clouds are made of a mixture of water and milk. That's why they are not transparent.",
				"A truck with tiny wheels can hold cats.",
				"I hate bananas, but I eat them every day because I like them.",
				"This is Winter. You won't have time to even blink before the Spring.",
				"This is Spring. You won't have time to even blink before the Summer.",
				"This is Summer. You won't have time to even blink before the Autumn.",
				"This is Autumn. You won't have time to even blink before the Winter.",
				"Bananas are yellow, but sometimes they turn green and brown.",
				"Vegetables are fruits. But the creator of vegetables forgot to sugar them.",
				"Watermelons are not melons. They are watermelons.",
				"*Melons can swim because they have air inside.",
				"Did you know that watermelons are actually not fruits? They are berries because they have seeds inside the soft shell, covered with hard skin.",
				"Fruits are sorts of vegetables with sugar inside."
			]
		}

		console.log(this.props.type);
	}

	shuffle(array) {
		let currentIndex = array.length, randomIndex;

		// While there remain elements to shuffle.
		while (currentIndex > 0) {

			// Pick a remaining element.
			randomIndex = Math.floor(Math.random() * currentIndex);
			currentIndex--;

			// And swap it with the current element.
			if (Math.random() > 0.80) {
				[array[currentIndex], array[randomIndex]] = [
					array[randomIndex], array[currentIndex]];
			}
		}

		return array;
	}

	onDemandShuffle = () => {
		this.setState(({ fun }) => {
			const newSentence = this.shuffle(fun.split(" ")).join(" ");

			return {
				fun: newSentence
			}
		});
	};

	generateNewSentence = () => {
		this.setState({
			fun: this.funSentences[this.props.type][Math.floor(Math.random() * this.funSentences[this.props.type].length)]
		});
	};

	render() {
		const { type } = this.props;
		return (
			<>
				<h3>Here is your {type}</h3>

				<p>{this.state.fun}</p>

				<p>
					It explains how fun it is. <br />
					No worry, probably not funny but I don't care. <br />
					Speaking nonsense, huh? <br />
					Well, this paragraph is for space-filling purposes.
				</p>

				<button onClick={this.onDemandShuffle}>Shuffle that or I'll close the site!</button>
				<button onClick={this.generateNewSentence}>Gimme another</button>
			</>
		);
	}
}