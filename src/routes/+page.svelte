<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;

	import { sortByProperty } from '../utils/helpers';

	const { cards } = data;
	// console.log(`cards`, cards);

	const packs = cards
		.map((card) => ({ name: card.name, official: card.official }))
		.sort((a, b) => sortByProperty(a, b, 'name'));

	// console.log(`packs`, packs);
</script>

<template>
	<section class="container">
		<h1 class="title">CAH Clone</h1>

		<ul class="packs">
			{#each packs as pack}
				<li class="pack">
					<button>
						{pack?.name}
					</button>
				</li>
			{/each}
		</ul>
	</section>
</template>

<style lang="scss">
	.container {
		position: relative;

		padding: 1.5rem var(--padding);

		.title {
			margin-bottom: 1.5rem;
		}

		.packs {
			list-style-type: none;

			display: grid;
			grid-template-columns: var(--columns);
			grid-gap: 1rem;

			.pack {
				position: relative;

				background-color: white;
				color: black;

				border: 1px solid black;
				border-radius: 0.5rem;
				transition: background-color var(--transition), color var(--transition),
					transform var(--transition);

				&:hover {
					background-color: black;
					color: white;
					transform: scale(1.05);
				}

				& > button {
					position: relative;
					width: 100%;
					height: 100%;

					display: block;
					padding: 1rem;

					color: inherit;
				}
			}
		}
	}
</style>
