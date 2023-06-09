/** 1. Tag it as a client component */
"use client";
import SRDescription from "@/components/star-ratings/description/description";
import SRDivider from "@/components/star-ratings/divider";
import SRImportantNotes from "@/components/star-ratings/important-notes/important-notes";
import SRTitle from "@/components/star-ratings/title/Title";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
const components = {
  srTitle: SRTitle,
  srDescription: SRDescription,
  divider: SRDivider,
  srImportantNotes: SRImportantNotes
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
