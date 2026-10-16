# 医疗 AI 与 DRG/DIP 工具目录

静态目录站，页面为简体中文。收录医疗人工智能，以及中国医院 DRG/DIP 支付改革相关的公开资料和工具。

本站不提供诊断或治疗建议。信息可能已经过时。

## 本地开发

需要 Node.js 18.20.8 或更新版本。Cloudflare Pages 上建议把环境变量 `NODE_VERSION` 设为 `20`。

```bash
npm install
npm run dev
```

开发服务器默认在 http://localhost:4321 。

## 构建

```bash
npm run build
```

静态文件输出到 `dist/`。不使用 SSR 适配器。本地查看构建结果：

```bash
npm run preview
```

## 新增一条目录

1. 在 `src/content/entries/` 新建一个 JSON 文件，例如 `item-21.json`。文件名是内容集合里的 id，建议与 `slug` 一致。
2. 字段与现有条目相同。构建时会按 `src/content/config.ts` 校验，缺了必填字段会失败。

| 字段 | 说明 |
| --- | --- |
| `id` | 数字编号，全站唯一 |
| `slug` | 详情页路径，地址为 `/entries/<slug>/` |
| `name` | 名称 |
| `category` | 类别。列表页按这个原文筛选 |
| `summary` | 简介。需要强调的短语写成 `**这样**` |
| `url` | 原始链接。不是 `http://` 或 `https://` 时，页面按原文显示，不做成链接 |
| `region_or_version` | 地区或版本 |
| `reason` | 收录理由 |
| `verified_date` | 最后核实日期，格式 `YYYY-MM-DD`。没有核实日期就省略这个字段，页面不显示该行 |
| `official` | `true` 为官方，`false` 为第三方 |
| `disclaimer` | 这一条自己的声明 |

3. 只写已经核对过的公开信息，不要补写工具效果、价格或适用结论。
4. 标签不用手填。「官方 / 第三方」来自 `official`。「开源」「商业」仅当 `category` 原文里已经有这些词时才会出现。
5. 用 `npm run dev` 看列表和详情，再用 `npm run build` 确认能生成静态页。

## 周报提纲

`src/content/weekly/` 中的 Markdown 会生成 `/weekly/`。当前文件是首期提纲，不是已经写好的报道。

## 部署

托管目标是 Cloudflare Pages。仓库所有者稍后在 Cloudflare 里连接 GitHub。本仓库不包含部署脚本或托管账号。

- 生产分支：`main`
- 构建命令：`npm run build`
- 输出目录：`dist`
- 环境变量（可选）：`NODE_VERSION=20`

`astro.config.mjs` 里的 `site` 目前是占位地址 `https://med-ai-directory.pages.dev`。买到正式域名后改成真实域名，再重新构建，sitemap 和规范链接才会换成新域名。
