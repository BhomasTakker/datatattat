let logOn = false;

export const getIsOn = () => {
	return logOn;
};

export const setLoggerOn = (setOn: boolean) => {
	logOn = setOn;
};

export type Message = any;
export type OptionalParams = any[];

export const log = (msg: Message, ...optionalParams: OptionalParams) => {
	if (!logOn) return;

	return console.log(msg, optionalParams);
};
