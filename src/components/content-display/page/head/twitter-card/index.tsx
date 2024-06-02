type TwitterCardObject = {
	[key: string]: any;
};
interface TwitterCard {
	data: TwitterCardObject;
}
// not this and not from here
const DEFAULT = [
	<meta
		key={"twitter:card"}
		data-rh="true"
		name="twitter:card"
		content="summary_large_image"
	></meta>,
	<meta
		key={"twitter:creator"}
		data-rh="true"
		name="twitter:creator"
		content="@BBCNews"
	></meta>,
	<meta
		key={"twitter:description"}
		data-rh="true"
		name="twitter:description"
		content="Palestinian officials say more than 300 bodies have been found at Nasser and al-Shifa hospitals."
	></meta>,
	<meta
		key={"twitter:image:src"}
		data-rh="true"
		name="twitter:image:src"
		content="https://ichef.bbci.co.uk/news/1024/branded_news/10D07/production/_133217886_mediaitem133217885.jpg"
	></meta>,
	<meta
		key={"twitter:image:alt"}
		data-rh="true"
		name="twitter:image:alt"
		content="Palestinian civil defence workers dig mounds of earth in the grounds of Nasser hospital in Khan Younis, in the southern Gaza Strip (21 April 2024)"
	></meta>,
	<meta
		key={"twitter:site"}
		data-rh="true"
		name="twitter:site"
		content="@BBCNews"
	></meta>,
	<meta
		key={"twitter:title"}
		data-rh="true"
		name="twitter:title"
		content="UN rights chief 'horrified' by mass grave reports at Gaza hospitals"
	></meta>,
];

export const renderTwitterCardMeta = ({ data }: TwitterCard) => {
	// console.log("7598 TwitterCard", { data });
	const metadata = [];
	for (const key in data) {
		const value = data[key] as string;
		metadata.push(
			<meta key={key} data-rh="true" name={key} content={value}></meta>
		);
	}

	// console.log("678678", { metadata });
	const {} = data;
	// could run through a map/set using/assuming names/ids are accurate
	// overwrite a default array
	return [...DEFAULT, ...metadata];
};
