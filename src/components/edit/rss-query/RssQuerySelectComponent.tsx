import { Box, Stack } from "@mui/material";
import React from "react";
import { BaseEditProps } from "@/components/forms/edit/types/BaseEdit";
import { createSelectInputList } from "../../input/TextInput";
import { WithInfo } from "@/components/edit/info/WithInfo";
import { Title } from "@/components/ui/title";
import { TitleVariant } from "@/components/types/ui";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { RSS_CONFIG_LIST } from "../../../rss";
import { useWatch } from "react-hook-form";
import { SelectInputWithControl } from "../../input/SelectInput";
import { RecursiveEndpointSelectComponent } from "./endpoint/RecursiveEndpointSelectComponent";
import { QueryEditProps } from "../types";

// We get a warning when we change feed
// selectedEndpoint doesn't exist on new thing
// THEN useState updates - after the new 'initial' render
// RSS Query Component
const RSSComponent = ({ componentId, objectKey }: any) => {
	const config = RSS_CONFIG_LIST[componentId] || {};

	const { endpointInput } = config;

	if (!componentId) {
		return <></>; //errorComponent
	}
	///////////////////////////////////////
	// There has to be an endpoint input
	// if select provide available endpoints and default
	// if text take input
	// if params are available provide an array
	////////////////////////////
	// createEndpointInput
	// if params then create inputs / string, number, select
	// form the rss feed url
	// theoretically params only available with with certain endpoints
	// check if endpoint object for 'sub' object
	////////////////////////////

	const enpointInputComponent = (
		<RecursiveEndpointSelectComponent
			data={{ ...endpointInput }}
			objectKey={objectKey}
			routeId={`${objectKey}.route`}
		/>
	);

	return enpointInputComponent;
};

//////////////////////////////////
// RSS Query Select Component
export const RssQuerySelect = ({
	objectKey,
	name,
	title,
	titleInfo,
	inputInfo,
	inputLabel,
}: BaseEditProps & QueryEditProps) => {
	const rssComponent = useWatch({
		// control,
		name: `${objectKey}.query.${name}`,
		// name: `${objectKey}.query.rssFeed`,
	});
	return (
		<Box>
			{/* <WithInfo infoId="RssQuery"> */}
			<WithInfo infoId={titleInfo}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text={title} />
			</WithInfo>
			<Stack marginLeft={MARGINS.LARGE} gap={MARGINS.SMALL}>
				<WithInfo infoId={inputInfo} marginLeft={INFO_MARGINS.STANDARD_LEFT}>
					<SelectInputWithControl
						label={inputLabel}
						name={`${objectKey}.query.${name}`}
						fullWidth={true}
						required
					>
						{createSelectInputList(RSS_CONFIG_LIST)}
					</SelectInputWithControl>
				</WithInfo>
				<RSSComponent
					componentId={rssComponent}
					objectKey={`${objectKey}.query`}
				/>
			</Stack>
		</Box>
	);
};
