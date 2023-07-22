// You would not do this

import { take } from "rxjs";

// we need to accept inputs
export const top5 = (data: any) => {
	// take in wider data
	return take(5);
};
