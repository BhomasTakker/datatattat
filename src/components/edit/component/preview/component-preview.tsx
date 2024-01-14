import { Box, Button, Container, Modal } from "@mui/material";
import { useContext, useState } from "react";
import { EditComponentContext } from "../context/edit-component.context";
import { useFormContext } from "react-hook-form";
import { MARGINS } from "config/styles/styles.config";
import { FactoryComponent } from "@/src/components/content-display/component/factory/component.factory";

export const ComponentPreviewModal = () => {
	const [isVisible, setIsVisiible] = useState(false);
	const { componentTypeFormId, objectKey } = useContext(EditComponentContext);
	const { getValues } = useFormContext();

	if (!isVisible) {
		return <Button onClick={() => setIsVisiible(true)}>Open modal</Button>;
	}

	const component = getValues(objectKey);

	return (
		<Modal
			open={isVisible}
			onClose={() => setIsVisiible(false)}
			aria-labelledby="modal-component-preview"
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
					{/* Layout needs work - lol you shock me boy! */}
					<Button onClick={() => setIsVisiible(false)}>Close</Button>
					<FactoryComponent data={component} />
				</Box>
			</Container>
		</Modal>
	);
};
