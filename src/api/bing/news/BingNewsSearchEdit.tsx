//https://learn.microsoft.com/en-us/bing/search-apis/bing-news-search/reference/query-parameters
import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
	TextInputWithControlAndToggle,
} from "@/src/components/input/TextInput";
import { Box, Stack } from "@mui/material";
import React from "react";
import { BING_NEWS_SEARCH_API_OBJECT } from "./constants";
import { WithInfo } from "@/src/components/edit/info/WithInfo";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { INFO_MARGINS, MARGINS } from "config/styles/styles.config";
import { clientsideFetch } from "../../clientside-fetch";
import { useQuery } from "@tanstack/react-query";
///////////////////////////////////////////////////
//Search / Is all the bing news endpoints
// search without e appears to be trending
//a better explanation of each perhaps required
// but theoretically
//With a conversion - that is it
////////////////////////////////////////////////
// Absolutely 100% can 'automate' this
// Create a json representation
// and can cycle through
// Create one for apis
// Then potentially create for other stuff....
///////////////////////////////////////////////
export const BingNewsSearchEdit = ({ objectKey }: BaseEditProps) => {
	const paramsRoute = `${objectKey}.params`;
	const { data: BingNewsSearchInfo } = useQuery({
		queryKey: ["BingNewsSearchInfo"],
		queryFn: () => clientsideFetch({ url: "api/info/get/BingNewsSearch" }),
	});

	const { description = "", items = {} } = BingNewsSearchInfo || {};
	const marginLeft = INFO_MARGINS.STANDARD_LEFT;
	const marginRight = INFO_MARGINS.TOGGLE_RIGHT;
	const queryMarginRight = INFO_MARGINS.STANDARD_RIGHT;

	return (
		<Box>
			<WithInfo info={description}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text="Bing News Search" />
			</WithInfo>
			<Stack gap={MARGINS.VSMALL} marginLeft={MARGINS.LARGE}>
				{/* We need to wrap in a toggle HOC */}
				{/* 
				<WithInfo>
					<WithToggle>
						<TextInput></TextInput>
					</WithToggle>
				</WithInfo> */}
				<WithInfo
					info={items?.q}
					marginLeft={marginLeft}
					marginRight={queryMarginRight}
				>
					<TextInputWithControl
						label="q"
						name={`${paramsRoute}.q`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.cc}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="cc"
						name={`${paramsRoute}.cc`}
						fullWidth={true}
						isChecked={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.category}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="category"
						name={`${paramsRoute}.category`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.count}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="count"
						name={`${paramsRoute}.count`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.freshness}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="freshness"
						name={`${paramsRoute}.freshness`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.mkt}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="mkt"
						name={`${paramsRoute}.mkt`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.offset}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="offset"
						name={`${paramsRoute}.offset`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.originalImg}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="originalImg"
						name={`${paramsRoute}.originalImg`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.safeSearch}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="safeSearch"
						name={`${paramsRoute}.safeSearch`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.setLang}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="setLang"
						name={`${paramsRoute}.setLang`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.since}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="since"
						name={`${paramsRoute}.since`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.sortBy}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="sortBy"
						name={`${paramsRoute}.sortBy`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.textDecorations}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="textDecorations"
						name={`${paramsRoute}.textDecorations`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo
					info={items?.textFormat}
					marginLeft={marginLeft}
					marginRight={marginRight}
				>
					<TextInputWithControlAndToggle
						label="textFormat"
						name={`${paramsRoute}.textFormat`}
						fullWidth={true}
					/>
				</WithInfo>
				{/* Needs a bigger gap - fundementally different  */}
				{/* Should we add this above query parameters? */}
				<WithInfo
					infoId="ResponseConversion"
					marginLeft={INFO_MARGINS.STANDARD_LEFT}
					marginRight={INFO_MARGINS.STANDARD_RIGHT}
				>
					<SelectInputWithControl
						label="response conversion"
						name={`${objectKey}.response`}
						fullWidth={true}
						required
						// onChange={changeHandler}
					>
						{createSelectInputList(BING_NEWS_SEARCH_API_OBJECT.returns)}
					</SelectInputWithControl>
				</WithInfo>
			</Stack>
		</Box>
	);
};
