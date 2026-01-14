import { createRequestHandler } from "@react-router/cloudflare";
// @ts-expect-error - Build output module
import * as serverBuild from "../build/server/index.js";

const requestHandler = createRequestHandler(serverBuild);

interface Env {
  [key: string]: unknown;
}

export default {
  async fetch(request: Request, env: Env, ctx: { waitUntil: (promise: Promise<unknown>) => void }) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
};
