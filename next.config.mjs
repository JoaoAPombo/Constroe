/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: '/sobre-nos', destination: '/sobre', permanent: true },
      { source: '/informacoes', destination: '/info', permanent: true },
      { source: '/outros', destination: '/other', permanent: true },
    ];
  },
};

export default nextConfig;
