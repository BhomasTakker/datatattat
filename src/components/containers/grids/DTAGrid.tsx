import styles from "./DTAGrid.module.scss";
import { componentFactory } from "@/src/factories/component-factory";
import { withFactory } from "@/src/factories/with-factory";

//need 9 items

//title
//link
//layout from somewhere / i.e. use 'this' css module/class
type DTAGridProps = {
	data: any;
};

const createComponents = (components: any[]) => {
	return components.map((component, index) => {
		const { componentType, componentProps, _with = {} } = component;
		const Component = componentFactory(componentType);

		//helpers or something
		const componentObject = {
			component: Component,
			props: componentProps,
		};

		const RenderElement = withFactory(componentObject, _with);
		const classes = styles[`grid-item-${index}`] + " " + styles.article;
		return (
			<article className={classes} key={index}>
				<RenderElement />
			</article>
		);
	});
};

//ArticleGrid - like a BBC Homepage display
//ArticleGridDisplay or something
//HomepageGridDisplay - etc etc
export const DTAGrid = ({ data }: DTAGridProps) => {
	//Take in content data
	// console.log({ data });
	const { components } = data;

	const componentGridItems = createComponents(components);

	// console.log({ data });
	return <section className={styles.section}>{componentGridItems}</section>;
};
