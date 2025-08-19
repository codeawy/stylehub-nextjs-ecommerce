"use server";

import { Category } from "@/interface/category";

export async function getCategories(): Promise<Category[]> {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const url = `${baseUrl}/api/v1/categories`;

  const response = await fetch(url, { cache: "no-store" });

  if (!response.ok) {
    throw new Error(`Failed to fetch categories: ${response.status}`);
  }

  const data: Category[] = await response.json();

  return Array.isArray(data) ? data : [];
}
