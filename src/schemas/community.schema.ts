import { inferQueryOutput } from "./../utils/trpc";
import { z } from "zod";

export const communityInputSchema = z.object({
  name: z.string(),
  image: z.string(),
  description: z.string(),
});

export type Community = inferQueryOutput<"community.findByName">;
export type CommunityInputSchema = z.TypeOf<typeof communityInputSchema>;
