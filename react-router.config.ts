import type { Config } from "@react-router/dev/config";

export default {
  ssr: false,
  basename: process.env.BASE_PATH || "/",
  async prerender() {
    return ["/", "/learn", "/learn/owasp-top-10"];
  },
} satisfies Config;
