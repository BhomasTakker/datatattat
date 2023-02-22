//https://dev.to/producthackers/intersection-observer-using-react-49ko
//https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
//A straight copy at this point - need to properly go through this
//And probably go through available browser apis...
//https://www.youtube.com/watch?v=T8EYosX4NOo
//https://www.youtube.com/watch?v=2IbRtjez6ag

//Okay this does seem to work very well compared to whatever I was doing

//pass null as container to use the screen or pass a REF.CURRENT :| to use an element

import { ReactElement, useEffect, useRef, useState } from "react";

//really need to return isIntersecting if null
type IntersectionObserverOptions = {
	intersectionFunction: (entries: IntersectionObserverEntry[]) => boolean;
};

export const useElementOnScreen = (
	options: IntersectionObserverInit & IntersectionObserverOptions
) => {
	//I should not have to do this
	const containerRef = useRef<HTMLDivElement>(null);
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const callbackFunction: IntersectionObserverCallback = (
		entries: IntersectionObserverEntry[]
	) => {
		setIsVisible(options.intersectionFunction(entries));
		//understand the array -
	};

	useEffect(() => {
		const internalRef = containerRef.current;
		const observer = new IntersectionObserver(callbackFunction, options);
		if (containerRef.current) observer.observe(containerRef.current);

		return () => {
			if (internalRef) observer.unobserve(internalRef);
		};
	}, [containerRef, options]);

	return { containerRef, isVisible };
};
