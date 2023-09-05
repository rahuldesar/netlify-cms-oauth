## Why do I need this?

[GitHub](https://github.com) and [Gitlab](https://gitlab.com) requires a server for authentication and Netlify provides this server only for sites deployed to it. Fortunately, such server is rather small and can work with Vercel's serverless functions.

## Usage

In yours projects modify `config.yml` file:

```yaml
backend:
  name: [github | gitlab]
  repo: user/repo-url # Path to your Github/Gitlab repository
  branch: main # Branch to update
  base_url: https://truemark-custom-oauth.onrender.com # URl this server is deployed in
```

## Deploy

- Create Github OAuth App:
  - Go to [developer settings](https://github.com/settings/developers)
  - Set `Authorization callback URL` to your deployed oauth website's callback URL:
    `https://netlify-cms.adrianub.vercel.app/callback`
- Create Gitlab OAuth app:
  - Go to [User settings > Applications](https://gitlab.com/-/profile/applications)
  - Set `Redirect URI` to your deployed oauth website's callback URL:
    `https://netlify-cms.adrianub.vercel.app/callback`
- Set environment variables on `Vercel`

  ```shell
  OAUTH_GITHUB_CLIENT_ID=<you-client-id>
  OAUTH_GITHUB_CLIENT_SECRET=<you-client-secret>

  OAUTH_GITLAB_CLIENT_ID=<you-client-id>
  OAUTH_GITLAB_CLIENT_SECRET=<you-client-secret>
  ```

---

### NOTE -

---

While deploying in `RENDER`, Node version should also be added as environment variable or default v14 is used.

To add node version, we can add env variable in settings `NODE_VERSION`: `18.16.0`. NOTE - not `v18.16.0`
