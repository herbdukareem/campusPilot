import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
 
export const env = createEnv({
  client: {
    NEXT_PUBLIC_INSTITUTION_NAME_SHORT: z.string().min(4),
  },
  experimental__runtimeEnv: process.env
});