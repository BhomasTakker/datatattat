import { PageComponentPropsContextProvider } from "./context/page-component-props.context";
import { PageComponentProps } from "./page-component-props";

interface PageComponentPropsContainerProps {
	props: unknown[]; // array?
}

export const PageComponentPropsContainer = ({
	props,
}: PageComponentPropsContainerProps) => {
	return (
		<PageComponentPropsContextProvider value={{ props }}>
			<PageComponentProps />
		</PageComponentPropsContextProvider>
	);
};
