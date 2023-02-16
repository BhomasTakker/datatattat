import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
} from "@/src/components/input/TextInput";
import { FormContext } from "@/src/context/form-context";
import { Container, Typography } from "@mui/material";
import React, { useCallback, useContext, useEffect } from "react";
import { BING_NEWS_SEARCH_API_OBJECT } from "./constants";
import * as yup from "yup";
import { validate } from "@/src/lib/validation/form-input-validators";

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
			{/* Select Return Conversion */}
			{/* Create query parameteres */}
			<Typography variant="h3">Query Parameters</Typography>
			<Container>
				<TextInputWithControl
					label="q"
					name={`${paramsRoute}.q`}
					fullWidth={true}
					required
				/>
				<TextInputWithControl
					label="cc"
					name={`${paramsRoute}.cc`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="category"
					name={`${paramsRoute}.category`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="count"
					name={`${paramsRoute}.count`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="freshness"
					name={`${paramsRoute}.freshness`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="mkt"
					name={`${paramsRoute}.mkt`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="offset"
					name={`${paramsRoute}.offset`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="originalImg"
					name={`${paramsRoute}.originalImg`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="safeSearch"
					name={`${paramsRoute}.safeSearch`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="setLang"
					name={`${paramsRoute}.setLang`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="since"
					name={`${paramsRoute}.since`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="sortBy"
					name={`${paramsRoute}.sortBy`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="textDecorations"
					name={`${paramsRoute}.textDecorations`}
					fullWidth={true}
				/>
				<TextInputWithControl
					label="textFormat"
					name={`${paramsRoute}.textFormat`}
					fullWidth={true}
				/>
			</Container>
			<SelectInputWithControl
				label="response conversion"
				name={`${objectKey}.responseConversion`}
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(BING_NEWS_SEARCH_API_OBJECT.returns)}
			</SelectInputWithControl>
		</Container>
	);
};
