import { useSession, signOut, signIn } from "next-auth/react";
import { api } from "../utils/api";
import { UserIcon } from '@heroicons/react/24/solid';

export const AuthShowcase: React.FC = () => {
  const { data: session } = useSession();
  // const { data: secretMessage } = api.organisation.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: session?.user !== undefined }
  // );
  if (session) {
 
    return (
      <>
        <span className="signed-in text-white mr-8">Signed in as {session?.user?.name}</span>
        <button
          className="mr-4 rounded-md bg-white px-4 py-2 duration-200 ease-in-out hover:bg-light-blue hover:text-white"
          onClick={() => signOut({ callbackUrl: "signOut" })}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      <button 
        className="px-3 py-2 mr-4 bg-dark-blue rounded-lg border-2 border-white text-white hover:bg-dark-blue/50 hover:text-white ease-in-out duration-200"
        onClick={() => signIn("cognito")}
      >
        <UserIcon className="h-6 w-6 text-white inline-block mr-2"/>
        Sign in / Register
      </button>
    </>
  );
};
