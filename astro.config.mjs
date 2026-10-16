import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// 占位地址。买到正式域名后改成真实域名，sitemap 和规范链接才会指向新域名。
export default defineConfig({
  site: 'https://med-ai-directory.pages.dev',
  // 纯静态输出，部署到 Cloudflare Pages 时不需要 SSR 适配器。
  output: 'static',
  integrations: [sitemap()],
});
