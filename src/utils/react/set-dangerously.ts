// Convert html into react / better to use if possible
// https://www.npmjs.com/package/html-react-parser

// look at setHTML() - new method

// We may want to use this for info etc

// You can also use DOMPurify on the server - which we probably should do?
import { SocialVariant } from "@/src/components/content-display/social-media/types";
import DOMPurify from "dompurify";

// How bad is this idea?
// is iframes or more specifically video controls
// see https://stackoverflow.com/questions/60299226/how-to-allow-an-iframe-tag-in-dompurify-including-all-of-its-attributes
// DOMPurify.sanitize(dirty, { ALLOWED_TAGS: ["iframe"], ADD_ATTR: ['allow', 'allowfullscreen', 'frameborder', 'scrolling'] });
// mitigate
// use env vars list of trusted sources

// Check the below solution worked with these guys
// Is all the video players - add DailyMotion to this list
// Instead of trusting - these guys are allowed certain capabilities
const trustedSources = [SocialVariant.YouTube, SocialVariant.Vimeo] as string[];

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

export const setDangerously = (
	html: DangerousHTML,
	id?: string
): DangerouslyType => {
	const sanitizedHTML = DOMPurify.sanitize(html, {
		// only do on trustedSources?
		ALLOWED_TAGS: ["iframe"],
		ADD_ATTR: ["allow", "allowfullscreen", "frameborder", "scrolling"],
	});

	return {
		__html: sanitizedHTML,
	};
};
