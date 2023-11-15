import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const listingRouter = createTRPCRouter({
    // create:  publicProcedure
    // .input(z.object({ productName: z.string() }))
    // .mutation(async ({ input, ctx }) => await ctx.entities.listing.create(input).go()),

    get: publicProcedure.query(
      ({ ctx }) => 
      {
        return ctx.entities.listing.scan.go();
      } 
    ),
    hello: publicProcedure
    .query(() => {
      return "you can now see this secret message!";
    }),

});