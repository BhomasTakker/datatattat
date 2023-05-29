import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
	TextInputWithControlAndToggle,
} from "@/src/components/input/TextInput";
import { FormContext } from "@/src/context/form-context";
import { Box, Container, Stack, Typography } from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import { BING_NEWS_SEARCH_API_OBJECT } from "./constants";
import * as yup from "yup";
import { validate } from "@/src/lib/validation/form-input-validators";
import { withToggleCheck } from "@/src/hoc/actions/withToggleCheck";
import { WithInfo } from "@/src/components/edit/info/WithInfo";
import { Title } from "@/src/components/ui/title";
import { TitleVariant } from "@/src/components/types/ui";
import { MARGINS } from "config/styles/styles.config";

//Search
export const BingNewsSearchEdit = ({ objectKey }: BaseEditProps) => {
	const paramsRoute = `${objectKey}.params`;

	// const validationContext = useContext(FormContext);

	//dependencies here?
	//We perhaps need to wrap in a callback?
	// useEffect(() => {
	// 	const { updateValidation } = validationContext;
	// 	const apiValidation = {
	// 		[`${paramsRoute}.q`]: validate.email,
	// 	};
	// 	updateValidation(apiValidation);
	// }, [paramsRoute]);

	return (
		<Box>
			<WithInfo info="Bing News Search Info blurb ">
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
				<WithInfo info={"BingNewsSearch.q explanation"}>
					<TextInputWithControl
						label="q"
						name={`${paramsRoute}.q`}
						fullWidth={true}
						required
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="cc"
						name={`${paramsRoute}.cc`}
						fullWidth={true}
						isChecked={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="category"
						name={`${paramsRoute}.category`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="count"
						name={`${paramsRoute}.count`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="freshness"
						name={`${paramsRoute}.freshness`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="mkt"
						name={`${paramsRoute}.mkt`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="offset"
						name={`${paramsRoute}.offset`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="originalImg"
						name={`${paramsRoute}.originalImg`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="safeSearch"
						name={`${paramsRoute}.safeSearch`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="setLang"
						name={`${paramsRoute}.setLang`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="since"
						name={`${paramsRoute}.since`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="sortBy"
						name={`${paramsRoute}.sortBy`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="textDecorations"
						name={`${paramsRoute}.textDecorations`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
					<TextInputWithControlAndToggle
						label="textFormat"
						name={`${paramsRoute}.textFormat`}
						fullWidth={true}
					/>
				</WithInfo>
				<WithInfo>
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
