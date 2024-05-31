/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatar.vercel.sh", "i.postimg.cc"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "mhbhwbnwlflpmjhwmlty.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/postImage/**",
      },
    ],
  },
};

export default nextConfig;
