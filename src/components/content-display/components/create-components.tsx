import { FactoryComponent } from "../component/factory/component.factory";

type Component = any;

// What kind of component?
// We could wrap this in a title if say a display
// So we don't need to add to all controllers etc
export const createComponents = (components: Component[]) => {
	return components.map((component, index) => {
		// We need to start providing ids
		return <FactoryComponent key={index} data={component} />;
	});
};

// List Item style?
export const createListComponents = (components: Component[]) => {
	return components.map((component, index) => {
		// We need to start providing ids
		return (
			// index ...
			<li key={index}>
				<FactoryComponent data={component} />
			</li>
		);
	});
};

// Something like this?
// Pass in array of grid data
export const createGridComponents = (components: Component[]) => {
	return components.map((component, index) => {
		// We need to start providing ids
		return (
			<div key={index} className="grid-item">
				<FactoryComponent data={component} />
			</div>
		);
	});
};
