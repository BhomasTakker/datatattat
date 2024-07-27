import { useLayoutEffect, useRef, useState } from "react";

export function useComponentSize<T extends HTMLElement>() {
	const ref = useRef<T>(null);

	// argue for initialise null
	const [width, setWidth] = useState(0);
	const [height, setHeight] = useState(0);

	useLayoutEffect(() => {
		if (!ref || !ref.current) return;
		setWidth(ref.current.offsetWidth);
		setHeight(ref.current.offsetHeight);
	}, []);

	return {
		ref,
		width,
		height,
	};
}
