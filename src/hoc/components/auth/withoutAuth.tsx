//NextAuth strategies
//https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-gettoken

import { FC, useEffect } from "react";

import { useRouter } from "next/router";
import { getSession, useSession } from "next-auth/react";
import { LoadingSpinner } from "../../../components/loading/LoadingSpinner";
import { renderLabel } from "../RenderLabel";
type Props = {
	children: React.ReactNode;
};

//Come up with a better name, Gee Whiz
const WithoutAuth: FC<Props> = ({ children }: Props) => {
	const router = useRouter();
	const { data: session, status } = useSession();
	useEffect(() => {
		getSession().then((session) => {
			if (session) {
				router.replace("/");
			}
		});
	}, [router]);

	if (status === "loading") {
		return (
			<LoadingSpinner renderLabel={renderLabel({ label: "Loading..." })} />
		);
	}
	if (status === "authenticated") {
		return (
			<LoadingSpinner renderLabel={renderLabel({ label: "Redirecting..." })} />
		);
	}

	return <>{children}</>;
};

//better way to do in Typescript?
//Is it just classes?
export const withoutAuth =
	(Component: any) =>
	// eslint-disable-next-line react/display-name
	({ ...props }) =>
		(
			<WithoutAuth>
				<Component {...props} />
			</WithoutAuth>
		);
