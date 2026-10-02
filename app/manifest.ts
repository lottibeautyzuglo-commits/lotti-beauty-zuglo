import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Lotti Beauty Zugló",
    short_name: "Lotti Beauty",
    description:
      "Műszempilla építés Zuglóban, a XIV. kerület szívében.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf3e4",
    theme_color: "#e3d5b8",
    icons: [
      {
        src: "/icon.png",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
