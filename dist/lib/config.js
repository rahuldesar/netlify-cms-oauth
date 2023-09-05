"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.providers = void 0;
exports.providers = ["github", "gitlab"];
var config = function (provider) {
    if (!exports.providers.includes(provider)) {
        throw new Error("Unsupported provider ".concat(provider));
    }
    return {
        client: client[provider],
        auth: auth[provider],
    };
};
exports.config = config;
var auth = {
    github: {
        tokenHost: "https://github.com",
        tokenPath: "/login/oauth/access_token",
        authorizePath: "/login/oauth/authorize",
    },
    gitlab: {
        tokenHost: "https://gitlab.com",
        tokenPath: "/oauth/token",
        authorizePath: "/oauth/authorize",
    },
};
var client = {
    github: {
        id: process.env.OAUTH_GITHUB_CLIENT_ID,
        secret: process.env.OAUTH_GITHUB_CLIENT_SECRET,
    },
    gitlab: {
        id: process.env.OAUTH_GITLAB_CLIENT_ID,
        secret: process.env.OAUTH_GITLAB_CLIENT_SECRET,
    },
};
