import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { TextInputWithControl } from "@/src/components/input/TextInput";
import { Container, Typography } from "@mui/material";

export const TwitterListOembedEdit = ({ objectKey }: BaseEditProps) => {
	const paramsRoute = `${objectKey}.params`;
	//validation - went awry

	//link to api documentation
	//https://developer.twitter.com/en/docs/twitter-for-websites/oembed-api

	/*
    url
    limit
    maxwidth
    maxheight
    omit_script
    lang
    theme
    chrome
    aria_polite
    dnt  
  */

	//both for lists
	//https://twitter.com/TwitterDev/lists/national-parks
	//https://twitter.com/i/lists/1305508946556456962

	//do one of two ways - provide list item id
	//provide profile name and list name
	//toggle between

	//Should take id and make the url

	return (
		<Container>
			{/* standardize - to our edit component titleor something */}
			<Typography variant="h3">Twitter List Oembed parameters</Typography>
			<Container>
				<TextInputWithControl
					label="url"
					name={`${paramsRoute}.url`}
					fullWidth={true}
					required
				/>
				<TextInputWithControl
					label="maxwidth"
					name={`${paramsRoute}.maxwidth`}
					fullWidth={true}
					required
				/>
			</Container>
		</Container>
	);
};
