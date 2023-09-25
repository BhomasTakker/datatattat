import { useContext } from "react";
import { PageStateContext } from "../context/state/page-state.context";
import { CONFIG } from "config/edit/page/base-page.config";
import { PageContainerContainer } from "../container/page-container.container";
import { PagePreviewModal } from "../preview/page-preview";

export const PageContent = () => {
	const { pageContainerId } = useContext(PageStateContext);

	return (
		<>
			<PagePreviewModal />
			{/* FEATURE:555 META:COMPONENT - technically meta would be before variant but?  */}
			<h2>Add meta component here</h2>
			<h3>Add page heading and any blurb?</h3>
			{/* Argument to be made to render components here  */}
			{/* Certainly a better place 'logically' for FEATURE:555 META ?? */}
			{/* Why passing the prop when can get ourselves - justify this */}
			<PageContainerContainer objectKey={pageContainerId} config={CONFIG} />
		</>
	);
};
