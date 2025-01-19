/* eslint-disable @typescript-eslint/no-explicit-any */
import imageUrlBuilder from '@sanity/image-url';
import { createClient, SanityClient } from "next-sanity";

export const client = createClient({
  projectId: "f08ey3z8",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token:
    "sko8ccacWBFX4533o4E6erVuLA1pX9zqAOl0LLyGbWCrEcam5PRgDd8tQL9lGuODDiHJxWDmRvMmZSq1RYFyP9iZWWEUZnnADBdA6MGGMp71PeFaMej3tGejSwRWSnxubxWfztBxwROiu9JYJN1d2k4L98BwsIeKTqexpqrxxG2ViGMG57J5",
});

const builder = imageUrlBuilder(client);

export const imageUrlFor = (source:SanityClient) => builder.image(source);
