import styles from "./DTAGrid.module.scss";
import { componentFactory } from "@/src/factories/component-factory";
import { withFactory } from "@/src/factories/with-factory";
import { BasicArticle } from "../../data/articles/BasicArticle";

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
		const Component = BasicArticle; //componentFactory(componentType);

		const classes = styles[`grid-item-${index}`] + " " + styles.article;
		return (
			<article className={classes} key={index}>
				<BasicArticle data={component} />
			</article>
		);
	});
};

//ArticleGrid - like a BBC Homepage display
//ArticleGridDisplay or something
//HomepageGridDisplay - etc etc
export const DTAGrid = ({
	queryData = {},
	componentId,
}: {
	queryData: any;
	componentId: string;
}) => {
	//Take in content data
	// console.log({ data });
	const { data = [] } = queryData;

	console.log({ queryData });

	const componentGridItems = createComponents(data);

	// console.log({ data });
	return <section className={styles.section}>{componentGridItems}</section>;
};
