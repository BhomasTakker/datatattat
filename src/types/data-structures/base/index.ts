type BaseInfo = {
	title: string;
	src: string; // URL format
	description: string;
	guid: string;
	variant: string; // union
};

type Details = {
	docs?: string[];
	categories?: string[];
	authors?: string[];
	publishers?: string[];
	published?: Date | string;
	modified?: Date | string;
};

type Media = {};

type Avatar = {
	src: string;
	alt: string;
};

type Pagination = {
	results: number;
};
