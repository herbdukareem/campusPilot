import { z } from "zod";

const environmentSchema = z.object({
    NEXT_PUBLIC_INSTITUTION_NAME_SHORT: z.string().min(4),
});

const {
    NEXT_PUBLIC_INSTITUTION_NAME_SHORT
} = process.env;

const parsedResult = environmentSchema.safeParse({
    NEXT_PUBLIC_INSTITUTION_NAME_SHORT
});

if(!parsedResult.success){
    throw new Error('Environment don\'t match the schema ')
}


export const env = parsedResult.data;

type EnvironmentVarSchemaType = z.infer<typeof environmentSchema>

declare global{
    namespace NodeJS{
        interface ProcessEnv extends EnvironmentVarSchemaType {}
    }
}