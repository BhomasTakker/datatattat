import { ReactNode, createContext, useCallback, useState } from "react";
import { useMeta } from "../hooks/useMeta";
import { CollectionItem } from "@/src/types/data-structures/collection/item/item";

type ListItemState = {
	item: CollectionItem;
};
// put me in types
interface Meta {
	image: string;
}

type ListItemInterface = {
	getMeta: () => void;
	meta: Meta | null;
};

const initialState: ListItemState & ListItemInterface = {
	item: {
		title: "",
		src: "",
		description: "",
		guid: "",
		variant: "",
	},
	getMeta: () => {},
	meta: {
		image: "",
	},
};

export const ListItemContextProvider = ({
	value,
	children,
}: {
	value: ListItemState;
	children: ReactNode;
}) => {
	const { item } = value;
	const { src } = item;
	const [needMeta, setNeedMeta] = useState(false);
	const { meta } = useMeta(src, needMeta);

	const getMeta = useCallback(() => {
		// console.log("FEATURE:0001", "GET:META", { src });
		setNeedMeta(true);
	}, []);
	return (
		// Would you always spread given value here?
		<ListItemContext.Provider value={{ ...value, getMeta, meta }}>
			{children}
		</ListItemContext.Provider>
	);
};

export const ListItemContext = createContext({ ...initialState });
