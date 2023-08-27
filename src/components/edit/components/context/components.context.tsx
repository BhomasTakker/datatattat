import { cloneDeep } from "@/src/utils/object";
import {
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
} from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { PageContainerContext } from "../../page/context/container/page-container.context";

type Component = unknown;

interface ComponentData {}

interface ComponentsState {}

interface ComponentsInterface {
	components: Component[];
	addComponent: (componentData: ComponentData, atStart?: boolean) => void;
	deleteComponent: (i: number) => void;
	moveComponent: (dir: number, i: number) => void;
}

const initialState: ComponentsState & ComponentsInterface = {
	components: [],
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
	const components = useWatch({ name: componentsFormId, defaultValue: [] });
	const { setValue, unregister } = useFormContext();
	const { container } = useContext(PageContainerContext);

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
		[components?.length, setValue]
	);

	const deleteComponent = useCallback(
		(i: number) => {
			if (components.length === 0) {
				return;
			}

			const updateComponents = cloneDeep(components);
			updateComponents.splice(i, 1);

			unregister(componentsFormId);
			setValue(componentsFormId, updateComponents);
		},
		[components, setValue, unregister]
	);

	const moveComponent = useCallback(
		(dir: number, i: number) => {
			if (components.length === 0) {
				return;
			}

			const updateComponents = cloneDeep(components);

			const movedComponent = updateComponents.splice(i, 1);

			updateComponents.splice(i + dir, 0, ...movedComponent);

			setValue(componentsFormId, updateComponents);
		},
		[components, setValue]
	);

	return (
		<ComponentsContext.Provider
			value={{
				...value,
				components,
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
