import { listingRouter } from "./routers/listings";
import { organizationRouter } from "./routers/organisation";
import { createTRPCRouter } from "./trpc";
/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  organization: organizationRouter,
  listing: listingRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;


