import { useContext } from "react";
import { PageStateContext } from "../context/state/page-state.context";
import { CONFIG } from "config/edit/page/base-page.config";
import { PageContainerContainer } from "../container/page-container.container";

export const PageContent = () => {
	const { pageContainerId } = useContext(PageStateContext);
	console.log("FEATURE:205", "REFACTOR:PAGE", "NO:RERENDER", {
		pageContainerId,
	});
	console.log("FEATURE:110", "DYNAMIC:CONFIG", { CONFIG });
	// basically we're here.
	// this is where we load a config
	// to build edit
	// TODO: FEATURE:110 DYANAMIC:EDIT
	return (
		<>
			{/* Argument to be made to render components here  */}
			{/* Certainly a better place 'logically' for FEATURE:555 META ?? */}
			{/* Why passing the prop when can get ourselves - justify this */}
			<PageContainerContainer objectKey={pageContainerId} config={CONFIG} />
			{/* <EditContainer objectKey={pageContainerId} /> */}
		</>
	);
};
