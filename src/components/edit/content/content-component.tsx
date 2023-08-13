import { useContext } from "react";
import { ContentComponentContext } from "./context/content-component.context";
import { EditComponentContext } from "../component/context/edit-component.context";
import { Box, Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { WithInfo } from "../info/WithInfo";
import { Title } from "../../ui/title";
import { TitleVariant } from "../../types/ui";
import { SelectInput } from "../inputs/select/select-input";
import { EDIT_WITH } from "@/src/factories/with";
import { ComponentPropsContainer } from "../props/component-props.container";

export const ContentComponent = () => {
	const { config, withFormTypeId, withComponent, propsId } = useContext(
		ContentComponentContext
	);
	const { componentTypeFormId } = useContext(EditComponentContext);
	const { objectKey } = useContext(EditComponentContext);
	console.log("FEATURE:404", "CONTENT:COMPONENT", { config }, { objectKey });

	const { title, info, props } = config;
	//////////////////////////////////////////////////////////
	// At this moment in time all we need is componentProps //
	// && _with behaviour ////////////////////////////////////
	//////////////////////////////////////////////////////////

	// here create componentProps
	// We have coupled other props to page
	// Decouple - but first just redo props here
	// Need props -> componentId -> LIST_ITEM_COMPONENTS
	// ultimately -> props for selected item

	// here create WITH component
	// probably a copy and dump

	return (
		<Stack gap={MARGINS.SMALL}>
			<WithInfo info={info}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text={title} />
			</WithInfo>
			<Box paddingLeft={MARGINS.LARGE} width={"100%"}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text={"PROPS"} />
				{/* PROPS */}
				<ComponentPropsContainer
					props={props}
					propsId={propsId}
					resetComponent={componentTypeFormId}
				/>
			</Box>
			<Box paddingLeft={MARGINS.LARGE} width={"100%"}>
				{/* WITH - Would you have these are what is available */}
				<SelectInput
					info="withBehaviour"
					label="With Behaviour"
					id={withFormTypeId}
					options={EDIT_WITH}
				/>
			</Box>
			{/* Not like this! Just call a factoryComponent and pass whatever */}
			{withComponent}
		</Stack>
	);
};
