import { defineConfig } from 'astro/config';

const [owner, repo] = (process.env.GITHUB_REPOSITORY ?? '/ai-spring-amsterdam').split('/');
const isGitHubActions = process.env.GITHUB_ACTIONS === 'true';
const base = repo === `${owner}.github.io` ? '/' : `/${repo}`;

export default defineConfig({
  site: isGitHubActions
    ? `https://${owner}.github.io`
    : 'http://localhost:4321',
  base: isGitHubActions ? base : '/',
  output: 'static',
});
