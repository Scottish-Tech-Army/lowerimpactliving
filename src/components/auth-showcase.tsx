import { useSession, signOut, signIn } from "next-auth/react";
import { api } from "../utils/api";
import { UserIcon } from '@heroicons/react/24/solid';
import { MantineProvider, Avatar, Group, Button, Text, Rating } from '@mantine/core';

export const AuthShowcase: React.FC = () => {
  const { data: session } = useSession();
  // const { data: secretMessage } = api.organisation.getSecretMessage.useQuery(
  //   undefined, // no input
  //   { enabled: session?.user !== undefined }
  // );
  if (session) {
    return (
      <>
        <section className="relative inline-block">
          <Avatar className="absolute -left-12 shadow-lg text-primary2 inline-block" src="/images/avatar-1.jpg" alt="it's me" /> <span className="signed-in text-black/70 mr-8">Signed in as {session?.user?.username}</span>
          <button
            className="mr-4 rounded-md bg-primary3 px-4 py-2 duration-200 ease-in-out hover:bg-primary1 hover:text-white"
            onClick={() => void signOut({ callbackUrl: "signOut" })}
          >
            Sign out
          </button>
        </section>
      </>
    );
  }
  return (
    <>
      <button
        className="px-3 py-2 mr-4 bg-primary3 rounded-lg border-2 border-white text-white hover:bg-dark-blue/50 hover:text-white ease-in-out duration-200"
        onClick={() => void signIn("cognito")}
      >
        <UserIcon className="h-6 w-6 text-white inline-block mr-2" />
        Sign in / Register
      </button>
    </>
  );
};
