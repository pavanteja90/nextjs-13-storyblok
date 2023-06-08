/** 1. Tag it as a client component */
"use client";
import SRDescription from "@/components/star-ratings/description/description";
import SRTitle from "@/components/star-ratings/title/Title";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
const components = {
  srTitle: SRTitle,
  srDescription: SRDescription,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function SRSbProvider({ children }: { children: any }) {
  return children;
}
