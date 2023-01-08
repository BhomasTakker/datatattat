//NextAuth strategies
//https://next-auth.js.org/tutorials/securing-pages-and-api-routes#using-gettoken
//
//HOC for page authentication
//needs wild refactor
//potentially use redux for storing authenticated?
//but this does work simply

//This would be the prefered way to secure static pages
//

import { useSession } from "next-auth/react";
import { Stack, Typography } from "@mui/material";
import { FC, useEffect } from "react";

type Props = {
	children: React.ReactNode;
};

const WithAuth: FC<Props> = ({ children }: Props) => {
	//TODO - use redux to store/update user status - seems like a better way??
	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";
	const isLoading = status === "loading";

	console.log({ status });
	console.log({ isAuthenticated });
	console.log({ isLoading });
	//create a simple little hook for this
	//could HOC withAuthentication
	useEffect(() => {
		if (!isAuthenticated && !isLoading) {
			//is this the correct way?
			// it will wipe state / so seems so
			window.location.href = "/auth";
		}
	}, [isAuthenticated, isLoading]);

	//this all seems sluggish need test around
	//withLoading? - no - would surely be as/in above
	if (isLoading) {
		return <Typography variant="h3">Loading...</Typography>;
	}
	if (!isAuthenticated) {
		return <Typography variant="h3">Redirecting...</Typography>;
	}

	return <>{children}</>;
};

//better way to do in Typescript?
//Is it just classes?
export const withAuth =
	(Component: any) =>
	// eslint-disable-next-line react/display-name
	({ ...props }) =>
		(
			<WithAuth>
				<Component {...props} />
			</WithAuth>
		);

// export default withLogin
