import { useContext } from "react";
import { PageStateContext } from "../context/state/page-state.context";
import { EditContainer } from "@/src/components/forms/edit/EditContainer";

export const PageContent = () => {
	const { pageFormId } = useContext(PageStateContext);
	console.log("FEATURE:205", "REFACTOR:PAGE", "NO:RERENDER", { pageFormId });

	// basically we're here.
	// this is where we load a config
	// to build edit
	// TODO: FEATURE:110 DYANAMIC:EDIT
	return <EditContainer objectKey={pageFormId} />;
};
