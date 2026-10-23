<div align="center">

# 🧊 Slimeissoft's Blog

**A personal blog & portfolio — editorial layout · 4 accent palettes · Vue 3 · no build step**

**个人博客与作品集 —— 杂志式版式 · 4 套配色 · Vue 3 · 零构建**

🌐 **[slimeissoft.github.io](https://slimeissoft.github.io/)**

*Made with 💜 by [Slimeissoft](https://github.com/Slimeissoft)*

</div>

---

## 📖 About / 关于

| | |
|---|---|
| **Live Site** 在线站点 | [https://slimeissoft.github.io/](https://slimeissoft.github.io/) |
| **Stack** 技术栈 | Vue 3 · Vanilla JS · Custom CSS |
| **Visual System** 视觉体系 | 编辑部风格：暖纸底 + 高饱和强调色 + 衬线标题 |
| **Fonts** 字体 | 系统字体，无外链；衬线 / 无衬线 / 等宽三套分工 |
| **License** 协议 | [MIT](LICENSE) |
| **Hosting** 托管 | GitHub Pages |

This repository powers my personal blog and portfolio. 本仓库驱动我的个人博客与作品集。

---

## 🎨 Visual System / 视觉体系

- **暖纸底 + 高饱和强调色** —— 底色带一点米黄，不冷；标题与色块用饱和色，不灰
- **衬线标题、无衬线正文、等宽数据** —— 三套字体各司其职，层级靠字体本身区分，不只靠字号
- **可切换的 4 套配色** —— 朱砂 / 靛蓝 / 松绿 / 琥珀，顶栏调色板按钮切换，选择写入 `localStorage`
- **色块分割** —— 首屏彩色卡、项目深色卡、文章卡顶部色条，页面不再是一片白
- **中文不收紧字距** —— 衬线字体的 `-0.03em` 套在汉字上会让笔画粘连，只在拉丁文上生效

配色切换的原理是把「饱和原色」和「可读强调色」拆成两个变量：`--palette` 负责实心填充（按钮、色块、表头），`--accent` 负责文字与描边，深色模式下自动提亮后者。这样不管切到哪套色、哪档主题，白字压在色块上都不会糊。

---

## ✨ Features / 特性

- 🎨 **4 套配色切换** —— 朱砂 / 靛蓝 / 松绿 / 琥珀，随手换风格
- 🌗 **跟随系统的深浅色** —— 没手动选过就跟系统走；点过切换后写入 `localStorage`
- 🌐 **三语（中 / 英 / 日）** —— 切换即时生效，详情页与项目页文案跟着换
- 🗂 **项目页** —— 展示 [PicFlow](https://github.com/Slimeissoft/PicFlow)：深色大卡、功能网格、技术栈、下载入口
- 🔗 **hash 路由** —— `#/posts`、`#/projects`、`#/post/2` 可直接刷新、可分享、浏览器前后退可用
- 📊 **阅读进度条** —— 文章页顶部跟随滚动
- ⬅️➡️ **上下篇导航** —— 文章底部接上一篇 / 下一篇
- 📱 **响应式** —— 1100 / 900 / 768 / 420 四个断点，手机、平板、笔电、宽屏都验过
- ♿ **可访问性** —— 语义标签、`:focus-visible` 焦点环、键盘可操作的文章卡、`prefers-reduced-motion` 降级
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

内容（文章、时间线、项目、界面文案）都写在 `js/app.js` 的 `data()` 里，按 `en` / `zh` / `ja` 三个键组织。加一篇文章 = 往 `posts` 数组里加一个对象；改项目信息 = 改 `project` 与 `projectFeatures`。

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

> 首屏是自适应的：容器 1280，窗口窄于 900 时会自动切成单列，不会出现被裁切或横向滚动。

---

## 🤝 Contributing / 参与

Issues and PRs are welcome — typos, broken links, new feature ideas. 欢迎提 Issue 和 PR —— 错别字、死链、新功能建议都可以。

---

## 📄 License / 协议

Released under the [MIT License](LICENSE). 基于 [MIT 协议](LICENSE) 发布。

You are free to use, modify, and redistribute — just keep the copyright notice. 你可以自由使用、修改、再分发 —— 保留版权声明即可。

---

[**⭐ Star this repo if you like it / 如果喜欢欢迎 Star**](https://github.com/Slimeissoft/Slimeissoft.github.io)
