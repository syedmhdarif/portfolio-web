import { createPagesFunctionHandler } from "@react-router/cloudflare";
// @ts-expect-error - Server build output
import * as serverBuild from "../build/server/index.js";

export const onRequest = createPagesFunctionHandler({
  build: serverBuild,
});
