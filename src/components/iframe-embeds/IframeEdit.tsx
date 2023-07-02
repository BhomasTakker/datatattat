import { createWithEditComponent } from "@/src/components/edit/with-edit-component";
import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import { createSelectInputList } from "@/src/components/input/TextInput";
import { EDIT_WITH } from "@/src/factories/with";
import { Box, Container, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { APIEndpointSelectComponent } from "../edit/api-query/endpoint/APIEndpointSelectComponent";
import { WithInfo } from "../edit/info/WithInfo";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { TitleVariant } from "../types/ui";
import { Title } from "../ui/title";
import { useUnregisterForm } from "../edit/hooks/useUnregisterForm";
import { IFRAME_CONFIG_LIST } from "@/src/iframe-embeds";
import { QueryInputFactoryComponent } from "../edit/rss-query/input/QueryInputFactoryComponent";

const IframeComponent = ({ componentId, objectKey }: any) => {
	const config = IFRAME_CONFIG_LIST[componentId] || {};

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
	return (
		<Box>
			<APIEndpointSelectComponent
				data={{ ...endpointInput }}
				objectKey={objectKey}
				apiId={`${objectKey}.iframeDataId`}
			/>
			{/* Needs to be a component */}
			<Stack>
				<WithInfo info={"Component Props blurb"}>
					<Title
						variant={TitleVariant.EDIT_COMPONENT}
						text={"ComponentProps"}
					/>
				</WithInfo>
				{/* <QueryInputFactoryComponent
					id={''}
					objectKey={objectKey}
					label={label}
					type={}
					options={endpoints}
				/> */}
			</Stack>
		</Box>
	);
};

export const IframeEdit = ({ objectKey }: BaseEditProps) => {
	// if this changes we should be resetting _with.query
	// which should initialise again when component rerenders
	const resourceComponent = useWatch({
		name: `${objectKey}.componentProps.resource`,
	});

	return (
		<Box>
			<WithInfo info={"Iframe Embed blurb"}>
				<Title
					variant={TitleVariant.EDIT_COMPONENT}
					text={"Iframe Embed Edit"}
				/>
			</WithInfo>
			<Stack gap={MARGINS.SMALL}>
				<Stack marginLeft={MARGINS.LARGE}>
					<WithInfo
						info={"Select Resource Blurb"}
						marginLeft={INFO_MARGINS.STANDARD_LEFT}
					>
						<SelectInputWithControl
							label="Select Resource"
							name={`${objectKey}.componentProps.resource`}
							fullWidth={true}
							required
						>
							{createSelectInputList(IFRAME_CONFIG_LIST)}
						</SelectInputWithControl>
					</WithInfo>
				</Stack>
				<IframeComponent
					componentId={resourceComponent}
					objectKey={`${objectKey}.componentProps`}
				/>
			</Stack>
		</Box>
	);
};
