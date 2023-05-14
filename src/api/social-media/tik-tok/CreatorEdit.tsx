import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { TextInputWithControl } from "@/src/components/input/TextInput";
import { Container, Typography } from "@mui/material";

export const TikTokCreatorOembedEdit = ({ objectKey }: BaseEditProps) => {
	const paramsRoute = `${objectKey}.params`;
	//validation - went awry

	//link to api documentation
	// https://developers.tiktok.com/doc/embed-creator-profiles/

	return (
		<Container>
			{/* standardize - to our edit component titleor something */}
			<Typography variant="h3">TIKTOK Creator Oembed parameters</Typography>
			<Container>
				<TextInputWithControl
					label="user"
					name={`${paramsRoute}.user`}
					fullWidth={true}
					required
				/>
				{/* Number Input you lazy... */}
				{/* <TextInputWithControl
					label="maxwidth"
					name={`${paramsRoute}.maxwidth`}
					fullWidth={true}
					required
				/> */}
			</Container>
		</Container>
	);
};
