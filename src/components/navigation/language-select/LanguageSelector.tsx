import React from "react";
import { useAppDispatch } from "../../../store/hooks";
import { setLocale } from "../../../store/locale/localeSlice";
import { LanguageType } from "../../../types/locale";

export const LanguageSelector = () => {
	const dispatch = useAppDispatch();

	const changeLanguage = (lng: LanguageType) => {
		dispatch(setLocale(lng));
	};
	return <div>LanguageSelector</div>;
};

{
	/* <Button
									color="inherit"
									onClick={() => changeLanguage(LanguageType.EN)}
								>
									EN &#9872;
								</Button>
								<Button
									color="inherit"
									onClick={() => changeLanguage(LanguageType.AR)}
								>
									AR &#127462;
								</Button> */
}
