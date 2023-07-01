import { createWithEditComponent } from "@/src/components/edit/with-edit-component";
import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { createSelectInputList } from "@/src/components/input/TextInput";
import { EDIT_WITH } from "@/src/factories/with";
import { OEMBED_CONFIG_LIST } from "@/src/oembed";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { APIEndpointSelectComponent } from "../edit/api-query/endpoint/APIEndpointSelectComponent";
import { WithInfo } from "../edit/info/WithInfo";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { TitleVariant } from "../types/ui";
import { Title } from "../ui/title";
import { useUnregisterForm } from "../edit/hooks/useUnregisterForm";

const OembedComponent = ({ componentId, objectKey }: any) => {
	const config = OEMBED_CONFIG_LIST[componentId] || {};

	const { endpointInput } = config;

	if (!componentId) {
		return <></>; //errorComponent
	}

	// The only difference I can see is instead of selecting route
	// Select/Specify apiId and send that to the server
	// Can then use to get url and header/api key
	//
	// go to a genric endpoint
	// pass an apiId and parameters - get url and header object
	// use of route could be final endpoint
	const enpointInputComponent = (
		<APIEndpointSelectComponent
			data={{ ...endpointInput }}
			objectKey={objectKey}
			apiId={`${objectKey}.oembedId`}
		/>
	);

	return enpointInputComponent;
};

export const OembedEdit = ({ objectKey }: BaseEditProps) => {
	const { setValue, unregister } = useFormContext();

	useEffect(() => {
		setValue(`${objectKey}._with.type`, "oembed");
	}, [objectKey, setValue]);

	// if this changes we should be resetting _with.query
	// which should initialise again when component rerenders
	const resourceComponent = useWatch({
		name: `${objectKey}.resource`,
	});

	//////////////////////////////
	// this is how you unregister
	// useUnregisterForm({
	// 	name: `${objectKey}._with.query`,
	// 	dependencies: [resourceComponent],
	// });
	useEffect(() => {
		unregister(`${objectKey}._with.query`);
	}, [objectKey, resourceComponent, unregister]);

	return (
		<Box>
			<WithInfo info={"Oembed blurb"}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text={"Oembed Edit"} />
			</WithInfo>
			{/* <WithInfo info={"Select Resource Blurb"}>
				<Typography>Select Resource</Typography>
			</WithInfo> */}
			<Stack gap={MARGINS.SMALL}>
				<Stack marginLeft={MARGINS.LARGE}>
					<WithInfo
						info={"Select Resource Blurb"}
						marginLeft={INFO_MARGINS.STANDARD_LEFT}
					>
						<SelectInputWithControl
							label="Select Resource"
							name={`${objectKey}.resource`}
							fullWidth={true}
							required
							// onChange={changeHandler}
						>
							{createSelectInputList(OEMBED_CONFIG_LIST)}
						</SelectInputWithControl>
					</WithInfo>
				</Stack>
				<OembedComponent
					componentId={resourceComponent}
					objectKey={`${objectKey}._with.query`}
				/>
			</Stack>
		</Box>
	);
};
