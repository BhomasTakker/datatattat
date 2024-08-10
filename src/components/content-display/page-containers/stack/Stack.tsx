import { useInView } from "react-intersection-observer";
import {
	FactoryComponent,
	FactoryData,
} from "../../component/factory/component.factory";
import styles from "./PageStack.module.scss";
import { ComponentProfile, Profile } from "../profile/ComponentProfile";
import { UnknownObject } from "@/src/types";
import { useCssClasses } from "../../new-article/hooks/useCssClasses";
import { useWidth } from "@/src/hooks/useWidth";
import { useCallback, useEffect, useState } from "react";

// ///////////////////////////////////////////
// Go Over
// We need to go over pages
// /////////////////////////////////////

// Clean this thing up

interface ComponentProfile {
	profile: Profile;
}

type ColumnProps = {
	direction: "column";
};
type RowProps = {
	direction: "row";
	columns_xs: number;
	columns_sm: number;
	columns_md: number;
	columns_lg: number;
	columns_xl: number;
};
type Props = ColumnProps | RowProps;
interface PageDisplayStack {
	data: {
		props: Props;
		components: FactoryData[];
	};
}

// FactoryData needs to be a generic type WE know what we expect - or at partially
const StackComponent = ({
	component,
	className,
	index,
}: {
	component: FactoryData;
	className?: string;
	index: number;
}) => {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: true,
	});

	const { componentProps } = component;
	// Wrap the component in a Profile component
	const {
		showComponentTitle,
		componentTitle,
		componentTitleVariant,
		componentTitleLink,
		align = "left",
		style = "",
	} = (componentProps as Profile) || {};

	const root = useCssClasses(styles.componentRoot, styles[style] || "");

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

export const PageDisplayStack = ({ data }: PageDisplayStack) => {
	const [className, setClassName] = useState("");
	const { props, components } = data;
	const { direction = "column" } = props || {};

	// This feels like we re render too much
	// on resize this is jarring
	// We could get from a context
	const screenWidth = useWidth();

	useEffect(() => {
		if (direction === "row") {
			const columns = (props as RowProps)[`columns_${screenWidth}`];
			const numberOfComponents = components.length;
			const useColumns =
				numberOfComponents < columns ? numberOfComponents : columns;

			setClassName(styles[`columns-${useColumns}`]);
		}
	}, [components.length, direction, props, screenWidth]);

	// I feel like root changes causing re-render
	const root = useCssClasses(
		styles.root,
		styles[direction || "column"],
		className
	);

	const renderComponents = useCallback(() => {
		return components.map((component, index) => {
			return <StackComponent key={index} index={index} component={component} />;
		});
	}, [components]);

	return <div className={root}>{renderComponents()}</div>;
};
