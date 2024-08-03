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

	const { title, info, props, withObject = EDIT_WITH } = config;

	// show with object input IF we have an array of available inputs
	// i.e we can override this to include less options or zero options
	// like so - filterObjectByKeys(EDIT_WITH, acceptedValues),

	const withObjectKeys = Object.keys(withObject);
	const showWith = !!withObjectKeys.length;

	return (
		<Stack gap={MARGINS.SMALL}>
			<ComponentPropsContainer
				props={props}
				propsId={propsId}
				resetComponent={componentTypeFormId}
			/>
			{showWith && (
				<>
					<Box paddingLeft={MARGINS.LARGE} width={"100%"}>
						<SelectInput
							info="withBehaviour"
							label="With Behaviour"
							id={withFormTypeId}
							options={withObject}
						/>
					</Box>
					<WithComponentFactory />
				</>
			)}
		</Stack>
	);
};
