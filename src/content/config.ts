import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ 
    pattern: ['**/*.md', '**/*.mdx'], 
    base: 'notes'
  }),
  schema: z.object({
    // Minimum frontmatter - marked optional to allow files without frontmatter to load,
    // but filtered out in load() function if missing
    title: z.string().optional(),
    date: z
      .union([
        z.date(),
        z.string().transform((val) => {
          const parsed = new Date(val);
          if (isNaN(parsed.getTime())) {
            throw new Error(`Invalid date format: ${val}`);
          }
          return parsed;
        }),
      ])
      .optional(),
    public: z.boolean().optional(),

    // Optional fields
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),
    excerpt: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),
    energy: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
};

