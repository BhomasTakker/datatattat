////////////////////////////////////
// This is our topLevel Component //

import { PAGE_CONTAINERS_MAP } from "config/content/page-containers/page-containers.map";

////////////////////////////////////
interface PageContainerProps {
	contentData: any;
}

export const PageContainerFactoryComponent = ({
	contentData,
}: PageContainerProps) => {
	const { container } = contentData;
	const { containerType } = container;

	const PageContainerComponent = PAGE_CONTAINERS_MAP.get(containerType);

	if (!PageContainerComponent) {
		// Error component
		return <>Error</>;
	}

	console.log({ PageContainerComponent });

	return <PageContainerComponent data={contentData} />;
};
