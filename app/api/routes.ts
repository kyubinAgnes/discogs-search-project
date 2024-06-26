import { API_BASE, PER_RELEASE_PAGE } from "@/lib/constants";

export async function searchArtists(
  query: string,
  page: number,
  per_page: number
) {
  const response = await fetch(
    `${API_BASE}/database/search?q=${query}&type=artist&page=${page}&per_page=${per_page}&token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}`
  );
  console.log("====>", response);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const json = await response.json();

  return json;
}

export async function getArtist(id: number) {
  const response = await fetch(
    `${API_BASE}/artists/${id}?token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return json;
}

export async function getReleases(id: number, page: number) {
  const response = await fetch(
    `${API_BASE}/artists/${id}/releases?per_page=${PER_RELEASE_PAGE}&page=${page}&token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return json;
}

export async function getReleaseDeital(type: string, id: number) {
  const response =
    await fetch(`${API_BASE}/${type}/${id}?token=${process.env.NEXT_PUBLIC_DISCOG_TOKEN}   
    `);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const json = await response.json();
  return json;
}
