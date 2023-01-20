<script lang="ts">
	import { shuffleArray } from '../../utils/helpers';

	export let data;

	const { packs } = data;

	// state
	const packTypes = packs.map((pack: Pack) => pack.name);
	const deck = {
		questions: shuffleArray(packs.map((pack: Pack) => pack.black).flat()),
		answers: shuffleArray(packs.map((pack: Pack) => pack.white).flat())
	};

	let currentQuestionIndex = 0;
	let currentAnswerIndex = 10;

	let answerCards = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	// methods
	const setNextQuestion = () => {
		if (currentQuestionIndex >= deck.questions.length - 1) {
			currentQuestionIndex = 0;
			return;
		}

		currentQuestionIndex = currentQuestionIndex += 1;
	};

	const setNextAnswerCard = (cardIndex: number) => {
		answerCards[cardIndex] = currentAnswerIndex;

		if (currentAnswerIndex >= deck.answers.length - 1) {
			currentAnswerIndex = 0;
		}
		currentAnswerIndex = currentAnswerIndex += 1;
	};
</script>

<template>
	<section class="container">
		<header>
			<h1>Game</h1>

			<div>
				<p>
					{#each packTypes as type}
						<span> {type}, </span>
					{/each}
				</p>
			</div>
		</header>

		<div class="card-wrapper">
			<button class="card question" on:click={setNextQuestion}>
				<p>{deck.questions[currentQuestionIndex].text}</p>
			</button>

			<div class="answer-cards">
				{#each answerCards as card, cardIndex}
					<button class="card answer" on:click={() => setNextAnswerCard(cardIndex)}>
						<p>{deck.answers[card].text}</p>
					</button>
				{/each}
			</div>
		</div>
	</section>
</template>

<style lang="scss">
	.container {
		position: relative;

		display: flex;
		flex-direction: column;
		row-gap: 4rem;

		padding: 1rem 4rem 4rem;

		.card-wrapper {
			position: relative;
			width: 100%;

			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			gap: 1rem;

			.card {
				position: relative;
				width: 200px;
				height: 300px;

				display: flex;

				padding: 1rem;
				border: 1px solid black;
				border-radius: 1rem;

				text-align: left;

				transition: transform var(--transition);

				&:hover {
					transform: scale(1.05);
				}

				&:active {
					transform: scale(1);
				}

				&.question {
					color: white;
					background-color: black;
				}

				&.answer {
					color: black;
					background-color: white;
				}
			}

			.answer-cards {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				gap: 1rem;
			}
		}
	}
</style>
