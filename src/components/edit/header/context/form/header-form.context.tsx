import { EditContext } from "@/src/context/edit-context";
import { useUser } from "@/src/hooks/useUser";
import { NOTIFICATIONS } from "@/src/lib/notifications/notifications";
import { useAppDispatch } from "@/src/store/hooks";
import { addNotification } from "@/src/store/notifications/notificationSlice";
import { ReactNode, createContext, useContext } from "react";
import { FieldValues } from "react-hook-form";
import { submitHeader } from "../../form/submission";
import { HookFormContextProvider } from "./hook-form.context";

type HeaderFormState = {};

type HeaderFormInterface = {
	submit: (data: FieldValues) => void;
};

const initialState: HeaderFormState & HeaderFormInterface = {
	submit: (data: FieldValues) => {},
};

export const HeaderFormContextProvider = ({
	value,
	children,
}: {
	value: HeaderFormState;
	children: ReactNode;
}) => {
	const { currentPage } = useContext(EditContext);
	const dispatch = useAppDispatch();
	const { user } = useUser();

	const submitHandler = async (data: FieldValues) => {
		console.log("FEATURE:105", "CONTEXT:GROUP", "HEADER:FORM", "SUBMIT", {
			data,
		});

		if (!user) {
			return;
		}
		const { _id } = user;
		const { nav } = data;

		try {
			await submitHeader(_id, nav, currentPage);

			// Could argue this doesn't belong here?
			dispatch(addNotification(NOTIFICATIONS.headerSavedSuccess));
		} catch (error) {
			dispatch(addNotification(NOTIFICATIONS.haederSavedError));
		}
	};

	return (
		<HeaderFormContext.Provider value={{ submit: submitHandler }}>
			<HookFormContextProvider value={{ debug: true }}>
				{children}
			</HookFormContextProvider>
		</HeaderFormContext.Provider>
	);
};

export const HeaderFormContext = createContext({ ...initialState });
