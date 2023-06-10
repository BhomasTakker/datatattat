import { WithInfo } from "@/src/components/edit/info/WithInfo";
import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Box } from "@mui/material";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

export const SkyRssNewsFeedEdit = ({ objectKey }: BaseEditProps) => {
	const { getValues, setValue } = useFormContext();

	useEffect(() => {
		setValue(
			`${objectKey}.route`,
			"https://feeds.skynews.com/feeds/rss/home.xml"
		);
	}, [objectKey, setValue]);
	return (
		<Box>
			<WithInfo info={"description"}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text="Sky RSS Feed" />
			</WithInfo>
		</Box>
	);
};
