import { useRouter } from "next/router";
import React, { FC, useCallback, useEffect, useLayoutEffect } from "react";
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
	const lang = useAppSelector(locale);
	const router = useRouter();

	const direction = useAppSelector(dir);
	const { replace, pathname } = router;
	//Is this correct or layout effect, etc
	useEffect(() => {
		const res = replace(pathname, undefined, { locale: lang })
			.then(() => (document.dir = direction))
			.catch((err) => console.log("try catch this " + err));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [lang, direction]);

	//would we check cookies here or should that be redux?
	//this is a bit of a theory question - should redux manage or store
	return <>{children}</>;
};
