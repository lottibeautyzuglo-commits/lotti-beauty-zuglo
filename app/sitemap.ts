import type { MetadataRoute } from "next";

const baseUrl = "https://lottibeautyzuglo.hu";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1.0 },
    { path: "/rolam", priority: 0.8 },
    { path: "/arak", priority: 0.9 },
    { path: "/galeria", priority: 0.8 },
    { path: "/gyik", priority: 0.7 },
    { path: "/kapcsolat", priority: 0.9 },
    { path: "/szabalyzat", priority: 0.3 },
    { path: "/aszf", priority: 0.2 },
  ];

  return pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: page.priority,
  }));
}
