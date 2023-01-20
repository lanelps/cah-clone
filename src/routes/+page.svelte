<script lang="ts">
	// imports
	import { onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import type { PageData } from './$types';

	// data
	export let data: PageData;
	const { packs } = data;

	// ref
	let formRef: Node;

	// state
	let oneChecked = false;

	// methods
	const onSubmit = (e) => {
		const data = new FormData(e.target);

		let entries = ``;

		for (const [key, value] of data) {
			entries = entries + `${value},`;
		}

		goto(`/game?packs=${entries}`);
	};

	// lifecycle
	onMount(() => {
		formRef.addEventListener(
			`change`,
			() => {
				const checked = document.querySelectorAll(`input[type=checkbox]:checked`).length;
				if (checked) {
					oneChecked = true;
				} else {
					oneChecked = false;
				}
			},
			false
		);
	});
</script>

<template>
	<section class="container">
		<h1 class="title">CAH Clone</h1>

		<form on:submit|preventDefault={onSubmit} bind:this={formRef}>
			<div class="packs">
				{#each packs as pack}
					<div class="pack">
						<input type="checkbox" name={pack.name} value={pack.name} tabindex="0" />
						<span>{pack.name}</span>
					</div>
				{/each}
			</div>

			<button type="submit" disabled={!oneChecked}>Start</button>
		</form>
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
				width: 100%;
				height: 100%;

				display: block;
				padding: 1rem;

				transition: transform var(--transition);

				&:hover {
					transform: scale(1.05);
				}

				&:active {
					transform: scale(1);
				}

				& > input[type='checkbox'] {
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					bottom: 0;
					left: 0;
					right: 0;

					background-color: white;
					border: 1px solid black;
					border-radius: 0.5rem;

					appearance: none;
					pointer-events: auto;

					cursor: pointer;

					z-index: 0;

					transition: background-color var(--transition);

					&:hover {
						background-color: black;

						& + span {
							color: white;
						}
					}

					&:checked {
						background-color: lime;

						&:hover {
							background-color: limegreen;

							& + span {
								color: white;
							}
						}
					}

					& + span {
						position: relative;
						color: black;
						z-index: 1;

						transition: color var(--transition);
						user-select: none;
						pointer-events: none;
					}
				}
			}
		}
	}
</style>
