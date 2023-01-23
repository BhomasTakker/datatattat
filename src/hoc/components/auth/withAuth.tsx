//NextAuth strategies
//https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-gettoken

import { useSession } from "next-auth/react";
import { useEffect, ReactNode } from "react";
import { LoadingSpinner } from "@/components/loading/LoadingSpinner";
import { renderLabel } from "../RenderLabel";

type Props = {
	children: ReactNode;
};

const WithAuth = ({ children }: Props) => {
	//TODO - use redux to store/update user status - seems like a better way??
	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";
	const isLoading = status === "loading";

	useEffect(() => {
		if (!isAuthenticated && !isLoading) {
			// redirect with reload - will wipe any current state
			window.location.href = "/auth"; //pass from somewhere / const - props.redirect?
		}
	}, [isAuthenticated, isLoading]);

	if (isLoading) {
		return (
			<LoadingSpinner renderLabel={renderLabel({ label: "Loading..." })} />
		);
	}
	if (!isAuthenticated) {
		return (
			<LoadingSpinner renderLabel={renderLabel({ label: "Redirecting..." })} />
		);
	}

	return <>{children}</>;
};

//better way to do in Typescript?
//Is it just classes?
export const withAuth = (Component: any) =>
	function WithAuthHOC({ ...props }) {
		return (
			<WithAuth>
				<Component {...props} />
			</WithAuth>
		);
	};
