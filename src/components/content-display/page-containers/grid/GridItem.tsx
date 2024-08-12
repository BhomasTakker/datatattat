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
}

export const GridItem = ({ component }: GridItem) => {
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

	const root = useCssClasses(styles.componentRoot);

	return (
		// Big argument for wrapper - With Profile or whatever
		// add styles select?
		// add borders, shadow, margins, sticky?
		// componentStyle, componentWrapper
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
