/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from '@sanity/image-url';
import { createClient, SanityClient } from "next-sanity";

export const client = createClient({
  projectId: "f08ey3z8",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token:
      process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const imageUrlFor = (source:SanityClient) => builder.image(source);
