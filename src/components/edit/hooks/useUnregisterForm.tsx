///////////////////////////////////////////////////////////
// https://www.react-hook-form.com/api/useform/unregister/
// Ignored options for now seems rather irrelevant to us at this stage
/////////////////////////////////////////////////////////////
// Unused Delete
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type UnregisterFormType = {
	name: string;
	options?: any;
	//Didn't fix anything just caused a never ending loop!
	// dependencies?: any[];
};

// Delete now

const defaultDependencies: any = {};

// A simple hook to deregister a form component when component removed at the end of its lifecycle
// not as straightforward as use whenever
// pass array for 'unregister on'
export const useUnregisterForm = ({
	name,
	options,
}: // dependencies = defaultDependencies,
UnregisterFormType) => {
	const { unregister, register } = useFormContext();

	useEffect(() => {
		console.log("registered? " + name);
		// register(name);
		return () => {
			console.log("un-registered? " + name);
			unregister(name);
		};
		// Can we spread dependencies or get around spreading?
	}, [name, unregister]);
};
