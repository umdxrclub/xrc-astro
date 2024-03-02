import dotenv from "dotenv";
import process from "process";
import type { Event, Website } from "../types/PayloadSchema";

dotenv.config();

export function xrcPath(path: string) {
  if (path.startsWith("/")) path = path.substring(1);
  let url = `${process.env.XRC_SUITE_URL ?? "https://umdxr.club"}/${path}`;

  return url;
}


export async function fetchXRCApi(path: string) {
  if (path.startsWith("/")) path = path.substring(1);

  let url = `${process.env.XRC_SUITE_URL ?? "https://umdxr.club"}/api/${path}`;
  let res = await fetch(url, {
    headers: {
      Authorization: `admins API-Key ${process.env.XRC_API_KEY}`,
    },
  });
  let json = await res.json();

  return json;
}

export async function fetchEvents(): Promise<Event[]> {
  let res = await fetchXRCApi("/events");
  let events = res.docs as Event[]
  
  return events;
}

var website: Website | undefined;

export async function fetchWebsite(): Promise<Website> {
  website = (await fetchXRCApi("/globals/website")) as Website;

  return website;
}
