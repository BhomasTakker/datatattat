import { useInView } from "react-intersection-observer";
import {
	FactoryComponent,
	FactoryData,
} from "../../component/factory/component.factory";
import styles from "./GridItem.module.scss";
import { ComponentProfile, Profile } from "../profile/ComponentProfile";
import { useCssClasses } from "../../new-article/hooks/useCssClasses";

interface GridItem {
	component: FactoryData;
	className: string;
}

export const GridItem = ({ component, className }: GridItem) => {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	const { componentProps } = component;

	// clean this up
	const {
		showComponentTitle,
		componentTitle,
		componentTitleVariant,
		componentTitleLink,
		align = "left",
		style = "",
	} = (componentProps as Profile) || {};

	const root = useCssClasses(styles.componentRoot, className);

	return (
		<section ref={ref} className={root}>
			<ComponentProfile
				profile={{
					showComponentTitle,
					componentTitle,
					componentTitleVariant,
					componentTitleLink,
					align,
				}}
			/>
			{inView && <FactoryComponent data={component} />}
		</section>
	);
};
