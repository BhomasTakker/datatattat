export interface Config {
	props: unknown;
	select: string[];
	info: string;
	label: string;
	type: string;
}

export interface PageContainerConfig {
	id: string;
	info: string;
	title: string;
	props: unknown[];
	components: string;
}
