/* ============================================
   Slimeissoft's Blog — Vue 3 App Logic
   ============================================ */

const { createApp } = Vue;

createApp({
  data() {
    return {
      currentPage: 'home',
      isDark: false,
      isScrolled: false,
      activePost: null,

      // Language: 'en' | 'zh' | 'ja'
      currentLang: 'en',

      navItems: [
        { id: 'home',     labels: { en: 'Home',     zh: '首页',  ja: 'ホーム' } },
        { id: 'posts',    labels: { en: 'Articles', zh: '文章',  ja: '記事'   } },
        { id: 'timeline', labels: { en: 'Timeline',zh: '时间线',ja: 'タイムライン'} },
        { id: 'about',    labels: { en: 'About',    zh: '关于',  ja: '概要'   } },
      ],

      // Language switcher config
      langs: [
        { code: 'en', label: 'English', flag: 'EN' },
        { code: 'zh', label: '中文',    flag: '中' },
        { code: 'ja', label: '日本語',   flag: '日' },
      ],

      // Hero section texts
      heroTexts: {
        en: {
          welcome: 'Welcome to',
          role: 'Developer · Creative Technologist · Explorer',
          desc: 'Writing about tech, AI, and the art of building things for the web.\nStay curious, stay coding.',
          readBtn: 'Read Articles',
          aboutBtn: 'About Me',
        },
        zh: {
          welcome: '欢迎来到',
          role: '开发者 · 创意技术人 · 探索者',
          desc: '记录技术思考、AI 探索与 Web 开发的点滴。\n保持好奇，保持代码。',
          readBtn: '阅读文章',
          aboutBtn: '关于我',
        },
        ja: {
          welcome: 'ようこそ',
          role: '開発者 · クリエイティブテクノロジスト · 探求者',
          desc: 'テック、AI、Web開発の藝術について書く。\n好奇心を保ち、コードを書き続ける。',
          readBtn: '記事を読む',
          aboutBtn: '私について',
        },
      },

      // Shared section texts
      sectionTexts: {
        en: {
          latest: 'Latest Articles',
          viewAll: 'View All',
          allArticles: 'All Articles',
          articlesCount: 'articles published',
          back: 'Back to Articles',
          timeline: 'Timeline',
          timelineSub: 'My journey in tech',
        },
        zh: {
          latest: '最新文章',
          viewAll: '查看全部',
          allArticles: '全部文章',
          articlesCount: '篇文章已发布',
          back: '返回文章列表',
          timeline: '时间线',
          timelineSub: '我的技术之旅',
        },
        ja: {
          latest: '最新記事',
          viewAll: 'すべて見る',
          allArticles: 'すべての記事',
          articlesCount: '件の記事发表済み',
          back: '記事一覧に戻る',
          timeline: 'タイムライン',
          timelineSub: '私のテックジャーニー',
        },
      },

      // About section texts
      aboutTexts: {
        en: {
          aboutMe: 'About Me',
          aboutMeDesc: 'A developer passionate about modern web technologies. Love turning complex problems into elegant solutions, and simple projects into delightful experiences.',
          skills: 'Skills',
          contact: 'Contact',
        },
        zh: {
          aboutMe: '关于我',
          aboutMeDesc: '一名热爱技术的开发者，专注于现代 Web 技术栈的探索与实践。喜欢把复杂的问题简单化，也喜欢把简单的项目做得有趣。',
          skills: '技能栈',
          contact: '联系方式',
        },
        ja: {
          aboutMe: '私について',
          aboutMeDesc: 'モダンなWeb技術に情熱を持つ開発者。複雑な問題をエレガントなソリューションに、シンプルなプロジェクトを楽しい体験にするのが好き。',
          skills: 'スキル',
          contact: '連絡先',
        },
      },

      posts: [
        {
          id: 1,
          tag: 'Reflection',
          tagColor: '#f472b6',
          date: '2025-04-10',
          readTime: '5 min read',
          content: {
            en: {
              title: 'How QClaw Changed My Workflow — A Personal Reflection',
              excerpt: 'After a month of daily use, here\'s what surprised me most about having an AI assistant that lives in my system and actually gets things done.',
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
<p>I set up cron jobs to send me daily summaries, check my emails, and remind me of upcoming tasks. It's like having a personal assistant who never needs coffee breaks.</p>

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
              `
            },
            zh: {
              title: 'QClaw 如何改变了我的工作方式——一个真实的使用感悟',
              excerpt: '每天使用一个月后，这是我感到最惊讶的事情——一个真正活在系统里、能把事情做完的 AI 助手。',
              body: `
<h2>我为什么会开始用 QClaw</h2>
<p>之前试过很多 AI 工具——ChatGPT、Claude、Copilot——但它们都有一个共同的问题：它们存在于浏览器标签页里，和我的实际工作是分离的。我要复制粘贴代码，把结果粘贴回来，上下文会丢失，每次对话都要重新解释一遍。</p>
<p>QClaw 不一样，因为它<strong>活在</strong>我的系统里。它能读取我的文件、运行命令、管理日历、发送邮件，最重要的是——它能<strong>记住</strong>。这种连续性改变了一切。</p>

<h2>那一刻，我恍然大悟</h2>
<p>那是第三周的事情。我被一个 CSS 布局问题卡住了——那种让人怀疑人生的 bug。我随口向 QClaw 描述了问题，半以为它会给出关于 flexbox 的一般性答案。</p>
<p>结果它打开了我的 <code>style.css</code>，找到了那个冲突的规则，解释了<em>为什么</em>它会导致问题，在两分钟内把修复方案推送到了 GitHub。我什么都没做。</p>
<p>那一刻我意识到：这不是聊天机器人。这是一个<strong>智能代理</strong>。</p>

<h2>最让我惊讶的事情</h2>
<h3>1. 它真的会读上下文</h3>
<p>之前的工具会因为不了解我的代码库而给出幻觉般的解决方案。QClaw 读取我真实的文件，理解我的命名规范，给出量身定制的答案。</p>

<h3>2. 我睡觉的时候它在工作</h3>
<p>我设置了定时任务，每天给我发摘要、查邮件、提醒我即将到来的事项。这就像有一个从不喝咖啡的私人助理。</p>

<h3>3. 它越用越好用</h3>
<p>每一次对话都在让它更了解我。它记住了我的编码风格、我的偏好、我的项目。用得越久，它就越有价值。</p>

<h3>4. 它包揽了无聊的事情</h3>
<p>文件整理、文档、部署脚本、README 文件——那些我一直拖延的繁琐工作。现在我只需要问，它就搞定了。</p>

<h2>不完美，但是真心有用</h2>
<p>当然，这不是魔法。有时候它需要澄清，有时候会走弯路。但"给出有用答案"和"需要修正"的比例，的有用性压倒性地获胜。</p>
<p>第一次，我觉得自己有了一个真正的<strong>思维伙伴</strong>——不仅仅是一个有友好面孔的搜索引擎。这值得写一篇文章。</p>

<blockquote>最好的工具就是你真正会用的那个。QClaw 是我第一个连续一个月每天都用的 AI 工具。</blockquote>

<h2>下一步计划</h2>
<p>我打算把 QClaw 更深入地集成到我的开发工作流中——自定义技能、更好的记忆管理，也许还有一个我和 QClaw 从零开始一起做的项目。旅程才刚刚开始。</p>
              `
            },
            ja: {
              title: 'QClawが私のワークフローをどう変えたか——率直な感想',
              excerpt: '毎日1ヶ月使い続けた中で、最も驚いたこと—— системの中で暮らし、本当に物事を終わらせるAIアシスタントを持っているということ。',
              body: `
<h2>私がQClawを使い始めた理由</h2>
<p>前はたくさんのAIツールを試していました——ChatGPT、Claude、Copilot。でも，它们都有一个共同の問題：ブラウザのタブの中に存在し、実際の作业と切り離されていること。コードを送って、結果を貼り付けて、文脈が失われて、セッションごとに全てを重新説明する必要がある。</p>
<p>QClaw不同的是，因为它<strong>活在</strong>我的系统里。它能读取我的文件、运行命令、管理日历、发送邮件，最重要的是——它能<strong>记住</strong>。这种连续性改变了一切。</p>

<h2>那一刻，我恍然大悟</h2>
<p>那是第三周的事情。我被一个CSSレイアウトのバグに詰まっていました——キャリアを疑いたくなる那种バグ。我随口向QClaw描述了问题，半以为它会给出关于flexbox的一般性答案。</p>
<p>结果它打开了我的<code>style.css</code>，找到了那个冲突的规则，解释了<em>为什么</em>它会导致问题，在两分钟内把修复方案推送到了GitHub。我什么都没做。</p>
<p>那一刻我意识到：这不是聊天机器人。这是一个<strong>智能代理</strong>。</p>

<h2>最も驚いたこと</h2>
<h3>1. 文脈我真的会读</h3>
<p>之前的工具会因为不了解我的代码库而给出幻觉般的解决方案。QClaw读取我真实的文件，理解我的命名规范，给出量身定制的答案。</p>

<h3>2. 寝ている間も它在工作</h3>
<p>我设置了每日サマリーを送信し、メールをチェックし、近づくタスクを思い出させてくれる定时任务。这就像有一个从不喝咖啡的私人助理。</p>

<h3>3. 使えば使うほど更有用</h3>
<p>每一次对话都在让它更了解我。它记住了我的编码风格、我的偏好、我的项目。用得越久，它就越有价值。</p>

<h3>4. 面倒なもの оно 它包揽了无聊的事情</h3>
<p>ファイル整理、ドキュメント、デプロイスクリプト、READMEファイル——那些我一直拖延的繁琐工作。现在我只需要问，它就搞定了。</p>

<h2>完璧じゃないけど、本気で使える</h2>
<p>もちろん，这不是魔法。有时候它需要澄清，有时候会走弯路。でも「有用な答えをくれた回数」と「修正が必要だった回数」の比率を比べると、圧倒的な有用性勝ち。</p>
<p>初めて、自分が真の<strong>思考パートナー</strong>を持っている这种感觉。这是值得写一篇文章的。</p>

<blockquote>一番良いツールは、実際に使うもの。QClawは1ヶ月间毎日使った最初のAIツールです。</blockquote>

<h2>次の予定</h2>
<p>打算把QClaw更深地集成到我的开发工作流中——自定义スキル、より良いメモリ管理、そして私が和QClaw一緒にゼロから做るプロジェクト。旅程才刚刚开始。</p>
              `
            }
          }
        },
        {
          id: 2,
          tag: 'AI Video',
          tagColor: '#a78bfa',
          date: '2025-04-05',
          readTime: '7 min read',
          content: {
            en: {
              title: 'Seedance 2.0 & Sora 2: The New Kings of AI Video Generation',
              excerpt: 'Two major releases are reshaping what\'s possible in AI-generated video. Here\'s a deep dive into their architectures, capabilities, and what they mean for creators.',
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
  <tr><th>Feature</th><th>Seedance 2.0</th><th>Sora 2</th></tr>
  <tr><td>Max Resolution</td><td>4K</td><td>1080p (up to 4K via upscale)</td></tr>
  <tr><td>Max Duration</td><td>30s</td><td>20s</td></tr>
  <tr><td>Camera Control</td><td>Natural language</td><td>Storyboard interface</td></tr>
  <tr><td>Editing</td><td>Extension-focused</td><td>Full manipulation</td></tr>
  <tr><td>Physics Accuracy</td><td>Good</td><td>Very good</td></tr>
  <tr><td>API Access</td><td>Limited</td><td>OpenAI API</td></tr>
</table>

<h2>What This Means for Creators</h2>
<p>Both tools are genuinely useful now — not just technical demos. For indie creators, the ability to generate concept art as video, create B-roll without cameras, and prototype scenes before shooting is revolutionary.</p>
<p>The era of "I'll believe it when I see it" in pre-production is over. Now it's "I'll see it before I build it."</p>

<blockquote>AI video isn't replacing filmmakers — it's giving every person with a story the visual vocabulary to tell it.</blockquote>
              `
            },
            zh: {
              title: 'Seedance 2.0 与 Sora 2：AI 视频生成的新王者之争',
              excerpt: '两大重磅发布正在重塑 AI 视频生成的边界。深入解析它们的架构、能力，以及对创作者意味着什么。',
              body: `
<h2>视频生成战争升温</h2>
<p>2025 年正在成为 AI 视频从惊艳 demo 走向真正实用工具的年份。其中有两个发布最为突出：字节跳动的 <strong>Seedance 2.0</strong> 和 OpenAI 的 <strong>Sora 2</strong>。两者都代表了重大飞跃——但它们走了非常不同的路线。</p>

<h2>Seedance 2.0：效率之王</h2>
<p>字节跳动的 Seedance 一直是 AI 视频领域最隐秘的秘密之一。2.0 版本让它正式出道了。突出特性：</p>
<ul>
  <li><strong>原生 4K/60fps 输出</strong> — AI 视频终于不像翻书动画了</li>
  <li><strong>语义感知的视频扩展</strong> — 扩展片段时保持视觉一致性</li>
  <li><strong>精准的镜头控制</strong> — 用自然语言定义镜头运动</li>
  <li><strong>8 秒基础片段</strong>，最长可扩展至 30 秒</li>
</ul>

<h3>它的特别之处</h3>
<p>Seedance 2.0 的秘方是它的<strong>流匹配架构</strong>——一种训练范式，用更少的算力产生更稳定、更高质量的视频。扩散模型通过添加和去除噪声来工作，而流匹配学习的是从噪声到内容的直接路径。结果：生成更快，伪影更少。</p>

<h2>Sora 2：OpenAI 的答卷</h2>
<p>Sora 2 是 OpenAI 对初代 Sora 局限性的精心回应。关键改进：</p>
<ul>
  <li><strong>更好的物理模拟</strong> — 物体与环境交互更加真实</li>
  <li><strong>改进的文本一致性</strong> — 生成视频更忠实地匹配提示词</li>
  <li><strong>故事板界面</strong> — 可视化规划多场景叙事</li>
  <li><strong>视频编辑能力</strong> — 不只是生成，还能编辑</li>
</ul>

<h3>物理问题</h3>
<p>初代 Sora 最著名的问题是在基础物理上翻车——液体行为不对、物体违反重力。Sora 2 通过结合基于 Transformer 的生成和从海量真实世界视频数据中学习的物理先验，展示了显著改进。</p>

<h2>正面比拼</h2>
<table>
  <tr><th>特性</th><th>Seedance 2.0</th><th>Sora 2</th></tr>
  <tr><td>最大分辨率</td><td>4K</td><td>1080p（通过超分可达 4K）</td></tr>
  <tr><td>最长时长</td><td>30 秒</td><td>20 秒</td></tr>
  <tr><td>镜头控制</td><td>自然语言</td><td>故事板界面</td></tr>
  <tr><td>编辑能力</td><td>以扩展为主</td><td>完整编辑</td></tr>
  <tr><td>物理准确性</td><td>良好</td><td>非常好</td></tr>
  <tr><td>API 访问</td><td>有限</td><td>OpenAI API</td></tr>
</table>

<h2>对创作者意味着什么</h2>
<p>两个工具现在都是真正可用的了——不只是技术演示。对于独立创作者来说，能够生成概念艺术视频、不用摄像机就能创建 B-roll、在拍摄前先原型化场景，这些能力是革命性的。</p>
<p>预制作中「眼见为实」的时代结束了。现在是「先看到，再建造」。</p>

<blockquote>AI 视频不会取代电影制作人——它给每个有故事的人提供了讲述它的视觉语言。</blockquote>
              `
            },
            ja: {
              title: 'Seedance 2.0とSora 2：AI動画生成の新たな王座之争い',
              excerpt: '2つの大规模リリースがAI生成動画の限界を塗り替えつつある。架构、能力、そして创作者にとっての意味を深掘りする。',
              body: `
<h2>動画生成戦争が加熱</h2>
<p>2025年は、AI動画が印象的なデモから真有用のツールになる年になりそうです。その中で两款のリリースが最も注目を集めています：ByteDanceの<strong>Seedance 2.0</strong>とOpenAIの<strong>Sora 2</strong>。两者とも大きな飞跃ですが、アプローチはまったく異なります。</p>

<h2>Seedance 2.0：効率の王</h2>
<p>ByteDanceのSeedanceは静かな间、 AI動画の分野で最大级の机密信息였습니다。バージョン2.0で正式に登场です。际立った特徴：</p>
<ul>
  <li><strong>ネイティブ4K/60fps出力</strong> — 终于、AI動画がパラパラマンガみたいにならなかった！</li>
  <li><strong>语义対応の動画延长</strong> — 視覚的一貫性を保ちながらクリップを延长</li>
  <li><strong>精密なカメラコントロール</strong> — 自然言語でカメラの動きを定義</li>
  <li><strong>8秒の基本クリップ</strong>、最长30秒まで延长可能</li>
</ul>

<h3>何が特别か</h3>
<p>Seedance 2.0の秘密のソースは<strong>フローマッチング架构</strong>です——より少ない計算量でより稳定で高品质な動画を生成する训练パラダイム。拡散モデルがノイズを追加・削除して動くのに対し、フローマッチングはノイズからコンテンツへの直接パスを学びます。结果：より高速な生成、より少ないアーティファクト。</p>

<h2>Sora 2：OpenAIの答え</h2>
<p>Sora 2は、元のSoraの限界へのOpenAIの洗練された回答です。主な改善点：</p>
<ul>
  <li><strong>より優れた物理シミュレーション</strong> — 物体が環境とより现实的にやり取り</li>
  <li><strong>改善されたテキスト忠実度</strong> — 生成された動画がプロンプトにより忠実に一致</li>
  <li><strong>ストーリーボードインターフェース</strong> — マルチシーンのナラティブを視覚的に計画</li>
  <li><strong>動画編集机能</strong> — 生成だけでなく、操作も可能</li>
</ul>

<h3>物理の問題</h3>
<p>元のSoraは有名なように基本的な物理で苦戦していました——液体が误った動きをし、重力を违反する物体など。Sora 2はTransformerベースの生成と、大量の実世界動画データから学んだ物理的事前分布を組み合わせたハイブリッド架构 통해大幅な改善を示しています。</p>

<h2>直接对决</h2>
<table>
  <tr><th>機能</th><th>Seedance 2.0</th><th>Sora 2</th></tr>
  <tr><td>最大解像度</td><td>4K</td><td>1080p（アップスケールで4K可）</td></tr>
  <tr><td>最大尺</td><td>30秒</td><td>20秒</td></tr>
  <tr><td>カメラコントロール</td><td>自然言語</td><td>ストーリーボード</td></tr>
  <tr><td>編集</td><td>延長重視</td><td>フル編集</td></tr>
  <tr><td>物理精度</td><td>良好</td><td>非常に良好</td></tr>
  <tr><td>APIアクセス</td><td>限定的</td><td>OpenAI API</td></tr>
</table>

<h2>创作者にとっての意味</h2>
<p>两款のツールは 现已都是真正有用的了——不只是技術デmo。对于独立创作者来说、コンセプトアートを動画として生成、カメラなしでBロールを作成、撮映前にシーンをプロトタイプ化できる能力は革命的です。</p>
<p>プリプロダクションにおける「录を見て信じろ」时代は终わりに近づいています。今は「见てから作れ」。</p>

<blockquote>AI视频は映画制作者を置き換えるものではない——すべてのストーリーを持つ人に、それを伝えるための視覚的語彙を与えているのだ。</blockquote>
              `
            }
          }
        },
        {
          id: 3,
          tag: 'LLM',
          tagColor: '#34d399',
          date: '2025-03-28',
          readTime: '6 min read',
          content: {
            en: {
              title: 'Gemma 4: Google\'s Open-Source LLM Goes Multi-Modal',
              excerpt: 'Google\'s latest open-weight model family brings multi-modal capabilities, improved reasoning, and a 27B model that punches far above its weight class.',
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
              `
            },
            zh: {
              title: 'Gemma 4：Google 开源 LLM 迈入多模态时代',
              excerpt: 'Google 最新开源权重模型系列带来了多模态能力、更强的推理性能，以及一款在同级中表现超群的 27B 模型。',
              body: `
<h2>Gemma 4 震撼发布</h2>
<p>Google DeepMind 发布了 <strong>Gemma 4</strong>，这是他们开源权重语言模型家族的下一代产品。在 Gemma 3 成功的基础上，4 代将开源模型的边界推向了一个新高度——同时保持足够小，能在消费级硬件上运行。</p>

<h2>模型系列</h2>
<p>Gemma 4 有三个规模：</p>
<ul>
  <li><strong>Gemma 4 2B</strong> — 超高效，可在笔记本电脑和移动设备上运行</li>
  <li><strong>Gemma 4 7B</strong> — 大多数开发者和研究者的最佳选择</li>
  <li><strong>Gemma 4 27B</strong> — 旗舰款，能与两倍大小的模型竞争</li>
</ul>

<h2>多模态：大新闻</h2>
<p>Gemma 4 的头条功能是<strong>内置多模态支持</strong>。三个规模都能处理图像和文本——不是通过外部适配器，而是原生集成。这意味着：</p>
<ul>
  <li>图像理解内置于基础模型</li>
  <li>更好的视觉-语言对齐</li>
  <li>通过 Gemma 4 Vision 扩展实现原生图像生成</li>
</ul>

<h3>为什么原生多模态很重要</h3>
<p>大多数开源模型将视觉作为附加功能——一个附加在语言模型上的独立视觉编码器。Gemma 4 的方法意味着视觉和文本表示从一开始就是一起学习的。结果：更连贯的图像-文本推理，更少的「幻觉」描述。</p>

<h2>技术改进</h2>
<h3>长上下文</h3>
<p>Gemma 4 27B 支持高达 <strong>128K tokens 的上下文</strong>——足够容纳整个代码库、长文档或数小时的对话历史。相比 Gemma 3 的 32K 限制，这是一个巨大的飞跃。</p>

<h3>改进的推理能力</h3>
<p>通过强化微调和改进的注意力机制相结合，Gemma 4 在复杂推理任务上表现出显著更好的性能——编程、数学和多步骤逻辑问题。</p>

<h3>扩展的多语言支持</h3>
<p>虽然 Gemma 3 在英语方面表现强劲，但 Gemma 4 大幅改善了非英语性能，特别是<strong>日语、韩语、阿拉伯语和普通话</strong>——这些语言通常被开源模型忽视。</p>

<h2>本地运行 Gemma 4</h2>
<p>Gemma 的核心哲学之一是可访问性。以下是运行方法：</p>
<pre><code># 使用 Ollama
ollama pull gemma4:27b

# 使用 LM Studio
# 从 lmstudio.ai 下载并加载 gemma4-27b.gguf

# 通过 Hugging Face + transformers
from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained("google/gemma-4-27b-it")</code></pre>

<p>7B 模型在 M 系列 Mac 或配备 8GB 显存的 游戏笔记本上运行流畅。27B 模型需要更多算力——16GB+ 显存——但性能提升是值得的。</p>

<h2>横向对比</h2>
<p>Gemma 4 27B 在标准基准测试中与 Mistral Large 2 和 Llama 3.1 70B 等模型得分相当，同时体积更小、推理更快。这是高效模型设计的一个了不起的成就。</p>

<h2>开源的优势</h2>
<p>因为 Gemma 4 是完全开源权重（Apache 2.0 许可证），你可以：</p>
<ul>
  <li>用自己的数据微调，无需 API 费用</li>
  <li>在本地部署，适用于隐私敏感的应用</li>
  <li>在其基础上构建商业产品</li>
  <li>检查、修改和贡献模型</li>
</ul>

<blockquote>开源 AI 的好坏取决于你能真正使用的模型。Gemma 4 让强大的 AI 真正变得触手可及。</blockquote>

<h2>我的看法</h2>
<p>Gemma 4 让我感觉 Google 终于认真对待开源了。不只是发布权重——它在工具、文档和支持生态上都有投入。多模态能力让它用途广泛，27B 模型表现出众，而开源许可证消除了实验和部署的所有障碍。</p>
<p>如果你一直在等待使用开源 LLM 的最佳时机，可能就是现在了。</p>
              `
            },
            ja: {
              title: 'Gemma 4：GoogleのオープンソースLLMがマルチモーダル时代に突入',
              excerpt: 'Google最新のオープソ重みモデルファミリーがマルチモーダル能力、より強力な推論、そして自分のサイズ以上の性能を持つ27Bモデルを持って登场。',
              body: `
<h2>Gemma 4がサプライズ登场</h2>
<p>Google DeepMindが<strong>Gemma 4</strong>をリリースしました。これは彼らのオープソ重み言語モデルファミリーの次世代製品です。Gemma 3の成功を受けて、バージョン4はオープンソースモデルの限界を押し広げつつ、消费者のハードウェアでも動かせるサイズ感を维持しています。</p>

<h2>モデルファミリー</h2>
<p>Gemma 4は以下の3つのサイズで登场：</p>
<ul>
  <li><strong>Gemma 4 2B</strong> — 超効率的で、ノートPCやモバイルデバイスで動作</li>
  <li><strong>Gemma 4 7B</strong> —  대부분의開発者和研究者にとって的最佳选择</li>
  <li><strong>Gemma 4 27B</strong> — 主力产品、サイズが2倍のモデルとも競合</li>
</ul>

<h2>マルチモーダル：大ニュース</h2>
<p>Gemma 4の目玉機能は<strong>ネイティブマルチモーダルサポート</strong>です。3つのサイズはすべて画像とテキストを同時に処理できます——外部アダプターではなく、ネイティブに統合されています。这意味着：</p>
<ul>
  <li>画像理解がベースモデルに組み込まれている</li>
  <li>より優れたビジョン-言語アライメント</li>
  <li>Gemma 4 Vision拡張によるネイティブ画像生成</li>
</ul>

<h3>なぜネイティブマルチモーダルが重要か</h3>
<p>ほとんどのオープンモデルは視覚を後付けで追加します——言語モデルに取り付けられた別のビジョンエンコーダー。Gemma 4のアプローチは、視覚とテキストの表現が最初から一緒に学習されることを意味します。结果：より一貫性のある画像-テキスト推論、より少ない「幻覚」説明。</p>

<h2>技術的改善</h2>
<h3>長いコンテキスト</h3>
<p>Gemma 4 27Bは最大<strong>128Kトークンのコンテキスト</strong>をサポート——コードベース全体、長いドキュメント、または数時間の会話履歴を收纳できるほど。Gemma 3の32K制限から大きなジャンプです。</p>

<h3>改善された推論</h3>
<p>強化学習による微調整と改善されたアテンションメカニズムの組み合わせにより、Gemma 4は複雑な推論タスクで显著に良好なパフォーマンスを示します——コーディング、数学、 multi-stepの論理的問題。</p>

<h3>拡張された多言語サポート</h3>
<p>Gemma 3は英語では强劲でしたが、Gemma 4は<strong>日本語、韓国語、アラビア語、北京語</strong>など非英語性能が大幅に改善されています——オープンモデルではしばしば见落とされがちな言語です。</p>

<h2>Gemma 4をローカルで動かす</h2>
<p>Gemmaのコアフィロソフィーの一つはアクセシビリティです。動かし方：</p>
<pre><code># Ollamaを使用
ollama pull gemma4:27b

# LM Studioを使用
# lmstudio.aiからダウンロードしてgemma4-27b.ggufを読み込み

# Hugging Face + transformers経由
from transformers import AutoModelForCausalLM
model = AutoModelForCausalLM.from_pretrained("google/gemma-4-27b-it")</code></pre>

<p>7BモデルはMシリーズMacまたは8GB VRAM搭載のゲーミ向けノートPCでスムーズに動作。27Bモデルには更多の計算能力が必要です——16GB+ VRAM——但是性能向上がそれに値する。</p>

<h2>横向き比较</h2>
<p>Gemma 4 27Bは標準ベンチマークでMistral Large 2やLlama 3.1 70Bなどのモデルと竞り合いつつ、明らかに小さくて速い。这是一个在高效模型设计方面非常了不起的成就。</p>

<h2>オープンソースのアドバンテージ</h2>
<p>Gemma 4は完全にオープソ重み（Apache 2.0ライセンス）なので、次のようなことができません：</p>
<ul>
  <li>自分のデータでファインチューンして、APIコストなし</li>
  <li>プライバシー 민감な应用に本地部署</li>
  <li>その上に商用プロダクトを構築</li>
  <li>モデルを調査、修改、コントリビュート</li>
</ul>

<blockquote>开源AI的实力取决于你能真正使用的模型。Gemma 4让强大的AI真正变得触手可及。</blockquote>

<h2>私の感想</h2>
<p>Gemma 4はGoogleがついにオープンソースを真摯に受け止め始めたと感じさせます。単に重みをリリースするのではなく、ツール、ドキュメント、支援エコシステムに投资しています。マルチモーダル能力は用途を広くし、27Bモデルは优秀で、オープンライセンスは実験と展開のすべての障碍を排除します。</p>
<p>オープンソースLLMで構築する最適な瞬間を待っていたなら、今かもしれません。</p>
              `
            }
          }
        }
      ],

      skills: [
        'HTML5', 'CSS3', 'JavaScript', 'TypeScript',
        'Vue.js', 'React', 'Node.js',
        'Git', 'GitHub', 'REST API',
        'Responsive Design', 'Web Performance',
        'Accessibility', 'Svelte'
      ],

      timeline: [
        {
          year: '2025',
          title: 'Deep into AI Tools',
          desc: 'Daily user of QClaw and exploring the latest in AI video generation and open-source LLMs.'
        },
        {
          year: '2024',
          title: 'Started My Blog',
          desc: 'Launched this blog to document my learning journey and share technical insights with the community.'
        },
        {
          year: '2024',
          title: 'Deep Dive into Vue 3',
          desc: 'Spent 6 months mastering Vue 3 Composition API and built several production projects with it.'
        },
        {
          year: '2023',
          title: 'First Open Source Contribution',
          desc: 'Contributed my first PR to an open source project — a documentation fix that got merged on day one!'
        },
        {
          year: '2023',
          title: 'Discovered Modern CSS',
          desc: 'Learned CSS Grid, Container Queries, and custom properties. Never looked back at old frameworks.'
        },
        {
          year: '2022',
          title: 'Hello, World!',
          desc: 'Wrote my first line of code and fell in love with building things for the web.'
        }
      ]
    };
  },

  computed: {
    // Get current language version of posts for display
    displayPosts() {
      return this.posts.map(post => ({
        ...post,
        title: post.content[this.currentLang].title,
        excerpt: post.content[this.currentLang].excerpt,
        body: post.content[this.currentLang].body
      }));
    },

    latestPosts() {
      return this.displayPosts.slice(0, 3);
    }
  },

  methods: {
    toggleTheme() {
      this.isDark = !this.isDark;
      if (this.isDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    },

    openPost(post) {
      this.activePost = post;
      this.currentPage = 'post-detail';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },

    handleScroll() {
      this.isScrolled = window.scrollY > 40;
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll, { passive: true });

    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      this.isDark = true;
      document.documentElement.classList.add('dark');
    }
  },

  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}).mount('#app');
