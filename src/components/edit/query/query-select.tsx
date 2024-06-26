import { BaseEditProps } from "../../forms/edit/types/BaseEdit";
import { Box, Stack } from "@mui/material";
import { WithInfo } from "../info/WithInfo";
import { Title } from "../../ui/title";
import { MARGINS, INFO_MARGINS } from "config/styles/styles.config";
import { SelectInputWithControl } from "../../input/SelectInput";
import { createSelectInputListMap } from "../../input/TextInput";
import { TitleVariant } from "../../types/ui";
import { QueryCreator } from "./creator/query-creator";
import { QueryContext, QueryContextProvider } from "./context/query-context";
import { useCallback, useContext } from "react";
import { CreatorContextProvider } from "./context/creator-context";

/////////////////////////////////////////////////////////////////////////////
//////////////////////////// REFACTOR ME ////////////////////////////////////
// This needs to be refactored to be more in keeping with the rest of edit //
/////////////////////////////////////////////////////////////////////////////

type QueryComponentProps = {};

///////////////////////////
// query-creator.container
/////////////////////////////
const QueryComponent = ({}: QueryComponentProps) => {
	const { providerConfig, objectKey, endpointsFormKey } =
		useContext(QueryContext);

	const renderElement = useCallback(() => {
		return (
			<CreatorContextProvider value={{ config: providerConfig }}>
				<QueryCreator />
			</CreatorContextProvider>
		);
	}, [providerConfig]);

	if (!providerConfig) {
		return <></>; //errorComponent
	}

	return (
		// This context needs refactor / rethink
		// It does get rather complex from here
		renderElement()
	);
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

// Need explainer on all this
////////////////////////////
// query / query.component
////////////////////////////
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
				{/* query-creator.container */}
				<QueryComponent />
			</Stack>
		</Box>
	);
};

// Rename file for sure query.selector or something
export const QuerySelector = ({
	title,
	titleInfo,
	providerLabel,
	providerInfo,
	configList,
}: QuerySelectorProps) => {
	return function WithQuery({ objectKey }: BaseEditProps) {
		return (
			////////////////////////////
			// return query Container //
			////////////////////////////
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
