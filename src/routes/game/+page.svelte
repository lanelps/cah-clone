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

	const setNextQuestion = () => {
		if (currentQuestionIndex >= deck.questions.length - 1) {
			currentQuestionIndex = 0;
			console.log(`Questions finished`);
			return;
		}

		currentQuestionIndex = currentQuestionIndex += 1;
	};
</script>

<template>
	<section class="container">
		<header>
			<h1>Game</h1>

			<div>
				<h2>Packs in use</h2>
				<p>
					{#each packTypes as type}
						<span> {type}, </span>
					{/each}
				</p>
			</div>
		</header>

		<div class="card-wrapper">
			<button class="question" on:click={setNextQuestion}>
				<p>{deck.questions[currentQuestionIndex].text}</p>
			</button>
		</div>
	</section>
</template>

<style lang="scss">
	.container {
		position: relative;

		display: flex;
		flex-direction: column;
		row-gap: 4rem;

		.card-wrapper {
			position: relative;
			width: 100%;

			display: flex;
			align-items: center;
			justify-content: center;

			.question {
				position: relative;
				width: 200px;
				height: 300px;

				display: flex;

				padding: 1rem;

				color: white;
				background-color: black;
				border-radius: 1rem;

				text-align: left;

				transition: transform var(--transition);

				&:hover {
					transform: scale(1.05);
				}

				&:active {
					transform: scale(1);
				}
			}
		}
	}
</style>
