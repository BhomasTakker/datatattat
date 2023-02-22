import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type useUserReturn = {
	user: any;
	isLoading: boolean;
};

export const useUser = (): useUserReturn => {
	const [user, setUser] = useState<any>(null);
	const [userLoading, setUserLoading] = useState(false);
	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";
	const isLoading = status === "loading";

	const isUserLoading = false;

	//seperate function no

	useEffect(() => {
		const fetchUser = async () => {
			// console.log(session!.user);
			setUserLoading(true);
			const { email } = session!.user!;
			//if error
			const response = await fetch(`/api/user/get-user?email=${email}`);
			const user = await response.json();
			// console.log({ setUser: user });
			//We should join these states
			setUser(user);
			setUserLoading(false);
		};
		if (session && isAuthenticated && !isLoading) {
			//dispatch request
			fetchUser();
			//setUser on return
		}
	}, [isAuthenticated, isLoading, session]);

	//This one is erroneous / if user exists return
	if (!isAuthenticated && !isLoading) {
		return {
			user: null,
			isLoading: false,
		};
	}

	if (isLoading || userLoading) {
		return {
			user: null,
			isLoading: true,
		};
	}

	//returning user.user ...
	return {
		user: user,
		isLoading: false,
	};
};
