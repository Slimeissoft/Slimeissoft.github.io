<div align="center">

# 🧊 Slimeissoft's Blog

**A personal blog & portfolio — Geist-style · Vue 3 · no build step**

**个人博客与作品集 —— Geist 设计语言 · Vue 3 · 零构建**

🌐 **[slimeissoft.github.io](https://slimeissoft.github.io/)**

*Made with 💜 by [Slimeissoft](https://github.com/Slimeissoft)*

</div>

---

## 📖 About / 关于

| | |
|---|---|
| **Live Site** 在线站点 | [https://slimeissoft.github.io/](https://slimeissoft.github.io/) |
| **Stack** 技术栈 | Vue 3 · Vanilla JS · Custom CSS |
| **Visual System** 视觉体系 | Geist / Vercel 设计语言（见下） |
| **Fonts** 字体 | 系统字体，无外链 |
| **License** 协议 | [MIT](LICENSE) |
| **Hosting** 托管 | GitHub Pages |

This repository powers my personal blog and portfolio. 本仓库驱动我的个人博客与作品集。

---

## 🎨 Visual System / 视觉体系

界面语法取自 Peach 的设计系统：克制的深浅两档、只用发丝线分层、不堆装饰。

- **两张面，一条线** —— `--page` 退后、`--ground` 浮起，靠一档色差加 1px 发丝线分层，全站不用投影
- **字号只有 8 档** —— 12 / 13 / 14 / 16 / 20 / 24 / 32 / 48，下限 12px
- **字重只有 3 档** —— 400 / 500 / 600，不造中间值
- **圆角是词汇，不是数字** —— `badge 4px` / `control 6px` / `surface 8px` / `float 12px` / `pill 999px`
- **一个强调色** —— 蓝色只给链接、焦点环和状态；主动作与选中态走墨色反相，深浅两档自动对调
- **中文不收紧字距** —— 拉丁字体的 `-0.03em` 套在汉字上会让笔画粘连，`:lang(zh)` 下单独放宽

---

## ✨ Features / 特性

- 🌗 **跟随系统的深浅色** —— 没手动选过就跟系统走；点过切换后写入 `localStorage`，以后按你的选择来
- 🌐 **三语（中 / 英 / 日）** —— 切换即时生效，详情页正文跟着换，`<html lang>` 同步
- 🔗 **hash 路由** —— `#/posts`、`#/post/2`、`#/timeline` 可直接刷新、可分享、浏览器前后退可用
- 📊 **阅读进度** —— 文章页顶部 2px 进度条
- ⬅️➡️ **上下篇导航** —— 文章底部接上一篇 / 下一篇
- 🗂 **时间线按年归组** —— 同一年的事件收在一组，年份只出现一次
- ♿ **可访问性** —— 语义标签、`:focus-visible` 焦点环、键盘可操作的文章行、`prefers-reduced-motion` 全量降级
- 🚀 **零构建** —— 没有 npm、没有打包步骤，打开 `index.html` 就能跑

---

## 📂 Project Structure / 项目结构

```
.
├── index.html          # 入口 HTML / Entry
├── css/
│   └── style.css       # 全部样式（token + 组件）/ All styles
├── js/
│   └── app.js          # Vue 应用与全部内容 / App logic & content
├── LICENSE
└── README.md
```

内容（文章、时间线、界面文案）都写在 `js/app.js` 的 `data()` 里，按 `en` / `zh` / `ja` 三个键组织。加一篇文章 = 往 `posts` 数组里加一个对象，不用改别的地方。

---

## 🚀 Deployment / 部署

The site is automatically served by **GitHub Pages** from the `main` branch. 网站通过 GitHub Pages 自动从 `main` 分支部署。

本地预览（任选其一）：

```bash
# 直接打开
start index.html

# 或起一个本地服务（推荐，避免个别浏览器对 file:// 的限制）
python -m http.server 8000
```

---

## 🤝 Contributing / 参与

Issues and PRs are welcome — typos, broken links, new feature ideas. 欢迎提 Issue 和 PR —— 错别字、死链、新功能建议都可以。

---

## 📄 License / 协议

Released under the [MIT License](LICENSE). 基于 [MIT 协议](LICENSE) 发布。

You are free to use, modify, and redistribute — just keep the copyright notice. 你可以自由使用、修改、再分发 —— 保留版权声明即可。

---

[**⭐ Star this repo if you like it / 如果喜欢欢迎 Star**](https://github.com/Slimeissoft/Slimeissoft.github.io)
