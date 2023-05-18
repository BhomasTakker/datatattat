// Convert html into react / better to use if possible
// https://www.npmjs.com/package/html-react-parser

// You can also use DOMPurify on the server - which we probably should do?
import DOMPurify from "dompurify";

//type / better than string?
type __HTML = string;
type DangerousHTML = string;
type SanitizedHTML = string; //SanitizedHTML - is there any way of proving this
type DangerouslyType = {
	__html: SanitizedHTML;
};
//take in dangerousHtml
//return goodHtml

//if this is badHTML you make sure you don't do anything with it

export const setDangerously = (html: DangerousHTML): DangerouslyType => {
	const sanitizedHTML = DOMPurify.sanitize(html);
	return {
		__html: sanitizedHTML,
	};
};
