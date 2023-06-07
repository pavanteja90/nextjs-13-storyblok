/** 1. Tag it as a client component */
"use client";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Page from "@/components/Page";
import SubText from "@/components/SubText";
import Teaser from "@/components/Teaser";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  subtext: SubText,
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: { children: any }) {
  return children;
}
