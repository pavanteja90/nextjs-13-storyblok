/** 1. Tag it as a client component */
"use client";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import HeaderText from "@/components/HeaderText";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import SubText from "@/components/SubText";
import Teaser from "@/components/Teaser";
import SRComparisonTable from "@/components/ratings/comparison-table/comparison-table";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

/** Import your components */
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  subtext: SubText,
  headerText: HeaderText,
  navbar: Navbar,
  srComparisonTable: SRComparisonTable
};

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }: { children: any }) {
  // TODO: Do some research on storyblok bridge
  // // Initialize the Storyblok JS Bridge
  // const { StoryblokBridge, location } = window;
  // const storyblokInstance = new StoryblokBridge();

  // storyblokInstance.on(["published", "change"], () => {
  //   // reload page if save or publish is clicked
  //   location.reload();
  // });
  return children;
}
