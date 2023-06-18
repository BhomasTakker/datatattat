///////////////////////////////////////////////////////////
// https://www.react-hook-form.com/api/useform/unregister/
// Ignored options for now seems rather irrelevant to us at this stage
/////////////////////////////////////////////////////////////
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

// A simple hook to deregister a form component when component removed at the end of its lifecycle
export const useUnregisterForm = (name: string, options?: any) => {
	const { unregister } = useFormContext();

	useEffect(() => {
		return () => {
			unregister(name);
		};
	}, [name, unregister]);
};
