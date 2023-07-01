import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { TextInputWithControl } from "@/src/components/input/TextInput";
import { Container, Typography } from "@mui/material";

export const TwitterTweetOembedEdit = ({ objectKey }: BaseEditProps) => {
	const paramsRoute = `${objectKey}.params`;
	//validation - went awry

	//link to api documentation
	//https://developer.twitter.com/en/docs/twitter-for-websites/oembed-api#item1

	/*
    url
    maxwidth
    hide_media
		hide_thread
    omit_script
		align
    lang
    theme
    dnt  
  */

	return (
		<Container>
			{/* standardize - to our edit component titleor something */}
			<Typography variant="h3">Twitter Tweet Oembed parameters</Typography>
			<Container>
				<TextInputWithControl
					label="user"
					name={`${paramsRoute}.user`}
					fullWidth={true}
					required
				/>
				<TextInputWithControl
					label="tweetId"
					name={`${paramsRoute}.tweetId`}
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
