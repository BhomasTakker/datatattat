type OpenGraphObject = {
	// we can type properly
	[key: string]: any;
};

interface OpenGraph {
	data: OpenGraphObject;
}

// not this and not from here
const DEFAULT = [
	<meta
		key={"og:description"}
		data-rh="true"
		name="og:description"
		property="og:description"
		content="Palestinian officials say more than 300 bodies have been found at Nasser and al-Shifa hospitals."
	></meta>,
	<meta
		key={"og:image"}
		data-rh="true"
		name="og:image"
		property="og:image"
		content="https://ichef.bbci.co.uk/news/1024/branded_news/10D07/production/_133217886_mediaitem133217885.jpg"
	></meta>,
	<meta
		key={"og:image:alt"}
		data-rh="true"
		name="og:image:alt"
		property="og:image:alt"
		content="Palestinian civil defence workers dig mounds of earth in the grounds of Nasser hospital in Khan Younis, in the southern Gaza Strip (21 April 2024)"
	></meta>,
	<meta
		key={"og:locale"}
		data-rh="true"
		name="og:locale"
		property="og:locale"
		content="en_GB"
	></meta>,
	<meta
		key={"og:site_name"}
		data-rh="true"
		name="og:site_name"
		property="og:site_name"
		content="BBC News"
	></meta>,
	<meta
		key={"og:title"}
		data-rh="true"
		name="og:title"
		property="og:title"
		content="UN rights chief 'horrified' by mass grave reports at Gaza hospitals"
	></meta>,
	<meta key={"og:type"} data-rh="true" name="og:type" content="article"></meta>,
	<meta
		key={"og:url"}
		data-rh="true"
		name="og:url"
		property="og:url"
		content="https://www.bbc.com/news/world-middle-east-68881325"
	></meta>,
];

// og:type is the 'type' of page/content
export const renderOpenGraphMeta = ({ data }: OpenGraph) => {
	const metadata = [];
	for (const key in data) {
		const value = data[key] as string;
		metadata.push(
			<meta
				key={key}
				data-rh="true"
				name={key}
				property={key}
				content={value}
			></meta>
		);
	}

	console.log("678678:og", { metadata });
	const {} = data;
	// could run through a map/set using/assuming names/ids are accurate
	// overwrite a default array
	return [...DEFAULT, ...metadata];
};
