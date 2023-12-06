import NextAuth, { type NextAuthOptions } from "next-auth";
import CognitoProvider from "next-auth/providers/cognito";

import { env } from "../../../env/server.mjs";
import { LilCognitoProfile, LilUser } from "../../../types/next-auth.js";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  // callbacks: {
  //   jwt({ token, user }) {
  //     if (user) {
  //       token.user = user;
  //     }
  //     return token;
  //   },
  //   session({ session, token }) {
  //     if (session.user) {
  //       session.user.id = token.sub!;
  //       if (token.user) {
  //         session.user.username = (token.user as LilUser).username;
  //       }
  //     }
  //     return session;
  //   },
  //   redirect({ url, baseUrl }) {
  //     if (url.startsWith(baseUrl)) return url;
  //     if (url === "signOut") {
  //       const logoutUrl = env.COGNITO_LOGOUT_URL;
  //       const redirectUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
  //       const signoutWithRedirectUrl = `${logoutUrl}?client_id=${env.COGNITO_CLIENT_ID}&logout_uri=${redirectUrl}`;
  //       return signoutWithRedirectUrl;
  //     }
  //     // Allows relative callback URLs
  //     if (url.startsWith("/")) return new URL(url, baseUrl).toString();
  //     return baseUrl;
  //   },
  // },
  // Configure one or more authentication providers
  providers: [
    CognitoProvider<LilCognitoProfile>({
      clientId: env.COGNITO_CLIENT_ID,
      clientSecret: env.COGNITO_CLIENT_SECRET,
      issuer: "https://cognito-idp.eu-west-1.amazonaws.com/eu-west-1_HfqGiICs1",
      profile(profile) {
        return {
          id: profile.sub,
          username: profile["cognito:username"],
          name: profile.name,
          email: profile.email,
          image: profile.picture,
          gender: profile.gender,
        };
      },
    }),
    /**
     * ...add more providers here
     *
     * Most other providers require a bit more work than the Discord provider.
     * For example, the GitHub provider requires you to add the
     * `refresh_token_expires_in` field to the Account model. Refer to the
     * NextAuth.js docs for the provider you want to use. Example:
     * @see https://next-auth.js.org/providers/github
     */
  ],
  // debug: true,
  pages: {
    // error: '/auth/error',
    signIn: '/auth/signin',
    newUser: '/auth/newUser',
  },
};

export default NextAuth(authOptions);
