/** 1. Tag it as a client component */
"use client";
import SRDescription from "@/components/ratings/description/description";
import SRDivider from "@/components/ratings/divider";
import SRTitle from "@/components/ratings/title/Title";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import SRImportantNotes from "@/components/ratings/important-notes/important-notes";

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