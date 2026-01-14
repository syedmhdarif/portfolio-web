import { createRequestHandler } from "@react-router/cloudflare";
// @ts-expect-error - virtual module provided by React Router at build time
import * as build from "virtual:react-router/server-build";

const requestHandler = createRequestHandler(build);

export default {
  fetch(request: Request, env: unknown, ctx: ExecutionContext) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
};
