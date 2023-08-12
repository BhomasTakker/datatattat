import { useContext } from "react";
import { PageComponentPropsContextProvider } from "./context/page-component-props.context";
import { PageComponentProps } from "./page-component-props";
import { PageStateContext } from "../../context/state/page-state.context";

interface PageComponentPropsContainerProps {
	props: unknown[]; // array?
}

// Object keyt references for these are all over the place

export const PageComponentPropsContainer = ({
	props,
}: PageComponentPropsContainerProps) => {
	const { pagePropsId } = useContext(PageStateContext);

	console.log("FEATURE:115", "PAGE:COMPONENT:PROPS:CONTAINER", pagePropsId);
	return (
		// Could just get ourselves - passing not required
		<PageComponentPropsContextProvider
			value={{ props, objectKey: pagePropsId }}
		>
			<PageComponentProps />
		</PageComponentPropsContextProvider>
	);
};
