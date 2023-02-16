import React from "react";
import * as yup from "yup";
import { ObjectShape } from "yup/lib/object";

//Change to validationContext?

const schema = yup.object().shape({
	//damn id changed - validation may be where it gets tricky?
	//content.container.containerType
	// containerSelect: validate.username,
});

export const FormContext = React.createContext({
	validationSchema: schema,
	updateValidation: (newFields: ObjectShape) => {},
});
