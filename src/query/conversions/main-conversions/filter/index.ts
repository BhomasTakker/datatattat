// You would not do this

import { take } from "rxjs";

// we need to accept inputs
export const top5 = (data: any) => {
	// take in wider data
	return take(5);
};

export const topN = (props: any) => {
	const n = props?.amount ?? 10;
	// take in wider data
	return take(n);
};
