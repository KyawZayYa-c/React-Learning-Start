import { z } from "zod";

export const movieSchema = z.object({
    title: z.string().min(1, { message: "Username is required" }),
    year: z.coerce.number().min(1,{ message: "Year is required" }),
    director: z.string().min(1, { message: "Director is required" }),
});
