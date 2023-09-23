/** HOF Returning Simple creator
 * To update queryParams we should pass in a function
 */
// export const returnBasicCreator =
// 	(url: string, headers: any) => (queryParams: any) => {
// 		return {
// 			url,
// 			headers,
// 			queryParams,
// 		};
// 	};
type Creator = {
	url: string;
	headers: any;
	queryParams: any;
};
type QueryModifier = (queryParams: Creator) => Creator;
const defaultModifier = (queryParams: Creator) => queryParams;
/** HOF Returning Simple creator
 *
 * To update queryParams pass in a function
 *
 * required: url -- endpoint url
 *
 * headers -- query header object default {}
 *
 * queryModifier -- function to modify parameters default (data) => data
 *
 * returns function taking params and returning { url, headers, queryParams }
 */
export const returnBasicCreator =
	(
		url: string,
		headers: any = {},
		queryModifier: QueryModifier = defaultModifier
	) =>
	(queryParams: any) => {
		return queryModifier({
			url,
			headers,
			// this isn't what it was for
			// We might modify the url according to certain params
			// so take in url and pass it back?
			queryParams,
		});
	};
