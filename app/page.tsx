"use client";
import { StoryblokComponent } from "@storyblok/react/rsc";
import Story from "@/models/Story.model";
import StoryblokProvider from "@/Providers/StoryblokProvider";

export default async function Home() {
  const {
    props: { story, key },
  } = await fetchData();

  return (
    <StoryblokProvider>
      <h1>Story: {story.name}</h1>
      <h1>Id: {key}</h1>
      <StoryblokComponent blok={story.content}></StoryblokComponent>
    </StoryblokProvider>
  );
}

export async function fetchData() {
  console.log("Token", process.env.STORYBLOK_API_TOKEN);
  let data = await Promise.resolve(fetchStory());
  return {
    props: {
      ...data,
      story: data?.story ?? false,
      key: data?.id ?? false,
    },
  };
}

async function fetchStory(): Promise<Story> {
  // Home is the default slug for homepage in Storyblok
  const slug = "home";
  // Load the draft version
  const sbParams = { version: "draft" };
  const res = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?version=${sbParams.version}&token=${process.env.STORYBLOK_API_TOKEN}`,
    { cache: "no-store" }
  );
  return res.json();
}
