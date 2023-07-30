import { useWatch } from "react-hook-form";
import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { Box, Stack } from "@mui/material";
import { WithInfo } from "../info/WithInfo";
import { Title } from "../../ui/title";
import { MARGINS, INFO_MARGINS } from "config/styles/styles.config";
import { SelectInputWithControl } from "../../input/SelectInput";
import {
	createSelectInputList,
	createSelectInputListMap,
} from "../../input/TextInput";
import { TitleVariant } from "../../types/ui";
import { QueryCreator } from "./creator/query-creator";
import { QueryContext, QueryContextProvider } from "./context/query-context";
import { useContext } from "react";

// componentId
// objectKey
// configList

type QueryComponentProps = {};

// queryId = {`${objectKey}.apiId`}
const QueryComponent = ({}: QueryComponentProps) => {
	const { providerConfig } = useContext(QueryContext);

	if (!providerConfig) {
		// error message
		return <></>; //errorComponent
	}

	return <QueryCreator blueprint={{ ...providerConfig }} />;
};

type QuerySelectProps = {
	title: string;
	titleInfo: string; // type an id? regex something
	providerLabel: string;
	providerInfo: string;
};

type QuerySelectorProps = QuerySelectProps & {
	configList: Map<string, object>;
};

// title, titleInfo,
// type label, type info, type id
// config list
const QuerySelect = ({
	title,
	titleInfo,
	providerLabel,
	providerInfo,
}: QuerySelectProps) => {
	const { providerFormKey, configList } = useContext(QueryContext);

	return (
		<Box>
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
							name={providerFormKey}
							fullWidth={true}
							required
						>
							{createSelectInputListMap(configList)}
						</SelectInputWithControl>
					</WithInfo>
				</Box>
				<QueryComponent />
			</Stack>
		</Box>
	);
};

export const QuerySelector = ({
	title,
	titleInfo,
	providerLabel,
	providerInfo,
	configList,
}: QuerySelectorProps) => {
	return function WithQuery({ objectKey }: BaseEditProps) {
		return (
			<QueryContextProvider
				value={{
					objectKey,
					configList,
				}}
			>
				<QuerySelect
					title={title}
					titleInfo={titleInfo}
					providerLabel={providerLabel}
					providerInfo={providerInfo}
				/>
			</QueryContextProvider>
		);
	};
};
