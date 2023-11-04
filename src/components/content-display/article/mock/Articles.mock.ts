import {
	TIME_AGO_1_HOUR,
	TIME_AGO_1_WEEK,
	TIME_AGO_5_DAY,
} from "mockData/time";

export const Article1 = {
	title: "Dwayne Johnson 'belly laughs' after controversial waxwork unveiled",
	src: "https://news.sky.com/story/dwayne-johnson-belly-laughs-after-controversial-waxwork-unveiled-12991640",
	avatar: {
		src: "https://e3.365dm.com/23/10/70x70/skynews-dwayne-johnson-waxwork_6333809.jpg?20231024132712",
		alt: "Dwayne Johnson 'belly laughs' after controversial waxwork unveiled",
	},
	media: {},
	description:
		"A museum has changed the skin tone of its Dwayne Johnson wax statue after it was criticised for being too white.",
	guid: "1",
	variant: "article",
	details: {
		docs: [],
		categories: ["category1", "category2"],
		authors: ["Author1", "Author2"],
		publishers: ["Publisher1", "Publisher1"],
		published: TIME_AGO_5_DAY,
		modified: "",
	},
};

export const Article2 = {
	title:
		"Not Dwayne Johnson 'belly laughs' after controversial waxwork unveiled",
	src: "https://news.sky.com/story/dwayne-johnson-belly-laughs-after-controversial-waxwork-unveiled-12991640",
	avatar: {
		src: "https://e3.365dm.com/23/10/70x70/skynews-dwayne-johnson-waxwork_6333809.jpg?20231024132712",
		alt: "Dwayne Johnson 'belly laughs' after controversial waxwork unveiled",
	},
	media: {},
	description:
		"A museum has changed the skin tone of its Dwayne Johnson wax statue after it was criticised for being too white.",
	guid: "1",
	variant: "article",
	details: {
		docs: [],
		categories: ["category1", "category2"],
		authors: ["Author1", "Author2"],
		publishers: ["Publisher1", "Publisher1"],
		published: TIME_AGO_1_HOUR,
		modified: "",
	},
};

export const Article3 = {
	title:
		"Also Not Dwayne Johnson 'belly laughs' after controversial waxwork unveiled",
	src: "https://news.sky.com/story/dwayne-johnson-belly-laughs-after-controversial-waxwork-unveiled-12991640",
	avatar: {
		src: "https://e3.365dm.com/23/10/70x70/skynews-dwayne-johnson-waxwork_6333809.jpg?20231024132712",
		alt: "Dwayne Johnson 'belly laughs' after controversial waxwork unveiled",
	},
	media: {},
	description:
		"A museum has changed the skin tone of its Dwayne Johnson wax statue after it was criticised for being too white.",
	guid: "1",
	variant: "article",
	details: {
		docs: [],
		categories: ["category1", "category2"],
		authors: ["Author1", "Author2"],
		publishers: ["Publisher1", "Publisher1"],
		published: TIME_AGO_1_WEEK,
		modified: "",
	},
};

export const Articles = {
	title: "Article List Title",
	src: "https://news.sky.com/",
	description: "Article List Title - Lorem Ipsum ",
	guid: "0001",
	variant: "collection",
	details: {},
	media: {},
	pagination: {
		results: 0,
	},
	// Duplicate keys need to remedy
	items: [
		Article1,
		Article2,
		Article3,
		Article1,
		Article2,
		Article3,
		Article1,
		Article2,
		Article3,
	],
};
