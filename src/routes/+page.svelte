<script lang="ts">
	// imports
	import type { PageData } from './$types';

	// data
	export let data: PageData;
	const { packs } = data;

	let activePack: string;

	// methods
	const setActivepack = (value: string) => {
		activePack = value;
	};
</script>

<template>
	<section class="container">
		<h1 class="title">CAH Clone</h1>

		<h2 class="active-pack">Acitve pack: {activePack || `None`}</h2>

		<ul class="packs">
			{#each packs as pack}
				<li class="pack">
					<button on:click={() => setActivepack(pack.name)}>
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

		.title,
		.active-pack {
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
