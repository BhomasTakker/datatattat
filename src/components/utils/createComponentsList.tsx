import { componentFactory } from "@/src/factories/component-factory";
import { withFactory } from "@/src/factories/with-factory";

export const createComponentsList = (components: any[]) => {
	return components.map((component, index) => {
		const { componentType, componentProps, _with = {} } = component;
		const Component = componentFactory(componentType);

		//helpers or something
		const componentObject = {
			component: Component,
			props: componentProps,
		};

		const RenderElement = withFactory(componentObject, _with);

		return <RenderElement key={index} />;
	});
};
