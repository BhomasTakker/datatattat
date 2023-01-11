import { useRouter } from "next/router";
import React, { FC, useEffect, useLayoutEffect } from "react";
import { useAppSelector } from "../../../store/hooks";
import { locale, rtl, dir } from "../../../store/locale/localeSlice";

type Props = {
	children: React.ReactNode;
};

//not really a provider / just a manager
//not sure how to get around the dependency issue at the moment
//if add router, etc, then infinite loop
//because updating router and updating on router update
export const LocaleProvider: FC<Props> = ({ children }) => {
	const router = useRouter();
	const lang = useAppSelector(locale);
	const direction = useAppSelector(dir);
	const { replace, pathname } = router;
	//Is this correct or layout effect, etc
	useEffect(() => {
		replace(pathname, undefined, { locale: lang });

		//better way to do this by specifying rtl in html header
		//maybe make this change
		document.dir = direction;
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang, direction]);

	//would we check cookies here or should that be redux?
	//this is a bit of a theory question - should redux manage or store
	return <>{children}</>;
};
