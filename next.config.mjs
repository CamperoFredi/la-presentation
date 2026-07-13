// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   typescript: {
//     ignoreBuildErrors: true,
//   },
//   images: {
//     unoptimized: true,
//   },
// }

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/la-presentation',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;