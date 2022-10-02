import { createProtectedRouter } from "./context";
import { communityInputSchema } from "../../schemas/community.schema";
import { z } from "zod";
import { TRPCError } from "@trpc/server";

export const communityRouter = createProtectedRouter().mutation("create", {
  input: communityInputSchema,
  async resolve({ input, ctx }) {
    const count = await ctx.prisma.community.count({
      where: { name: input.name },
    });
    if (count > 0)
      throw new TRPCError({
        message: "This community name was already taken",
        code: "BAD_REQUEST",
      });
    else
      return await ctx.prisma.community.create({
        data: {
          name: input.name,
          description: input.description,
          members: {
            connectOrCreate: {
              where: { id: "0" },
              create: {
                isOwner: true,
                user: {
                  connect: {
                    id: ctx.session.user.id,
                  },
                },
              },
            },
          },
        },
      });
  },
});
