import { ElementType, PropsWithChildren } from "react";
import { useMeta } from "../../article/items/hooks/useMeta";

type WithMeta = {
	src: string;
	load: boolean;
	// should be generic - Article isnt included
	component: ElementType;
	componentProps: object;
};

export const WithMeta = (props: PropsWithChildren<WithMeta>) => {
	const { src, load, component: Component, componentProps, children } = props;
	const { meta, loading, error } = useMeta(src, load);

	if (loading) {
		return null;
	}
	if (error) {
		return null;
	}
	if (!meta) {
		return null;
	}

	return (
		<Component meta={meta} {...componentProps}>
			{children}
		</Component>
	);
};
