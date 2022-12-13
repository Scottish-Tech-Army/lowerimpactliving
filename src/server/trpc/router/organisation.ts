import { z } from "zod";

import { publicProcedure, router } from "../trpc";

export const organisationRouter = router({
  create: publicProcedure
    .input(z.object({ email: z.string(), }))
    .mutation(async ({ input, ctx }) => await ctx.entities.organisation.create(input).go()),

  get: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(async ({ input, ctx }) => await ctx.entities.organisation.get({ ...input, fake: 'fake' }).go()),
});
