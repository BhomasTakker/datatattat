import { PropsWithChildren } from "react";
import { useInView } from "react-intersection-observer";

type InView = {
	options: InViewOptions;
};

type InViewOptions = {
	threshold?: number;
	triggerOnce?: boolean;
};
export const InView = (props: PropsWithChildren<InView>) => {
	const { options, children } = props;
	const { threshold, triggerOnce } = options;
	const { ref, inView } = useInView({
		threshold,
		triggerOnce,
	});

	return <div ref={ref}>{inView && children}</div>;
};
