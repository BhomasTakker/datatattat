import { IUser } from "@/models/User";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type useUserReturn = {
	user: IUser | null;
	isLoading: boolean;
};

export const useUser = (): useUserReturn => {
	const [user, setUser] = useState<any>(null);
	const [userLoading, setUserLoading] = useState(false);
	const { data: session, status } = useSession();
	const isAuthenticated = status === "authenticated";
	const isLoading = status === "loading";
	const email = session?.user?.email || undefined;

	//seperate function no

	//This feels useless as is  - problematic
	//We need to simplify this massively
	//We just need to get user
	useEffect(() => {
		const fetchUser = async () => {
			// console.log(session!.user);
			setUserLoading(true);

			//if error
			const response = await fetch(`/api/user/get-user?email=${email}`);
			const fetchedUser = await response.json();
			// console.log({ setUser: user });
			//We should join these states
			setUser(fetchedUser);
			setUserLoading(false);
		};
		if (email && isAuthenticated && !isLoading) {
			//dispatch request
			fetchUser();
			//setUser on return
		}
		//What in session do we need to check?? (email)
		//Session refresh was killing edit screen
	}, [email, isAuthenticated, isLoading]);

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
