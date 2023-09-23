// https://stackoverflow.com/questions/822452/strip-html-tags-from-text-using-plain-javascript/47140708#47140708
export const stripHTML = (html: string) => {
	let doc = new DOMParser().parseFromString(html, "text/html");
	return doc.body.textContent || "";
};
