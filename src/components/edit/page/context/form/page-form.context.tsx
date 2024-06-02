import { EditContext } from "@/src/context/edit-context";
import { useUser } from "@/src/hooks/useUser";
import { NOTIFICATIONS } from "@/src/lib/notifications/notifications";
import { useAppDispatch } from "@/src/store/hooks";
import { addNotification } from "@/src/store/notifications/notificationSlice";
import { ReactNode, createContext, useContext } from "react";
import { FieldValues } from "react-hook-form";
import { HookFormContextProvider } from "../../../../forms/edit/context/hook-form.context";
import { createPage } from "@/src/queries/pages/create-page";

type PageFormState = {};

type PageFormInterface = {
	submit: (data: FieldValues) => void;
};

const initialState: PageFormState & PageFormInterface = {
	submit: (data: FieldValues) => {},
};

export const PageFormContextProvider = ({
	value,
	children,
}: {
	value?: PageFormState;
	children: ReactNode;
}) => {
	const { currentPage } = useContext(EditContext);
	const dispatch = useAppDispatch();
	const { user } = useUser();

	const submitHandler = async (data: FieldValues) => {
		if (!user) {
			return;
		}
		const { _id } = user;
		console.log("5678 submit", { data });
		const pageData = {
			...data,
			creator: _id,
		};

		try {
			await createPage(pageData);

			// Could argue this doesn't belong here?
			dispatch(addNotification(NOTIFICATIONS.pageCreationSuccess));
		} catch (error) {
			dispatch(addNotification(NOTIFICATIONS.pageCreationError));
		}
	};

	return (
		<PageFormContext.Provider value={{ submit: submitHandler }}>
			<HookFormContextProvider
				value={{ debug: true, context: PageFormContext }}
			>
				{children}
			</HookFormContextProvider>
		</PageFormContext.Provider>
	);
};

export const PageFormContext = createContext({ ...initialState });
