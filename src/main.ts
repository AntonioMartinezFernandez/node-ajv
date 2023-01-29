import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import { startHttpServer } from "./infra/http/start-http-server";

function boostrap() {
  console.clear();
  startHttpServer();
}

boostrap();
