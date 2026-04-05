import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("learn", "routes/learn.tsx"),
  route("learn/:slug", "routes/learn.$slug.tsx"),
] satisfies RouteConfig;
