import { useInView } from "react-intersection-observer";
import {
	FactoryComponent,
	FactoryData,
} from "../../component/factory/component.factory";
import styles from "./PageStack.module.scss";
import { ComponentProfile, Profile } from "../profile/ComponentProfile";
import { UnknownObject } from "@/src/types";
import { useCssClasses } from "../../new-article/hooks/useCssClasses";

// ///////////////////////////////////////////
// Go Over
// We need to go over pages
// /////////////////////////////////////

interface ComponentProfile {
	profile: Profile;
}

interface PageDisplayStack {
	data: {
		props: UnknownObject;
		components: FactoryData[];
	};
}

// FactoryData needs to be a generic type WE know what we expect - or at partially
const StackComponent = ({
	component,
	index,
}: {
	component: FactoryData;
	index: number;
}) => {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	const { componentProps } = component;
	// Partial?
	const {
		showComponentTitle,
		componentTitle,
		componentTitleVariant,
		componentTitleLink,

		style = "",
	} = (componentProps as Profile) || {};

	const root = useCssClasses(styles.root, styles[style] || "");

	return (
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
				}}
			/>
			{inView && <FactoryComponent data={component} />}
		</section>
	);
};

export const PageDisplayStack = ({ data }: PageDisplayStack) => {
	const { props, components } = data;
	// take style etc from props
	// We would like i.e. menu / quick links for each section of content
	return (
		<div className={styles.root}>
			{components.map((component, index) => {
				// We need to start providing ids
				// Would we ever want to rearrange etc
				return (
					<StackComponent key={index} index={index} component={component} />
				);
			})}
		</div>
	);
};
