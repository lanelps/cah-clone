<script lang="ts">
	export let data;

	const { packs } = data;

	// state
	const packTypes = packs.map((pack: Pack) => pack.name);
	const deck = {
		questions: packs.map((pack: Pack) => pack.black).flat(),
		answers: packs.map((pack: Pack) => pack.white).flat()
	};
</script>

<template>
	<h1>Game</h1>

	<div>
		<h2>Packs in use</h2>
		<p>
			{#each packTypes as type}
				<span> {type}, </span>
			{/each}
		</p>
	</div>
</template>
