
import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const organisationRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

  getSecretMessage: protectedProcedure.query(() => {
    return "you can now see this secret message!";
  }),
  create: publicProcedure
    .input(z.object({ email: z.string(), }))
    .mutation(async ({ input, ctx }) => await ctx.entities.organisation.create(input).go()),

  get: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(async ({ input, ctx }) => await ctx.entities.organisation.get({ ...input, fake: 'fake' }).go()),
});