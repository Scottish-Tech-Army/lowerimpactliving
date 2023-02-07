import { type DefaultSession, type User } from "next-auth";
import { CognitoProfile } from "next-auth/providers/cognito";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user?: {
      id: string;
      username: string;
    } & DefaultSession["user"];
  }

}

export interface LilUser extends User {
  username: string;
}
export interface LilCognitoProfile extends CognitoProfile{
  gender: string;
    "cognito:username": string;
} 