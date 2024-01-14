let logOn = false;
let filterCode = "";
let filterContext = "";
let filterMessage = "";

export type Code = string;
export type Context = string;
export type Message = string;

export const getIsOn = () => {
	return logOn;
};

export const setLog = (setOn: boolean) => {
	logOn = setOn;
};

export const setCode = (code: Code) => (filterCode = code);
export const setContext = (context: Context) => (filterContext = context);
export const setMessage = (message: Message) => (filterMessage = message);

export type LogParameters = {
	code: Code;
	context?: Context;
	message?: Message;
};
export type OptionalParams = any[];

export const log = (
	{ code, context = "", message = "" }: LogParameters,
	...optionalParams: OptionalParams
) => {
	if (!logOn) return;

	// string /OR/ array
	if (filterCode && filterCode !== code) {
		return;
	}

	// string /OR/ array
	// just add filterContext.includes
	if (filterContext && filterContext !== context) {
		return;
	}

	// string /OR/ array
	if (filterMessage && filterMessage !== message) {
		return;
	}

	// log to txt
	// code_context_message
	// split: for _ AND lowercase
	// feature_0009_base_article
	// snapshot text
	// gives you renders etc
	// need strip from code

	return; // console.log(code, context, message, optionalParams);
};

export const little_log = (msg: Message, ...optionalParams: OptionalParams) => {
	if (!logOn) return;

	return; // console.log(msg, optionalParams);
};
