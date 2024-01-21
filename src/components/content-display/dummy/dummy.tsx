import { log } from "@/src/lib/logger";

type Data = { [key: string]: unknown };

type Dummy = {
	data: Data;
};
/**
 * Duumy element to output received data
 * @param given data from source
 * @returns
 */
export const Dummy = ({ data }: Dummy) => {
	log(
		{ code: "0000", context: "DUMMY:COMPONENT", message: "DATA:LOG" },
		{ data }
	);
	log({ code: "0001", context: "data structure" }, { type: typeof data });
	return <></>;
};
