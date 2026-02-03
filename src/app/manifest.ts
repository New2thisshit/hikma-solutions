import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Hikma Solutions",
    short_name: "Hikma",
    start_url: "/",
    display: "standalone",
    background_color: "#f6f9fb",
    theme_color: "#1ea6a3",
    icons: [
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
