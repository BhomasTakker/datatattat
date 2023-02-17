import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
	TextInputWithControlAndToggle,
} from "@/src/components/input/TextInput";
import { FormContext } from "@/src/context/form-context";
import { Container, Typography } from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import { BING_NEWS_SEARCH_API_OBJECT } from "./constants";
import * as yup from "yup";
import { validate } from "@/src/lib/validation/form-input-validators";
import { withToggleCheck } from "@/src/hoc/actions/withToggleCheck";

//Search
export const BingNewsSearchEdit = ({ objectKey }: BaseEditProps) => {
	const paramsRoute = `${objectKey}.params`;

	const validationContext = useContext(FormContext);

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
		<Container>
			<Typography variant="h3">Query Parameters</Typography>
			<Container>
				{/* We need to wrap in a toggle HOC */}
				<TextInputWithControl
					label="q"
					name={`${paramsRoute}.q`}
					fullWidth={true}
					required
				/>
				<TextInputWithControlAndToggle
					label="cc"
					name={`${paramsRoute}.cc`}
					fullWidth={true}
					isChecked={true}
				/>

				<TextInputWithControlAndToggle
					label="category"
					name={`${paramsRoute}.category`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="count"
					name={`${paramsRoute}.count`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="freshness"
					name={`${paramsRoute}.freshness`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="mkt"
					name={`${paramsRoute}.mkt`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="offset"
					name={`${paramsRoute}.offset`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="originalImg"
					name={`${paramsRoute}.originalImg`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="safeSearch"
					name={`${paramsRoute}.safeSearch`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="setLang"
					name={`${paramsRoute}.setLang`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="since"
					name={`${paramsRoute}.since`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="sortBy"
					name={`${paramsRoute}.sortBy`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="textDecorations"
					name={`${paramsRoute}.textDecorations`}
					fullWidth={true}
				/>
				<TextInputWithControlAndToggle
					label="textFormat"
					name={`${paramsRoute}.textFormat`}
					fullWidth={true}
				/>
			</Container>
			<SelectInputWithControl
				label="response conversion"
				name={`${objectKey}.response`}
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(BING_NEWS_SEARCH_API_OBJECT.returns)}
			</SelectInputWithControl>
		</Container>
	);
};
