import { useWidth } from "@/src/hooks/useWidth";
import { FactoryData } from "../../component/factory/component.factory";
import styles from "./Grid.module.scss";
import { useCssClasses } from "../../new-article/hooks/useCssClasses";
import { useCallback } from "react";
import { GridItem } from "./GridItem";

interface PageGridProps {}
interface PageGrid {
	data: {
		props: PageGridProps;
		components: FactoryData[];
	};
}

export const Grid = ({ data }: PageGrid) => {
	const { props, components } = data;

	// const screenWidth = useWidth();

	const root = useCssClasses(styles.root);

	const renderComponents = useCallback(() => {
		return components.map((component, index) => {
			return <GridItem key={index} component={component} />;
		});
	}, [components]);

	return <div className={root}>{renderComponents()}</div>;
};
