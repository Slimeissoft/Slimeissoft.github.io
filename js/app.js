/* ============================================================
   Slimeissoft's Blog — 应用逻辑
   · 三语（中 / 英 / 日），详情页切语言即时生效
   · hash 路由：#/home #/posts #/post/1 #/timeline #/about（可刷新、可分享、可后退）
   · 主题跟随系统，手动切换后写入 localStorage 覆盖
   · 阅读进度、上下篇导航、时间线按年归组
   ============================================================ */

const FALLBACK_CDN = 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.4.21/vue.global.prod.js';
const PAGES = ['home', 'posts', 'timeline', 'about'];
const LANGS = ['en', 'zh', 'ja'];

/* ---------- 初始化偏好 ---------- */
function readTheme() {
  try {
    const v = localStorage.getItem('theme');
    return (v === 'light' || v === 'dark') ? v : null;
  } catch (e) { return null; }
}

function detectLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (saved && LANGS.includes(saved)) return saved;
  } catch (e) { /* 隐私模式下忽略 */ }
  const n = (navigator.language || 'en').toLowerCase();
  if (n.startsWith('zh')) return 'zh';
  if (n.startsWith('ja')) return 'ja';
  return 'en';
}

/* ---------- 应用 ---------- */
function createBlogApp() {
  const { createApp } = Vue;

  createApp({
    data() {
      const forced = readTheme();
      const prefersDark = window.matchMedia
        ? window.matchMedia('(prefers-color-scheme: dark)').matches
        : false;

      return {
        currentPage: 'home',
        activePostId: null,
        isDark: forced ? forced === 'dark' : prefersDark,
        isScrolled: false,
        progress: 0,
        currentLang: detectLang(),

        navItems: [
          { id: 'home',     labels: { en: 'Home',     zh: '首页',   ja: 'ホーム' } },
          { id: 'posts',    labels: { en: 'Articles', zh: '文章',   ja: '記事' } },
          { id: 'timeline', labels: { en: 'Timeline', zh: '时间线', ja: 'タイムライン' } },
          { id: 'about',    labels: { en: 'About',    zh: '关于',   ja: '概要' } },
        ],

        langs: [
          { code: 'en', short: 'EN', label: 'English' },
          { code: 'zh', short: '中',  label: '中文' },
          { code: 'ja', short: '日',  label: '日本語' },
        ],

        themeLabels: {
          en: { toLight: 'Switch to light mode', toDark: 'Switch to dark mode' },
          zh: { toLight: '切换到浅色', toDark: '切换到深色' },
          ja: { toLight: 'ライトモードに切り替え', toDark: 'ダークモードに切り替え' },
        },

        heroTexts: {
          en: {
            headline: 'Building for the web,',
            headlineSub: ' and writing it down.',
            desc: `Notes on technology, AI, and the craft of building things for the web.\nStay curious, stay shipping.`,
            readBtn: 'Read Articles',
            aboutBtn: 'About Me',
          },
          zh: {
            headline: '写代码，',
            headlineSub: '也写过程。',
            desc: `记录技术思考、AI 探索与 Web 开发的过程。\n保持好奇，保持动手。`,
            readBtn: '阅读文章',
            aboutBtn: '关于我',
          },
          ja: {
            headline: '作ったものを、',
            headlineSub: '書き残す。',
            desc: `技術の思考、AI の探求、Web 開発の過程を記録する。\n好奇心を絶やさず、手を動かし続ける。`,
            readBtn: '記事を読む',
            aboutBtn: '私について',
          },
        },

        statsTexts: {
          en: { articles: 'Articles', topics: 'Topics', updated: 'Updated' },
          zh: { articles: '文章', topics: '主题', updated: '更新于' },
          ja: { articles: '記事', topics: 'トピック', updated: '更新' },
        },

        sectionTexts: {
          en: {
            latest: 'Latest Articles',
            viewAll: 'View all',
            allArticles: 'All Articles',
            articlesCount: 'articles published',
            sortedByDate: 'Sorted by date',
            back: 'Back to Articles',
            prevPost: 'Previous',
            nextPost: 'Next',
            timeline: 'Timeline',
            timelineSub: 'My journey in tech',
          },
          zh: {
            latest: '最新文章',
            viewAll: '查看全部',
            allArticles: '全部文章',
            articlesCount: '篇文章已发布',
            sortedByDate: '按发布时间排序',
            back: '返回文章列表',
            prevPost: '上一篇',
            nextPost: '下一篇',
            timeline: '时间线',
            timelineSub: '我的技术之旅',
          },
          ja: {
            latest: '最新記事',
            viewAll: 'すべて見る',
            allArticles: 'すべての記事',
            articlesCount: '件の記事',
            sortedByDate: '日付順',
            back: '記事一覧に戻る',
            prevPost: '前の記事',
            nextPost: '次の記事',
            timeline: 'タイムライン',
            timelineSub: '私のテックジャーニー',
          },
        },

        aboutTexts: {
          en: {
            role: 'Developer · Creative Technologist',
            aboutMe: 'About Me',
            aboutMeDesc: 'A developer passionate about modern web technologies. I like turning complex problems into elegant solutions, and simple projects into delightful experiences.',
            skills: 'Skills',
            details: 'Details',
            focus: 'Focus',
            focusValue: 'Web interfaces / AI tooling',
            writing: 'Writing',
            writingValue: 'Chinese / English / Japanese',
            status: 'Status',
            statusValue: 'Open to collaboration',
            contact: 'Contact',
          },
          zh: {
            role: '开发者 · 创意技术人',
            aboutMe: '关于我',
            aboutMeDesc: '一名热爱技术的开发者，专注于现代 Web 技术栈的探索与实践。喜欢把复杂的问题简单化，也喜欢把简单的项目做得有趣。',
            skills: '技能栈',
            details: '资料',
            focus: '专注',
            focusValue: 'Web 界面 / AI 工具',
            writing: '写作',
            writingValue: '中文 / 英文 / 日文',
            status: '状态',
            statusValue: '开放合作',
            contact: '联系方式',
          },
          ja: {
            role: '開発者 · クリエイティブテクノロジスト',
            aboutMe: '私について',
            aboutMeDesc: 'モダンな Web 技術に情熱を持つ開発者です。複雑な問題をエレガントな解決策に、シンプルなプロジェクトを楽しい体験に変えるのが好きです。',
            skills: 'スキル',
            details: '詳細',
            focus: '関心',
            focusValue: 'Web インターフェース / AI ツール',
            writing: '執筆',
            writingValue: '中国語 / 英語 / 日本語',
            status: 'ステータス',
            statusValue: 'コラボレーション募集中',
            contact: '連絡先',
          },
        },

        posts: [
          /* ---------------- 01 ---------------- */
          {
            id: 1,
            tag: 'Reflection',
            tagColor: '#f472b6',
            date: '2026-04-10',
            readTime: '5 min read',
            content: {
              en: {
                title: `How QClaw Changed My Workflow — A Personal Reflection`,
                excerpt: `After a month of daily use, here's what surprised me most about having an AI assistant that lives in my system and actually gets things done.`,
                body: `
<h2>Why I Started Using QClaw</h2>
<p>I had tried many AI tools before — ChatGPT, Claude, Copilot — but they all shared the same problem: they existed in a browser tab, separate from my actual work. I'd copy-paste code, paste results back, context would get lost, and I'd have to re-explain everything every session.</p>
<p>QClaw is different because it <em>lives</em> in my system. It can read my files, run commands, manage my calendar, send emails, and most importantly — it <strong>remembers</strong>. This continuity changed everything.</p>

<h2>The Moment It Clicked</h2>
<p>It happened three weeks in. I was stuck on a CSS layout bug — one of those that makes you question your career choices. I described the problem to QClaw casually, half-expecting another generic answer about flexbox.</p>
<p>Instead, it opened my <code>style.css</code>, found the exact conflicting rule, explained <em>why</em> it was causing issues, and pushed a fix to GitHub in under two minutes. I didn't lift a finger.</p>
<p>That's when I realized: this isn't a chatbot. It's an <strong>agent</strong>.</p>

<h2>What Surprised Me Most</h2>
<h3>1. It actually reads context</h3>
<p>Previous tools would hallucinate solutions because they didn't know my codebase. QClaw reads my actual files, understands my naming conventions, and tailors answers accordingly.</p>

<h3>2. It works while I sleep</h3>
<p>I set up scheduled jobs to send me daily summaries, check my emails, and remind me of upcoming tasks. It's like having a personal assistant who never needs coffee breaks.</p>

<h3>3. It gets better over time</h3>
<p>Every session teaches it more about me. It remembers my coding style, my preferences, my projects. The more I use it, the more valuable it becomes.</p>

<h3>4. It handles the boring stuff</h3>
<p>File organization, documentation, deployment scripts, README files — the tedious work that I always procrastinate on. Now I just ask, and it's done.</p>

<h2>Not Perfect, But Genuinely Useful</h2>
<p>Of course, it's not magic. Sometimes it needs clarification. Sometimes it takes a wrong turn. But the ratio of "gave a useful answer" to "needed correction" has been overwhelmingly in favor of usefulness.</p>
<p>For the first time, I feel like I have a true <strong>thinking partner</strong> — not just a search engine with a friendly face. And that's worth writing about.</p>

<blockquote>The best tool is the one you actually use. QClaw is the first AI tool I've used every single day for a month straight.</blockquote>

<h2>What's Next</h2>
<p>I'm planning to integrate QClaw more deeply with my development workflow — custom skills, better memory management, and maybe even a project that QClaw and I build together from scratch. The journey is just beginning.</p>
                `,
              },
              zh: {
                title: `QClaw 如何改变了我的工作方式——一个真实的使用感悟`,
                excerpt: `每天使用一个月后，最让我意外的是：一个真正活在系统里、能把事情做完的 AI 助手，和浏览器标签页里的聊天框完全是两回事。`,
                body: `
<h2>我为什么会开始用 QClaw</h2>
<p>之前试过很多 AI 工具——ChatGPT、Claude、Copilot——但它们都有一个共同的问题：它们活在浏览器标签页里，和我的实际工作是分离的。我要复制粘贴代码，把结果贴回来，上下文会丢失，每次对话都得重新解释一遍。</p>
<p>QClaw 不一样，因为它<strong>活在</strong>我的系统里。它能读我的文件、跑命令、管理日历、发邮件，最重要的是——它能<strong>记住</strong>。这种连续性改变了一切。</p>

<h2>那一刻，我恍然大悟</h2>
<p>那是第三周的事。我被一个 CSS 布局 bug 卡住了——那种让人怀疑人生的 bug。我随口向 QClaw 描述了问题，半以为它会再给一段关于 flexbox 的通用答案。</p>
<p>结果它打开了我的 <code>style.css</code>，找到了那条冲突的规则，解释了<em>为什么</em>它会导致问题，并在两分钟内把修复推送到了 GitHub。我一根手指都没动。</p>
<p>那一刻我意识到：这不是聊天机器人，这是一个<strong>智能体</strong>。</p>

<h2>最让我惊讶的四件事</h2>
<h3>1. 它真的会读上下文</h3>
<p>之前的工具会因为不了解我的代码库而编造解决方案。QClaw 读的是真实文件，理解我的命名习惯，答案自然贴合项目。</p>

<h3>2. 我睡觉的时候它在工作</h3>
<p>我设了定时任务，每天给我发摘要、查邮件、提醒即将到期的事项。就像有一个不需要喝咖啡的助理。</p>

<h3>3. 它越用越好用</h3>
<p>每一次对话都在让它更了解我。它记住了我的编码风格、我的偏好、我的项目。用得越久，它越值钱。</p>

<h3>4. 它包揽了无聊的部分</h3>
<p>文件整理、文档、部署脚本、README——那些我一直拖着不想做的事。现在我只要开口，它就做完了。</p>

<h2>不完美，但真心有用</h2>
<p>当然，这不是魔法。有时它需要我澄清，有时它会绕远路。但「给出有用答案」和「需要返工」的比例，压倒性地偏向前者。</p>
<p>第一次，我觉得自己有了一个真正的<strong>思考伙伴</strong>——而不是一个长了张友好面孔的搜索引擎。这件事值得写下来。</p>

<blockquote>最好的工具，就是你真正会用的那个。QClaw 是我第一个连续一个月每天都用的 AI 工具。</blockquote>

<h2>下一步</h2>
<p>我打算把 QClaw 更深入地接进开发流程——自定义技能、更好的记忆管理，也许还有一个我和它从零开始一起做的项目。旅程才刚开始。</p>
                `,
              },
              ja: {
                title: `QClaw が私の働き方をどう変えたか —— 使ってみての正直な感想`,
                excerpt: `毎日1か月使ってみて、いちばん驚いたこと。システムの中に住み、実際に仕事を片づけてくれる AI アシスタントは、ブラウザのタブの中のチャット欄とはまるで別物だった。`,
                body: `
<h2>QClaw を使い始めた理由</h2>
<p>これまでも多くの AI ツールを試してきました —— ChatGPT、Claude、Copilot。ただ、どれも同じ問題を抱えていました。ブラウザのタブの中にいて、実際の作業とは切り離されている。コードをコピーして貼り付け、結果をまた貼り戻す。文脈は失われ、毎回すべてを説明し直すことになる。</p>
<p>QClaw は違いました。私のシステムの中に<strong>住んでいる</strong>からです。ファイルを読み、コマンドを実行し、カレンダーを管理し、メールを送る。そして何より<strong>覚えている</strong>。この連続性がすべてを変えました。</p>

<h2>はっきりと分かった瞬間</h2>
<p>使い始めて3週間目のことです。CSS のレイアウト崩れで詰まっていました —— 自分の進路を疑いたくなるようなやつです。私は QClaw に軽い気持ちで問題を説明しました。どうせ flexbox についての当たり障りのない答えが返ってくるだろうと思っていました。</p>
<p>ところが、私の <code>style.css</code> を開き、衝突しているルールを正確に見つけ出し、<em>なぜ</em>それが問題を起こしているのかを説明し、2分足らずで修正を GitHub にプッシュしました。私は指一本動かしていません。</p>
<p>そのとき気づきました。これはチャットボットではない。<strong>エージェント</strong>だと。</p>

<h2>いちばん驚いた4つのこと</h2>
<h3>1. 文脈を本当に読む</h3>
<p>以前のツールは私のコードベースを知らないまま、それらしい答えを捏造していました。QClaw は実際のファイルを読み、私の命名規則を理解し、それに合わせた答えを返します。</p>

<h3>2. 私が寝ている間も働く</h3>
<p>毎日のサマリー送信、メールのチェック、締め切りが近いタスクのリマインドをスケジュールで設定しました。コーヒーブレイクを一切必要としない個人アシスタントのようなものです。</p>

<h3>3. 使うほど良くなる</h3>
<p>セッションを重ねるたびに、私のことをもっと理解してくれます。コーディングの癖、好み、プロジェクトを覚えている。使えば使うほど価値が上がります。</p>

<h3>4. 面倒な仕事を引き受けてくれる</h3>
<p>ファイル整理、ドキュメント、デプロイスクリプト、README —— いつも後回しにしていた退屈な作業です。今は頼めば終わっています。</p>

<h2>完璧ではないけれど、本当に役に立つ</h2>
<p>もちろん魔法ではありません。確認が必要なこともあるし、回り道をすることもあります。それでも「役に立つ答えが返ってきた回数」と「修正が必要だった回数」の比率は、圧倒的に前者に傾いています。</p>
<p>初めて、本当の意味での<strong>思考のパートナー</strong>を持てた気がします。愛想のいい検索エンジンではなく。これは書いておく価値があることです。</p>

<blockquote>一番いいツールは、実際に使うツールだ。QClaw は私が1か月間毎日使い続けた最初の AI ツールです。</blockquote>

<h2>これから</h2>
<p>QClaw を開発ワークフローにもっと深く組み込むつもりです —— カスタムスキル、より良いメモリ管理、そしてゆくゆくは QClaw と一緒にゼロから作るプロジェクト。旅はまだ始まったばかりです。</p>
                `,
              },
            },
          },

          /* ---------------- 02 ---------------- */
          {
            id: 2,
            tag: 'AI Video',
            tagColor: '#a78bfa',
            date: '2026-04-05',
            readTime: '7 min read',
            content: {
              en: {
                title: `Seedance 2.0 & Sora 2: The New Kings of AI Video Generation`,
                excerpt: `Two major releases are reshaping what's possible in AI-generated video. Here's a deep dive into their architectures, capabilities, and what they mean for creators.`,
                body: `
<h2>The Video Generation Wars Heat Up</h2>
<p>2025 is shaping up to be the year AI video goes from impressive demo to genuinely useful tool. Two releases stand out above the rest: <strong>Seedance 2.0</strong> by ByteDance and <strong>Sora 2</strong> by OpenAI. Both represent significant leaps forward — but they take very different approaches.</p>

<h2>Seedance 2.0: The Efficiency King</h2>
<p>ByteDance's Seedance has quietly been one of the best-kept secrets in AI video. Version 2.0 makes it official. The standout features:</p>
<ul>
  <li><strong>Native 4K/60fps output</strong> — Finally, AI video that doesn't look like a flipbook</li>
  <li><strong>Semantic-aware video extension</strong> — Extend clips while maintaining visual consistency</li>
  <li><strong>Precise camera control</strong> — Define camera movements with natural language</li>
  <li><strong>8-second base clips</strong> with up to 30-second extensions</li>
</ul>

<h3>What Makes It Special</h3>
<p>Seedance 2.0's secret sauce is its <strong>flow matching architecture</strong> — a training paradigm that produces more stable, higher-quality video with less compute. Where diffusion models work by adding and removing noise, flow matching learns the direct path from noise to content. The result: faster generation, fewer artifacts.</p>

<h2>Sora 2: OpenAI's Follow-Up</h2>
<p>Sora 2 is OpenAI's refined answer to the original Sora's limitations. The key improvements:</p>
<ul>
  <li><strong>Better physics simulation</strong> — Objects interact more realistically with their environment</li>
  <li><strong>Improved text adherence</strong> — Generated video matches prompts more faithfully</li>
  <li><strong>Storyboard interface</strong> — Plan multi-scene narratives visually</li>
  <li><strong>Video editing capabilities</strong> — Not just generation, but manipulation too</li>
</ul>

<h3>The Physics Problem</h3>
<p>The original Sora famously struggled with basic physics — liquids that behaved wrong, objects that violated gravity. Sora 2 shows marked improvement through a hybrid architecture that combines transformer-based generation with learned physical priors from vast amounts of real-world video data.</p>

<h2>Head-to-Head Comparison</h2>
<table>
  <thead><tr><th>Feature</th><th>Seedance 2.0</th><th>Sora 2</th></tr></thead>
  <tbody>
    <tr><td>Max Resolution</td><td>4K</td><td>1080p (up to 4K via upscale)</td></tr>
    <tr><td>Max Duration</td><td>30s</td><td>20s</td></tr>
    <tr><td>Camera Control</td><td>Natural language</td><td>Storyboard interface</td></tr>
    <tr><td>Editing</td><td>Extension-focused</td><td>Full manipulation</td></tr>
    <tr><td>Physics Accuracy</td><td>Good</td><td>Very good</td></tr>
    <tr><td>API Access</td><td>Limited</td><td>OpenAI API</td></tr>
  </tbody>
</table>

<h2>What This Means for Creators</h2>
<p>Both tools are genuinely useful now — not just technical demos. For indie creators, the ability to generate concept art as video, create B-roll without cameras, and prototype scenes before shooting is revolutionary.</p>
<p>The era of "I'll believe it when I see it" in pre-production is over. Now it's "I'll see it before I build it."</p>

<blockquote>AI video isn't replacing filmmakers — it's giving every person with a story the visual vocabulary to tell it.</blockquote>
                `,
              },
              zh: {
                title: `Seedance 2.0 与 Sora 2：AI 视频生成的新王者之争`,
                excerpt: `两大重磅发布正在重塑 AI 视频生成的边界。深入解析它们的架构、能力，以及对创作者意味着什么。`,
                body: `
<h2>视频生成的战争升温</h2>
<p>2025 年正在成为 AI 视频从「惊艳 demo」走向「真正好用的工具」的年份。其中有两个发布最为突出：字节跳动的 <strong>Seedance 2.0</strong> 和 OpenAI 的 <strong>Sora 2</strong>。两者都是重大飞跃，但路线完全不同。</p>

<h2>Seedance 2.0：效率之王</h2>
<p>字节跳动的 Seedance 一直是 AI 视频领域藏得最深的秘密之一。2.0 版本让它正式登场。突出特性：</p>
<ul>
  <li><strong>原生 4K/60fps 输出</strong> —— 终于，AI 视频不再像翻页动画</li>
  <li><strong>语义感知的视频延长</strong> —— 延展片段时保持视觉一致性</li>
  <li><strong>精准的镜头控制</strong> —— 用自然语言描述镜头运动</li>
  <li><strong>8 秒基础片段</strong>，最长可延展至 30 秒</li>
</ul>

<h3>它的特别之处</h3>
<p>Seedance 2.0 的秘方是<strong>流匹配架构</strong>——一种用更少算力产出更稳定、更高质量视频的训练范式。扩散模型靠加噪和去噪工作，而流匹配学的是从噪声到内容的直接路径。结果就是：生成更快，伪影更少。</p>

<h2>Sora 2：OpenAI 的答卷</h2>
<p>Sora 2 是 OpenAI 对初代 Sora 局限性的回应。关键改进：</p>
<ul>
  <li><strong>更好的物理模拟</strong> —— 物体与环境的交互更真实</li>
  <li><strong>改进的提示词一致性</strong> —— 生成视频更忠实地还原描述</li>
  <li><strong>故事板界面</strong> —— 用可视化方式规划多场景叙事</li>
  <li><strong>视频编辑能力</strong> —— 不只是生成，还能改</li>
</ul>

<h3>物理这道坎</h3>
<p>初代 Sora 最出名的问题就是在基础物理上翻车——液体行为不对、物体无视重力。Sora 2 通过混合架构显著改善了这一点：把基于 Transformer 的生成能力，与从海量真实视频中学到的物理先验结合起来。</p>

<h2>正面比拼</h2>
<table>
  <thead><tr><th>特性</th><th>Seedance 2.0</th><th>Sora 2</th></tr></thead>
  <tbody>
    <tr><td>最大分辨率</td><td>4K</td><td>1080p（可超分至 4K）</td></tr>
    <tr><td>最长时长</td><td>30 秒</td><td>20 秒</td></tr>
    <tr><td>镜头控制</td><td>自然语言</td><td>故事板界面</td></tr>
    <tr><td>编辑能力</td><td>以延展为主</td><td>完整编辑</td></tr>
    <tr><td>物理准确性</td><td>良好</td><td>非常好</td></tr>
    <tr><td>API 访问</td><td>有限</td><td>OpenAI API</td></tr>
  </tbody>
</table>

<h2>对创作者意味着什么</h2>
<p>这两个工具现在都真正能用了——不只是技术演示。对独立创作者来说：把概念图直接生成成视频、不用摄像机就能做出 B-roll、在开拍前先做出场景原型，这些能力是颠覆性的。</p>
<p>预制作阶段「眼见为实」的时代结束了。现在是「先看见，再动手」。</p>

<blockquote>AI 视频不会取代电影人——它只是把讲故事的视觉词汇，交到每一个有故事的人手里。</blockquote>
                `,
              },
              ja: {
                title: `Seedance 2.0 と Sora 2 —— AI 動画生成の新たな王者`,
                excerpt: `二つの大型リリースが AI 動画生成の可能性を塗り替えつつある。そのアーキテクチャ、能力、そしてクリエイターにとっての意味を掘り下げる。`,
                body: `
<h2>動画生成の競争が加熱</h2>
<p>2025年は、AI 動画が「すごいデモ」から「本当に使えるツール」へと移行する年になりそうです。中でも際立っているのが、ByteDance の <strong>Seedance 2.0</strong> と OpenAI の <strong>Sora 2</strong> です。どちらも大きな飛躍ですが、アプローチはまったく異なります。</p>

<h2>Seedance 2.0：効率の王者</h2>
<p>ByteDance の Seedance は、AI 動画界でひそかに最も知られざる存在のひとつでした。バージョン 2.0 でそれが公式になりました。際立った特徴は：</p>
<ul>
  <li><strong>ネイティブ 4K/60fps 出力</strong> —— ようやく、パラパラ漫画のように見えない AI 動画が登場</li>
  <li><strong>意味を理解する動画延長</strong> —— 視覚的な一貫性を保ったままクリップを延長</li>
  <li><strong>精密なカメラ制御</strong> —— 自然言語でカメラワークを定義</li>
  <li><strong>8秒の基本クリップ</strong>、最大30秒まで延長可能</li>
</ul>

<h3>何が特別なのか</h3>
<p>Seedance 2.0 の秘訣は<strong>フローマッチング・アーキテクチャ</strong>にあります —— より少ない計算量で、より安定した高品質な動画を生成する学習パラダイムです。拡散モデルがノイズを加えたり取り除いたりして動くのに対し、フローマッチングはノイズからコンテンツへの直接的な経路を学びます。結果として、生成は速く、アーティファクトは少なくなります。</p>

<h2>Sora 2：OpenAI の答え</h2>
<p>Sora 2 は、初代 Sora の限界に対する OpenAI の洗練された回答です。主な改善点：</p>
<ul>
  <li><strong>物理シミュレーションの向上</strong> —— 物体が環境とより現実的に相互作用する</li>
  <li><strong>テキスト忠実度の改善</strong> —— 生成された動画がプロンプトにより忠実に一致する</li>
  <li><strong>ストーリーボード・インターフェース</strong> —— 複数シーンの物語を視覚的に計画</li>
  <li><strong>動画編集機能</strong> —— 生成だけでなく、加工も可能</li>
</ul>

<h3>物理という壁</h3>
<p>初代 Sora は基本的な物理で苦戦することで有名でした —— おかしな動きをする液体、重力を無視する物体。Sora 2 は、Transformer ベースの生成と、大量の実写動画データから学んだ物理的事前知識を組み合わせたハイブリッド・アーキテクチャによって、著しい改善を示しています。</p>

<h2>直接比較</h2>
<table>
  <thead><tr><th>機能</th><th>Seedance 2.0</th><th>Sora 2</th></tr></thead>
  <tbody>
    <tr><td>最大解像度</td><td>4K</td><td>1080p（アップスケールで 4K 可）</td></tr>
    <tr><td>最大長</td><td>30秒</td><td>20秒</td></tr>
    <tr><td>カメラ制御</td><td>自然言語</td><td>ストーリーボード</td></tr>
    <tr><td>編集</td><td>延長中心</td><td>全面的な加工</td></tr>
    <tr><td>物理精度</td><td>良好</td><td>非常に良好</td></tr>
    <tr><td>API アクセス</td><td>限定</td><td>OpenAI API</td></tr>
  </tbody>
</table>

<h2>クリエイターにとっての意味</h2>
<p>どちらのツールも、今は本当に使えるものになっています —— 単なる技術デモではありません。個人クリエイターにとって、コンセプトアートを動画として生成し、カメラなしで B ロールを作り、撮影前にシーンを試作できることは革命的です。</p>
<p>「見てから信じる」というプリプロダクションの時代は終わりました。今は「作る前に見る」です。</p>

<blockquote>AI 動画は映像作家を置き換えるのではない。物語を持つすべての人に、それを語るための視覚的な語彙を与えるのだ。</blockquote>
                `,
              },
            },
          },

          /* ---------------- 03 ---------------- */
          {
            id: 3,
            tag: 'LLM',
            tagColor: '#34d399',
            date: '2026-03-28',
            readTime: '6 min read',
            content: {
              en: {
                title: `Gemma 4: Google's Open-Source LLM Goes Multi-Modal`,
                excerpt: `Google's latest open-weight model family brings multi-modal capabilities, improved reasoning, and a 27B model that punches far above its weight class.`,
                body: `
<h2>Gemma 4 Arrives with a Bang</h2>
<p>Google DeepMind has released <strong>Gemma 4</strong>, the next generation of their open-weight language model family. Following the success of Gemma 3, version 4 pushes the boundaries of what open-source models can achieve — while staying small enough to run on consumer hardware.</p>

<h2>The Model Family</h2>
<p>Gemma 4 comes in three sizes:</p>
<ul>
  <li><strong>Gemma 4 2B</strong> — Ultra-efficient, runs on laptops and mobile devices</li>
  <li><strong>Gemma 4 7B</strong> — The sweet spot for most developers and researchers</li>
  <li><strong>Gemma 4 27B</strong> — The flagship, competitive with models twice its size</li>
</ul>

<h2>Multi-Modal: The Big News</h2>
<p>The headline feature of Gemma 4 is <strong>built-in multi-modal support</strong>. All three sizes can process images alongside text — not through an external adapter, but natively integrated. This means:</p>
<ul>
  <li>Image understanding baked into the base model</li>
  <li>Better vision-language alignment</li>
  <li>Native image generation via the Gemma 4 Vision extension</li>
</ul>

<h3>Why Native Multimodality Matters</h3>
<p>Most open models add vision as an afterthought — a separate vision encoder bolted onto a language model. Gemma 4's approach means visual and textual representations are learned together from the start. The result: more coherent image-text reasoning and fewer "hallucinated" descriptions.</p>

<h2>Technical Improvements</h2>
<h3>Long Context</h3>
<p>Gemma 4 27B supports up to <strong>128K tokens of context</strong> — enough for entire codebases, long documents, or multi-hour conversation history. This is a massive jump from Gemma 3's 32K limit.</p>

<h3>Improved Reasoning</h3>
<p>Through a combination of reinforced fine-tuning and improved attention mechanisms, Gemma 4 shows significantly better performance on complex reasoning tasks — coding, math, and multi-step logical problems.</p>

<h3>Extended Multilingual Support</h3>
<p>While Gemma 3 was strong in English, Gemma 4 dramatically improves non-English performance, particularly in <strong>Japanese, Korean, Arabic, and Mandarin Chinese</strong> — languages often underserved by open models.</p>

<h2>Running Gemma 4 Locally</h2>
<p>One of Gemma's core philosophies is accessibility. Here's how to run it:</p>
<pre><code># Using Ollama
ollama pull gemma4:27b

# Using LM Studio
# Download from lmstudio.ai and load gemma4-27b.gguf

# Via Hugging Face + transformers
from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained("google/gemma-4-27b-it")</code></pre>

<p>The 7B model runs comfortably on an M-series Mac or a gaming laptop with 8GB VRAM. The 27B model needs more juice — 16GB+ VRAM — but the performance gain is worth it.</p>

<h2>How Does It Compare?</h2>
<p>Gemma 4 27B scores competitive with models like Mistral Large 2 and Llama 3.1 70B on standard benchmarks, while being significantly smaller and faster to inference. It's a remarkable achievement in efficient model design.</p>

<h2>The Open-Source Advantage</h2>
<p>Because Gemma 4 is fully open-weight (Apache 2.0 license), you can:</p>
<ul>
  <li>Fine-tune it on your own data without API costs</li>
  <li>Deploy it on-premise for privacy-sensitive applications</li>
  <li>Build commercial products on top of it</li>
  <li>Inspect, modify, and contribute to the model</li>
</ul>

<blockquote>Open-source AI is only as good as the models you can actually use. Gemma 4 makes powerful AI genuinely accessible.</blockquote>

<h2>My Take</h2>
<p>Gemma 4 feels like Google finally taking open-source seriously. It's not just releasing weights — it's investing in tooling, documentation, and a supporting ecosystem. The multi-modal capability makes it versatile, the 27B model punches above its weight, and the open license removes all friction for experimentation and deployment.</p>
<p>If you've been waiting for the right moment to build with open-source LLMs, this might be it.</p>
                `,
              },
              zh: {
                title: `Gemma 4：Google 开源 LLM 迈入多模态时代`,
                excerpt: `Google 最新的开源权重模型系列带来了多模态能力、更强的推理性能，以及一款在同级中表现超群的 27B 模型。`,
                body: `
<h2>Gemma 4 登场</h2>
<p>Google DeepMind 发布了 <strong>Gemma 4</strong>，这是其开源权重语言模型家族的下一代。在 Gemma 3 的基础上，第 4 代把开源模型的上限又推高了一截——同时仍然小到能在消费级硬件上跑起来。</p>

<h2>模型系列</h2>
<p>Gemma 4 有三个规模：</p>
<ul>
  <li><strong>Gemma 4 2B</strong> — 极致高效，笔记本和移动设备就能跑</li>
  <li><strong>Gemma 4 7B</strong> — 大多数开发者和研究者的甜点区</li>
  <li><strong>Gemma 4 27B</strong> — 旗舰款，能与两倍体量的模型正面竞争</li>
</ul>

<h2>多模态：真正的头条</h2>
<p>Gemma 4 最受关注的是<strong>内置多模态支持</strong>。三个规模都能同时处理图像和文本——不是通过外挂适配器，而是原生集成。这意味着：</p>
<ul>
  <li>图像理解被直接做进基础模型</li>
  <li>更好的视觉与语言对齐</li>
  <li>通过 Gemma 4 Vision 扩展实现原生图像生成</li>
</ul>

<h3>为什么原生多模态很重要</h3>
<p>大多数开源模型把视觉当成后补功能——在语言模型上外挂一个视觉编码器。Gemma 4 的做法让视觉和文本表示从一开始就一起学。结果是：图文推理更连贯，「幻觉」式的描述更少。</p>

<h2>技术上的改进</h2>
<h3>更长的上下文</h3>
<p>Gemma 4 27B 支持最高 <strong>128K tokens 的上下文</strong>——足够装下整个代码库、长篇文档，或者几个小时的对话历史。相比 Gemma 3 的 32K 上限，这是巨大的跨越。</p>

<h3>推理能力提升</h3>
<p>通过强化微调和改进的注意力机制，Gemma 4 在复杂推理任务上的表现明显更好——编程、数学、多步逻辑题。</p>

<h3>多语言支持扩展</h3>
<p>Gemma 3 在英语上很强，而 Gemma 4 大幅改善了非英语表现，尤其是<strong>日语、韩语、阿拉伯语和中文</strong>——这些恰恰是开源模型长期忽视的语言。</p>

<h2>在本地跑起来</h2>
<p>Gemma 的核心哲学之一就是可及性。运行方式如下：</p>
<pre><code># 使用 Ollama
ollama pull gemma4:27b

# 使用 LM Studio
# 从 lmstudio.ai 下载并加载 gemma4-27b.gguf

# 通过 Hugging Face + transformers
from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained("google/gemma-4-27b-it")</code></pre>

<p>7B 模型在 M 系列 Mac 或配备 8GB 显存的游戏本上跑得很顺。27B 需要更多余量——16GB 以上显存——但换来的性能提升是值得的。</p>

<h2>横向对比</h2>
<p>在标准基准上，Gemma 4 27B 与 Mistral Large 2、Llama 3.1 70B 这类模型互有胜负，而体积小得多、推理也快得多。在高效模型设计上，这是一个相当了不起的成果。</p>

<h2>开源带来的优势</h2>
<p>因为 Gemma 4 是完全开源权重的（Apache 2.0 协议），你可以：</p>
<ul>
  <li>用自己的数据微调，不用付 API 费用</li>
  <li>在本地部署，用在隐私敏感的场合</li>
  <li>在它之上构建商业产品</li>
  <li>查看、修改模型，甚至回馈上游</li>
</ul>

<blockquote>开源 AI 的天花板，取决于你真正能用的那些模型。Gemma 4 让强大的 AI 真正变得触手可及。</blockquote>

<h2>我的看法</h2>
<p>Gemma 4 让人感觉 Google 终于开始认真对待开源了。它不只是放出权重，还在工具、文档和生态上投入。多模态能力让它用途更广，27B 的表现超出体量，而开源协议把实验和部署的门槛全部清掉了。</p>
<p>如果你一直在等一个用开源 LLM 做点东西的时机，可能就是现在。</p>
                `,
              },
              ja: {
                title: `Gemma 4：Google のオープンソース LLM がマルチモーダルへ`,
                excerpt: `Google の最新オープンウェイト・モデル群は、マルチモーダル対応、推論能力の向上、そして同サイズをはるかに超える性能を持つ 27B モデルをもたらした。`,
                body: `
<h2>Gemma 4 の衝撃的な登場</h2>
<p>Google DeepMind が、オープンウェイト言語モデル群の次世代となる <strong>Gemma 4</strong> を公開しました。Gemma 3 の成功を踏まえ、バージョン 4 はオープンソースモデルの限界を押し広げつつ、コンシューマー向けハードウェアで動かせるサイズに収めています。</p>

<h2>モデルファミリー</h2>
<p>Gemma 4 は3つのサイズで提供されます：</p>
<ul>
  <li><strong>Gemma 4 2B</strong> —— 超効率的。ノート PC やモバイル端末で動作</li>
  <li><strong>Gemma 4 7B</strong> —— 多くの開発者・研究者にとっての最適解</li>
  <li><strong>Gemma 4 27B</strong> —— フラッグシップ。倍のサイズのモデルと互角に渡り合う</li>
</ul>

<h2>マルチモーダル：これが本命</h2>
<p>Gemma 4 の目玉は<strong>ネイティブなマルチモーダル対応</strong>です。3サイズすべてが画像とテキストを同時に扱えます —— 外部アダプター経由ではなく、最初から統合されています。つまり：</p>
<ul>
  <li>画像理解がベースモデルに組み込まれている</li>
  <li>視覚と言語のアライメントが向上</li>
  <li>Gemma 4 Vision 拡張によるネイティブな画像生成</li>
</ul>

<h3>なぜネイティブなマルチモーダルが重要なのか</h3>
<p>多くのオープンモデルは、視覚機能を後付けで追加します —— 言語モデルに別の視覚エンコーダーを継ぎ足す形です。Gemma 4 のアプローチでは、視覚とテキストの表現が最初から一緒に学習されます。結果として、画像とテキストをまたいだ推論がより一貫し、「幻覚」的な説明が減ります。</p>

<h2>技術的な改善</h2>
<h3>長いコンテキスト</h3>
<p>Gemma 4 27B は最大 <strong>128K トークンのコンテキスト</strong>を扱えます —— コードベース全体、長い文書、数時間分の会話履歴が収まる量です。Gemma 3 の 32K 制限から大幅なジャンプです。</p>

<h3>推論能力の向上</h3>
<p>強化学習によるファインチューニングとアテンション機構の改善を組み合わせることで、Gemma 4 は複雑な推論タスク —— コーディング、数学、多段階の論理問題 —— で著しく良い性能を示します。</p>

<h3>多言語対応の拡充</h3>
<p>Gemma 3 は英語に強かったものの、Gemma 4 は非英語の性能を大幅に改善しています。特に<strong>日本語、韓国語、アラビア語、中国語</strong> —— オープンモデルでは往々にして手薄になりがちな言語です。</p>

<h2>ローカルで動かす</h2>
<p>Gemma の中核にある哲学のひとつが、アクセシビリティです。動かし方は次のとおり：</p>
<pre><code># Ollama を使う
ollama pull gemma4:27b

# LM Studio を使う
# lmstudio.ai からダウンロードして gemma4-27b.gguf を読み込む

# Hugging Face + transformers 経由
from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained("google/gemma-4-27b-it")</code></pre>

<p>7B モデルは M シリーズの Mac や、8GB の VRAM を積んだゲーミングノートで快適に動きます。27B モデルにはより多くの余裕 —— 16GB 以上の VRAM —— が必要ですが、性能の向上にはそれだけの価値があります。</p>

<h2>他モデルとの比較</h2>
<p>Gemma 4 27B は標準的なベンチマークで Mistral Large 2 や Llama 3.1 70B といったモデルと互角のスコアを出しながら、明らかに小さく、推論も高速です。効率的なモデル設計として注目すべき成果です。</p>

<h2>オープンソースであることの利点</h2>
<p>Gemma 4 は完全なオープンウェイト（Apache 2.0 ライセンス）なので、次のことができます：</p>
<ul>
  <li>自前のデータでファインチューニングでき、API コストはかからない</li>
  <li>プライバシーに敏感な用途向けにオンプレミスで配備できる</li>
  <li>その上に商用プロダクトを構築できる</li>
  <li>モデルを調査し、改変し、貢献できる</li>
</ul>

<blockquote>オープンソース AI の価値は、実際に使えるモデルにかかっている。Gemma 4 は強力な AI を本当に手の届くものにした。</blockquote>

<h2>私の感想</h2>
<p>Gemma 4 は、Google がようやくオープンソースに本気で取り組み始めたことを感じさせます。単に重みを公開するだけでなく、ツール、ドキュメント、エコシステムに投資している。マルチモーダル対応が用途を広げ、27B モデルはサイズ以上の性能を発揮し、オープンライセンスが実験と配備の障壁をすべて取り除いています。</p>
<p>オープンソース LLM で何かを作る最適なタイミングを待っていたなら、今かもしれません。</p>
                `,
              },
            },
          },
        ],

        skills: [
          'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
          'Vue.js', 'React', 'Node.js',
          'Git', 'GitHub', 'REST API',
          'Responsive Design', 'Web Performance',
          'Accessibility', 'Svelte',
        ],

        timeline: [
          {
            year: '2025',
            title: {
              en: 'Deep into AI Tools',
              zh: '深入 AI 工具',
              ja: 'AI ツールに没頭',
            },
            desc: {
              en: 'Daily user of QClaw and exploring the latest in AI video generation and open-source LLMs.',
              zh: '每天使用 QClaw，持续跟进 AI 视频生成与开源 LLM 的最新进展。',
              ja: 'QClaw を毎日使い、AI 動画生成とオープンソース LLM の最新動向を追いかけている。',
            },
          },
          {
            year: '2024',
            title: {
              en: 'Started My Blog',
              zh: '开始写博客',
              ja: 'ブログを始めた',
            },
            desc: {
              en: 'Launched this blog to document my learning journey and share technical insights with the community.',
              zh: '上线这个博客，用来记录学习过程，也把技术心得分享给社区。',
              ja: '学んだことを記録し、技術的な気づきをコミュニティと共有するために、このブログを公開した。',
            },
          },
          {
            year: '2024',
            title: {
              en: 'Deep Dive into Vue 3',
              zh: '深入 Vue 3',
              ja: 'Vue 3 を徹底的に学んだ',
            },
            desc: {
              en: 'Spent 6 months mastering Vue 3 Composition API and built several production projects with it.',
              zh: '花六个月吃透 Vue 3 Composition API，并用它做了几个上线的项目。',
              ja: '半年かけて Vue 3 の Composition API を習得し、いくつかの本番プロジェクトを構築した。',
            },
          },
          {
            year: '2023',
            title: {
              en: 'First Open Source Contribution',
              zh: '第一次给开源项目提 PR',
              ja: '初めてのオープンソース貢献',
            },
            desc: {
              en: 'Contributed my first PR to an open source project — a documentation fix that got merged on day one.',
              zh: '给一个开源项目提交了人生第一个 PR——一个文档修正，当天就被合并了。',
              ja: '初めて PR を出した —— ドキュメントの修正で、その日のうちにマージされた。',
            },
          },
          {
            year: '2023',
            title: {
              en: 'Discovered Modern CSS',
              zh: '发现现代 CSS',
              ja: 'モダン CSS に出会った',
            },
            desc: {
              en: 'Learned CSS Grid, Container Queries, and custom properties. Never looked back at old frameworks.',
              zh: '学了 Grid、容器查询和自定义属性，从此再没回头看那些老框架。',
              ja: 'CSS Grid、コンテナクエリ、カスタムプロパティを学んだ。古いフレームワークにはもう戻れない。',
            },
          },
          {
            year: '2022',
            title: {
              en: 'Hello, World!',
              zh: 'Hello, World!',
              ja: 'Hello, World!',
            },
            desc: {
              en: 'Wrote my first line of code and fell in love with building things for the web.',
              zh: '写下第一行代码，然后爱上了为 Web 做东西这件事。',
              ja: '初めてコードを書いて、Web で何かを作ることに夢中になった。',
            },
          },
        ],
      };
    },

    computed: {
      /* 详情页靠 id 反查，切语言时标题与正文自动跟着换 */
      displayPosts() {
        return this.posts.map(post => {
          const loc = post.content[this.currentLang] || post.content.en;
          return {
            ...post,
            title: loc.title,
            excerpt: loc.excerpt,
            body: loc.body,
          };
        });
      },

      latestPosts() {
        return this.displayPosts.slice(0, 3);
      },

      activePost() {
        return this.displayPosts.find(p => p.id === this.activePostId) || null;
      },

      prevPost() {
        const i = this.displayPosts.findIndex(p => p.id === this.activePostId);
        return i > 0 ? this.displayPosts[i - 1] : null;
      },

      nextPost() {
        const i = this.displayPosts.findIndex(p => p.id === this.activePostId);
        return (i >= 0 && i < this.displayPosts.length - 1) ? this.displayPosts[i + 1] : null;
      },

      topics() {
        return [...new Set(this.posts.map(p => p.tag))];
      },

      lastUpdated() {
        const newest = this.posts.map(p => p.date).sort().pop();
        return newest ? newest.slice(0, 7).replace('-', '.') : '—';
      },

      /* 同一年的事件归到一组，年份只出现一次 */
      timelineGroups() {
        const map = new Map();
        for (const ev of this.timeline) {
          if (!map.has(ev.year)) map.set(ev.year, []);
          map.get(ev.year).push({
            title: ev.title[this.currentLang] || ev.title.en,
            desc: ev.desc[this.currentLang] || ev.desc.en,
          });
        }
        return [...map.entries()].map(([year, items]) => ({ year, items }));
      },
    },

    methods: {
      pad(n) {
        return String(n).padStart(2, '0');
      },

      /* ---------- 路由 ---------- */
      parseHash() {
        const raw = location.hash.replace(/^#\/?/, '');
        const parts = raw.split('/').filter(Boolean);

        if (parts[0] === 'post' && parts[1]) {
          const id = Number(parts[1]);
          const exists = this.posts.some(p => p.id === id);
          if (exists) {
            this.currentPage = 'post-detail';
            this.activePostId = id;
            return;
          }
        }

        this.currentPage = PAGES.includes(parts[0]) ? parts[0] : 'home';
        this.activePostId = null;
      },

      pushHash(hash) {
        if (location.hash === hash) return;
        history.pushState({ hash }, '', hash);
      },

      go(page) {
        this.currentPage = page;
        this.activePostId = null;
        this.pushHash('#/' + page);
        window.scrollTo({ top: 0, behavior: 'auto' });
      },

      openPost(post) {
        if (!post) return;
        this.currentPage = 'post-detail';
        this.activePostId = post.id;
        this.pushHash('#/post/' + post.id);
        window.scrollTo({ top: 0, behavior: 'auto' });
      },

      onPopState() {
        this.parseHash();
        window.scrollTo({ top: 0, behavior: 'auto' });
      },

      /* ---------- 语言 ---------- */
      setLang(code) {
        if (!LANGS.includes(code)) return;
        this.currentLang = code;
        document.documentElement.lang = { en: 'en', zh: 'zh-CN', ja: 'ja' }[code];
        try { localStorage.setItem('lang', code); } catch (e) { /* 忽略 */ }
      },

      /* ---------- 主题 ---------- */
      applyTheme(dark) {
        this.isDark = dark;
        document.documentElement.dataset.theme = dark ? 'dark' : 'light';
        try { localStorage.setItem('theme', dark ? 'dark' : 'light'); } catch (e) { /* 忽略 */ }
      },

      toggleTheme() {
        this.applyTheme(!this.isDark);
      },

      /* ---------- 滚动 ---------- */
      handleScroll() {
        this.isScrolled = window.scrollY > 4;
        const el = document.documentElement;
        const max = el.scrollHeight - el.clientHeight;
        this.progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
      },
    },

    mounted() {
      /* 语言：同步 <html lang> */
      document.documentElement.lang = { en: 'en', zh: 'zh-CN', ja: 'ja' }[this.currentLang];

      /* 主题：用户手动选过才写 data-theme，否则交给 CSS 跟随系统 */
      const forced = readTheme();
      if (forced) document.documentElement.dataset.theme = forced;

      /* 路由 */
      this.parseHash();
      window.addEventListener('popstate', this.onPopState);

      /* 滚动 */
      window.addEventListener('scroll', this.handleScroll, { passive: true });
      this.handleScroll();

      /* 系统主题变化（用户没手动设过时跟随） */
      if (window.matchMedia) {
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        this._mq = mq;
        this._mqHandler = e => {
          if (!readTheme()) this.isDark = e.matches;
        };
        if (mq.addEventListener) mq.addEventListener('change', this._mqHandler);
        else if (mq.addListener) mq.addListener(this._mqHandler);
      }
    },

    beforeUnmount() {
      window.removeEventListener('popstate', this.onPopState);
      window.removeEventListener('scroll', this.handleScroll);
      if (this._mq && this._mqHandler) {
        if (this._mq.removeEventListener) this._mq.removeEventListener('change', this._mqHandler);
        else if (this._mq.removeListener) this._mq.removeListener(this._mqHandler);
      }
    },
  }).mount('#app');
}

/* ---------- 启动；主 CDN 失败时换备用 ---------- */
if (typeof Vue !== 'undefined') {
  createBlogApp();
} else {
  const s = document.createElement('script');
  s.src = FALLBACK_CDN;
  s.onload = createBlogApp;
  s.onerror = function () {
    const app = document.getElementById('app');
    if (!app) return;
    app.removeAttribute('v-cloak');
    app.innerHTML = '<p style="padding:96px 24px;text-align:center;font-family:system-ui,sans-serif;color:#666;font-size:15px;line-height:1.7">' +
      'Vue 运行时加载失败。<br>请检查网络连接后刷新，或稍后重试。</p>';
  };
  document.head.appendChild(s);
}
