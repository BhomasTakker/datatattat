import { useWatch } from "react-hook-form";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { Box, Stack } from "@mui/material";
import { WithInfo } from "../info/WithInfo";
import { Title } from "../../ui/title";
import { MARGINS, INFO_MARGINS } from "config/styles/styles.config";
import { SelectInputWithControl } from "../../input/SelectInput";
import { createSelectInputList } from "../../input/TextInput";
import { TitleVariant } from "../../types/ui";
import { QueryCreator } from "./creator/query-creator";
import { Conversion } from "./conversion/conversion";

// componentId
// objectKey
// configList

type QueryComponentProps = {
	componentId: string;
	objectKey: string;
	// this is known
	configList: any; // how to type this / with a generic
};

// queryId = {`${objectKey}.apiId`}
const QueryComponent = ({
	componentId,
	objectKey,
	configList,
}: QueryComponentProps) => {
	//BING_NEWS_ROOT
	const queryConfig = configList[componentId] || {};

	if (!componentId) {
		// error message
		return <></>; //errorComponent
	}

	if (!queryConfig) {
		// error message
		return <></>; //errorComponent
	}

	return (
		<QueryCreator
			blueprint={{ ...queryConfig }}
			objectKey={objectKey}
			// queryType={}
			queryIdFormKey={`${objectKey}.queryId`}
			// apiId={`${objectKey}.apiId`}
		/>
	);
};

type QuerySelectProps = {
	title: string;
	titleInfo: string; // type an id? regex something
	providerLabel: string;
	providerInfo: string;
	configList: any; // how to type Map [string, configType]
};

// title, titleInfo,
// type label, type info, type id
// config list
export const QuerySelect = ({
	objectKey,
	title,
	titleInfo,
	providerLabel,
	providerInfo,
	configList,
}: BaseEditProps & QuerySelectProps) => {
	const provider = useWatch({
		name: `${objectKey}.query.provider`,
	});

	console.log({ configList });

	return (
		<Box>
			{/* <WithInfo infoId="RssQuery"> */}
			<WithInfo infoId={titleInfo}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text={title} />
			</WithInfo>
			<Stack gap={MARGINS.SMALL}>
				<Box marginLeft={MARGINS.LARGE}>
					<WithInfo
						infoId={providerInfo}
						marginLeft={INFO_MARGINS.STANDARD_LEFT}
					>
						<SelectInputWithControl
							label={providerLabel}
							name={`${objectKey}.query.provider`}
							fullWidth={true}
							required
						>
							{createSelectInputList(configList)}
						</SelectInputWithControl>
					</WithInfo>
				</Box>
				<QueryComponent
					componentId={provider}
					objectKey={`${objectKey}.query`}
					configList={configList}
				/>
			</Stack>
			{/* <Conversion objectKey={objectKey} responseList={} /> */}
		</Box>
	);
};

export const QuerySelector = ({
	title,
	titleInfo,
	providerLabel,
	providerInfo,
	configList,
}: QuerySelectProps) => {
	return function WithQuery({ objectKey }: BaseEditProps) {
		return (
			<QuerySelect
				objectKey={objectKey}
				title={title}
				titleInfo={titleInfo}
				providerLabel={providerLabel}
				providerInfo={providerInfo}
				configList={configList}
			/>
		);
	};
};
