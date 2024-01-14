import { ComponentPropsContextProvider } from "./context/component-props.context";
import { ComponentProps } from "./component-props";

interface PageComponentPropsContainerProps {
	props: unknown[]; // array?
	propsId: string;
	resetComponent: any;
}

export const ComponentPropsContainer = ({
	props,
	propsId,
	resetComponent,
}: PageComponentPropsContainerProps) => {
	// console.log("FEATURE:115", "PAGE:COMPONENT:PROPS:CONTAINER", propsId);
	return (
		<ComponentPropsContextProvider value={{ props, propsId, resetComponent }}>
			<ComponentProps />
		</ComponentPropsContextProvider>
	);
};
