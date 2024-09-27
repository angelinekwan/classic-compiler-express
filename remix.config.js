/** @type {import('@remix-run/dev').AppConfig} */

export default {
  ignoredRouteFiles: ["**/*.css"],

  // Dynamically set server entry point based on environment
  server: process.env.CF_PAGES === "true" ? "./server.ts" : undefined,

  // Set the server build path depending on the target environment
  serverBuildPath: process.env.CF_PAGES === "true" ? "functions/[[path]].js" : undefined,

  // Cloudflare Workers specific settings (only applied for Cloudflare)
  serverConditions: process.env.CF_PAGES === "true" ? ["workerd", "worker", "browser"] : undefined,
  serverDependenciesToBundle: process.env.CF_PAGES === "true" ? "all" : undefined,
  serverMainFields: process.env.CF_PAGES === "true" ? ["browser", "module", "main"] : undefined,
  serverMinify: process.env.CF_PAGES === "true" ? true : undefined,
  serverPlatform: process.env.CF_PAGES === "true" ? "neutral" : undefined,

  // Keep serverModuleFormat the same for both environments
  serverModuleFormat: "esm",

  // Commented-out values can be left as is for now, they will be used in default locations
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
};