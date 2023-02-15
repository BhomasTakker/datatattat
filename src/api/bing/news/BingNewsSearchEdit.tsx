import { SelectInputWithControl } from "@/src/components/input/SelectInput";
import {
	createSelectInputList,
	TextInputWithControl,
} from "@/src/components/input/TextInput";
import { Container, Typography } from "@mui/material";
import React from "react";
import { BING_NEWS_SEARCH_API_OBJECT } from "./constants";

//Search
export const BingNewsSearchEdit = () => {
	return (
		<Container>
			{/* Select Return Conversion */}
			{/* Create query parameteres */}
			<Typography variant="h3">Query Parameters</Typography>
			<Container>
				<TextInputWithControl
					label="q"
					name="another.params.q"
					fullWidth={true}
					required
				/>
				<TextInputWithControl
					label="cc"
					name="another.params.cc"
					fullWidth={true}
				/>
				<TextInputWithControl
					label="category"
					name="array.0.category"
					fullWidth={true}
				/>
				<TextInputWithControl label="count" name="count" fullWidth={true} />
				<TextInputWithControl
					label="freshness"
					name="array.1.freshness"
					fullWidth={true}
				/>
				<TextInputWithControl label="mkt" name="mkt" fullWidth={true} />
				<TextInputWithControl label="offset" name="offset" fullWidth={true} />
				<TextInputWithControl
					label="originalImg"
					name="originalImg"
					fullWidth={true}
				/>
				<TextInputWithControl
					label="safeSearch"
					name="safeSearch"
					fullWidth={true}
				/>
				<TextInputWithControl label="setLang" name="setLang" fullWidth={true} />
				<TextInputWithControl label="since" name="since" fullWidth={true} />
				<TextInputWithControl label="sortBy" name="sortBy" fullWidth={true} />
				<TextInputWithControl
					label="textDecorations"
					name="textDecorations"
					fullWidth={true}
				/>
				<TextInputWithControl
					label="textFormat"
					name="textFormat"
					fullWidth={true}
				/>
			</Container>
			<SelectInputWithControl
				label="response conversion"
				name="responseConversion"
				fullWidth={true}
				required
				// onChange={changeHandler}
			>
				{createSelectInputList(BING_NEWS_SEARCH_API_OBJECT.returns)}
			</SelectInputWithControl>
		</Container>
	);
};
