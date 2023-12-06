
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "../trpc";

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
    .mutation(async ({ input, ctx }) => await ctx.entities.listing
      .create(input)
      .go()),

  getAll: publicProcedure
    .query(async ({ ctx }) => await ctx.entities.listing.scan.go()),

  getSingle: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input, ctx }) => await ctx.entities.listing
      .get({ ...input, entryType: "listing" })
      .go()),

  deleteSingle: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input, ctx }) => await ctx.entities.listing
      .delete({ ...input, entryType: "listing" })
      .go()),

  update: publicProcedure
    .input(z.object({
      id: z.string(),
      productName: z.string(),
      description: z.string(),
      quantity: z.number(),
      cost: z.number(),
      shippingLocation: z.string(),
      tags: z.array(z.string()),
    }))
    .mutation(async ({ input, ctx }) => {
      const { id, ...updatedFields } = input;
      await ctx.entities.listing
        .patch({ id, entryType: "listing" })
        .set(updatedFields)
        .go();
    }),
});
