// Should really make a plop file

import { ReactNode, createContext, useContext, useState } from "react";
import { useWatch } from "react-hook-form";
import { EditComponentContext } from "../../component/context/edit-component.context";

const WITH_ID = "_with";
const WITH_TYPE_ID = `${WITH_ID}.type`;
const PROPS_ID = `componentProps`;

type ContentComponentState = {
	config: any;
};

type ContentComponentInterface = {
	withComponentFormData: any;
	propsId: string;
	withFormId: string;
	withFormTypeId: string;
	withComponent: ReactNode;
};

const initialState: ContentComponentState & ContentComponentInterface = {
	config: null,
	withComponentFormData: null,
	propsId: "",
	withFormId: "",
	withFormTypeId: "",
	withComponent: <></>,
};

export const ContentComponentContextProvider = ({
	value,
	children,
}: {
	value: ContentComponentState;
	children: ReactNode;
}) => {
	const { objectKey } = useContext(EditComponentContext);
	const [withComponent, setWithComponent] = useState(<></>);

	const withFormId = `${objectKey}.${WITH_ID}`;
	const withFormTypeId = `${objectKey}.${WITH_TYPE_ID}`;

	const propsId = `${objectKey}.${PROPS_ID}`;

	const withComponentFormData = useWatch({
		// control,
		name: withFormTypeId,
	});

	return (
		// Would you always spread given value here?
		<ContentComponentContext.Provider
			value={{
				...value,
				withComponentFormData, //?
				withFormId,
				withFormTypeId,
				withComponent,
				propsId,
			}}
		>
			{children}
		</ContentComponentContext.Provider>
	);
};

export const ContentComponentContext = createContext({ ...initialState });
