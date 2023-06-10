import { WithInfo } from "@/src/components/edit/info/WithInfo";
import { BaseEditProps } from "@/src/components/forms/edit/types/BaseEdit";
import { TitleVariant } from "@/src/components/types/ui";
import { Title } from "@/src/components/ui/title";
import { Box } from "@mui/material";

export const BBCRssNewsFeedEdit = ({ objectKey }: BaseEditProps) => {
	return (
		<Box>
			<WithInfo info={"description"}>
				<Title variant={TitleVariant.EDIT_COMPONENT} text="BBC RSS Feed" />
			</WithInfo>
		</Box>
	);
};
