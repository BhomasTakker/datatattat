import { FormContext } from "@/src/context/form-context";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { ReactElement, ReactNode, useState } from "react";
import { FieldValues, FormProvider, useForm } from "react-hook-form";
import { AnyObjectSchema } from "yup";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";
import Button from "@mui/material/Button";

type Props = {
	children: ReactNode;
	defaultSchema: ObjectShape; // | Lazy<any, unknown>;
	submitHandler: (data: FieldValues) => void;
	debug?: boolean;
	//Pass in a debug handler
};

export const DTAFormProvider = ({
	children,
	defaultSchema,
	submitHandler,
	debug = false, //should pass in a debug function or use log
}: Props): ReactElement => {
	const schema = yup.object().shape(defaultSchema);
	const [stateSchema, setSchema] = useState<AnyObjectSchema>(schema);

	const methods = useForm({ resolver: yupResolver(stateSchema) });

	//I think we have walked away from this aproach for the timebeing
	//Use default react-hook-forms validation until a suitable alternative can be found?
	//Or validate and output on submit
	//More likely a way via useFormContext, dunno
	const updateSchema = (newFields: ObjectShape) => {
		// console.log({ newFields });
		const newSchema = yup.object().shape({
			...stateSchema.fields,
			...newFields,
		});
		// const newSchema = yup.object().shape({
		// 	...stateSchema.fields,
		// 	...newFields,
		// });
		setSchema(newSchema);
	};

	const debugHandler = () => {
		console.log("DEBUG HANDLER");
		console.log({ values: methods.getValues() });
		console.log({ errors: methods.formState.errors });
	};

	console.log("WE RE-RENDER");

	return (
		<FormProvider {...methods}>
			{/* Error validation did not work for me this way - need think */}
			{/* Is possible we'll just need to manually 'watch' and check i.e. trigger error for each but??  */}
			{/* <FormContext.Provider
				value={{
					validationSchema: stateSchema,
					updateValidation: updateSchema,
				}}
			> */}
			<form onSubmit={methods.handleSubmit((data) => submitHandler(data))}>
				{children}
			</form>
			{debug ? <Button onClick={debugHandler}>Debug</Button> : <></>}
			{/* </FormContext.Provider> */}
		</FormProvider>
	);
};
