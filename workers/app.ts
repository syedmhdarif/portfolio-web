import { createRequestHandler } from "@react-router/cloudflare";
// @ts-expect-error - Build output module
import * as serverBuild from "../build/server/index.js";

const requestHandler = createRequestHandler(serverBuild);

interface Env {
  [key: string]: unknown;
}

interface CfProperties {
  [key: string]: unknown;
}

interface WorkerContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

export default {
  async fetch(
    request: Request & { cf?: CfProperties },
    env: Env,
    ctx: WorkerContext
  ) {
    return requestHandler(request, {
      cloudflare: { env, ctx, cf: request.cf },
    });
  },
};
