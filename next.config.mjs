/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Static export — `npm run build` writes a fully static site to ./out
  // Any plain webserver (nginx, apache, caddy) can serve it; no Node runtime needed.
  output: "export",
  // Required for static export: skip the Next.js image optimizer at runtime.
  images: {
    unoptimized: true,
  },
  // Emit /contact/index.html instead of /contact.html — friendlier with nginx.
  trailingSlash: true,
};

export default nextConfig;
