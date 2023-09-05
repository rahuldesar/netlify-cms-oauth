import { IncomingMessage, ServerResponse } from "http";
import http from "http";
import { parse } from "url";

import authHandler from "./api/auth";
import callbackHandler from "./api/callback";

const server = http.createServer((req: IncomingMessage, res: ServerResponse) => {
  const { pathname } = parse(req.url);

  if (pathname === "/auth") {
    authHandler(req, res);
  } else if (pathname == "/callback") {
    callbackHandler(req, res);
  } else {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(
      `<html><body><h1>Welcome to Truemark Decap Oauth server. </h1> <div> auth is handled at "/auth" </div> <div>callback in handled at "/callback" </div></body></html>`
    );
  }
});

const PORT = process.env.PORT || 5555;
server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
