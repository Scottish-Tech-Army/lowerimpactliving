import { useSession, signOut, signIn } from "next-auth/react";
import { api } from "../utils/api";

export const AuthShowcase: React.FC = () => {
  const { data: session } = useSession();
  // const { data: secretMessage } = api.organisation.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: session?.user !== undefined }
  // );
  if (session) {
    return (
      <>
        Signed in as {session?.user?.username} <br />
        <button
          className="mr-4 rounded-md bg-white px-4 py-2 duration-200 ease-in-out hover:bg-light-blue hover:text-white"
          onClick={() => void signOut({ callbackUrl: "signOut" })}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <button
        className="mr-4 rounded-md bg-white px-4 py-2 duration-200 ease-in-out hover:bg-light-blue hover:text-white"
        onClick={() => void signIn("cognito")}
      >
        Sign in
      </button>
    </>
  );
};
