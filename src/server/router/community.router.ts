import { z } from "zod";
import { createProtectedRouter } from "./context";
import { communityInputSchema } from "../../schemas/community.schema";
import { TRPCError } from "@trpc/server";

function getSlug(name: string) {
  return name.toLocaleLowerCase().replace(" ", "");
}

export const communityRouter = createProtectedRouter()
  .mutation("create", {
    input: communityInputSchema,
    async resolve({ input, ctx }) {
      const count = await ctx.prisma.community.count({
        where: { slug: getSlug(input.name) },
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
            slug: getSlug(input.name),
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
  })
  .query("findBySlug", {
    input: z.object({
      name: z.string().nullish(),
    }),
    async resolve({ input, ctx }) {
      if (!input.name) return null;
      return await ctx.prisma.community.findFirst({
        where: { slug: getSlug(input.name) },
      });
    },
  });
