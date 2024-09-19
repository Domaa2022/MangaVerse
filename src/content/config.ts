import { defineCollection, z } from "astro:content";

const mangas = defineCollection({
    schema: z.object({
        title: z.string(),
        author: z.string(),
        img: z.string(),
        genero: z.string(),
        description: z.object({
            spanish: z.string(),
            english: z.string(),
        }),
        read: z.object({
            spanish: z.string().url(),
            english: z.string().url(),
        })
    })
})


export const collections = { mangas };