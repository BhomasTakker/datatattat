import { UnknownObject } from "@/src/components/content-display/new-article/types";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

type InputAssign = {
	id: string;
	value: string | number | UnknownObject | UnknownObject[];
};

/**
 *
 * @param id and value
 * No visible component - just set a value to be stored
 * For - if you go down THIS route we need THIS value
 */
export const InputAssign = ({ id, value }: InputAssign) => {
	const { setValue } = useFormContext();
	useEffect(() => {
		setValue(id, value);
	}, [id, value, setValue]);
	return null;
};
