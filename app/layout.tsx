import "./globals.css";
import { Figtree } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import Feature from "@/components/Feature";
import Grid from "@/components/Grid";
import Teaser from "@/components/Teaser";
import Page from "@/components/Page";
import SubText from "@/components/SubText";
import HeaderText from "@/components/HeaderText";
import SRTitle from "@/components/star-ratings/title/Title";
import SRDescription from "@/components/star-ratings/description/description";
import Navbar from "@/components/Navbar";
import SRDivider from "@/components/star-ratings/divider";

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
  headerText: HeaderText,
  srTitle: SRTitle,
  srDescription: SRDescription,
  navbar: Navbar,
  divider: SRDivider,
};

storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  components,
});

const figtree = Figtree({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={figtree.className}>
        <section className="top-border"></section>
        <section className="children">{children}</section>
      </body>
      <StoryblokBridgeLoader options={{}} />
    </html>
  );
}
