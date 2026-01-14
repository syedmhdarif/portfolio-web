import { createRequestHandler } from "@react-router/cloudflare";
// @ts-expect-error - Server build from React Router
import * as serverBuild from "../build/server/index.js";

const requestHandler = createRequestHandler(serverBuild);

export const onRequest = async (context: { request: Request; env: unknown; waitUntil: (promise: Promise<unknown>) => void }) => {
  return requestHandler(context.request, {
    cloudflare: {
      env: context.env,
      ctx: { waitUntil: context.waitUntil },
    },
  });
};
