
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const listingRouter = createTRPCRouter({
  create: publicProcedure
    .input(z.object({
        productName: z.string(),
        description: z.string(),
        quantity: z.number(),
        cost: z.number(),     
        shippingLocation: z.string(),
        tags: z.array(z.string()), 
    }))
    .mutation(async ({ input, ctx }) => await ctx.entities.listing.create(
      input
      ).go()),

  // getByProductName: publicProcedure
  //   .input(z.object({ productName: z.string() }))
  //   .query(async ({ input, ctx }) => await ctx.entities.listing.get({ productName: input. }).go()),
});