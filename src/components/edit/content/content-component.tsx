import { useContext } from "react";
import { ContentComponentContext } from "./context/content-component.context";
import { EditComponentContext } from "../component/context/edit-component.context";
import { Box, Stack } from "@mui/material";
import { MARGINS } from "config/styles/styles.config";
import { SelectInput } from "../inputs/select/select-input";
import { EDIT_WITH } from "@/src/factories/with";
import { ComponentPropsContainer } from "../props/component-props.container";
import { WithComponentFactory } from "../factory/with-component.factory";

export const ContentComponent = () => {
	const {
		config,
		withFormTypeId,
		// withComponent,
		propsId,
	} = useContext(ContentComponentContext);
	const { componentTypeFormId, objectKey } = useContext(EditComponentContext);
	console.log("FEATURE:404", "CONTENT:COMPONENT", { config }, { objectKey });

	const { title, info, props } = config;
	//////////////////////////////////////////////////////////
	// At this moment in time all we need is componentProps //
	// && _with behaviour ////////////////////////////////////
	//////////////////////////////////////////////////////////

	// here create WITH component
	// probably a copy and dump

	return (
		<Stack gap={MARGINS.SMALL}>
			<h2>You are here</h2>
			<ComponentPropsContainer
				props={props}
				propsId={propsId}
				resetComponent={componentTypeFormId}
			/>
			<Box paddingLeft={MARGINS.LARGE} width={"100%"}>
				{/* May well need to have a selection available & not all */}
				<SelectInput
					info="withBehaviour"
					label="With Behaviour"
					id={withFormTypeId}
					options={EDIT_WITH}
				/>
			</Box>
			<WithComponentFactory />
		</Stack>
	);
};
