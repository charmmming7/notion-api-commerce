/** @type {import('next').NextConfig} */
const isProduction = process.env.NODE_ENV === 'production';

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.29cm.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'prod-files-secure.s3.us-west-2.amazonaws.com',
      },
    ],
    unoptimized: true, // next 이미지 최적화 옵션 off (정적 파일만을 사용하는 SSG 방식에서는 불가능하므로 off)
  },
  reactStrictMode: true,
};

export default nextConfig;
