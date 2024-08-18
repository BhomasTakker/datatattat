import { FactoryData } from "../../component/factory/component.factory";
import styles from "./Grid.module.scss";
import { useCssClasses } from "../../new-article/hooks/useCssClasses";
import { useCallback } from "react";
import { GridItem } from "./GridItem";

type Layout = "display";

interface PageGridProps {
	layout: Layout;
}

interface PageGrid {
	data: {
		props: PageGridProps;
		components: FactoryData[];
	};
}

export const Grid = ({ data }: PageGrid) => {
	const { props, components } = data;
	const { layout } = props || {};

	const root = useCssClasses(styles.root, styles[layout]);

	const renderComponents = useCallback(() => {
		return components.map((component, index) => {
			return <GridItem key={index} component={component} className="" />;
		});
	}, [components]);

	return <div className={root}>{renderComponents()}</div>;
};
