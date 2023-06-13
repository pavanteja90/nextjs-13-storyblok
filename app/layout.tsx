import "./globals.scss";
import { Figtree } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import StoryblokBridgeLoader from "@storyblok/react/bridge-loader";
import Feature from "@/components/feature";
import Grid from "@/components/grid";
import Teaser from "@/components/teaser";
import Page from "@/components/page";
import SubText from "@/components/subtext";
import HeaderText from "@/components/headertext";
import SRTitle from "@/components/ratings/title/title";
import SRDescription from "@/components/ratings/description/description";
import Navbar from "@/components/navbar/navbar";
import SRDivider from "@/components/ratings/divider";
import SRImportantNotes from "@/components/ratings/important-notes/important-notes";
import SRTopPerformer from "@/components/ratings/top-performer/top-performer";
import SRComparisonTable from "@/components/ratings/comparison-table/comparison-table";

export const metadata = {
  title: "Canstar Blue | Star ratings PoC",
  description:
    "Proof of concept developed for Canstar using Next.js 13 with app router and Storyblok",
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
  srImportantNotes: SRImportantNotes,
  topPerformer: SRTopPerformer,
  srComparisonTable: SRComparisonTable
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
