import { UnknownObject } from "@/src/components/content-display/new-article/types";
import { log } from "@/src/lib/logger";
import { type ElementType } from "react";

type ComponentObjectType = {
	component: ElementType;
	props: UnknownObject;
};

interface WithDataParams {
	componentObject: ComponentObjectType;
	componentData: UnknownObject;
}

const WithData = ({ componentObject, componentData }: WithDataParams) => {
	const { component: Component, props } = componentObject;

	if (!componentData) {
		log({
			code: "0000",
			context: "WithData",
			message: "WARNING: No Component Data",
		});
		return <></>;
	}

	return <Component data={componentData} {...props} />;
};

export const withData = (
	componentObject: ComponentObjectType,
	data: UnknownObject
) =>
	function withQueryHOC() {
		return <WithData componentObject={componentObject} componentData={data} />;
	};
