import type { NextConfig } from "next";

const isProjectSite = true; // 你这是仓库站点
const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // 静态导出不走在线优化
  basePath: isProjectSite ? '/Personal_CV' : undefined, // 关键：项目站点需要前缀
  trailingSlash: true
};

export default nextConfig;

