import { useContext } from "react";
import { PageStateContext } from "../context/state/page-state.context";
import { EditContainer } from "@/src/components/forms/edit/EditContainer";
import { CONFIG } from "config/edit/page/base-page.config";
import { PageContainerContainer } from "../container/page-container.container";

export const PageContent = () => {
	const { pageFormId } = useContext(PageStateContext);
	console.log("FEATURE:205", "REFACTOR:PAGE", "NO:RERENDER", { pageFormId });
	console.log("FEATURE:110", "DYNAMIC:CONFIG", { CONFIG });
	// basically we're here.
	// this is where we load a config
	// to build edit
	// TODO: FEATURE:110 DYANAMIC:EDIT
	return (
		<>
			<PageContainerContainer objectKey={pageFormId} config={CONFIG} />
			<EditContainer objectKey={pageFormId} />
		</>
	);
};
