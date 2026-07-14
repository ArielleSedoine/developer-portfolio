import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://developer-portfolio-6p1m.vercel.app",
      lastModified: new Date(),
    },

    {
      url: "https://developer-portfolio-6p1m.vercel.app/projects",
      lastModified: new Date(),
    },
  ];
}