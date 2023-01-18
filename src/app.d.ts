// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {
	// interface Error {}
	// interface Locals {}
	// interface PageData {}
	// interface Platform {}
}

// functions
type SortByProperty = (
	first: any,
	second: any,
	property: string,
	options?: { desc: boolean }
) => number;

// objects
type Pack = {
	black: [QuestionCard];
	name: string;
	official: boolean;
	white: [AnswerCard];
};

type AnswerCard = {
	text: string;
	pack: number;
};

type QuestionCard = {
	text: string;
	pick: number;
	pack: number;
};
