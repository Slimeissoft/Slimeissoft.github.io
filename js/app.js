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

      navItems: [
        { id: 'home',     label: 'Home'     },
        { id: 'posts',    label: 'Articles' },
        { id: 'timeline', label: 'Timeline' },
        { id: 'about',    label: 'About'    },
      ],

      posts: [
        {
          id: 1,
          title: 'Getting Started with Vue 3: A Complete Guide',
          tag: 'Vue.js',
          tagColor: '#60a5fa',
          date: '2025-01-15',
          readTime: '8 min read',
          excerpt: 'Vue 3 brings Composition API, improved TypeScript support, and better performance. This guide walks through everything you need to know to build modern web apps.',
          content: `
<h2>Why Vue 3?</h2>
<p>Vue 3 represents a major evolution of the Vue framework. With the Composition API, developers can now organize component logic more flexibly — grouping related functionality together regardless of where properties are defined in the file.</p>
<h3>Key Improvements</h3>
<ul>
  <li><strong>Composition API</strong> — Write logic in composable functions that can be shared across components</li>
  <li><strong>Better TypeScript support</strong> — Vue 3 is written in TypeScript, making it a first-class experience</li>
  <li><strong>Improved performance</strong> — Smaller bundle size, faster initial render, and better memory usage</li>
  <li><strong>Suspense & Teleport</strong> — Built-in support for async component loading and portal-like behavior</li>
</ul>
<h3>Quick Example</h3>
<pre><code>import { ref, computed, onMounted } from 'vue'

export default {
  setup() {
    const count = ref(0)
    const doubled = computed(() => count.value * 2)

    onMounted(() => {
      console.log('Component mounted!')
    })

    return { count, doubled }
  }
}</code></pre>
<p>The <code>ref</code> function creates a reactive value, while <code>computed</code> derives values from reactive state. Everything in <code>setup()</code> runs before the component is mounted, giving you full control over initialization.</p>
<blockquote>Pro tip: Use the <code>&lt;script setup&gt;</code> syntax for even cleaner code in your .vue files!</blockquote>
<h3>What's Next?</h3>
<p>In the next article, we'll explore Pinia for state management — Vue's officially recommended store solution that replaces Vuex with a simpler, more flexible API.</p>
          `
        },
        {
          id: 2,
          title: 'Modern CSS: Building Beautiful Interfaces Without Frameworks',
          tag: 'CSS',
          tagColor: '#a78bfa',
          date: '2025-01-08',
          readTime: '6 min read',
          excerpt: 'CSS has evolved dramatically. From Grid and Flexbox to custom properties and container queries — here\'s how to build stunning UIs with pure, elegant CSS.',
          content: `
<h2>The CSS Renaissance</h2>
<p>We've entered a golden age of CSS. Modern features that once required JavaScript libraries or preprocessors are now native to the browser, enabling us to build sophisticated, responsive, and accessible interfaces with less code.</p>
<h3>CSS Grid: Beyond the Basics</h3>
<p>CSS Grid is incredibly powerful for two-dimensional layouts. But did you know you can create magazine-style layouts with it?</p>
<pre><code>.masonry-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  grid-auto-rows: masonry;
}</code></pre>
<h3>Custom Properties for Design Systems</h3>
<p>CSS custom properties (variables) enable true design tokens — centralized values that propagate through your entire stylesheet:</p>
<pre><code>:root {
  --color-primary: #6366f1;
  --color-secondary: #8b5cf6;
  --space-unit: 8px;
  --radius-card: 20px;
}

.card {
  background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
  border-radius: var(--radius-card);
  padding: calc(var(--space-unit) * 4);
}</code></pre>
<p>Combine with <code>@media</code> queries for different screen sizes and you have a responsive design system that requires minimal maintenance.</p>
<h3>Container Queries</h3>
<p>The newest addition to the CSS toolkit, container queries let components respond to their container's size rather than the viewport — a game-changer for reusable components.</p>
          `
        },
        {
          id: 3,
          title: 'JavaScript Async/Await: Mastering Asynchronous Code',
          tag: 'JavaScript',
          tagColor: '#34d399',
          date: '2024-12-28',
          readTime: '10 min read',
          excerpt: 'Async/await transformed how we write JavaScript. But understanding how it actually works under the hood is key to writing bug-free asynchronous code.',
          content: `
<h2>Understanding the Event Loop</h2>
<p>Before mastering async/await, you need a mental model of JavaScript's concurrency. JavaScript runs on a single thread, using an event loop to handle asynchronous operations without blocking.</p>
<h3>Promises: The Foundation</h3>
<p>Every async operation returns a Promise — an object representing a value that may not exist yet:</p>
<pre><code>const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data loaded!'), 1000)
  })
}</code></pre>
<h3>Async/Await: Syntactic Sugar</h3>
<p>Async/await doesn't eliminate callbacks — it makes asynchronous code <em>read</em> like synchronous code:</p>
<pre><code>async function loadPage() {
  try {
    const user = await fetchUser()
    const posts = await fetchPosts(user.id)
    return { user, posts }
  } catch (error) {
    console.error('Failed to load page:', error)
  }
}</code></pre>
<p>The <code>try/catch</code> block handles any rejection in the chain — far cleaner than chaining <code>.catch()</code> on every promise.</p>
<h3>Parallel Execution</h3>
<p>A common mistake: awaiting operations that could run in parallel:</p>
<pre><code>// ❌ Sequential — takes 400ms total
const a = await fetchA()  // 200ms
const b = await fetchB()  // 200ms

// ✅ Parallel — takes only 200ms
const [a, b] = await Promise.all([fetchA(), fetchB()])</code></pre>
          `
        },
        {
          id: 4,
          title: 'My Development Setup 2025',
          tag: 'Workflow',
          tagColor: '#fb923c',
          date: '2024-12-15',
          readTime: '5 min read',
          excerpt: 'A tour of the tools, extensions, and workflows I use daily as a developer — from editor setup to terminal customization and productivity hacks.',
          content: `
<h2>Editor: VS Code</h2>
<p>Visual Studio Code remains my editor of choice. The key is customization — having a setup that reduces friction and makes you feel at home.</p>
<h3>Essential Extensions</h3>
<ul>
  <li><strong>GitLens</strong> — Supercharge Git integration, see who changed what inline</li>
  <li><strong>Error Lens</strong> — Highlight and inline errors/warnings for faster debugging</li>
  <li><strong>Tailwind CSS IntelliSense</strong> — Autocomplete for Tailwind classes</li>
  <li><strong>Thunder Client</strong> — In-editor API testing without leaving VS Code</li>
</ul>
<h3>Terminal: Windows Terminal + Oh My Posh</h3>
<p>A well-configured terminal is a joy to use. Windows Terminal with Oh My Posh and a Nerd Font gives you a beautiful, fast prompt with Git integration:</p>
<pre><code>oh-my-posh init pwsh --config "$HOME/.poshthemes/jandedobbeleer.omp.json" | Invoke-Expression</code></pre>
<h3>Workflow Philosophy</h3>
<p>Less is more. Instead of chasing the latest tool, invest time mastering the tools you have. A deep understanding of your editor and shell will save more time than any new extension.</p>
          `
        },
        {
          id: 5,
          title: 'Web Performance: Core Web Vitals Explained',
          tag: 'Performance',
          tagColor: '#f472b6',
          date: '2024-12-01',
          readTime: '7 min read',
          excerpt: 'LCP, CLS, INP — Google\'s Core Web Vitals are critical for SEO and UX. Learn what they measure, why they matter, and how to optimize each one.',
          content: `
<h2>The Three Pillars</h2>
<p>Core Web Vitals are a set of specific factors Google considers important in a webpage's overall user experience. They measure loading performance, interactivity, and visual stability.</p>
<h3>LCP — Largest Contentful Paint</h3>
<p>How long does it take for the largest visible element to render? Target: under 2.5 seconds.</p>
<ul>
  <li>Optimize and compress images (WebP, AVIF)</li>
  <li>Use a CDN for static assets</li>
  <li>Remove render-blocking JavaScript</li>
</ul>
<h3>CLS — Cumulative Layout Shift</h3>
<p>How much does the layout shift unexpectedly? Target: CLS under 0.1.</p>
<pre><code>/* Always set dimensions on images */
img {
  width: 100%;
  height: auto;
  aspect-ratio: 16 / 9;
}</code></pre>
<h3>INP — Interaction to Next Paint</h3>
<p>How quickly does the page respond to user interactions? Target: under 200ms.</p>
<p>Break up long tasks with <code>requestIdleCallback</code> or <code>scheduler.yield()</code> to keep the main thread responsive.</p>
          `
        },
        {
          id: 6,
          title: 'CSS Animations: From Basics to Advanced Techniques',
          tag: 'Animation',
          tagColor: '#fbbf24',
          date: '2024-11-20',
          readTime: '9 min read',
          excerpt: 'Smooth, performant animations can elevate a good interface to a great one. This deep dive covers CSS transitions, keyframes, transforms, and performance best practices.',
          content: `
<h2>Performance First</h2>
<p>Before adding animation, know this: <strong>only animate properties that the compositor can handle on the GPU</strong>. These are <code>transform</code> and <code>opacity</code>. Everything else triggers layout or paint — expensive operations that cause jank.</p>
<h3>Transitions: Simple but Powerful</h3>
<pre><code>.card {
  transform: translateY(0);
  opacity: 1;
  transition: transform 0.3s ease, opacity 0.3s ease;
}
.card:hover {
  transform: translateY(-8px);
  opacity: 0.9;
}</code></pre>
<h3>Keyframes: Full Control</h3>
<pre><code>@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.orb {
  animation: float 6s ease-in-out infinite;
}</code></pre>
<h3>Advanced: Staggered Entrance Animations</h3>
<p>The most impactful animation technique: staggered reveals on page load. Use <code>animation-delay</code> to cascade elements in:</p>
<pre><code>.card:nth-child(1) { animation-delay: 0ms; }
.card:nth-child(2) { animation-delay: 100ms; }
.card:nth-child(3) { animation-delay: 200ms; }</code></pre>
<p>A subtle 100ms stagger creates a premium feel that users subconscious notice without being able to explain.</p>
          `
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
    latestPosts() {
      return this.posts.slice(0, 3);
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
