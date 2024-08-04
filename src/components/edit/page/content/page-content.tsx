import { useContext } from "react";
import { PageStateContext } from "../context/state/page-state.context";
import { CONFIG } from "config/edit/page/base-page.config";
import { PageContainerContainer } from "../container/page-container.container";
import { PagePreviewModal } from "../preview/page-preview";
import { InputList } from "../input-list/input-list";
import { META_CONFIG } from "../meta/page-meta.edit.config";
import { PROFILE_CONFIG } from "../profile/page-profile.edit.config";
import { STYLE_CONFIG } from "../style/page-style.edit.config";

export const PageContent = () => {
	const { pageContainerId, pageMetaId, pageProfileId, pageStyleId } =
		useContext(PageStateContext);

	return (
		<div>
			<PagePreviewModal />
			<InputList objectKey={pageMetaId} config={META_CONFIG} />
			<InputList objectKey={pageStyleId} config={STYLE_CONFIG} />
			<InputList objectKey={pageProfileId} config={PROFILE_CONFIG} />
			<PageContainerContainer objectKey={pageContainerId} config={CONFIG} />
		</div>
	);
};
