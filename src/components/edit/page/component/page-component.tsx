import { useContext } from "react";
import { PageComponentContext } from "./context/page-component.context";
import { Stack } from "@mui/material";
import { WithInfo } from "../../info/WithInfo";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { EditComponentsContainer } from "../../components/container";
import { PageComponentPropsContainer } from "./props/page-component-props.container";

interface PageComponentProps {
	//
	config: { id: string };
}

///////////////////////////////////////
// Create our page component
// We just have props and components
// We probably need a context
// We are several layers deep I thnk!
// There should be a single source of truth for the overall component data
// But we may not want to re-render when components or props change
////////////////////////////////////////
/** Describe me */
export const PageComponent = () => {
	const { id, info, title, props, components } =
		useContext(PageComponentContext);

	return (
		<Stack>
			<WithInfo infoId={info}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text={title} />
			</WithInfo>
			<PageComponentPropsContainer props={props} />
			{/* Surely pass content.components? */}
			<EditComponentsContainer objectKey={"content"} />
		</Stack>
	);
};
