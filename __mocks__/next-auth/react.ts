type Status = "loading" | "authenticated" | "unauthenticated";

type UseSession = {
	session: {};
	status: Status;
};

type NextAuthReact = {
	useSession: () => UseSession;
};

const nextAuthReact: NextAuthReact =
	jest.createMockFromModule("next-auth/react");

//Why doi we need as Status here
//do I really need to create an enum?
//plus we could share a type here for enum etc so probably yes
//and this is why we need a types folder
const useSession = (): UseSession => ({
	session: {},
	status: "unauthenticated" as Status,
});

nextAuthReact.useSession = useSession;

module.exports = nextAuthReact;
export {};
