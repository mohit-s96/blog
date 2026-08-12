/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  ...(process.env.NODE_ENV === "production" ? { output: "export" } : {}),
};

module.exports = nextConfig;
