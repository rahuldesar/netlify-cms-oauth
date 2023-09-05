"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __importDefault(require("http"));
var url_1 = require("url");
var auth_1 = __importDefault(require("./api/auth"));
var callback_1 = __importDefault(require("./api/callback"));
var server = http_1.default.createServer(function (req, res) {
    var pathname = (0, url_1.parse)(req.url).pathname;
    if (pathname === "/auth") {
        (0, auth_1.default)(req, res);
    }
    else if (pathname == "/callback") {
        (0, callback_1.default)(req, res);
    }
    else {
        res.setHeader("Content-Type", "text/html");
        res.writeHead(200);
        res.end("<html><body><h1>Welcome to Oauth server. </h1> <div> auth is handled at \"/auth\" </div> <div>callback in handled at \"/callback\" </div></body></html>");
    }
});
var PORT = process.env.PORT || 5555;
server.listen(PORT, function () {
    console.log("Server is running on port ".concat(PORT));
});
