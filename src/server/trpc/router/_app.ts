import { router } from "../trpc";
import { authRouter } from "./auth";
import { organisationRouter } from "./organisation";

export const appRouter = router({
  organisation: organisationRouter,
  auth: authRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
