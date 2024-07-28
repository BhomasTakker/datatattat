import { withFactory } from "@/src/factories/with-factory";
import { UnknownObject } from "@/src/types";
import { COMPONENTS_MAP } from "config/content/component-containers.map";

//////////////////////////////////
// Could stand to clean this up //
//////////////////////////////////

export interface FactoryData {
	componentType: string;
	componentProps: UnknownObject;
	_with: UnknownObject;
}
export interface FactoryComponent {
	data: FactoryData;
}
export const FactoryComponent = ({ data }: FactoryComponent) => {
	const { componentType, componentProps, _with = {} } = data;
	const Component = COMPONENTS_MAP.get(componentType);

	if (!Component) {
		// Return error and blank component
		return null;
	}

	const componentObject = {
		component: Component,
		props: componentProps,
	};

	if (!_with?.type) {
		return <Component {...componentProps} />;
	}
	const RenderElement = withFactory(componentObject, _with);
	// Why wouldn't we have a context here?
	return <RenderElement />;
};
