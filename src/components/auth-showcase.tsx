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
          <button onClick={() => void signOut({ callbackUrl: "signOut" })} className="hover:bg-white/100 rounded-lg ease-in-out duration-200 block p-3 text-primary1">
            <UserIcon className="h-8 w-8 -mt-1 ml-4 text-primary1 inline-block mr-2 mt-2 sm:mt-0"/>
            <span className="p-1 pt-1 inline-block text-lg text-primary1 font-bold hidden sm:inline-block ">Sign out</span>
          </button>
      </>
    );
  }
  return (
    <>
      <button onClick={() => void signIn("cognito")} className="bg-primary1/10 hover:bg-primary1/20 mt-1 rounded-lg ease-in-out duration-200 block p-3 text-primary1">
        <UserIcon className="h-8 w-8 -mt-1 ml-4 text-primary1 inline-block mr-2 mt-0 md:mt-0"/>
        <span className="p-1 pt-1 inline-block text-lg text-primary1 font-bold hidden sm:inline-block">Sign in / Register</span>
      </button>
    </>
  );
};
