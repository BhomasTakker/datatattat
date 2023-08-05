import { cloneDeep } from "@/src/utils/object";
import { ReactNode, createContext, useCallback } from "react";
import { useFormContext, useWatch } from "react-hook-form";

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

	const addComponent = useCallback(
		(component: Component, atStart = false) => {
			console.log("FEAT:101", "ARRAY:CONTROLS", "ADD:COMPONENT");
			if (!atStart) {
				console.log("FEAT:101", "ARRAY:CONTROLS", "ADD:COMPONENT", "START");
				const len = components?.length ?? 0;
				setValue(`${componentsFormId}.${len}`, component);
				return;
			}

			console.log("FEAT:101", "ARRAY:CONTROLS", "ADD:COMPONENT", "START");

			const updateComponents: unknown[] = cloneDeep(components);
			updateComponents.unshift(component);

			unregister(componentsFormId);
			setValue(componentsFormId, updateComponents);
		},
		[components?.length, setValue]
	);

	const deleteComponent = useCallback(
		(i: number) => {
			console.log("FEAT:101", "ARRAY:CONTROLS", "DELETE:COMPONENT", { i });
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
			console.log("FEAT:101", "ARRAY:CONTROLS", "MOVE:COMPONENT", {
				components,
				dir,
				i,
			});
			if (components.length === 0) {
				return;
			}

			const updateComponents = cloneDeep(components);
			const movedComponent = updateComponents.splice(i, 1);
			updateComponents.splice(i + dir, 0, ...movedComponent);

			// unregister(conversionsFormId);
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
