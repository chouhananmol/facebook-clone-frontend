/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com', "static.xx.fbcdn.net", "scontent.fbho3-4.fna.fbcdn.net",
      "platform-lookaside.fbsbx.com",
      "anime.myanimelist.net",
      "i0.wp.com",
      "randomuser.me",
      "platform-lookaside.fbsbx.com",
      "res.cloudinary.com"],
  }
}

module.exports = nextConfig
