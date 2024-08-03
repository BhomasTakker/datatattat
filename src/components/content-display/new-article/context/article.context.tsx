import {
	Dispatch,
	ReactNode,
	SetStateAction,
	createContext,
	useState,
} from "react";
// sort this out...
import { ArticleProps } from "../types";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/src/store/hooks";
import { getHandler } from "../handlers";
import { PlayerControls } from "../media-player/Article-media-player";

type ArticleState = {
	props?: ArticleProps;
};

type ArticleInterface = {
	onClickHandler: (
		event: React.MouseEvent<HTMLElement>,
		props: ArticleProps
	) => void;
	setPlayerControls: Dispatch<SetStateAction<PlayerControls | null>>;
	playerControls: PlayerControls | null;
};

const initialState: ArticleState & ArticleInterface = {
	onClickHandler: () => {},
	setPlayerControls: () => {},
	playerControls: null,
};

// This may just be handler context
export const ArticleContextProvider = ({
	value,
	children,
}: {
	value: ArticleState;
	children: ReactNode;
}) => {
	const router = useRouter();
	const dispatch = useAppDispatch();
	const [playerControls, setPlayerControls] = useState<null | PlayerControls>(
		null
	);
	const { props } = value;
	const { interaction = "" } = props || {};

	/////////////////////////////////////
	// on creation
	// should we do it on use?
	// i.e. onClick Then do response?
	// more performant technically but little use for us I suppose
	const handler = getHandler({ router, dispatch, playerControls }, interaction);
	// I think this would be better done on event rather than before?
	// It is in any case a much more persormant solution
	// and no more complicated. onClick - get function - do function
	////////////////////////////////////////////////////////////////

	return (
		<ArticleContext.Provider
			value={{
				...value,
				onClickHandler: handler,
				setPlayerControls,
				playerControls,
			}}
		>
			{children}
		</ArticleContext.Provider>
	);
};

export const ArticleContext = createContext({ ...initialState });
