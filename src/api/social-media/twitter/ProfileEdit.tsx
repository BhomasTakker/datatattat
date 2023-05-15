import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { TextInputWithControl } from "@/src/components/input/TextInput";
import { Container, Typography } from "@mui/material";

export const TwitterProfileOembedEdit = ({ objectKey }: BaseEditProps) => {
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

	return (
		<Container>
			{/* standardize - to our edit component titleor something */}
			<Typography variant="h3">Twitter Profile Oembed parameters</Typography>
			<Container>
				<TextInputWithControl
					label="user"
					name={`${paramsRoute}.user`}
					fullWidth={true}
					required
				/>
				{/* Number Input you lazy... */}
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
