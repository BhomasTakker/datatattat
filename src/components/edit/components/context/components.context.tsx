import { cloneDeep } from "@/src/utils/object";
import { ReactNode, createContext, useCallback } from "react";
import { useFormContext } from "react-hook-form";

type Component = unknown;

interface ComponentData {}

interface ComponentsState {}

interface ComponentsInterface {
	componentsFormId: string;
	addComponent: (componentData: ComponentData, atStart?: boolean) => void;
	deleteComponent: (i: number) => void;
	moveComponent: (dir: number, i: number) => void;
}

const initialState: ComponentsState & ComponentsInterface = {
	componentsFormId: "",
	addComponent: () => {},
	deleteComponent: () => {},
	moveComponent: () => {},
};

export const ComponentsContextProvider = ({
	value,
	children,
}: {
	value?: ComponentsState;
	children: ReactNode;
}) => {
	// should probably be more dynamic than this - pass in objectKey
	const componentsFormId = "content.components";
	// Oh this looks like it may have worked - actually fixed the worst of it?
	// here ISSUE:54321 - whenever a component has a minor update we will re-render
	// const components = []; //useWatch({ name: componentsFormId, defaultValue: [] });
	const { setValue, unregister, getValues } = useFormContext();
	// const { container } = useContext(PageContainerContext);

	// effectively reset components when container changes
	// might break everything!
	// NOTE: HERE!
	// useEffect(() => {
	// 	//////////////////////////
	// 	// this is like a reset //
	// 	// There is a rogue unregister form somewhere
	// 	/////////////////////////////////
	// 	// set props to empty / no need to reset value?
	// 	// perhaps reset would be better but damn simple
	// 	// unregister(componentsFormId);
	// 	// setValue(componentsFormId, components);
	// }, [container, componentsFormId, setValue, unregister]);

	// this is confusing
	// just do an add at Beginning of the array function etc
	const addComponent = useCallback(
		(component: Component, atStart = false) => {
			const components = getValues(componentsFormId);
			if (!atStart) {
				// addAtBeginning of array

				const len = components?.length ?? 0;
				setValue(`${componentsFormId}.${len}`, component);
				return;
			}

			const updateComponents: unknown[] = cloneDeep(components);
			updateComponents.unshift(component);

			unregister(componentsFormId);
			setValue(componentsFormId, updateComponents);
		},
		[getValues, setValue, unregister]
	);

	const deleteComponent = useCallback(
		(i: number) => {
			const components = getValues(componentsFormId);
			if (components.length === 0) {
				return;
			}

			const updateComponents = cloneDeep(components);
			updateComponents.splice(i, 1);

			unregister(componentsFormId);
			setValue(componentsFormId, updateComponents);
		},
		[getValues, setValue, unregister]
	);

	const moveComponent = useCallback(
		(dir: number, i: number) => {
			const components = getValues(componentsFormId);
			if (components.length === 0) {
				return;
			}

			const updateComponents = cloneDeep(components);

			const movedComponent = updateComponents.splice(i, 1);

			updateComponents.splice(i + dir, 0, ...movedComponent);

			setValue(componentsFormId, updateComponents);
		},
		[getValues, setValue]
	);

	return (
		<ComponentsContext.Provider
			value={{
				...value,
				componentsFormId,
				addComponent,
				deleteComponent,
				moveComponent,
			}}
		>
			{children}
		</ComponentsContext.Provider>
	);
};

export const ComponentsContext = createContext({ ...initialState });
