import { listingRouter } from "./routers/listing";
import { organisationRouter } from "./routers/organisation";
import { s3Router } from "./routers/s3";
import { createTRPCRouter } from "./trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  organisation: organisationRouter,
  listing: listingRouter,
  s3: s3Router
});

// export type definition of API
export type AppRouter = typeof appRouter;
