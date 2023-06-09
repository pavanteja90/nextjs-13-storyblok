import "./globals.css";
import { Inter } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import Page from "@/components/Page";
import SubText from "@/components/SubText";
import BlueSrTable from "@/components/BlueSrTable";

export const metadata = {
  title: "Storyblok and Next.js 13",
  description: "A Next.js and Storyblok app using app router ",
};

/** Import your components */
const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  subtext: SubText,
  blueSrTable: BlueSrTable,
};

console.warn(
  "process.env.STORYBLOK_API_TOKEN",
  process.env.STORYBLOK_API_TOKEN
);

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
