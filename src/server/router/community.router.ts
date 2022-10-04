import { z } from "zod";
import { createRouter } from "./context";
import { communityInputSchema } from "../../schemas/community.schema";
import { TRPCError } from "@trpc/server";

function getSlug(name: string) {
  return name.toLocaleLowerCase().replace(" ", "");
}

export const communityRouter = createRouter()
  .mutation("create", {
    input: communityInputSchema,
    async resolve({ input, ctx }) {
      if (!ctx.session) throw new TRPCError({ code: "UNAUTHORIZED" });

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
                      id: ctx.session.user?.id,
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
      const community = await ctx.prisma.community.findFirst({
        include: {
          members: true,
        },
        where: { slug: getSlug(input.name) },
      });

      if (!community)
        throw new TRPCError({
          cause: "Community not found",
          code: "NOT_FOUND",
          message: "Community not found",
        });

      return {
        ...community,
        isMember: community.members.some(
          (member) => ctx.session && member.userId === ctx.session.user?.id
        ),
        isOwner:
          community?.members.find(
            (member) =>
              ctx.session &&
              member.userId === ctx.session?.user?.id &&
              member.isOwner
          ) !== undefined,
      };
    },
  })
  .query("findUsersCommunity", {
    async resolve({ ctx }) {
      return await ctx.prisma.community.findMany({
        where: {
          members: {
            some: {
              userId: ctx.session?.user?.id,
            },
          },
        },
      });
    },
  })
  .mutation("join", {
    input: z.object({
      community: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session) throw new TRPCError({ code: "UNAUTHORIZED" });
      const count = await ctx.prisma.community.count({
        where: { id: input.community },
      });

      if (count <= 0)
        throw new TRPCError({
          message: "Invalid Community",
          code: "BAD_REQUEST",
        });

      const member = await ctx.prisma.communityMember.findFirst({
        where: {
          AND: [
            { userId: ctx.session.user?.id },
            { communityId: input.community },
          ],
        },
      });

      if (member) {
        throw new TRPCError({
          message: "You're already a member of this community",
          code: "BAD_REQUEST",
        });
      }

      return await ctx.prisma.communityMember.create({
        data: {
          userId: ctx.session.user!.id,
          communityId: input.community,
        },
      });
    },
  })
  .mutation("leave", {
    input: z.object({
      community: z.string(),
    }),
    async resolve({ ctx, input }) {
      if (!ctx.session) throw new TRPCError({ code: "UNAUTHORIZED" });
      const count = await ctx.prisma.community.count({
        where: { id: input.community },
      });

      if (count <= 0)
        throw new TRPCError({
          message: "Invalid Community",
          code: "BAD_REQUEST",
        });

      const member = await ctx.prisma.communityMember.findFirst({
        where: {
          AND: [
            { userId: ctx.session.user?.id },
            { communityId: input.community },
          ],
        },
      });

      if (!member) {
        throw new TRPCError({
          message: "You're not a member of this community",
          code: "BAD_REQUEST",
        });
      }

      return await ctx.prisma.communityMember.delete({
        where: {
          id: member.id,
        },
      });
    },
  });
