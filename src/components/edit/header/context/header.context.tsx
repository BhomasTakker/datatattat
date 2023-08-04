import { EditContext } from "@/src/context/edit-context";
import { useUser } from "@/src/hooks/useUser";
import { NOTIFICATIONS } from "@/src/lib/notifications/notifications";
import { useAppDispatch } from "@/src/store/hooks";
import { addNotification } from "@/src/store/notifications/notificationSlice";
import { ReactNode, createContext, useContext } from "react";
import { FieldValues } from "react-hook-form";
import { submitHeader } from "../form/submission";

type HeaderState = {};

type HeaderInterface = {
	submit: (data: FieldValues) => void;
};

const initialState: HeaderState & HeaderInterface = {
	submit: (data: FieldValues) => {},
};

export const HeaderContextProvider = ({
	value,
	children,
}: {
	value?: HeaderState;
	children: ReactNode;
}) => {
	const { currentPage } = useContext(EditContext);
	const dispatch = useAppDispatch();
	const { user } = useUser();

	const submitHandler = async (data: FieldValues) => {
		console.log("FEATURE:102", "SAVE:HEADER", "SUBMIT:HANDLER", { data });
		if (!user) {
			return;
		}
		const { _id } = user;
		const { nav } = data;

		try {
			await submitHeader(_id, nav, currentPage);

			dispatch(addNotification(NOTIFICATIONS.headerSavedSuccess));
		} catch (error) {
			dispatch(addNotification(NOTIFICATIONS.haederSavedError));
		}
	};

	return (
		<HeaderContext.Provider value={{ ...value, submit: submitHandler }}>
			{children}
		</HeaderContext.Provider>
	);
};

export const HeaderContext = createContext({ ...initialState });
