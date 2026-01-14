import { createRequestHandler } from "@react-router/cloudflare";

const requestHandler = createRequestHandler(
  // @ts-expect-error - Build output module
  () => import("../build/server/index.js")
);

interface Env {
  [key: string]: unknown;
}

interface CfProperties {
  colo?: string;
  country?: string;
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
      cloudflare: { env, ctx, cf: request.cf ?? {} },
    });
  },
};
