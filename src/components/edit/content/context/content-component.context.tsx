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
	propsId: string;
	withFormId: string;
	withFormTypeId: string;
	withComponentType: string;
};

const initialState: ContentComponentState & ContentComponentInterface = {
	config: null,
	propsId: "",
	withFormId: "",
	withFormTypeId: "",
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
	const [withComponentType, setWithComponentType] = useState("");

	const withFormId = `${objectKey}.${WITH_ID}`;
	const withFormTypeId = `${objectKey}.${WITH_TYPE_ID}`;

	const propsId = `${objectKey}.${PROPS_ID}`;

	const withComponentFormData = useWatch({
		name: withFormTypeId,
	});

	useEffect(() => {
		if (!withComponentFormData) {
			return;
		}

		setWithComponentType(withComponentFormData);
	}, [withComponentFormData]);

	return (
		<ContentComponentContext.Provider
			value={{
				...value,
				withComponentType,
				withFormId,
				withFormTypeId,
				propsId,
			}}
		>
			{children}
		</ContentComponentContext.Provider>
	);
};

export const ContentComponentContext = createContext({ ...initialState });
