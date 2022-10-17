import { z } from "zod";

export const postInputSchema = z.object({
  title: z.string(),
  content: z.string(),
  image: z.string().nullish(),
  communityId: z.string().nullish(),
});

export type PostInputSchema = z.TypeOf<typeof postInputSchema>;
