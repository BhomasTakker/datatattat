// Should really make a plop file

import {
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from "react";
import { useWatch } from "react-hook-form";
import { EditComponentContext } from "../../component/context/edit-component.context";

const WITH_ID = "_with";
const WITH_TYPE_ID = `${WITH_ID}.type`;
const PROPS_ID = `componentProps`;

type ContentComponentState = {
	config: any;
};

type ContentComponentInterface = {
	// withComponentFormData: any;
	propsId: string;
	withFormId: string;
	withFormTypeId: string;
	// withComponent: ReactNode;
	withComponentType: string;
};

const initialState: ContentComponentState & ContentComponentInterface = {
	config: null,
	// withComponentFormData: null,
	propsId: "",
	withFormId: "",
	withFormTypeId: "",
	// withComponent: <></>,
	withComponentType: "",
};

export const ContentComponentContextProvider = ({
	value,
	children,
}: {
	value: ContentComponentState;
	children: ReactNode;
}) => {
	const { objectKey } = useContext(EditComponentContext);
	// const [withComponent, setWithComponent] = useState(<></>);
	const [withComponentType, setWithComponentType] = useState("");

	const withFormId = `${objectKey}.${WITH_ID}`;
	const withFormTypeId = `${objectKey}.${WITH_TYPE_ID}`;

	const propsId = `${objectKey}.${PROPS_ID}`;

	// ISSUE:54321 perhaps here / check / this one has to be fine.
	// just a select / name it differently
	const withComponentFormData = useWatch({
		// control,
		name: withFormTypeId,
	});

	console.log("ISSUE:12345", { withComponentFormData }, { withFormTypeId });
	useEffect(() => {
		// console.log("ISSUE:999", "CONTEXT:USE:EFFECT", { withComponentType });
		setWithComponentType(withComponentFormData);
	}, [withComponentFormData]);

	return (
		// Would you always spread given value here?
		<ContentComponentContext.Provider
			value={{
				...value,
				//  better name
				// withComponentFormData, //?
				withComponentType,
				withFormId,
				withFormTypeId,
				// withComponent,
				propsId,
			}}
		>
			{children}
		</ContentComponentContext.Provider>
	);
};

export const ContentComponentContext = createContext({ ...initialState });
