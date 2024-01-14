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
	return (
		<ComponentPropsContextProvider value={{ props, propsId, resetComponent }}>
			<ComponentProps />
		</ComponentPropsContextProvider>
	);
};
