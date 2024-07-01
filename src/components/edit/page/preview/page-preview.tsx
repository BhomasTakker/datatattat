import { Box, Button, Container, Modal } from "@mui/material";
import { useContext, useState } from "react";
import { useFormContext } from "react-hook-form";
import { MARGINS } from "config/styles/styles.config";
import { PageContainerFactoryComponent } from "@/src/components/content-display/page-containers/page-container.factory";
import { PageStateContext } from "../context/state/page-state.context";

/**
 * Preview for Page
 */
export const PagePreviewModal = () => {
	const [isVisible, setIsVisiible] = useState(false);
	const { pageFormId } = useContext(PageStateContext);
	const { getValues } = useFormContext();

	const page = getValues(pageFormId);

	if (!isVisible) {
		return (
			<Button onClick={() => setIsVisiible(true)} color="secondary">
				Open modal
			</Button>
		);
	}

	return (
		<Modal
			open={isVisible}
			onClose={() => setIsVisiible(false)}
			aria-labelledby="modal-page-preview"
			aria-describedby="modal-what-is-this"
			sx={{
				overflowY: "scroll",
			}}
		>
			<Container>
				<Box
					marginTop={MARGINS.LARGE}
					marginBottom={MARGINS.LARGE}
					width={"100%"}
					bgcolor={"white"}
				>
					<Button onClick={() => setIsVisiible(false)}>Close</Button>
					{/* Layout needs work - lol you shock me boy! */}
					<PageContainerFactoryComponent contentData={page} />
				</Box>
			</Container>
		</Modal>
	);
};
