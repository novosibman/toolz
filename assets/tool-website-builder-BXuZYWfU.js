import{ce as Qt,r as m,j as e,F as kt,a as Le,P as ve,ax as nt,ch as Ct,D as Rt,K as Lt,co as ea,bn as ta,bk as At,bC as It,c9 as Se,i as st,U as aa,a7 as ra,c as Bt,h as Ae,bJ as Nt,bi as Ne,bI as na,E as Ht,b as ct,cp as sa,au as Pt,av as Dt,bB as ot,cq as se,aN as oa,z as la,a5 as St,v as Mt,cr as Fe,bv as ia,aK as ca,b4 as da,b5 as ma,aP as ua,bm as fa,cs as ga,ct as pa,bl as ha,bP as xa,aG as ba,aH as va,bD as ya,bE as wa,bF as ka,bG as Ca,bH as Na,c3 as Sa,c5 as Ea,c6 as ja,b7 as Et,cu as Ta,X as qe,b8 as Ra,aL as La}from"./common-CWhgVdJO.js";function Aa(a,t,n){const s=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 500" width="800" height="500">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${n[0]};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${n[1]};stop-opacity:1" />
    </linearGradient>
    <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
      <feDropShadow dx="0" dy="8" stdDeviation="16" flood-opacity="0.18"/>
    </filter>
  </defs>
  <rect width="800" height="500" rx="16" fill="url(#grad)" />
  <circle cx="400" cy="220" r="140" fill="#ffffff" opacity="0.08" />
  <circle cx="700" cy="80" r="90" fill="#ffffff" opacity="0.06" />
  <circle cx="100" cy="420" r="110" fill="#ffffff" opacity="0.05" />
  <rect x="150" y="110" width="500" height="280" rx="12" fill="#ffffff" opacity="0.14" filter="url(#shadow)" stroke="#ffffff" stroke-width="1.5" stroke-opacity="0.3"/>
  <text x="400" y="230" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="34" font-weight="700" fill="#ffffff" text-anchor="middle" letter-spacing="-0.5">${a}</text>
  <text x="400" y="275" font-family="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" font-size="18" font-weight="400" fill="#f1f5f9" text-anchor="middle" opacity="0.92">${t}</text>
  <circle cx="400" cy="160" r="24" fill="#ffffff" opacity="0.25" />
  <path d="M392 160 L398 166 L408 154" stroke="#ffffff" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>`;return new Blob([s],{type:"image/svg+xml"})}const tt=Aa("Website Hero Image","Local Project Image: src/local.png",["#0ea5e9","#6366f1"]);function dt(a){const t=a.colors||{primary:"#2563eb",primaryHover:"#1d4ed8",secondary:"#475569",accent:"#f59e0b",background:"#ffffff",surface:"#f8fafc",text:"#0f172a",textMuted:"#64748b",border:"#e2e8f0",cardBg:"#ffffff",headerBg:"#ffffff",headerText:"#0f172a",footerBg:"#0f172a",footerText:"#f8fafc"},n=a.fontHeading||"system-ui, -apple-system, sans-serif",s=a.fontBody||"system-ui, -apple-system, sans-serif",l=a.radius||"8px";return`/* ==========================================================================
   Project Adaptive Stylesheet
   Theme: ${a.name||"Adaptive Theme"}
   ========================================================================== */

:root {
  /* Brand & Theme Colors */
  --primary: ${t.primary};
  --primary-hover: ${t.primaryHover};
  --secondary: ${t.secondary};
  --accent: ${t.accent};
  --bg-color: ${t.background};
  --surface-color: ${t.surface};
  --text-color: ${t.text};
  --text-muted: ${t.textMuted};
  --border-color: ${t.border};
  --card-bg: ${t.cardBg};
  --header-bg: ${t.headerBg};
  --header-text: ${t.headerText};
  --footer-bg: ${t.footerBg};
  --footer-text: ${t.footerText};

  /* Typography & Layout */
  --font-heading: ${n};
  --font-body: ${s};
  --radius-sm: calc(${l} / 2);
  --radius: ${l};
  --radius-lg: calc(${l} * 1.5);
  --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* --------------------------------------------------------------------------
   1. Base & Reset
   -------------------------------------------------------------------------- */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-body);
  color: var(--text-color);
  background-color: var(--bg-color);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* --------------------------------------------------------------------------
   2. Typography (h1-h6, p, a, lists)
   -------------------------------------------------------------------------- */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  color: var(--text-color);
  font-weight: 700;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 { font-size: 2.5rem; letter-spacing: -0.025em; }
h2 { font-size: 2rem; letter-spacing: -0.02em; }
h3 { font-size: 1.5rem; }
h4 { font-size: 1.25rem; }
h5 { font-size: 1.1rem; }
h6 { font-size: 1rem; }

p {
  margin-bottom: 1rem;
  color: var(--text-color);
}

p.lead {
  font-size: 1.2rem;
  color: var(--text-muted);
  line-height: 1.7;
}

a {
  color: var(--primary);
  text-decoration: none;
  transition: var(--transition);
}

a:hover {
  color: var(--primary-hover);
  text-decoration: underline;
}

ul, ol {
  margin-bottom: 1rem;
  padding-left: 1.5rem;
  color: var(--text-color);
}

li {
  margin-bottom: 0.35rem;
}

blockquote {
  border-left: 4px solid var(--primary);
  padding: 0.5rem 1rem;
  margin: 1.5rem 0;
  background-color: var(--surface-color);
  border-radius: 0 var(--radius) var(--radius) 0;
  font-style: italic;
}

code, pre {
  font-family: 'JetBrains Mono', monospace, Consolas, Courier;
  font-size: 0.9em;
}

code {
  padding: 0.2em 0.4em;
  background: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
}

/* --------------------------------------------------------------------------
   3. Layout & Structure (header, footer, containers, sidebars)
   -------------------------------------------------------------------------- */
.container {
  width: 100%;
  max-width: 1140px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.section {
  padding: 4rem 0;
}

.section-surface {
  background-color: var(--surface-color);
}

/* Header & Navbar */
header, .navbar {
  background-color: var(--header-bg);
  color: var(--header-text);
  border-bottom: 1px solid var(--border-color);
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
}

.nav-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 4.25rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: var(--font-heading);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--header-text);
  text-decoration: none;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: var(--header-text);
  font-weight: 500;
  text-decoration: none;
  font-size: 0.95rem;
  opacity: 0.85;
  transition: var(--transition);
}

.nav-link:hover {
  opacity: 1;
  color: var(--primary);
  text-decoration: none;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

/* Sidebar (Left or Right Menu Panel) */
.sidebar, .menu-panel {
  background-color: var(--surface-color);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1.5rem;
}

.sidebar-left {
  margin-right: 1.5rem;
}

.sidebar-right {
  margin-left: 1.5rem;
}

/* Footer */
footer, .footer {
  background-color: var(--footer-bg);
  color: var(--footer-text);
  padding: 3.5rem 0 2rem;
  border-top: 1px solid var(--border-color);
  margin-top: auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.875rem;
  opacity: 0.75;
}

/* --------------------------------------------------------------------------
   4. UI Components & Elements (buttons, cards, badges, rich-text)
   -------------------------------------------------------------------------- */
/* Buttons */
button, .btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 600;
  padding: 0.65rem 1.35rem;
  border-radius: var(--radius);
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition);
  line-height: 1.4;
  white-space: nowrap;
}

.btn-primary {
  background-color: var(--primary);
  color: #ffffff;
  border-color: var(--primary);
  box-shadow: var(--shadow-sm);
}

.btn-primary:hover {
  background-color: var(--primary-hover);
  border-color: var(--primary-hover);
  color: #ffffff;
  text-decoration: none;
  transform: translateY(-1px);
  box-shadow: var(--shadow-md);
}

.btn-secondary {
  background-color: var(--surface-color);
  color: var(--text-color);
  border-color: var(--border-color);
}

.btn-secondary:hover {
  background-color: var(--border-color);
  color: var(--text-color);
  text-decoration: none;
}

.btn-outline {
  background-color: transparent;
  color: var(--primary);
  border-color: var(--primary);
}

.btn-outline:hover {
  background-color: var(--primary);
  color: #ffffff;
  text-decoration: none;
}

.btn-lg {
  padding: 0.85rem 1.75rem;
  font-size: 1.1rem;
}

.btn-sm {
  padding: 0.4rem 0.85rem;
  font-size: 0.85rem;
}

/* Cards & Content Boxes */
.card {
  background-color: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  padding: 1.75rem;
  box-shadow: var(--shadow-sm);
  transition: var(--transition);
}

.card:hover {
  box-shadow: var(--shadow-md);
  border-color: var(--primary);
}

/* Grids */
.grid {
  display: grid;
  gap: 1.5rem;
}

.grid-2 { grid-template-columns: repeat(2, 1fr); }
.grid-3 { grid-template-columns: repeat(3, 1fr); }
.grid-4 { grid-template-columns: repeat(4, 1fr); }

/* Badges */
.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  border-radius: 9999px;
  background-color: var(--surface-color);
  color: var(--primary);
  border: 1px solid var(--border-color);
  margin-bottom: 0.75rem;
}

/* Images & Media */
img.img-responsive, .img-responsive {
  max-width: 100%;
  height: auto;
  border-radius: var(--radius);
  display: block;
}

/* Rich Edit Text Block (single container in DOM) */
.rich-text {
  line-height: 1.7;
}

.rich-text p {
  margin-bottom: 1.1rem;
}

.rich-text strong {
  color: var(--text-color);
  font-weight: 700;
}

.rich-text em {
  font-style: italic;
}

/* Forms & Inputs */
input[type="text"], input[type="email"], textarea, select {
  width: 100%;
  padding: 0.65rem 0.9rem;
  border: 1px solid var(--border-color);
  border-radius: var(--radius);
  background-color: var(--bg-color);
  color: var(--text-color);
  font-family: var(--font-body);
  font-size: 0.95rem;
  transition: var(--transition);
  margin-bottom: 0.75rem;
}

input:focus, textarea:focus, select:focus {
  outline: none;
  border-color: var(--primary);
  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.15);
}

/* --------------------------------------------------------------------------
   5. Responsive Styles
   -------------------------------------------------------------------------- */
@media (max-width: 768px) {
  h1 { font-size: 2rem; }
  h2 { font-size: 1.6rem; }
  .grid-2, .grid-3, .grid-4 { grid-template-columns: 1fr; }
  .nav-links { display: none; }
  .nav-actions { margin-left: auto; }
  .section { padding: 2.5rem 0; }
}
`}const Ie=[{id:"white",name:"White / Pure Minimal",description:"Crisp white canvas, high-contrast typography, minimalist borders, and refined neutral accents.",category:"Minimal",fontHeading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',fontBody:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',radius:"6px",colors:{primary:"#09090b",primaryHover:"#27272a",secondary:"#71717a",accent:"#f59e0b",background:"#ffffff",surface:"#fafafa",text:"#09090b",textMuted:"#71717a",border:"#e4e4e7",cardBg:"#ffffff",headerBg:"rgba(255, 255, 255, 0.92)",headerText:"#09090b",footerBg:"#fafafa",footerText:"#09090b"},cssContent:""},{id:"light",name:"Light / Modern Indigo",description:"Soft cool background, crisp white card surfaces, polished indigo blue primary accents.",category:"Modern",fontHeading:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',fontBody:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',radius:"10px",colors:{primary:"#3b82f6",primaryHover:"#2563eb",secondary:"#64748b",accent:"#06b6d4",background:"#f8fafc",surface:"#ffffff",text:"#0f172a",textMuted:"#64748b",border:"#e2e8f0",cardBg:"#ffffff",headerBg:"rgba(255, 255, 255, 0.94)",headerText:"#0f172a",footerBg:"#0f172a",footerText:"#f8fafc"},cssContent:""},{id:"dark",name:"Dark / Slate Cyber",description:"Developer slate-900 canvas, deep card surfaces, vibrant cyan & sky blue glowing accents.",category:"Dark",fontHeading:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',fontBody:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',radius:"10px",colors:{primary:"#0ea5e9",primaryHover:"#38bdf8",secondary:"#94a3b8",accent:"#6366f1",background:"#0f172a",surface:"#1e293b",text:"#f8fafc",textMuted:"#94a3b8",border:"#334155",cardBg:"#1e293b",headerBg:"rgba(15, 23, 42, 0.92)",headerText:"#f8fafc",footerBg:"#020617",footerText:"#cbd5e1"},cssContent:""},{id:"black",name:"Black / OLED Pitch",description:"True pitch black #000 canvas, razor-sharp borders, high-impact emerald & lime accents.",category:"Dark",fontHeading:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',fontBody:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',radius:"4px",colors:{primary:"#10b981",primaryHover:"#34d399",secondary:"#a1a1aa",accent:"#eab308",background:"#000000",surface:"#121212",text:"#ffffff",textMuted:"#a1a1aa",border:"#27272a",cardBg:"#121212",headerBg:"rgba(0, 0, 0, 0.95)",headerText:"#ffffff",footerBg:"#09090b",footerText:"#d4d4d8"},cssContent:""},{id:"warm",name:"Warm / Editorial Cream",description:"Warm ivory canvas, rich espresso typography, amber & terracotta refined accents.",category:"Editorial",fontHeading:'Georgia, Cambria, "Times New Roman", serif',fontBody:'-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',radius:"6px",colors:{primary:"#b45309",primaryHover:"#92400e",secondary:"#78716c",accent:"#c2410c",background:"#fcfbf7",surface:"#f5f3ed",text:"#1c1917",textMuted:"#78716c",border:"#e7e5e4",cardBg:"#ffffff",headerBg:"rgba(252, 251, 247, 0.95)",headerText:"#1c1917",footerBg:"#292524",footerText:"#f5f5f4"},cssContent:""},{id:"ocean",name:"Ocean / Marine Tech",description:"Deep cobalt & navy blue gradients, cyan water highlights, high-energy tech look.",category:"Vibrant",fontHeading:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',fontBody:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',radius:"12px",colors:{primary:"#0284c7",primaryHover:"#0369a1",secondary:"#64748b",accent:"#06b6d4",background:"#f0f9ff",surface:"#ffffff",text:"#082f49",textMuted:"#0369a1",border:"#bae6fd",cardBg:"#ffffff",headerBg:"rgba(255, 255, 255, 0.95)",headerText:"#082f49",footerBg:"#082f49",footerText:"#e0f2fe"},cssContent:""},{id:"emerald",name:"Emerald / Eco Forest",description:"Botanical deep greens, mint highlights, crisp white cards, organic and sustainable tone.",category:"Modern",fontHeading:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',fontBody:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',radius:"8px",colors:{primary:"#059669",primaryHover:"#047857",secondary:"#6b7280",accent:"#10b981",background:"#f0fdf4",surface:"#ffffff",text:"#064e3b",textMuted:"#047857",border:"#bbf7d0",cardBg:"#ffffff",headerBg:"rgba(255, 255, 255, 0.95)",headerText:"#064e3b",footerBg:"#064e3b",footerText:"#d1fae5"},cssContent:""},{id:"purple",name:"Purple / Creative Amethyst",description:"Deep plum and violet canvas, neon magenta and electric purple accents for studios.",category:"Vibrant",fontHeading:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',fontBody:'"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, sans-serif',radius:"12px",colors:{primary:"#8b5cf6",primaryHover:"#7c3aed",secondary:"#a855f7",accent:"#ec4899",background:"#faf5ff",surface:"#ffffff",text:"#3b0764",textMuted:"#6b21a8",border:"#e9d5ff",cardBg:"#ffffff",headerBg:"rgba(255, 255, 255, 0.95)",headerText:"#3b0764",footerBg:"#3b0764",footerText:"#f3e8ff"},cssContent:""}];Ie.forEach(a=>{a.cssContent=dt(a)});const Ia=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Home — My Website</title>
  <meta name="description" content="Welcome to our modern website built with Website Builder.">
  <link rel="icon" href="src/local.png">
  <link rel="stylesheet" href="css/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Header Navbar -->
  <header class="navbar">
    <div class="container nav-content">
      <a href="index.html" class="brand">
        <span class="brand-badge">⚡</span>
        <span class="brand-text">Modern<strong>Studio</strong></span>
      </a>
      <nav class="nav-links">
        <a href="index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="contact.html" class="btn btn-outline btn-sm">Get in Touch</a>
        <a href="#explore" class="btn btn-primary btn-sm">Get Started</a>
      </div>
    </div>
  </header>

  <!-- Hero Content Section -->
  <main class="content-container">
    <section class="section">
      <div class="container">
        <div class="badge">🚀 Instant Website Studio</div>
        <h1 class="hero-title">Build stunning websites with effortless precision</h1>
        <div class="rich-text">
          <p class="lead">
            Design and customize rich single-page or multi-page websites directly in your browser. All your assets, styles, and pages are organized seamlessly in local browser storage.
          </p>
        </div>
        <div style="display: flex; gap: 1rem; margin-top: 1.5rem; margin-bottom: 2.5rem; flex-wrap: wrap;">
          <a href="about.html" class="btn btn-primary btn-lg">Learn More About Us →</a>
          <a href="contact.html" class="btn btn-secondary btn-lg">Contact Sales</a>
        </div>

        <!-- Hero Local Image -->
        <div class="hero-media" style="margin-top: 2rem;">
          <img src="src/local.png" alt="Website Hero Visual" class="img-responsive" style="box-shadow: var(--shadow-lg);">
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="explore" class="section section-surface">
      <div class="container">
        <div style="text-align: center; margin-bottom: 3rem;">
          <span class="badge">Core Features</span>
          <h2>Everything you need to publish</h2>
          <div class="rich-text">
            <p style="max-width: 600px; margin: 0 auto; color: var(--text-muted);">
              From visual text editing to real-time CSS customization, build pages that look great everywhere.
            </p>
          </div>
        </div>

        <div class="grid grid-3">
          <div class="card">
            <h3>🎨 Visual CSS Sub-Editor</h3>
            <div class="rich-text">
              <p>Adjust brand colors, headings, borders, and hover states with live instant feedback.</p>
            </div>
            <a href="about.html" class="btn btn-outline btn-sm">Read More →</a>
          </div>

          <div class="card">
            <h3>📂 Local Assets &amp; Blobs</h3>
            <div class="rich-text">
              <p>Upload local image blobs safely stored in IndexedDB and exported as clean relative file paths.</p>
            </div>
            <a href="about.html" class="btn btn-outline btn-sm">Read More →</a>
          </div>

          <div class="card">
            <h3>📦 Production ZIP Export</h3>
            <div class="rich-text">
              <p>Download a clean production bundle with your pages, single stylesheet, and local image files.</p>
            </div>
            <a href="contact.html" class="btn btn-outline btn-sm">Read More →</a>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div>
          <a href="index.html" class="brand" style="color: var(--footer-text);">⚡ ModernStudio</a>
          <p style="margin-top: 0.75rem; font-size: 0.9rem; opacity: 0.8;">
            Empowering modern creators with instant browser-based web design.
          </p>
        </div>
        <div>
          <h4 style="color: var(--footer-text);">Quick Navigation</h4>
          <ul style="list-style: none; padding: 0;">
            <li><a href="index.html" style="color: inherit; opacity: 0.8;">Home</a></li>
            <li><a href="about.html" style="color: inherit; opacity: 0.8;">About Us</a></li>
            <li><a href="contact.html" style="color: inherit; opacity: 0.8;">Contact</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2026 ModernStudio. All rights reserved. Generated with Website Builder.</p>
      </div>
    </div>
  </footer>

</body>
</html>`,Ba=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>About Us — My Website</title>
  <meta name="description" content="Learn more about our team and mission.">
  <link rel="icon" href="src/local.png">
  <link rel="stylesheet" href="css/styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Header Navbar -->
  <header class="navbar">
    <div class="container nav-content">
      <a href="index.html" class="brand">
        <span class="brand-badge">⚡</span>
        <span class="brand-text">Modern<strong>Studio</strong></span>
      </a>
      <nav class="nav-links">
        <a href="index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="contact.html" class="btn btn-primary btn-sm">Get in Touch</a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="section">
    <div class="container">
      <div class="badge">About Our Mission</div>
      <h1>We build tools that make the web faster and more creative</h1>
      
      <div class="rich-text" style="margin-top: 1.5rem;">
        <p class="lead">
          Our team is dedicated to providing high-performance, accessible, and intuitive tools that bridge the gap between visual design and clean code.
        </p>
        <p>
          Whether you are launching a fast SaaS landing page, building a portfolio, or drafting a multi-page agency site, our platform gives you full control over your HTML, CSS, and media assets.
        </p>
      </div>

      <div class="grid grid-2" style="margin-top: 3rem;">
        <div class="card">
          <h3>Our Philosophy</h3>
          <div class="rich-text">
            <p>We believe in clean web standards: pure semantic HTML5, adaptive CSS3 variables, zero unnecessary runtime bloat, and total privacy with local storage.</p>
          </div>
        </div>

        <div class="card">
          <h3>Offline-First Freedom</h3>
          <div class="rich-text">
            <p>Your data stays inside your browser via IndexedDB. Export anytime as standard ZIP files ready to deploy anywhere.</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-bottom">
      <p>&copy; 2026 ModernStudio. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>`,Ha=`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Contact Us — My Website</title>
  <meta name="description" content="Get in touch with our team today.">
  <link rel="icon" href="src/local.png">
  <link rel="stylesheet" href="css/styles.css">
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet">
</head>
<body>

  <!-- Header Navbar -->
  <header class="navbar">
    <div class="container nav-content">
      <a href="index.html" class="brand">
        <span class="brand-badge">⚡</span>
        <span class="brand-text">Modern<strong>Studio</strong></span>
      </a>
      <nav class="nav-links">
        <a href="index.html" class="nav-link">Home</a>
        <a href="about.html" class="nav-link">About</a>
        <a href="contact.html" class="nav-link">Contact</a>
      </nav>
      <div class="nav-actions">
        <a href="index.html" class="btn btn-outline btn-sm">Back to Home</a>
      </div>
    </div>
  </header>

  <!-- Main Section -->
  <main class="section">
    <div class="container" style="max-width: 720px;">
      <div class="badge">Let's Connect</div>
      <h1>Contact Our Team</h1>
      <div class="rich-text">
        <p class="lead">Have a question or want to collaborate? Send us a message and we will respond promptly.</p>
      </div>

      <div class="card" style="margin-top: 2rem;">
        <form onsubmit="event.preventDefault(); alert('Thank you! Message received.');">
          <label style="font-weight: 600; display: block; margin-bottom: 0.35rem;">Your Name</label>
          <input type="text" placeholder="John Doe" required>

          <label style="font-weight: 600; display: block; margin-bottom: 0.35rem;">Email Address</label>
          <input type="email" placeholder="john@example.com" required>

          <label style="font-weight: 600; display: block; margin-bottom: 0.35rem;">Message</label>
          <textarea rows="5" placeholder="How can we help you?" required></textarea>

          <button type="submit" class="btn btn-primary" style="margin-top: 1rem; width: 100%;">Send Message →</button>
        </form>
      </div>
    </div>
  </main>

  <footer class="footer">
    <div class="container footer-bottom">
      <p>&copy; 2026 ModernStudio. All rights reserved.</p>
    </div>
  </footer>

</body>
</html>`;function J(a,t="light"){const n=Ie.find(p=>p.id===t)||Ie[1],s=Date.now(),l=n.cssContent||dt(n),f=[{id:"file-index-html",name:"index.html",path:"index.html",type:"html",content:Ia,isPrimary:!0,createdAt:s,updatedAt:s},{id:"file-about-html",name:"about.html",path:"about.html",type:"html",content:Ba,isPrimary:!1,createdAt:s,updatedAt:s},{id:"file-contact-html",name:"contact.html",path:"contact.html",type:"html",content:Ha,isPrimary:!1,createdAt:s,updatedAt:s},{id:"file-single-css",name:"styles.css",path:"css/styles.css",type:"css",content:l,isPrimary:!0,createdAt:s,updatedAt:s},{id:"file-hero-image",name:"local.png",path:"src/local.png",type:"image",content:"",blob:tt,blobUrl:URL.createObjectURL(tt),isExternal:!1,mimeType:"image/svg+xml",size:tt.size,createdAt:s,updatedAt:s}];return{id:`proj-${s}`,name:a||"Modern Studio Website",description:`Created with ${n.name} theme template.`,template:n.id,files:f,activeFileId:"file-index-html",activeCssFileId:"file-single-css",createdAt:s,updatedAt:s,settings:{title:"Modern Studio Website",metaDescription:"An offline-capable website built with Website Builder.",themeColor:n.colors.primary}}}J("Modern Studio Website","light"),J("Minimal Portfolio","white"),J("Dark Cyber Tech","dark");J("Minimal Studio","white"),J("Modern Indigo Site","light"),J("Dark Tech Site","dark"),J("Pitch Black OLED","black"),J("Warm Editorial","warm"),J("Ocean Marine Tech","ocean"),J("Emerald Eco Forest","emerald"),J("Purple Creative Amethyst","purple"),J("ApexCloud Platform","dark"),J("Studio Agency","light"),J("Modern SPA","light"),J("Multi-Page Web","light"),J("Landing Page","light");const Pa="DevTools_WebsiteBuilder_DB",Da=1,ye="projects",Be="asset_blobs",mt="website_builder_active_id";let $e=null;async function ut(){return $e||new Promise((a,t)=>{const n=indexedDB.open(Pa,Da);n.onupgradeneeded=s=>{const l=s.target.result;l.objectStoreNames.contains(ye)||l.createObjectStore(ye,{keyPath:"id"}),l.objectStoreNames.contains(Be)||l.createObjectStore(Be,{keyPath:"id"})},n.onsuccess=()=>{$e=n.result,a($e)},n.onerror=()=>{t(n.error)}})}function Ma(a){const t=a.files.map(n=>{const{blobUrl:s,...l}=n;return l});return{...a,files:t}}async function Oa(a){const t=await ut(),n=Ma(a);return new Promise((s,l)=>{const f=t.transaction([ye,Be],"readwrite"),p=f.objectStore(ye),w=f.objectStore(Be);p.put(n);for(const d of a.files)d.type==="image"&&d.blob&&w.put({id:`${a.id}_${d.id}`,fileId:d.id,projectId:a.id,blob:d.blob,mimeType:d.mimeType||"image/png"});f.oncomplete=()=>{try{localStorage.setItem(mt,a.id)}catch{}s()},f.onerror=()=>{l(f.error)}})}const jt=Oa;async function Ot(){const a=await ut();return new Promise((t,n)=>{const f=a.transaction(ye,"readonly").objectStore(ye).getAll();f.onsuccess=()=>{const p=f.result||[];t(p.sort((w,d)=>d.updatedAt-w.updatedAt))},f.onerror=()=>{n(f.error)}})}async function _a(a){const t=await ut();return new Promise((n,s)=>{const l=t.transaction([ye,Be],"readwrite");l.objectStore(ye).delete(a),l.oncomplete=()=>{n()},l.onerror=()=>{s(l.error)}})}const Fa=_a;async function at(a){try{localStorage.setItem(mt,a)}catch{}}async function $a(){try{return localStorage.getItem(mt)}catch{return null}}function Ua(a,t){let n=a;n=n.replace(/<script id="__wb_navigation_interceptor">[\s\S]*?<\/script>/gi,""),n=n.replace(/<script id="__wb_editor_sync">[\s\S]*?<\/script>/gi,""),n=n.replace(/<script id="__wb_preview_sync">[\s\S]*?<\/script>/gi,""),n=n.replace(/<style id="__wb_project_styles">[\s\S]*?<\/style>/gi,""),n=n.replace(/<style id="__wb_editor_helpers">[\s\S]*?<\/style>/gi,""),n=n.replace(/\s+contenteditable=["'][^"']*["']/gi,""),n=n.replace(/\s+spellcheck=["'][^"']*["']/gi,"");const s=new Map;return t.forEach(l=>{l.type==="image"&&l.blobUrl&&s.set(l.blobUrl,l.path)}),n=n.replace(/src=["'](blob:[^"']+)["']/gi,(l,f)=>{const p=s.get(f);return p?`src="${p}"`:l}),n=n.replace(/\s+data-origin-src=["'][^"']+["']/gi,""),n}async function za(a){const t=new Qt;for(const p of a.files)if(p.type==="html"){const w=Ua(p.content,a.files);t.file(p.path,w)}else if(p.type==="css"||p.type==="js")t.file(p.path,p.content);else if(p.type==="image"&&!p.isExternal&&p.blob){const w=await p.blob.arrayBuffer();t.file(p.path,w,{binary:!0})}const n=await t.generateAsync({type:"blob",compression:"DEFLATE",compressionOptions:{level:9}}),s=URL.createObjectURL(n),l=document.createElement("a");l.href=s;const f=a.name.toLowerCase().replace(/[^a-z0-9_-]/g,"-");l.download=`${f}-site.zip`,document.body.appendChild(l),l.click(),document.body.removeChild(l),URL.revokeObjectURL(s)}const qa=za;async function Wa(a){const t=a.files.find(v=>v.name==="index.html"||v.isPrimary)||a.files.find(v=>v.type==="html");if(!t)return;let n=t.content;const s=a.files.filter(v=>v.type==="css");let l="";s.forEach(v=>{l+=`
/* --- ${v.name} --- */
${v.content}
`}),l&&(n=n.replace("</head>",`<style>
${l}
</style>
</head>`));for(const v of a.files)if(v.type==="image"&&v.blob){const N=await new Promise(j=>{const R=new FileReader;R.onloadend=()=>j(R.result),R.readAsDataURL(v.blob)});v.blobUrl&&(n=n.split(v.blobUrl).join(N)),n=n.split(v.path).join(N),n=n.split(v.name).join(N)}const f=new Blob([n],{type:"text/html"}),p=URL.createObjectURL(f),w=document.createElement("a");w.href=p;const d=a.name.toLowerCase().replace(/[^a-z0-9_-]/g,"-");w.download=`${d}-standalone.html`,document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(p)}const Va=({project:a,onNewProject:t,onOpenProjectManager:n,onExportZip:s,onExportHtml:l,onUpdateProjectName:f,isSaving:p=!1})=>{const[w,d]=m.useState(!1),[v,N]=m.useState(a.name),[j,R]=m.useState(!1),[T,E]=m.useState(!1),z=()=>{v.trim()&&v!==a.name&&f(v.trim()),d(!1)},D=async()=>{E(!0),R(!1);try{await s()}finally{E(!1)}},P=async()=>{E(!0),R(!1);try{await l()}finally{E(!1)}};return e.jsxs("header",{className:"h-13 px-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-4 shrink-0 select-none shadow-xs z-30",children:[e.jsxs(kt,{align:"center",gap:"2.5",className:"shrink-0",children:[e.jsxs(Le,{size:"sm",variant:"primary",onClick:t,className:"flex items-center gap-1.5 font-medium shadow-xs",title:"Create a new website project from template",children:[e.jsx(ve,{className:"w-4 h-4"}),e.jsx("span",{children:"New"})]}),e.jsxs(Le,{size:"sm",variant:"outline",onClick:n,className:"flex items-center gap-1.5 font-medium border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800",title:"Open saved projects from browser local storage",children:[e.jsx(nt,{className:"w-4 h-4 text-sky-500"}),e.jsx("span",{children:"Open (Local Storage)"})]}),e.jsxs("div",{className:"relative",children:[e.jsxs(Le,{size:"sm",variant:"outline",onClick:()=>R(!j),disabled:T,className:"flex items-center gap-1.5 font-medium border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800",title:"Export website project",children:[T?e.jsx(Ct,{className:"w-4 h-4 animate-spin text-amber-500"}):e.jsx(Rt,{className:"w-4 h-4 text-emerald-500"}),e.jsx("span",{children:"Export"}),e.jsx(Lt,{className:"w-3.5 h-3.5 opacity-60 ml-0.5"})]}),j&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>R(!1)}),e.jsxs("div",{className:"absolute left-0 mt-1.5 w-64 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-100",children:[e.jsxs("button",{onClick:D,className:"w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-colors",children:[e.jsx(ea,{className:"w-5 h-5 text-emerald-500 shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-slate-900 dark:text-slate-100",children:"Export as ZIP Archive"}),e.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",children:"All HTML pages, single styles.css, & local image files with relative paths."})]})]}),e.jsxs("button",{onClick:P,className:"w-full flex items-start gap-3 p-2.5 rounded-lg text-left hover:bg-slate-100 dark:hover:bg-slate-700/70 transition-colors",children:[e.jsx(ta,{className:"w-5 h-5 text-sky-500 shrink-0 mt-0.5"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-xs font-semibold text-slate-900 dark:text-slate-100",children:"Export Standalone HTML"}),e.jsx("div",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",children:"Single self-contained HTML file with inlined CSS & embedded images."})]})]})]})]})]})]}),e.jsx("div",{className:"flex items-center gap-2 max-w-md min-w-0",children:w?e.jsx("input",{type:"text",value:v,onChange:K=>N(K.target.value),onBlur:z,onKeyDown:K=>{K.key==="Enter"&&z(),K.key==="Escape"&&(N(a.name),d(!1))},autoFocus:!0,className:"text-sm font-semibold bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-2.5 py-1 rounded-md border border-sky-500 focus:outline-none w-56"}):e.jsxs("button",{onClick:()=>{N(a.name),d(!0)},className:"group flex items-center gap-1.5 px-2.5 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800/80 transition-colors text-left truncate",title:"Click to rename project",children:[e.jsx(At,{className:"w-4 h-4 text-sky-500 shrink-0"}),e.jsx("span",{className:"text-sm font-semibold text-slate-800 dark:text-slate-200 truncate",children:a.name}),e.jsx(It,{className:"w-3.5 h-3.5 text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity ml-1"})]})}),e.jsx(kt,{align:"center",gap:"2.5",className:"shrink-0",children:e.jsx("div",{className:"flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/60 px-2.5 py-1 rounded-full border border-slate-200/80 dark:border-slate-800",children:p?e.jsxs(e.Fragment,{children:[e.jsx(Ct,{className:"w-3 h-3 animate-spin text-sky-500"}),e.jsx("span",{children:"Saving..."})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"}),e.jsx("span",{children:"Saved in IndexedDB"})]})})})]})},Ya=({project:a,activeFileId:t,onSelectFile:n,onSelectCssTab:s,onCreatePage:l,onUploadLocalImage:f,onRenameFile:p,onDeleteFile:w,onDuplicateFile:d,onApplyTemplate:v,onInsertImageToActivePage:N})=>{const[j,R]=m.useState("files"),[T,E]=m.useState(null),[z,D]=m.useState(""),[P,K]=m.useState(new Set),H=m.useRef(null),B=c=>{K(L=>{const I=new Set(L);return I.has(c)?I.delete(c):I.add(c),I})},Q=a.files.filter(c=>c.type==="html"),Z=a.files.find(c=>c.type==="css")||a.files.find(c=>c.name.endsWith(".css")),V=a.files.filter(c=>c.type==="image"),ee=(c,L)=>{L.stopPropagation(),E(c.id),D(c.name)},me=c=>{if(z.trim()){let L=z.trim();L.endsWith(".html")||(L+=".html"),p(c,L)}E(null)};return e.jsxs("aside",{className:"w-72 h-full bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 overflow-hidden select-none",children:[e.jsx("div",{className:"p-2.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0",children:e.jsxs("div",{className:"grid grid-cols-2 p-0.5 bg-slate-200/80 dark:bg-slate-800 rounded-lg text-xs font-medium",children:[e.jsxs("button",{onClick:()=>R("files"),className:`py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${j==="files"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs font-semibold":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`,children:[e.jsx(Se,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Files"})]}),e.jsxs("button",{onClick:()=>R("templates"),className:`py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${j==="templates"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs font-semibold":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`,children:[e.jsx(st,{className:"w-3.5 h-3.5 text-amber-500"}),e.jsx("span",{children:"Templates"})]})]})}),j==="files"&&e.jsxs("div",{className:"flex-1 flex flex-col min-h-0 overflow-hidden",children:[e.jsxs("div",{className:"p-2.5 grid grid-cols-2 gap-2 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shrink-0",children:[e.jsxs(Le,{size:"xs",variant:"primary",onClick:l,className:"flex items-center justify-center gap-1.5 py-2",children:[e.jsx(ve,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Page"})]}),e.jsxs(Le,{size:"xs",variant:"outline",onClick:()=>{var c;return(c=H.current)==null?void 0:c.click()},className:"flex items-center justify-center gap-1.5 py-2 border-slate-300 dark:border-slate-700",children:[e.jsx(aa,{className:"w-3.5 h-3.5 text-sky-500"}),e.jsx("span",{children:"Upload Image"})]}),e.jsx("input",{type:"file",ref:H,onChange:c=>{c.target.files&&c.target.files.length>0&&f(c.target.files)},accept:"image/*",multiple:!0,className:"hidden"})]}),e.jsxs("div",{className:"flex-1 overflow-y-auto p-2.5 space-y-4 text-xs",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between px-1.5 mb-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:e.jsxs("span",{children:["HTML Pages (",Q.length,")"]})}),e.jsx("div",{className:"space-y-1",children:Q.map(c=>{const L=c.id===t,I=c.name==="index.html"||c.isPrimary;return e.jsxs("div",{onClick:()=>n(c.id),className:`group flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer transition-all ${L?"bg-sky-500/15 text-sky-600 dark:text-sky-400 font-semibold border border-sky-500/30":"hover:bg-slate-200/60 dark:hover:bg-slate-800/60 text-slate-700 dark:text-slate-300"}`,children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0 flex-1",children:[e.jsx(Se,{className:`w-4 h-4 shrink-0 ${L?"text-sky-500":"text-slate-400"}`}),T===c.id?e.jsx("input",{type:"text",value:z,onChange:q=>D(q.target.value),onBlur:()=>me(c.id),onKeyDown:q=>{q.key==="Enter"&&me(c.id),q.key==="Escape"&&E(null)},onClick:q=>q.stopPropagation(),autoFocus:!0,className:"bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 px-1.5 py-0.5 rounded border border-sky-500 text-xs w-full focus:outline-none"}):e.jsx("span",{className:"truncate",children:c.name}),I&&e.jsx("span",{className:"text-[10px] px-1.5 py-0.2 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 rounded-full font-medium",children:"Home"})]}),!I&&T!==c.id&&e.jsxs("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity",children:[e.jsx("button",{onClick:q=>ee(c,q),title:"Rename page",className:"p-1 hover:text-sky-500 rounded",children:e.jsx(ra,{className:"w-3 h-3"})}),e.jsx("button",{onClick:q=>{q.stopPropagation(),d(c.id)},title:"Duplicate page",className:"p-1 hover:text-sky-500 rounded",children:e.jsx(Bt,{className:"w-3 h-3"})}),e.jsx("button",{onClick:q=>{q.stopPropagation(),w(c.id)},title:"Delete page",className:"p-1 hover:text-rose-500 rounded",children:e.jsx(Ae,{className:"w-3 h-3"})})]}),I&&e.jsx("span",{title:"index.html is undeletable",className:"inline-flex",children:e.jsx(Nt,{className:"w-3 h-3 text-slate-400 opacity-60 ml-1"})})]},c.id)})})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between px-1.5 mb-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:e.jsx("span",{children:"Stylesheet (Single CSS)"})}),Z&&e.jsxs("div",{onClick:s,className:"flex items-center justify-between px-2.5 py-2 rounded-lg cursor-pointer bg-slate-200/40 dark:bg-slate-800/40 hover:bg-slate-200/80 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700/60 text-slate-800 dark:text-slate-200",title:"Single project stylesheet (undeletable) - click to edit in CSS Editor",children:[e.jsxs("div",{className:"flex items-center gap-2 min-w-0",children:[e.jsx(st,{className:"w-4 h-4 text-purple-500 shrink-0"}),e.jsx("span",{className:"truncate font-medium",children:Z.name})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("span",{className:"text-[10px] text-purple-600 dark:text-purple-400 font-medium",children:"Edit CSS →"}),e.jsx("span",{title:"styles.css is single and undeletable",className:"inline-flex",children:e.jsx(Nt,{className:"w-3 h-3 text-slate-400 opacity-60"})})]})]})]}),e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center justify-between px-1.5 mb-1.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:e.jsxs("span",{children:["Local Images (",V.length,")"]})}),V.length===0?e.jsxs("div",{className:"p-3 text-center border border-dashed border-slate-300 dark:border-slate-700 rounded-lg text-slate-400",children:[e.jsx(Ne,{className:"w-5 h-5 mx-auto mb-1 opacity-50"}),e.jsx("p",{className:"text-[11px]",children:"No local images yet"}),e.jsx("button",{onClick:()=>{var c;return(c=H.current)==null?void 0:c.click()},className:"text-[11px] text-sky-500 font-medium mt-1 hover:underline",children:"Upload an image"})]}):e.jsx("div",{className:"space-y-2",children:V.map(c=>P.has(c.id)?e.jsxs("div",{className:"rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 p-2.5 shadow-xs transition-all",children:[e.jsxs("div",{className:"flex items-center justify-between gap-1.5 pb-2 border-b border-slate-100 dark:border-slate-700/60",children:[e.jsxs("div",{className:"flex items-center gap-1.5 min-w-0 flex-1",children:[e.jsx(Ne,{className:"w-3.5 h-3.5 text-sky-500 shrink-0"}),e.jsx("span",{className:"font-semibold text-slate-800 dark:text-slate-200 text-xs truncate",title:c.name,children:c.name})]}),e.jsxs("div",{className:"flex items-center gap-1 shrink-0",children:[e.jsxs("button",{onClick:()=>B(c.id),title:"Hide preview",className:"px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded text-[10px] font-medium flex items-center gap-1 transition-colors",children:[e.jsx(na,{className:"w-3 h-3"}),e.jsx("span",{children:"Hide"})]}),e.jsxs("button",{onClick:()=>N(c),title:"Insert into active HTML editor",className:"px-2 py-0.5 bg-sky-500 hover:bg-sky-600 text-white rounded text-[10px] font-semibold flex items-center gap-1 transition-colors shadow-2xs",children:[e.jsx(ve,{className:"w-3 h-3"}),e.jsx("span",{children:"Insert"})]}),e.jsx("button",{onClick:()=>w(c.id),title:"Delete image",className:"p-1 hover:text-rose-500 text-slate-400 rounded transition-colors",children:e.jsx(Ae,{className:"w-3 h-3"})})]})]}),e.jsxs("div",{className:"mt-2 rounded-lg bg-slate-100 dark:bg-slate-900/70 border border-slate-200 dark:border-slate-700/50 p-2 flex flex-col items-center justify-center min-h-[110px] max-h-[200px] overflow-hidden",children:[c.blobUrl||c.externalUrl?e.jsx("img",{src:c.blobUrl||c.externalUrl,alt:c.name,className:"max-h-[170px] w-auto max-w-full object-contain rounded shadow-2xs"}):e.jsxs("div",{className:"text-slate-400 text-center py-3",children:[e.jsx(Ne,{className:"w-6 h-6 mx-auto mb-1 opacity-50"}),e.jsx("span",{className:"text-[10px]",children:"Preview unavailable"})]}),e.jsxs("div",{className:"w-full flex items-center justify-between text-[10px] text-slate-400 mt-1.5 font-mono px-0.5",children:[e.jsx("span",{className:"truncate",children:c.path}),c.size?e.jsxs("span",{children:[(c.size/1024).toFixed(1)," KB"]}):null]})]})]},c.id):e.jsxs("div",{className:"group flex items-center justify-between p-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700/60 hover:border-sky-500/50 transition-all",children:[e.jsxs("div",{className:"flex items-center gap-2.5 min-w-0 flex-1",children:[e.jsx("div",{className:"w-8 h-8 rounded bg-slate-100 dark:bg-slate-700 overflow-hidden shrink-0 border border-slate-200 dark:border-slate-600 flex items-center justify-center",children:c.blobUrl||c.externalUrl?e.jsx("img",{src:c.blobUrl||c.externalUrl,alt:c.name,className:"w-full h-full object-cover"}):e.jsx(Ne,{className:"w-4 h-4 text-slate-400"})}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"font-medium text-slate-800 dark:text-slate-200 truncate text-xs",children:c.name}),e.jsx("div",{className:"text-[10px] text-slate-500 truncate",children:c.path})]})]}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsxs("button",{onClick:()=>B(c.id),title:"Preview image in file panel",className:"px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-600 dark:text-slate-300 rounded text-[10px] font-medium flex items-center gap-0.5 transition-colors",children:[e.jsx(Ht,{className:"w-3 h-3"}),e.jsx("span",{children:"Preview"})]}),e.jsxs("button",{onClick:()=>N(c),title:"Insert <img> tag into active HTML page",className:"px-1.5 py-0.5 bg-sky-500 hover:bg-sky-600 text-white rounded text-[10px] font-semibold flex items-center gap-0.5 transition-colors shadow-2xs",children:[e.jsx(ve,{className:"w-3 h-3"}),e.jsx("span",{children:"Insert"})]}),e.jsx("button",{onClick:()=>w(c.id),title:"Delete image asset",className:"p-1 hover:text-rose-500 text-slate-400 rounded transition-colors",children:e.jsx(Ae,{className:"w-3 h-3"})})]})]},c.id))})]})]})]}),j==="templates"&&e.jsxs("div",{className:"flex-1 flex flex-col min-h-0 overflow-hidden",children:[e.jsxs("div",{className:"p-3 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 shrink-0",children:[e.jsx("div",{className:"text-xs font-semibold text-slate-900 dark:text-slate-100",children:"Adaptive CSS Templates"}),e.jsxs("p",{className:"text-[11px] text-slate-500 dark:text-slate-400 mt-0.5",children:["Select a template to update ",e.jsx("code",{className:"text-purple-500",children:"styles.css"})," with adaptive styling for all HTML tags and brand colors."]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-2.5 space-y-2.5 text-xs",children:Ie.map(c=>{const L=a.template===c.id;return e.jsxs("div",{onClick:()=>v(c),className:`p-3 rounded-xl border transition-all cursor-pointer ${L?"bg-amber-500/10 border-amber-500/50 shadow-xs":"bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 hover:border-amber-500/40 hover:shadow-xs"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("div",{className:"font-semibold text-slate-900 dark:text-slate-100 text-xs",children:c.name}),L?e.jsxs("span",{className:"flex items-center gap-1 text-[10px] text-amber-600 dark:text-amber-400 font-semibold bg-amber-500/20 px-2 py-0.5 rounded-full",children:[e.jsx(ct,{className:"w-3 h-3"}),"Active"]}):e.jsx("span",{className:"text-[10px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-2 py-0.5 rounded-full",children:c.category})]}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400 line-clamp-2 mb-2.5",children:c.description}),e.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-700/60",children:[e.jsxs("div",{className:"flex items-center gap-1.5",children:[e.jsx("div",{className:"w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 shadow-xs",style:{backgroundColor:c.colors.primary},title:`Primary: ${c.colors.primary}`}),e.jsx("div",{className:"w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 shadow-xs",style:{backgroundColor:c.colors.background},title:`Background: ${c.colors.background}`}),e.jsx("div",{className:"w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 shadow-xs",style:{backgroundColor:c.colors.surface},title:`Surface: ${c.colors.surface}`}),e.jsx("div",{className:"w-4 h-4 rounded-full border border-slate-300 dark:border-slate-600 shadow-xs",style:{backgroundColor:c.colors.accent},title:`Accent: ${c.colors.accent}`})]}),e.jsx("button",{onClick:I=>{I.stopPropagation(),v(c)},className:`text-[11px] font-semibold px-2.5 py-1 rounded-md transition-colors ${L?"bg-amber-500 text-white":"bg-slate-100 dark:bg-slate-700 hover:bg-amber-500 hover:text-white text-slate-700 dark:text-slate-200"}`,children:L?"Applied":"Apply"})]})]},c.id)})})]})]})};function Ka(a){var H,B,Q,Z;const n=new DOMParser().parseFromString(a,"text/html"),s=n.querySelector("title"),l=s&&s.textContent||"Untitled Page",f=((H=n.querySelector('meta[name="description"]'))==null?void 0:H.getAttribute("content"))||"",p=((B=n.querySelector('meta[name="keywords"]'))==null?void 0:B.getAttribute("content"))||"",w=((Q=n.querySelector('meta[name="viewport"]'))==null?void 0:Q.getAttribute("content"))||"width=device-width, initial-scale=1.0",d=((Z=n.querySelector('link[rel="icon"], link[rel="shortcut icon"]'))==null?void 0:Z.getAttribute("href"))||"src/local.png",v=n.body,N=v.querySelector("header, .navbar, nav");let j=null;N?j={id:"node-header",type:"header",tagName:N.tagName.toLowerCase(),label:"Header Navbar",content:N.innerHTML,attributes:it(N),isLocked:!0}:j={id:"node-header",type:"header",tagName:"header",label:"Header Navbar (Empty)",content:'<div class="container nav-content"><a href="index.html" class="brand">⚡ MySite</a></div>',attributes:{class:"navbar"},isLocked:!0};const R=v.querySelector("footer, .footer");let T=null;R?T={id:"node-footer",type:"footer",tagName:R.tagName.toLowerCase(),label:"Footer Bar",content:R.innerHTML,attributes:it(R),isLocked:!0}:T={id:"node-footer",type:"footer",tagName:"footer",label:"Footer Bar",content:'<div class="container footer-bottom"><p>&copy; 2026 My Website</p></div>',attributes:{class:"footer"},isLocked:!0};const E=[],z=v.querySelector("main, .content-container, .main-content")||v,D=Array.from(z.children).filter(V=>{const ee=V.tagName.toLowerCase();return!(ee==="header"||ee==="footer"||ee==="script"||ee==="style")});let P=0;return D.forEach(V=>{const ee=lt(V,`content-node-${P++}`);ee&&E.push(ee)}),E.length===0&&E.push({id:`content-node-${Date.now()}`,type:"rich-text",tagName:"div",label:"Rich Edit Text Block",content:"<p>Welcome to your website! Click here or use the HTML editor to customize this text block with bold, colors, and formatting.</p>",attributes:{class:"rich-text"}}),{id:"node-html-root",type:"html",tagName:"html",label:"HTML Document",isLocked:!0,children:[{id:"node-title",type:"title",tagName:"title",label:`Title: ${l}`,content:l,isLocked:!1},{id:"node-seo",type:"seo",tagName:"meta",label:"SEO & Meta Options",attributes:{description:f,keywords:p,viewport:w},isLocked:!1},{id:"node-favicon",type:"favicon",tagName:"link",label:`Favicon (${d.split("/").pop()||"icon"})`,attributes:{rel:"icon",href:d},isLocked:!1},{id:"node-body",type:"body",tagName:"body",label:"Body",isLocked:!0,children:[j,{id:"node-content-group",type:"content",tagName:"main",label:"Content Container",isLocked:!0,children:E},T]}]}}function lt(a,t){var p,w,d,v;const n=a.tagName.toLowerCase(),s=it(a),l=s.class||"";if(l.includes("rich-text")||n==="blockquote"||n==="p"&&!a.closest(".rich-text")){const N=((p=a.textContent)==null?void 0:p.trim().substring(0,32))||"Text Block";return{id:t,type:"rich-text",tagName:n==="blockquote"?"blockquote":"div",label:`Rich Text Block: "${N}..."`,content:a.innerHTML,attributes:s}}if(["h1","h2","h3","h4","h5","h6"].includes(n)){const N=((w=a.textContent)==null?void 0:w.trim())||"Heading";return{id:t,type:"heading",tagName:n,label:`${n.toUpperCase()}: ${N.substring(0,28)}`,content:a.innerHTML,attributes:s}}if(n==="img"){s.src;const N=s.alt||"Image";return{id:t,type:"image",tagName:"img",label:`Image: ${N}`,attributes:s}}if(n==="button"||l.includes("btn")){const N=((d=a.textContent)==null?void 0:d.trim())||"Button";return{id:t,type:"button",tagName:n,label:`Button: [${N}]`,content:a.innerHTML,attributes:s}}if(l.includes("card")){const N=[];let j=0;return Array.from(a.children).forEach(R=>{const T=lt(R,`${t}-child-${j++}`);T&&N.push(T)}),{id:t,type:"card",tagName:"div",label:"Card Block",content:a.innerHTML,attributes:s,children:N.length>0?N:void 0}}if(n==="section"||l.includes("grid")||l.includes("container")){const N=[];let j=0;Array.from(a.children).forEach(T=>{const E=lt(T,`${t}-sec-${j++}`);E&&N.push(E)});const R=l.includes("grid");return{id:t,type:R?"grid":"section",tagName:n,label:R?"Grid Layout":`Section: ${s.id||l||n}`,content:a.innerHTML,attributes:s,children:N}}if(n==="hr"||l.includes("divider"))return{id:t,type:"divider",tagName:"hr",label:"Divider Line",attributes:s};if(n==="form")return{id:t,type:"form",tagName:"form",label:"Form & Input Block",content:a.innerHTML,attributes:s};const f=((v=a.textContent)==null?void 0:v.trim().substring(0,24))||n;return{id:t,type:"custom",tagName:n,label:`<${n}>: ${f}`,content:a.innerHTML,attributes:s}}function it(a){const t={};for(let n=0;n<a.attributes.length;n++){const s=a.attributes[n];t[s.name]=s.value}return t}function rt(a,t){const s=new DOMParser().parseFromString(t,"text/html"),l=Re(a,"title");if(l&&l.content){let d=s.querySelector("title");d||(d=s.createElement("title"),s.head.appendChild(d)),d.textContent=l.content}const f=Re(a,"seo");if(f&&f.attributes){if(f.attributes.description){let d=s.querySelector('meta[name="description"]');d||(d=s.createElement("meta"),d.setAttribute("name","description"),s.head.appendChild(d)),d.setAttribute("content",f.attributes.description)}if(f.attributes.keywords){let d=s.querySelector('meta[name="keywords"]');d||(d=s.createElement("meta"),d.setAttribute("name","keywords"),s.head.appendChild(d)),d.setAttribute("content",f.attributes.keywords)}}const p=Re(a,"favicon");if(p&&p.attributes&&p.attributes.href){let d=s.querySelector('link[rel="icon"], link[rel="shortcut icon"]');d||(d=s.createElement("link"),d.setAttribute("rel","icon"),s.head.appendChild(d)),d.setAttribute("href",p.attributes.href)}const w=Re(a,"body");if(w&&w.children){const d=w.children.find(T=>T.type==="header"),v=w.children.find(T=>T.type==="content"),N=w.children.find(T=>T.type==="footer"),j=s.body;let R="";d&&(R+=`
  <!-- Header Navbar -->
  <header ${ze(d.attributes)}>
    ${d.content||""}
  </header>
`),v&&v.children&&(R+=`
  <!-- Main Content Area -->
  <main class="content-container">
`,v.children.forEach(T=>{R+=_t(T,"    ")}),R+=`  </main>
`),N&&(R+=`
  <!-- Footer -->
  <footer ${ze(N.attributes)}>
    ${N.content||""}
  </footer>
`),j.innerHTML=R}return`<!DOCTYPE html>
${s.documentElement.outerHTML}`}function _t(a,t="  "){var s;const n=ze(a.attributes);if(a.type==="image")return`${t}<img ${n}>
`;if(a.type==="divider")return`${t}<hr ${n}>
`;if(a.type==="rich-text"){const l=a.tagName||"div",f=(((s=a.attributes)==null?void 0:s.class)||"").includes("rich-text"),p={...a.attributes};return!f&&l==="div"&&(p.class=`${p.class||""} rich-text`.trim()),`${t}<${l} ${ze(p)}>
${t}  ${a.content||""}
${t}</${l}>
`}if(a.children&&a.children.length>0){let l="";return a.children.forEach(f=>{l+=_t(f,`${t}  `)}),`${t}<${a.tagName} ${n}>
${l}${t}</${a.tagName}>
`}return`${t}<${a.tagName} ${n}>
${t}  ${a.content||""}
${t}</${a.tagName}>
`}function ze(a){return a?Object.entries(a).filter(([t,n])=>n!=null).map(([t,n])=>`${t}="${n}"`).join(" "):""}function Re(a,t){if(a.type===t)return a;if(a.children)for(const n of a.children){const s=Re(n,t);if(s)return s}return null}function Ft(a,t){if(a.id===t)return a;if(a.children)for(const n of a.children){const s=Ft(n,t);if(s)return s}return null}function Xa(a){const t=(n,s)=>{const l=new RegExp(`${n}:\\s*([^;]+);`,"i"),f=a.match(l);return f?f[1].trim():s};return{primary:t("--primary","#2563eb"),primaryHover:t("--primary-hover","#1d4ed8"),secondary:t("--secondary","#475569"),accent:t("--accent","#f59e0b"),background:t("--bg-color","#ffffff"),surface:t("--surface-color","#f8fafc"),text:t("--text-color","#0f172a"),textMuted:t("--text-muted","#64748b"),border:t("--border-color","#e2e8f0"),cardBg:t("--card-bg","#ffffff"),headerBg:t("--header-bg","#ffffff"),headerText:t("--header-text","#0f172a"),footerBg:t("--footer-bg","#0f172a"),footerText:t("--footer-text","#f8fafc")}}function Ja(a,t,n){const s=new RegExp(`(${t}:\\s*)([^;]+)(;)`,"i");if(s.test(a))return a.replace(s,`$1${n}$3`);const l=/:root\s*\{([\s\S]*?)\}/i;return l.test(a)?a.replace(l,(f,p)=>`:root {
  ${t}: ${n};${p}}`):`:root {
  ${t}: ${n};
}

`+a}function Ga(a,t){let n=a;const s={primary:"--primary",primaryHover:"--primary-hover",secondary:"--secondary",accent:"--accent",background:"--bg-color",surface:"--surface-color",text:"--text-color",textMuted:"--text-muted",border:"--border-color",cardBg:"--card-bg",headerBg:"--header-bg",headerText:"--header-text",footerBg:"--footer-bg",footerText:"--footer-text"};return Object.entries(t).forEach(([l,f])=>{if(f){const p=s[l];p&&(n=Ja(n,p,f))}}),n}function $t(a,t,n,s){const f=t.split(",").map(N=>N.trim()).filter(Boolean).map(N=>N.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));let p=null;const w=t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),d=new RegExp(`((?:^|\\n)[^\\S\\r\\n]*${w}\\s*\\{[\\s\\S]*?\\})`,"i");let v=a.match(d);if(!v)for(const N of f){const j=new RegExp(`((?:^|\\n)[^\\S\\r\\n]*[^{]*?(?:^|[\\s,])${N}(?:[\\s,{])[^{]*?\\{[\\s\\S]*?\\})`,"i");if(v=a.match(j),v)break}if(v){p=v[1];let N=p;const j=new RegExp(`(${n}:\\s*)([^;]+)(;)`,"i");j.test(N)?N=N.replace(j,`$1${s}$3`):N=N.replace(/\s*\}$/,`
  ${n}: ${s};
}`);const R=a.indexOf(p);return R!==-1?a.substring(0,R)+N+a.substring(R+p.length):a.replace(p,()=>N)}return`${a}

${t} {
  ${n}: ${s};
}`}function Ue(a,t,n){let s=a;for(const[l,f]of Object.entries(n))s=$t(s,t,l,f);return s}const Za=({project:a,activeFile:t,onChangeActiveFileContent:n,onChangeCssContent:s,selectedNodeId:l,onSelectNodeId:f,onInsertElementToActivePage:p})=>{const[w,d]=m.useState("css-editor"),[v,N]=m.useState(!1),[j,R]=m.useState({"node-html-root":!0,"node-body":!0,"node-content-group":!0}),T=a.files.find(o=>o.type==="css")||a.files.find(o=>o.name.endsWith(".css")),E=(T==null?void 0:T.content)||"",[z,D]=m.useState([E]),[P,K]=m.useState(0),H=m.useRef(!1),B=m.useRef(null),Q=m.useRef(E),Z=m.useRef(T==null?void 0:T.id);m.useEffect(()=>{(T==null?void 0:T.id)!==Z.current?(Z.current=T==null?void 0:T.id,Q.current=E,D([E]),K(0)):E!==Q.current&&(Q.current=E,H.current?H.current=!1:D(o=>{if(o[P]===E)return o;const A=[...o.slice(0,P+1),E].slice(-50);return K(A.length-1),A}))},[T==null?void 0:T.id,E,P]);const V=m.useCallback((o,h=!1)=>{if(Q.current=o,s(o),H.current){H.current=!1;return}const A=O=>{D(W=>{if(W[P]===O)return W;const pe=[...W.slice(0,P+1),O].slice(-50);return K(pe.length-1),pe})};h?(B.current&&(clearTimeout(B.current),B.current=null),A(o)):(B.current&&clearTimeout(B.current),B.current=setTimeout(()=>{A(o)},350))},[P,s]),ee=P>0,me=P<z.length-1,c=m.useCallback(()=>{if(P>0){B.current&&(clearTimeout(B.current),B.current=null);const o=P-1;K(o);const h=z[o];H.current=!0,Q.current=h,s(h)}},[P,z,s]),L=m.useCallback(()=>{if(P<z.length-1){B.current&&(clearTimeout(B.current),B.current=null);const o=P+1;K(o);const h=z[o];H.current=!0,Q.current=h,s(h)}},[P,z,s]);m.useEffect(()=>{if(w!=="css-editor")return;const o=h=>{(h.ctrlKey||h.metaKey)&&h.key.toLowerCase()==="z"?h.shiftKey?(h.preventDefault(),L()):(h.preventDefault(),c()):(h.ctrlKey||h.metaKey)&&h.key.toLowerCase()==="y"&&(h.preventDefault(),L())};return window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)},[w,c,L]);const I=m.useMemo(()=>Xa(E),[E]),q=m.useMemo(()=>Ka(t.content),[t.content]),oe=m.useMemo(()=>/(?:\.sidebar|\.menu-panel)[^{]*\{[^}]*position:\s*(sticky|fixed)/i.test(E),[E]),ae=m.useMemo(()=>/(?:\.sidebar|\.menu-panel)[^{]*\{[^}]*(?:backdrop-filter:\s*blur|-webkit-backdrop-filter:\s*blur)/i.test(E),[E]),$=(o,h)=>{const A=Ga(E,{[o]:h});V(A,!0)},ne=(o,h,A)=>{const O=$t(E,o,h,A);V(O,!0)},ge=o=>{R(h=>({...h,[o]:!h[o]}))},y=o=>{const h=W=>W.children?{...W,children:W.children.filter(U=>U.id!==o).map(h)}:W,A=h(q),O=rt(A,t.content);n(O),l===o&&f(null)},b=(o,h)=>{const A=O=>{const W=O.findIndex(he=>he.id===o);if(W===-1)return O.map(he=>({...he,children:he.children?A(he.children):void 0}));const U=h==="up"?W-1:W+1;if(U<0||U>=O.length)return O;const pe=[...O],[He]=pe.splice(W,1);return pe.splice(U,0,He),pe};if(q.children){const O={...q,children:A(q.children)},W=rt(O,t.content);n(W)}},C=(o,h)=>{const A=U=>U.id===o?{...U,content:h}:U.children?{...U,children:U.children.map(A)}:U,O=A(q),W=rt(O,t.content);n(W)},S=(o,h=0)=>{const A=o.children&&o.children.length>0,O=j[o.id]!==!1,W=l===o.id;return e.jsxs("div",{className:"text-xs select-none",children:[e.jsxs("div",{onClick:()=>f(o.id),className:`flex items-center justify-between py-1.5 px-2 rounded-md cursor-pointer transition-all ${W?"bg-sky-500/15 text-sky-600 dark:text-sky-400 font-semibold border border-sky-500/30":"hover:bg-slate-200/50 dark:hover:bg-slate-800/50 text-slate-700 dark:text-slate-300"}`,style:{paddingLeft:`${h*14+8}px`},children:[e.jsxs("div",{className:"flex items-center gap-1.5 min-w-0 flex-1",children:[A?e.jsx("button",{onClick:U=>{U.stopPropagation(),ge(o.id)},className:"p-0.5 hover:text-sky-500 text-slate-400",children:O?e.jsx(Lt,{className:"w-3 h-3"}):e.jsx(la,{className:"w-3 h-3"})}):e.jsx("span",{className:"w-3.5"}),o.type==="html"&&e.jsx(At,{className:"w-3.5 h-3.5 text-blue-500 shrink-0"}),o.type==="title"&&e.jsx(St,{className:"w-3.5 h-3.5 text-amber-500 shrink-0"}),o.type==="seo"&&e.jsx(Mt,{className:"w-3.5 h-3.5 text-purple-500 shrink-0"}),o.type==="favicon"&&e.jsx(Ne,{className:"w-3.5 h-3.5 text-emerald-500 shrink-0"}),o.type==="body"&&e.jsx(Fe,{className:"w-3.5 h-3.5 text-sky-500 shrink-0"}),o.type==="header"&&e.jsx(Fe,{className:"w-3.5 h-3.5 text-indigo-500 shrink-0"}),o.type==="footer"&&e.jsx(Fe,{className:"w-3.5 h-3.5 text-slate-500 shrink-0"}),o.type==="rich-text"&&e.jsx(Se,{className:"w-3.5 h-3.5 text-pink-500 shrink-0"}),o.type==="heading"&&e.jsx(St,{className:"w-3.5 h-3.5 text-amber-500 shrink-0"}),o.type==="image"&&e.jsx(Ne,{className:"w-3.5 h-3.5 text-emerald-500 shrink-0"}),o.type==="button"&&e.jsx(ia,{className:"w-3.5 h-3.5 text-teal-500 shrink-0"}),o.type==="card"&&e.jsx(ca,{className:"w-3.5 h-3.5 text-purple-500 shrink-0"}),o.type==="grid"&&e.jsx(Fe,{className:"w-3.5 h-3.5 text-blue-500 shrink-0"}),o.type==="divider"&&e.jsx("div",{className:"w-3.5 h-[1px] bg-slate-400 shrink-0"}),o.type==="custom"&&e.jsx(ot,{className:"w-3.5 h-3.5 text-slate-400 shrink-0"}),e.jsx("span",{className:"truncate",children:o.label})]}),!o.isLocked&&e.jsxs("div",{className:"flex items-center gap-1 opacity-0 group-hover:opacity-100",children:[e.jsx("button",{onClick:U=>{U.stopPropagation(),b(o.id,"up")},title:"Move up",className:"p-0.5 hover:text-sky-500 text-slate-400",children:e.jsx(da,{className:"w-2.5 h-2.5"})}),e.jsx("button",{onClick:U=>{U.stopPropagation(),b(o.id,"down")},title:"Move down",className:"p-0.5 hover:text-sky-500 text-slate-400",children:e.jsx(ma,{className:"w-2.5 h-2.5"})}),e.jsx("button",{onClick:U=>{U.stopPropagation(),y(o.id)},title:"Delete element",className:"p-0.5 hover:text-rose-500 text-slate-400",children:e.jsx(Ae,{className:"w-2.5 h-2.5"})})]})]}),A&&O&&e.jsx("div",{className:"space-y-0.5 mt-0.5",children:o.children.map(U=>S(U,h+1))})]},o.id)};return e.jsxs("aside",{className:"w-72 h-full bg-slate-50 dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 overflow-hidden select-none",children:[e.jsx("div",{className:"p-2.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shrink-0",children:e.jsxs("div",{className:"grid grid-cols-2 p-0.5 bg-slate-200/80 dark:bg-slate-800 rounded-lg text-xs font-medium",children:[e.jsxs("button",{onClick:()=>d("css-editor"),className:`py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${w==="css-editor"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs font-semibold":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`,children:[e.jsx(st,{className:"w-3.5 h-3.5 text-purple-500"}),e.jsx("span",{children:"CSS Editor"})]}),e.jsxs("button",{onClick:()=>d("dom-tree"),className:`py-1.5 px-3 rounded-md transition-all flex items-center justify-center gap-1.5 ${w==="dom-tree"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs font-semibold":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`,children:[e.jsx(sa,{className:"w-3.5 h-3.5 text-sky-500"}),e.jsx("span",{children:"App DOM Tree"})]})]})}),w==="css-editor"&&e.jsxs("div",{className:"flex-1 flex flex-col min-h-0 overflow-hidden",children:[e.jsxs("div",{className:"p-2.5 flex items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:"CSS Inspector"}),e.jsxs("div",{className:"flex items-center gap-0.5 border-l border-slate-200 dark:border-slate-700 pl-2",children:[e.jsx("button",{type:"button",id:"css-editor-undo-btn",onClick:c,disabled:!ee,className:"p-1 rounded text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer",title:"Undo CSS change (Ctrl+Z)","aria-label":"Undo CSS change",children:e.jsx(Pt,{className:"w-3.5 h-3.5"})}),e.jsx("button",{type:"button",id:"css-editor-redo-btn",onClick:L,disabled:!me,className:"p-1 rounded text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-colors cursor-pointer",title:"Redo CSS change (Ctrl+Y)","aria-label":"Redo CSS change",children:e.jsx(Dt,{className:"w-3.5 h-3.5"})})]})]}),e.jsxs("button",{onClick:()=>N(!v),className:"text-[11px] text-purple-600 dark:text-purple-400 hover:underline flex items-center gap-1 font-medium",children:[e.jsx(ot,{className:"w-3 h-3"}),e.jsx("span",{children:v?"Visual Controls":"Raw CSS Code"})]})]}),v?e.jsx("div",{className:"flex-1 p-2 flex flex-col min-h-0",children:e.jsx("textarea",{value:E,onChange:o=>V(o.target.value,!1),onBlur:()=>{B.current&&(clearTimeout(B.current),B.current=null,D(o=>{if(o[P]===E)return o;const h=[...o.slice(0,P+1),E].slice(-50);return K(h.length-1),h}))},className:"flex-1 w-full bg-slate-900 text-slate-100 font-mono text-xs p-2.5 rounded-lg border border-slate-700 focus:outline-none resize-none",spellCheck:!1})}):e.jsxs("div",{className:"flex-1 overflow-y-auto p-3 space-y-4 text-xs",children:[e.jsxs("div",{className:"p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs",children:[e.jsxs("div",{className:"font-semibold text-slate-900 dark:text-slate-100 text-xs mb-2.5 flex items-center justify-between",children:[e.jsx("span",{children:"Brand Colors Palette"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:":root vars"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Primary Color"}),e.jsx(se,{value:I.primary,onChange:o=>$("primary",o),showHexText:!0,size:"xs"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Primary Hover"}),e.jsx(se,{value:I.primaryHover,onChange:o=>$("primaryHover",o),showHexText:!0,size:"xs"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Accent Highlight"}),e.jsx(se,{value:I.accent,onChange:o=>$("accent",o),showHexText:!0,size:"xs"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Background Canvas"}),e.jsx(se,{value:I.background,onChange:o=>$("background",o),showHexText:!0,size:"xs"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Surface / Cards"}),e.jsx(se,{value:I.surface,onChange:o=>$("surface",o),showHexText:!0,size:"xs"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Text Foreground"}),e.jsx(se,{value:I.text,onChange:o=>$("text",o),showHexText:!0,size:"xs"})]})]})]}),e.jsxs("div",{className:"p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs",children:[e.jsxs("div",{className:"font-semibold text-slate-900 dark:text-slate-100 text-xs mb-2 flex items-center justify-between",children:[e.jsx("span",{children:"Header & Navbar"}),e.jsx("span",{className:"text-[10px] text-indigo-500 font-mono",children:"header, .navbar"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Header Background"}),e.jsx(se,{value:I.headerBg.startsWith("#")?I.headerBg:"#ffffff",onChange:o=>$("headerBg",o),showHexText:!0,size:"xs"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Header Text"}),e.jsx(se,{value:I.headerText.startsWith("#")?I.headerText:"#0f172a",onChange:o=>$("headerText",o),showHexText:!0,size:"xs"})]})]})]}),e.jsxs("div",{className:"p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs",children:[e.jsxs("div",{className:"font-semibold text-slate-900 dark:text-slate-100 text-xs mb-2 flex items-center justify-between",children:[e.jsx("span",{children:"Menu Panel / Sidebar"}),e.jsx("span",{className:"text-[10px] text-sky-500 font-mono",children:".sidebar, .menu-panel"})]}),e.jsxs("div",{className:"space-y-2.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Sidebar Position"}),e.jsxs("div",{className:"flex items-center gap-1",children:[e.jsx("button",{onClick:()=>ne(".sidebar, .menu-panel","float","left"),className:"px-2 py-0.5 bg-slate-100 dark:bg-slate-700 hover:bg-sky-500 hover:text-white rounded text-[10px] font-medium transition-colors cursor-pointer",children:"Left"}),e.jsx("button",{onClick:()=>ne(".sidebar, .menu-panel","float","right"),className:"px-2 py-0.5 bg-slate-100 dark:bg-slate-700 hover:bg-sky-500 hover:text-white rounded text-[10px] font-medium transition-colors cursor-pointer",children:"Right"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400 block font-medium",children:"Sticky Navigation"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Sticks during page scroll"})]}),e.jsx("button",{type:"button",id:"sidebar-sticky-toggle-btn",onClick:()=>{if(!oe){const h=Ue(E,".sidebar, .menu-panel",{position:"sticky",top:"1rem","z-index":"20"});V(h,!0)}else{const h=Ue(E,".sidebar, .menu-panel",{position:"static",top:"auto"});V(h,!0)}},className:`px-2.5 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${oe?"bg-sky-500 text-white font-semibold shadow-xs":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"}`,children:oe?"Enabled":"Disabled"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400 block font-medium",children:"Blurry (Frosted Glass)"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Backdrop blur effect"})]}),e.jsx("button",{type:"button",id:"sidebar-blurry-toggle-btn",onClick:()=>{if(!ae){const h=Ue(E,".sidebar, .menu-panel",{"backdrop-filter":"blur(12px)","-webkit-backdrop-filter":"blur(12px)","background-color":"rgba(255, 255, 255, 0.82)",border:"1px solid rgba(226, 232, 240, 0.7)"});V(h,!0)}else{const h=Ue(E,".sidebar, .menu-panel",{"backdrop-filter":"none","-webkit-backdrop-filter":"none","background-color":"var(--surface-color, #ffffff)"});V(h,!0)}},className:`px-2.5 py-1 rounded text-[11px] font-medium transition-all cursor-pointer ${ae?"bg-purple-600 text-white font-semibold shadow-xs":"bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600"}`,children:ae?"Enabled":"Disabled"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Border Radius"}),e.jsxs("select",{onChange:o=>ne(".sidebar, .menu-panel","border-radius",o.target.value),className:"bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded text-[11px] border-0 cursor-pointer",children:[e.jsx("option",{value:"0px",children:"0px Sharp"}),e.jsx("option",{value:"4px",children:"4px Square"}),e.jsx("option",{value:"8px",children:"8px Default"}),e.jsx("option",{value:"16px",children:"16px Rounded"})]})]})]})]}),e.jsxs("div",{className:"p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs",children:[e.jsxs("div",{className:"font-semibold text-slate-900 dark:text-slate-100 text-xs mb-2 flex items-center justify-between",children:[e.jsx("span",{children:"Headings (h1-h6)"}),e.jsx("span",{className:"text-[10px] text-amber-500 font-mono",children:"h1, h2, h3"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Heading Weight"}),e.jsxs("select",{onChange:o=>ne("h1, h2, h3","font-weight",o.target.value),className:"bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded text-[11px] border-0",children:[e.jsx("option",{value:"600",children:"600 SemiBold"}),e.jsx("option",{value:"700",children:"700 Bold"}),e.jsx("option",{value:"800",children:"800 ExtraBold"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Line Height"}),e.jsxs("select",{onChange:o=>ne("h1, h2, h3","line-height",o.target.value),className:"bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded text-[11px] border-0",children:[e.jsx("option",{value:"1.15",children:"1.15 Tight"}),e.jsx("option",{value:"1.25",children:"1.25 Standard"}),e.jsx("option",{value:"1.4",children:"1.4 Relaxed"})]})]})]})]}),e.jsxs("div",{className:"p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs",children:[e.jsxs("div",{className:"font-semibold text-slate-900 dark:text-slate-100 text-xs mb-2 flex items-center justify-between",children:[e.jsx("span",{children:"Buttons & Hover Effects"}),e.jsx("span",{className:"text-[10px] text-emerald-500 font-mono",children:"button, .btn"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Corner Radius"}),e.jsxs("select",{onChange:o=>ne("button, .btn","border-radius",o.target.value),className:"bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded text-[11px] border-0",children:[e.jsx("option",{value:"0px",children:"0px Sharp"}),e.jsx("option",{value:"4px",children:"4px Square"}),e.jsx("option",{value:"8px",children:"8px Rounded"}),e.jsx("option",{value:"12px",children:"12px Large"}),e.jsx("option",{value:"9999px",children:"Pill Full"})]})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Hover Animation"}),e.jsxs("select",{onChange:o=>ne(".btn-primary:hover","transform",o.target.value),className:"bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200 px-1.5 py-0.5 rounded text-[11px] border-0",children:[e.jsx("option",{value:"translateY(-1px)",children:"Lift Up (-1px)"}),e.jsx("option",{value:"scale(1.03)",children:"Scale Up (1.03)"}),e.jsx("option",{value:"none",children:"No transform"})]})]})]})]}),e.jsxs("div",{className:"p-2.5 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-xs",children:[e.jsxs("div",{className:"font-semibold text-slate-900 dark:text-slate-100 text-xs mb-2 flex items-center justify-between",children:[e.jsx("span",{children:"Footer Bar"}),e.jsx("span",{className:"text-[10px] text-slate-500 font-mono",children:"footer"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Footer Background"}),e.jsx(se,{value:I.footerBg.startsWith("#")?I.footerBg:"#0f172a",onChange:o=>$("footerBg",o),showHexText:!0,size:"xs"})]}),e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-slate-600 dark:text-slate-400",children:"Footer Text"}),e.jsx(se,{value:I.footerText.startsWith("#")?I.footerText:"#ffffff",onChange:o=>$("footerText",o),showHexText:!0,size:"xs"})]})]})]})]})]}),w==="dom-tree"&&e.jsxs("div",{className:"flex-1 flex flex-col min-h-0 overflow-hidden",children:[e.jsx("div",{className:"p-2.5 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/40 shrink-0 flex items-center justify-between",children:e.jsxs("span",{className:"text-[11px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider",children:["Page Structure: ",t.name]})}),e.jsxs("div",{className:"p-2 border-b border-slate-200 dark:border-slate-800 bg-slate-100/60 dark:bg-slate-800/40 shrink-0",children:[e.jsx("div",{className:"text-[10px] font-medium text-slate-500 mb-1",children:"Insert Element to Content:"}),e.jsxs("div",{className:"flex flex-wrap gap-1",children:[e.jsx("button",{onClick:()=>p("rich-text"),className:"px-1.5 py-1 bg-white dark:bg-slate-700 hover:bg-sky-500 hover:text-white rounded text-[10px] font-medium shadow-xs",title:"Add Rich Edit Text Block (Single block in DOM)",children:"+ Text Block"}),e.jsx("button",{onClick:()=>p("heading"),className:"px-1.5 py-1 bg-white dark:bg-slate-700 hover:bg-sky-500 hover:text-white rounded text-[10px] font-medium shadow-xs",children:"+ Heading"}),e.jsx("button",{onClick:()=>p("button"),className:"px-1.5 py-1 bg-white dark:bg-slate-700 hover:bg-sky-500 hover:text-white rounded text-[10px] font-medium shadow-xs",children:"+ Button(OK)"}),e.jsx("button",{onClick:()=>p("card"),className:"px-1.5 py-1 bg-white dark:bg-slate-700 hover:bg-sky-500 hover:text-white rounded text-[10px] font-medium shadow-xs",children:"+ Card"}),e.jsx("button",{onClick:()=>p("image"),className:"px-1.5 py-1 bg-white dark:bg-slate-700 hover:bg-sky-500 hover:text-white rounded text-[10px] font-medium shadow-xs",children:"+ Image"})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-2 space-y-1",children:S(q)}),l&&e.jsx("div",{className:"p-2.5 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/90 shrink-0 text-xs",children:(()=>{const o=Ft(q,l);return o?e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-slate-800 dark:text-slate-200",children:o.label}),e.jsxs(oa,{size:"xs",variant:"outline",children:["<",o.tagName,">"]})]}),o.type==="title"&&e.jsxs("div",{children:[e.jsx("label",{className:"text-[10px] text-slate-400 block mb-0.5",children:"Page Title"}),e.jsx("input",{type:"text",value:o.content||"",onChange:h=>C(o.id,h.target.value),className:"w-full text-xs p-1 rounded border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900"})]})]}):null})()})]})]})},Tt={desktop:{width:1280,height:800,label:"Desktop (1280px)"},laptop:{width:1024,height:700,label:"Laptop (1024px)"},tablet:{width:768,height:1024,label:"Tablet (768px)"},mobile:{width:375,height:667,label:"Mobile (375px)"},responsive:{width:0,height:0,label:"Full Width"}};function Ut(a,t){const n={};return t.files.forEach(s=>{if(s.type==="image"){const l=s.isExternal?s.externalUrl||"":s.blobUrl||"";l&&(n[s.path]=l,n[`/${s.path}`]=l,n[`./${s.path}`]=l,n[`../${s.path}`]=l,n[s.name]=l)}}),a.replace(/src=["']([^"']+)["']/gi,(s,l)=>{if(l.startsWith("http://")||l.startsWith("https://")||l.startsWith("data:"))return s;const f=l.replace(/^\.\//,"").replace(/^\//,"");if(n[f])return`src="${n[f]}" data-origin-src="${l}"`;const p=f.split("/").pop()||"";return n[p]?`src="${n[p]}" data-origin-src="${l}"`:s})}function je(a,t,n="WEBSITE_NAVIGATE"){let s=a.content||"<!DOCTYPE html><html><head><title>Preview</title></head><body><p>Empty page</p></body></html>";s=Ut(s,t);const l=t.files.filter(d=>d.type==="css");let f="";l.forEach(d=>{f+=`
/* ${d.name} */
${d.content}
`});const p=`<style id="__wb_project_styles">
${f}
</style>`;s.includes("</head>")?s=s.replace("</head>",`${p}
</head>`):s=`${p}
${s}`;const w=`
<script id="__wb_preview_sync">
(function() {
  // Navigation interceptor
  document.addEventListener('click', function(e) {
    var target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
    }
    if (target && target.tagName === 'A') {
      var href = target.getAttribute('href');
      if (href && !href.startsWith('http://') && !href.startsWith('https://') && !href.startsWith('#') && !href.startsWith('mailto:') && !href.startsWith('tel:') && !href.startsWith('javascript:')) {
        e.preventDefault();
        window.parent.postMessage({
          type: '${n}',
          page: href,
          targetHref: href
        }, '*');
      }
    }
  }, true);

  // Scroll position preservation
  var fileKey = '__wb_prev_pos_' + encodeURIComponent('${a.id||a.name}');
  try {
    var savedPos = sessionStorage.getItem(fileKey);
    if (savedPos) {
      var parsed = JSON.parse(savedPos);
      if (parsed && typeof parsed.y === 'number') {
        setTimeout(function() {
          window.scrollTo(parsed.x || 0, parsed.y);
        }, 10);
      }
    }
  } catch (e) {}

  window.addEventListener('scroll', function() {
    var sx = window.scrollX || document.documentElement.scrollLeft || 0;
    var sy = window.scrollY || document.documentElement.scrollTop || 0;
    try {
      sessionStorage.setItem(fileKey, JSON.stringify({ x: sx, y: sy }));
    } catch(e) {}
    window.parent.postMessage({
      type: 'PREVIEW_SCROLL_UPDATE',
      scrollX: sx,
      scrollY: sy
    }, '*');
  }, { passive: true });

  // Live style and content update message handlers
  window.addEventListener('message', function(event) {
    if (!event.data) return;
    if (event.data.type === 'UPDATE_PROJECT_STYLES') {
      var existing = document.getElementById('__wb_project_styles');
      if (existing) {
        existing.textContent = event.data.css;
      } else {
        var newStyle = document.createElement('style');
        newStyle.id = '__wb_project_styles';
        newStyle.textContent = event.data.css;
        document.head.appendChild(newStyle);
      }
    } else if (event.data.type === 'RESTORE_SCROLL') {
      if (typeof event.data.scrollY === 'number') {
        window.scrollTo(event.data.scrollX || 0, event.data.scrollY);
      }
    }
  });
})();
<\/script>
`;return s.includes("</body>")?s=s.replace("</body>",`${w}
</body>`):s+=w,s}function Te(a,t){let n=a.content||"<!DOCTYPE html><html><head><title>Editor</title></head><body><p>Start typing...</p></body></html>";n=Ut(n,t);const s=t.files.filter(v=>v.type==="css");let l="";s.forEach(v=>{l+=`
/* ${v.name} */
${v.content}
`});const f=`<style id="__wb_project_styles">
${l}
</style>`,p=`
<style id="__wb_editor_helpers">
  /* Editor helper styles strictly isolated within editor iframe */
  html, body {
    min-height: 100%;
  }
  body {
    outline: none !important;
    cursor: text;
  }
  /* Thin dashed border of the edited focused component */
  *:focus,
  .wb-focused-component {
    outline: 1.5px dashed #0284c7 !important;
    outline-offset: 3px !important;
  }
  img:focus,
  img.wb-focused-component,
  img.wb-active-img {
    outline: 2px dashed #0284c7 !important;
    outline-offset: 4px !important;
    cursor: pointer;
  }
  /* Caret and empty element visibility */
  p:empty::before, h1:empty::before, h2:empty::before, h3:empty::before, h4:empty::before, h5:empty::before, h6:empty::before {
    content: '\\00a0';
    color: #94a3b8;
  }
  /* Prevent navigation while editing */
  a {
    cursor: pointer;
  }
  /* Interactive floating image toolbar */
  #wb-image-toolbar {
    position: absolute;
    display: none;
    z-index: 99999;
    background: #0f172a;
    color: #f8fafc;
    border-radius: 8px;
    padding: 4px 6px;
    box-shadow: 0 10px 25px -5px rgba(0,0,0,0.4), 0 8px 10px -6px rgba(0,0,0,0.4);
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 11px;
    line-height: 1;
    align-items: center;
    gap: 4px;
    user-select: none;
    pointer-events: auto;
    border: 1px solid #334155;
  }
  #wb-image-toolbar button {
    background: #1e293b;
    color: #e2e8f0;
    border: 1px solid #334155;
    border-radius: 4px;
    padding: 3px 6px;
    font-size: 10px;
    font-weight: 500;
    cursor: pointer;
    transition: all 0.15s ease;
    white-space: nowrap;
  }
  #wb-image-toolbar button:hover {
    background: #0284c7;
    color: #ffffff;
    border-color: #0284c7;
  }
  #wb-image-toolbar .divider {
    width: 1px;
    height: 14px;
    background: #334155;
    margin: 0 2px;
  }
  /* Real-time color preview: completely suppress selection mark so actual colors are unobscured */
  html.wb-hide-selection ::selection,
  html.wb-hide-selection *::selection,
  html.wb-hide-selection::-moz-selection,
  html.wb-hide-selection *::-moz-selection,
  body.wb-hide-selection ::selection,
  body.wb-hide-selection *::selection,
  body.wb-hide-selection::-moz-selection,
  body.wb-hide-selection *::-moz-selection,
  .wb-hide-selection ::selection,
  .wb-hide-selection *::selection,
  .wb-color-preview-target::selection,
  .wb-color-preview-target *::selection {
    background: transparent !important;
    background-color: transparent !important;
    color: inherit !important;
    text-shadow: none !important;
  }
  html.wb-hide-selection,
  body.wb-hide-selection {
    caret-color: transparent !important;
  }
  body.wb-hide-selection .wb-focused-component {
    outline: none !important;
    box-shadow: none !important;
  }
</style>
`,w=`
<script id="__wb_editor_sync">
(function() {
  // Prevent accidental link clicks from unloading editor
  document.addEventListener('click', function(e) {
    var target = e.target;
    while (target && target.tagName !== 'A') {
      target = target.parentElement;
    }
    if (target && target.tagName === 'A') {
      e.preventDefault();
    }
  }, true);

  // Focus & active component tracking (thin dashed border)
  var activeFocusedEl = null;
  var activeImageEl = null;
  var lastSavedRange = null;
  var lastNonCollapsedRange = null;

  function rgbComponentToHex(c) {
    var hex = Math.round(Number(c) || 0).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  function parseColorToHex(colorStr) {
    if (!colorStr) return null;
    var str = String(colorStr).trim();
    if (!str || str === 'transparent' || str === 'inherit' || str === 'initial' || str === 'rgba(0, 0, 0, 0)') {
      return null;
    }
    if (str.charAt(0) === '#') {
      if (str.length === 4) {
        return ('#' + str.charAt(1) + str.charAt(1) + str.charAt(2) + str.charAt(2) + str.charAt(3) + str.charAt(3)).toUpperCase();
      }
      return str.toUpperCase();
    }
    if (str.indexOf('rgb') !== -1) {
      var cleanNums = str.replace(/[^0-9,.]/g, '').split(',');
      if (cleanNums.length >= 3) {
        return ('#' + rgbComponentToHex(cleanNums[0]) + rgbComponentToHex(cleanNums[1]) + rgbComponentToHex(cleanNums[2])).toUpperCase();
      }
    }
    return null;
  }

  // Dedicated HTML snapshot undo/redo engine
  var editorHistoryStack = [];
  var editorHistoryIndex = -1;
  var isNavigatingHistory = false;

  function getCleanBodyHtmlSnapshot() {
    try {
      var clone = document.body.cloneNode(true);
      var helpers = clone.querySelectorAll('#__wb_editor_helpers, #__wb_editor_sync, #wb-image-toolbar');
      helpers.forEach(function(el) { el.remove(); });
      var focusNodes = clone.querySelectorAll('.wb-focused-component, .wb-active-img, .wb-color-preview-target');
      focusNodes.forEach(function(node) {
        node.classList.remove('wb-focused-component', 'wb-active-img', 'wb-color-preview-target');
        if (node.getAttribute('class') === '') node.removeAttribute('class');
      });
      clone.removeAttribute('contenteditable');
      clone.removeAttribute('spellcheck');
      return clone.innerHTML;
    } catch (e) {
      return '';
    }
  }

  function recordHistorySnapshot() {
    if (isNavigatingHistory) return;
    try {
      var snap = getCleanBodyHtmlSnapshot();
      if (!snap) return;
      if (editorHistoryIndex >= 0 && editorHistoryStack[editorHistoryIndex] === snap) {
        notifyUndoRedoState();
        return;
      }
      editorHistoryStack = editorHistoryStack.slice(0, editorHistoryIndex + 1);
      editorHistoryStack.push(snap);
      if (editorHistoryStack.length > 60) {
        editorHistoryStack.shift();
      }
      editorHistoryIndex = editorHistoryStack.length - 1;
      notifyUndoRedoState();
    } catch (e) {}
  }

  function restoreHistorySnapshot(cleanHtml) {
    if (cleanHtml === undefined || cleanHtml === null) return;
    isNavigatingHistory = true;
    try {
      var syncScript = document.getElementById('__wb_editor_sync');
      var imgTb = document.getElementById('wb-image-toolbar');
      if (syncScript && syncScript.parentNode) syncScript.parentNode.removeChild(syncScript);
      if (imgTb && imgTb.parentNode) imgTb.parentNode.removeChild(imgTb);

      document.body.innerHTML = cleanHtml;

      if (imgTb) document.body.appendChild(imgTb);
      if (syncScript) document.body.appendChild(syncScript);

      document.body.setAttribute('contenteditable', 'true');
      document.body.setAttribute('spellcheck', 'false');
    } catch (e) {}
    isNavigatingHistory = false;
  }

  function notifyUndoRedoState() {
    try {
      var nativeCanUndo = false;
      var nativeCanRedo = false;
      try {
        nativeCanUndo = document.queryCommandEnabled('undo');
        nativeCanRedo = document.queryCommandEnabled('redo');
      } catch (e) {}
      var canUndo = (editorHistoryIndex > 0) || nativeCanUndo;
      var canRedo = (editorHistoryIndex < editorHistoryStack.length - 1) || nativeCanRedo;
      window.parent.postMessage({
        type: 'EDITOR_UNDO_REDO_STATE',
        canUndo: !!canUndo,
        canRedo: !!canRedo
      }, '*');
    } catch (e) {}
  }

  function getFirstCharElement(range) {
    if (!range) return null;
    try {
      var sc = range.startContainer;
      var so = range.startOffset;

      if (sc.nodeType === 3) { // TEXT_NODE
        var val = sc.nodeValue || '';
        if (so < val.length) {
          return sc.parentElement;
        }
        var root = range.commonAncestorContainer;
        if (root.nodeType === 3) root = root.parentElement;
        if (!root) root = document.body;

        var walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
        walker.currentNode = sc;
        var nextNode = walker.nextNode();
        while (nextNode) {
          if ((nextNode.nodeValue || '').length > 0) {
            try {
              if (range.comparePoint(nextNode, 0) <= 0) {
                return nextNode.parentElement;
              }
            } catch (e) {
              return nextNode.parentElement;
            }
          }
          nextNode = walker.nextNode();
        }
        return sc.parentElement;
      }

      if (sc.nodeType === 1) { // ELEMENT_NODE
        if (sc.childNodes && sc.childNodes.length > 0) {
          var idx = Math.min(so, sc.childNodes.length - 1);
          var child = sc.childNodes[idx];
          if (child) {
            if (child.nodeType === 3) {
              return sc;
            }
            if (child.nodeType === 1) {
              var walker2 = document.createTreeWalker(child, NodeFilter.SHOW_TEXT, null, false);
              var firstText = walker2.nextNode();
              if (firstText && firstText.parentElement) {
                return firstText.parentElement;
              }
              return child;
            }
          }
        }
        return sc;
      }
    } catch (e) {}
    return null;
  }

  function getEffectiveColorsFromElement(el) {
    var detectedTextColor = null;
    var detectedBgColor = null;
    if (!el) return { textColor: null, bgColor: null };

    try {
      var comp = window.getComputedStyle(el);
      if (comp && comp.color) {
        var pColor = parseColorToHex(comp.color);
        if (pColor) detectedTextColor = pColor;
      }
    } catch (e) {}

    var curr = el;
    while (curr && curr !== document.documentElement && curr !== document.body) {
      if (curr.nodeType === 1) {
        var tag = curr.tagName.toLowerCase();
        var inlineBg = curr.style ? curr.style.backgroundColor : '';
        if (inlineBg) {
          var pInlineBg = parseColorToHex(inlineBg);
          if (pInlineBg) {
            detectedBgColor = pInlineBg;
            break;
          }
        }
        if (tag === 'mark') {
          try {
            var mComp = window.getComputedStyle(curr);
            var pMarkBg = parseColorToHex(mComp.backgroundColor);
            if (pMarkBg) {
              detectedBgColor = pMarkBg;
              break;
            }
          } catch (e2) {}
        }
        try {
          var cComp = window.getComputedStyle(curr);
          if (cComp && cComp.backgroundColor && cComp.backgroundColor !== 'transparent' && cComp.backgroundColor !== 'rgba(0, 0, 0, 0)') {
            var pCompBg = parseColorToHex(cComp.backgroundColor);
            if (pCompBg) {
              detectedBgColor = pCompBg;
              break;
            }
          }
        } catch (e3) {}
      }
      curr = curr.parentElement;
    }

    return { textColor: detectedTextColor, bgColor: detectedBgColor };
  }

  function getActiveTextStyle() {
    var isBold = false;
    var isItalic = false;
    var isUnderline = false;
    var isStrikeThrough = false;
    var align = 'left';
    var detectedAlign = false;
    var isBulletList = false;
    var isNumberList = false;
    var isLink = false;
    var linkHref = '';
    var linkText = '';
    var detectedTextColor = null;
    var detectedBgColor = null;
    var detectedFontSize = null;

    // 1. Browser queryCommandState
    try { isBold = document.queryCommandState('bold'); } catch (e) {}
    try { isItalic = document.queryCommandState('italic'); } catch (e) {}
    try { isUnderline = document.queryCommandState('underline'); } catch (e) {}
    try {
      isStrikeThrough = document.queryCommandState('strikeThrough') || document.queryCommandState('strikethrough');
    } catch (e) {}
    try {
      if (document.queryCommandState('justifyCenter')) { align = 'center'; detectedAlign = true; }
      else if (document.queryCommandState('justifyRight')) { align = 'right'; detectedAlign = true; }
      else if (document.queryCommandState('justifyFull')) { align = 'justify'; detectedAlign = true; }
      else if (document.queryCommandState('justifyLeft')) { align = 'left'; }
    } catch (e) {}
    try { isBulletList = document.queryCommandState('insertUnorderedList'); } catch (e) {}
    try { isNumberList = document.queryCommandState('insertOrderedList'); } catch (e) {}

    // 2. Selection / Focus node inspection
    var sel = window.getSelection();
    var activeRange = null;
    if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
      activeRange = sel.getRangeAt(0);
    } else if (lastNonCollapsedRange && document.body && document.body.contains(lastNonCollapsedRange.commonAncestorContainer)) {
      activeRange = lastNonCollapsedRange;
    } else if (sel && sel.rangeCount > 0) {
      activeRange = sel.getRangeAt(0);
    }

    // Prioritized color detection: examine first character of selected fragment
    var firstCharColorsEvaluated = false;
    if (activeRange && !activeRange.collapsed) {
      var firstCharEl = getFirstCharElement(activeRange);
      if (firstCharEl) {
        var firstCharColors = getEffectiveColorsFromElement(firstCharEl);
        detectedTextColor = firstCharColors.textColor || '#0F172A';
        detectedBgColor = firstCharColors.bgColor;
        firstCharColorsEvaluated = true;
      }
    }

    // 3. Fallback query command values for colors ONLY if not determined by first character
    if (!firstCharColorsEvaluated) {
      if (!detectedTextColor) {
        try {
          var qForeColor = document.queryCommandValue('foreColor');
          var parsedQFore = parseColorToHex(qForeColor);
          if (parsedQFore) detectedTextColor = parsedQFore;
        } catch (e) {}
      }

      if (!detectedBgColor) {
        try {
          var qHilite = document.queryCommandValue('hiliteColor') || document.queryCommandValue('backColor');
          var parsedQHilite = parseColorToHex(qHilite);
          if (parsedQHilite) detectedBgColor = parsedQHilite;
        } catch (e) {}
      }
    }

    var startNode = null;
    if (activeRange) {
      startNode = activeRange.startContainer;
    }
    if ((!startNode || startNode === document.body || startNode === document.documentElement) && activeFocusedEl) {
      startNode = activeFocusedEl;
    }
    if (!startNode) startNode = document.body;
    var targetEl = (startNode.nodeType === Node.TEXT_NODE) ? startNode.parentNode : startNode;

    // Inspect non-collapsed range contents directly for formatted fragments
    if (activeRange && !activeRange.collapsed) {
      try {
        var frag = activeRange.cloneContents();
        if (!isBold && frag.querySelector('b, strong')) isBold = true;
        if (!isItalic && frag.querySelector('i, em')) isItalic = true;
        if (!isUnderline && (frag.querySelector('u') || frag.querySelector('[style*="underline"]'))) isUnderline = true;
        if (!isStrikeThrough && (frag.querySelector('s, strike, del') || frag.querySelector('[style*="line-through"]'))) isStrikeThrough = true;
        if (!isLink && frag.querySelector('a')) {
          isLink = true;
          var foundA = frag.querySelector('a');
          if (foundA) {
            linkHref = foundA.getAttribute('href') || '';
            linkText = foundA.textContent || '';
          }
        }
        if (!firstCharColorsEvaluated) {
          if (!detectedTextColor) {
            var styledColEl = frag.querySelector('[style*="color"]');
            if (styledColEl && styledColEl.style && styledColEl.style.color) {
              var pFragCol = parseColorToHex(styledColEl.style.color);
              if (pFragCol) detectedTextColor = pFragCol;
            }
          }
          if (!detectedBgColor) {
            var styledBgEl = frag.querySelector('mark, [style*="background"]');
            if (styledBgEl) {
              var pFragBg = parseColorToHex(styledBgEl.style.backgroundColor);
              if (pFragBg) detectedBgColor = pFragBg;
            }
          }
        }
        if (!detectedFontSize) {
          var styledFsEl = frag.querySelector('[style*="font-size"]');
          if (styledFsEl && styledFsEl.style && styledFsEl.style.fontSize) {
            detectedFontSize = styledFsEl.style.fontSize;
          }
        }
      } catch (e) {}
    }

    var blockTag = 'p';
    var curr = targetEl;
    var foundBlock = false;

    while (curr && curr !== document.documentElement) {
      if (curr.nodeType === Node.ELEMENT_NODE) {
        var tag = curr.tagName ? curr.tagName.toLowerCase() : '';

        if (!foundBlock) {
          if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre', 'address'].indexOf(tag) !== -1) {
            blockTag = tag;
            foundBlock = true;
          } else if (tag === 'div') {
            var innerHeadingOrP = curr.querySelector('h1, h2, h3, h4, h5, h6, p, blockquote, pre');
            if (!innerHeadingOrP) {
              blockTag = 'p';
              foundBlock = true;
            }
          }
        }

        if (tag === 'b' || tag === 'strong') isBold = true;
        if (tag === 'i' || tag === 'em') isItalic = true;
        if (tag === 'u') isUnderline = true;
        if (tag === 's' || tag === 'strike' || tag === 'del') isStrikeThrough = true;
        if (tag === 'li') {
          var parentList = curr.parentElement;
          if (parentList) {
            var plTag = parentList.tagName ? parentList.tagName.toLowerCase() : '';
            if (plTag === 'ul') isBulletList = true;
            if (plTag === 'ol') isNumberList = true;
          }
        }
        if (tag === 'a') {
          isLink = true;
          if (!linkHref) linkHref = curr.getAttribute('href') || '';
          if (!linkText) linkText = curr.textContent || '';
        }

        try {
          var comp = window.getComputedStyle(curr);
          if (!isBold && (curr === targetEl || tag === 'b' || tag === 'strong' || ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(tag) !== -1)) {
            var fw = comp.fontWeight;
            if (fw === 'bold' || fw === 'bolder' || parseInt(fw, 10) >= 600) {
              isBold = true;
            }
          }
          if (!isItalic && (curr === targetEl || tag === 'i' || tag === 'em')) {
            if (comp.fontStyle === 'italic' || comp.fontStyle === 'oblique') {
              isItalic = true;
            }
          }
          if (!isUnderline) {
            var deco = (comp.textDecorationLine || comp.textDecoration || '').toLowerCase();
            if (deco.indexOf('underline') !== -1) isUnderline = true;
          }
          if (!isStrikeThrough) {
            var deco2 = (comp.textDecorationLine || comp.textDecoration || '').toLowerCase();
            if (deco2.indexOf('line-through') !== -1) isStrikeThrough = true;
          }
          if (!detectedAlign) {
            if (curr.style && curr.style.textAlign) {
              var sAlign = curr.style.textAlign.toLowerCase();
              if (sAlign === 'center' || sAlign === 'right' || sAlign === 'justify' || sAlign === 'left') {
                align = sAlign;
                detectedAlign = true;
              }
            } else if (comp.textAlign && comp.textAlign !== 'start') {
              var cAlign = comp.textAlign.toLowerCase();
              if (cAlign === 'center' || cAlign === 'right' || cAlign === 'justify') {
                align = cAlign;
                detectedAlign = true;
              } else if (cAlign === 'left' && (curr === targetEl || ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'div', 'li'].indexOf(tag) !== -1)) {
                align = 'left';
              }
            }
          }
          if (!firstCharColorsEvaluated) {
            if (!detectedTextColor && curr !== document.body) {
              var inlineCol = curr.style ? curr.style.color : '';
              if (inlineCol) {
                var pInlineCol = parseColorToHex(inlineCol);
                if (pInlineCol) detectedTextColor = pInlineCol;
              } else if (curr === targetEl) {
                var cColor = parseColorToHex(comp.color);
                if (cColor) detectedTextColor = cColor;
              }
            }
            if (!detectedBgColor && curr !== document.body) {
              var inlineBg = curr.style ? curr.style.backgroundColor : '';
              if (inlineBg) {
                var pInlineBg = parseColorToHex(inlineBg);
                if (pInlineBg) detectedBgColor = pInlineBg;
              } else if (tag === 'mark' || (curr === targetEl && comp.backgroundColor && comp.backgroundColor !== 'transparent' && comp.backgroundColor !== 'rgba(0, 0, 0, 0)')) {
                var pCompBg = parseColorToHex(comp.backgroundColor);
                if (pCompBg) detectedBgColor = pCompBg;
              }
            }
          }
          if (!detectedFontSize && curr !== document.body) {
            if (curr.style && curr.style.fontSize) {
              detectedFontSize = curr.style.fontSize;
            } else if (curr === targetEl && comp.fontSize) {
              detectedFontSize = comp.fontSize;
            }
          }
        } catch (err) {}
      }

      if (curr === document.body) break;
      curr = curr.parentNode;
    }

    if (!detectedTextColor && targetEl) {
      try {
        var bodyCompColor = parseColorToHex(window.getComputedStyle(targetEl).color);
        if (bodyCompColor) detectedTextColor = bodyCompColor;
      } catch (e) {}
    }

    if (!detectedFontSize && targetEl) {
      try {
        var bodyCompFs = window.getComputedStyle(targetEl).fontSize;
        if (bodyCompFs) detectedFontSize = bodyCompFs;
      } catch (e) {}
    }

    function normalizeFontSizeVal(val) {
      if (!val) return '16px';
      var n = parseFloat(val);
      if (isNaN(n)) return val;
      if (val.indexOf('rem') !== -1) {
        return Math.round(n * 16) + 'px';
      }
      return Math.round(n) + 'px';
    }

    return {
      isBold: isBold,
      isItalic: isItalic,
      isUnderline: isUnderline,
      isStrikeThrough: isStrikeThrough,
      align: align,
      isBulletList: isBulletList,
      isNumberList: isNumberList,
      isLink: isLink,
      linkHref: linkHref,
      linkText: linkText,
      textColor: detectedTextColor || '#0F172A',
      bgColor: detectedBgColor || null,
      fontSize: normalizeFontSizeVal(detectedFontSize) || '16px',
      tagName: blockTag
    };
  }

  function notifyActiveTextStyle() {
    try {
      var style = getActiveTextStyle();
      window.parent.postMessage({
        type: 'ACTIVE_TEXT_STYLE_CHANGED',
        style: style
      }, '*');
      window.parent.postMessage({
        type: 'ACTIVE_BLOCK_CHANGED',
        tagName: style.tagName
      }, '*');
    } catch (e) {}
  }

  function saveSelection() {
    try {
      var sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        var r = sel.getRangeAt(0);
        if (document.body && (document.body.contains(r.commonAncestorContainer) || r.commonAncestorContainer === document.body)) {
          lastSavedRange = r.cloneRange();
          if (!r.collapsed && r.toString().trim().length > 0) {
            lastNonCollapsedRange = r.cloneRange();
          }
        }
      }
    } catch (e) {}
    notifyActiveTextStyle();
    notifyUndoRedoState();
  }

  document.addEventListener('selectionchange', saveSelection);
  document.addEventListener('mouseup', saveSelection);
  document.addEventListener('keyup', saveSelection);
  document.addEventListener('touchend', saveSelection);
  document.addEventListener('focusin', saveSelection);
  document.addEventListener('click', function(e) {
    try {
      var sel = window.getSelection();
      if (sel && sel.rangeCount > 0 && sel.getRangeAt(0).collapsed) {
        lastNonCollapsedRange = null;
      }
    } catch (err) {}
    saveSelection();
  });
  window.addEventListener('focus', saveSelection);

  // Helper to determine the container context (link, button, heading, badge, single-line)
  function getTargetContext(targetEl) {
    var isInsideLink = false;
    var isInsideButton = false;
    var isSingleLine = false;
    var hostInteractive = null;
    var curr = targetEl;

    while (curr && curr.nodeType === 1 && curr.tagName !== 'BODY' && curr.tagName !== 'HTML') {
      var tag = curr.tagName ? curr.tagName.toLowerCase() : '';
      var cls = (curr.getAttribute('class') || '').toLowerCase();
      var role = (curr.getAttribute('role') || '').toLowerCase();

      if (tag === 'a' || role === 'link' || cls.indexOf('nav-link') !== -1 || cls.indexOf('nav-item') !== -1) {
        isInsideLink = true;
        isSingleLine = true;
        if (!hostInteractive) hostInteractive = curr;
      }
      if (tag === 'button' || role === 'button' || cls.indexOf('btn') !== -1 || cls.indexOf('button') !== -1) {
        isInsideButton = true;
        isSingleLine = true;
        if (!hostInteractive) hostInteractive = curr;
      }
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'th', 'summary', 'label', 'caption', 'figcaption', 'time', 'dt'].indexOf(tag) !== -1) {
        isSingleLine = true;
      }
      if (cls.indexOf('badge') !== -1 || cls.indexOf('chip') !== -1 || cls.indexOf('pill') !== -1 || cls.indexOf('tag') !== -1) {
        isSingleLine = true;
      }
      curr = curr.parentElement;
    }

    return {
      isInsideLink: isInsideLink,
      isInsideButton: isInsideButton,
      isSingleLine: isSingleLine,
      hostInteractive: hostInteractive
    };
  }

  // Seamlessly convert text block from one tag to another without empty blocks or lost focus
  function changeBlockTag(targetTag) {
    if (!targetTag) return;
    targetTag = targetTag.replace(/[<>]/g, '').toLowerCase();

    // Ensure focus and restore selection
    window.focus();
    var rangeToUse = (lastNonCollapsedRange && document.body.contains(lastNonCollapsedRange.commonAncestorContainer))
      ? lastNonCollapsedRange
      : (lastSavedRange && document.body.contains(lastSavedRange.commonAncestorContainer) ? lastSavedRange : null);

    if (rangeToUse) {
      var s = window.getSelection();
      if (s) {
        try {
          s.removeAllRanges();
          s.addRange(rangeToUse);
        } catch (e) {}
      }
    }

    var sel = window.getSelection();
    var range = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0) : lastSavedRange;
    
    var targetNode = null;
    if (range) {
      targetNode = range.startContainer;
    } else if (activeFocusedEl) {
      targetNode = activeFocusedEl;
    }

    if (!targetNode) {
      targetNode = document.body;
    }
    if (targetNode.nodeType === Node.TEXT_NODE) targetNode = targetNode.parentNode;

    // Find enclosing block element to convert
    var blockEl = null;
    var curr = targetNode;
    while (curr && curr !== document.body && curr !== document.documentElement) {
      var tag = curr.tagName ? curr.tagName.toLowerCase() : '';
      if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'blockquote', 'pre', 'address'].indexOf(tag) !== -1) {
        blockEl = curr;
        break;
      }
      if (tag === 'div') {
        var innerHeadingOrP = curr.querySelector('h1, h2, h3, h4, h5, h6, p, blockquote, pre');
        if (!innerHeadingOrP) {
          blockEl = curr;
          break;
        }
      }
      curr = curr.parentNode;
    }

    if (!blockEl || blockEl === document.body) {
      if (targetNode !== document.body && targetNode.parentNode) {
        var targetCtx = getTargetContext(targetNode);
        if (!targetCtx.isInsideLink && !targetCtx.isInsideButton) {
          blockEl = targetNode;
        }
      }
      if (!blockEl) {
        var newBlock = document.createElement(targetTag);
        newBlock.innerHTML = '&nbsp;';
        document.body.appendChild(newBlock);
        setFocusedComponent(newBlock);
        newBlock.focus();
        triggerSync();
        notifyActiveBlock();
        return;
      }
    }

    // If already the target tag, simply focus
    if (blockEl.tagName.toLowerCase() === targetTag) {
      setFocusedComponent(blockEl);
      blockEl.focus();
      notifyActiveTextStyle();
      return;
    }

    // Calculate exact caret character offset inside blockEl to preserve cursor position
    var caretCharOffset = 0;
    if (range && blockEl.contains(range.startContainer)) {
      try {
        var preRange = document.createRange();
        preRange.selectNodeContents(blockEl);
        preRange.setEnd(range.startContainer, range.startOffset);
        caretCharOffset = preRange.toString().length;
      } catch(e) {
        caretCharOffset = 0;
      }
    }

    // Create new DOM element with target tag
    var newEl = document.createElement(targetTag);

    // Copy all attributes (classes, inline style, id, custom attrs)
    for (var i = 0; i < blockEl.attributes.length; i++) {
      var attr = blockEl.attributes[i];
      if (attr.name === 'class') {
        var cleanedClass = attr.value.replace(/wb-focused-component|wb-active-img/g, '').trim();
        if (cleanedClass) newEl.setAttribute('class', cleanedClass);
      } else {
        newEl.setAttribute(attr.name, attr.value);
      }
    }

    // Move child nodes directly without creating extra wrappers or empty blocks
    while (blockEl.firstChild) {
      newEl.appendChild(blockEl.firstChild);
    }

    // Ensure non-empty for clean contenteditable editing
    if (!newEl.innerHTML.trim()) {
      newEl.innerHTML = '&nbsp;';
    }

    // Replace in DOM
    if (blockEl.parentNode) {
      blockEl.parentNode.replaceChild(newEl, blockEl);
    }

    // Clean adjacent empty artifact blocks if any
    var prevSib = newEl.previousElementSibling;
    if (prevSib && ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(prevSib.tagName.toLowerCase()) !== -1) {
      if (!prevSib.textContent.trim() && !prevSib.querySelector('img, button, a, svg, iframe')) {
        prevSib.remove();
      }
    }
    var nextSib = newEl.nextElementSibling;
    if (nextSib && ['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'].indexOf(nextSib.tagName.toLowerCase()) !== -1) {
      if (!nextSib.textContent.trim() && !nextSib.querySelector('img, button, a, svg, iframe')) {
        nextSib.remove();
      }
    }

    // Restore caret position precisely inside newEl
    try {
      var charCount = 0;
      var nodeStack = [newEl];
      var foundNode = null;
      var foundOffset = 0;

      while (nodeStack.length > 0) {
        var n = nodeStack.pop();
        if (n.nodeType === Node.TEXT_NODE) {
          var nextCount = charCount + n.length;
          if (caretCharOffset >= charCount && caretCharOffset <= nextCount) {
            foundNode = n;
            foundOffset = caretCharOffset - charCount;
            break;
          }
          charCount = nextCount;
        } else {
          for (var idx = n.childNodes.length - 1; idx >= 0; idx--) {
            nodeStack.push(n.childNodes[idx]);
          }
        }
      }

      var newRange = document.createRange();
      if (foundNode) {
        newRange.setStart(foundNode, Math.min(foundOffset, foundNode.length));
        newRange.collapse(true);
      } else {
        newRange.selectNodeContents(newEl);
        newRange.collapse(false);
      }

      var s2 = window.getSelection();
      if (s2) {
        s2.removeAllRanges();
        s2.addRange(newRange);
      }
      lastSavedRange = newRange.cloneRange();
    } catch(err) {
      console.warn('Error restoring caret position:', err);
    }

    setFocusedComponent(newEl);
    newEl.focus();

    notifyActiveTextStyle();
    triggerSync();
  }

  // Keyboard shortcuts inside the editable canvas
  document.addEventListener('keydown', function(e) {
    if ((e.ctrlKey || e.metaKey) && !e.altKey) {
      var key = e.key.toLowerCase();
      if (key === 'b') {
        e.preventDefault();
        document.execCommand('bold', false, null);
        saveSelection();
        triggerSync();
      } else if (key === 'i') {
        e.preventDefault();
        document.execCommand('italic', false, null);
        saveSelection();
        triggerSync();
      } else if (key === 'u') {
        e.preventDefault();
        document.execCommand('underline', false, null);
        saveSelection();
        triggerSync();
      } else if (key === 's' && e.shiftKey) {
        e.preventDefault();
        document.execCommand('strikeThrough', false, null);
        saveSelection();
        triggerSync();
      }
    }
  });

  function setFocusedComponent(el) {
    if (activeFocusedEl && activeFocusedEl !== el) {
      activeFocusedEl.classList.remove('wb-focused-component');
    }
    activeFocusedEl = el;
    if (el && el !== document.body && el !== document.documentElement) {
      el.classList.add('wb-focused-component');
    }
    notifyActiveTextStyle();
  }

  // Create floating image toolbar in DOM
  var imgToolbar = document.createElement('div');
  imgToolbar.id = 'wb-image-toolbar';
  imgToolbar.innerHTML = '<span style="font-size:10px; color:#94a3b8; font-weight:600; margin-right:2px;">Align:</span>' +
    '<button data-act="align-left" title="Float Left">Left</button>' +
    '<button data-act="align-center" title="Align Center">Center</button>' +
    '<button data-act="align-right" title="Float Right">Right</button>' +
    '<button data-act="align-inline" title="Inline">Inline</button>' +
    '<div class="divider"></div>' +
    '<span style="font-size:10px; color:#94a3b8; font-weight:600; margin-right:2px;">Scale:</span>' +
    '<button data-act="scale-25">25%</button>' +
    '<button data-act="scale-50">50%</button>' +
    '<button data-act="scale-75">75%</button>' +
    '<button data-act="scale-100">100%</button>' +
    '<button data-act="scale-auto">Auto</button>' +
    '<div class="divider"></div>' +
    '<span style="font-size:10px; color:#94a3b8; font-weight:600; margin-right:2px;">Radius:</span>' +
    '<button data-act="radius-sharp" title="0px Sharp">0px</button>' +
    '<button data-act="radius-round" title="8px Rounded">8px</button>' +
    '<button data-act="radius-circle" title="Full Circle">Circle</button>' +
    '<div class="divider"></div>' +
    '<button data-act="delete" style="color:#f87171;" title="Remove Image">✕</button>';
  
  document.body.appendChild(imgToolbar);

  function positionImageToolbar(img) {
    if (!img) {
      imgToolbar.style.display = 'none';
      return;
    }
    var rect = img.getBoundingClientRect();
    var top = rect.top + window.scrollY - 38;
    if (top < 10) top = rect.bottom + window.scrollY + 8;
    var left = Math.max(10, rect.left + window.scrollX);
    
    imgToolbar.style.display = 'flex';
    imgToolbar.style.top = top + 'px';
    imgToolbar.style.left = left + 'px';
  }

  function hideImageToolbar() {
    imgToolbar.style.display = 'none';
    if (activeImageEl) {
      activeImageEl.classList.remove('wb-active-img');
      activeImageEl = null;
    }
  }

  // Handle toolbar actions
  imgToolbar.addEventListener('mousedown', function(e) {
    e.preventDefault(); // Prevent losing focus
  });

  imgToolbar.addEventListener('click', function(e) {
    var btn = e.target.closest('button');
    if (!btn || !activeImageEl) return;
    var act = btn.getAttribute('data-act');

    if (act === 'align-left') {
      activeImageEl.style.float = 'left';
      activeImageEl.style.display = 'block';
      activeImageEl.style.margin = '0 1.5rem 1rem 0';
      activeImageEl.style.clear = 'left';
    } else if (act === 'align-center') {
      activeImageEl.style.float = 'none';
      activeImageEl.style.display = 'block';
      activeImageEl.style.margin = '1.5rem auto';
      activeImageEl.style.clear = 'both';
    } else if (act === 'align-right') {
      activeImageEl.style.float = 'right';
      activeImageEl.style.display = 'block';
      activeImageEl.style.margin = '0 0 1.5rem 1.5rem';
      activeImageEl.style.clear = 'right';
    } else if (act === 'align-inline') {
      activeImageEl.style.float = 'none';
      activeImageEl.style.display = 'inline-block';
      activeImageEl.style.margin = '0.5rem';
      activeImageEl.style.clear = 'none';
    } else if (act === 'scale-25') {
      activeImageEl.style.width = '25%';
      activeImageEl.style.maxWidth = '100%';
      activeImageEl.style.height = 'auto';
    } else if (act === 'scale-50') {
      activeImageEl.style.width = '50%';
      activeImageEl.style.maxWidth = '100%';
      activeImageEl.style.height = 'auto';
    } else if (act === 'scale-75') {
      activeImageEl.style.width = '75%';
      activeImageEl.style.maxWidth = '100%';
      activeImageEl.style.height = 'auto';
    } else if (act === 'scale-100') {
      activeImageEl.style.width = '100%';
      activeImageEl.style.maxWidth = '100%';
      activeImageEl.style.height = 'auto';
    } else if (act === 'scale-auto') {
      activeImageEl.style.width = 'auto';
      activeImageEl.style.maxWidth = '100%';
      activeImageEl.style.height = 'auto';
    } else if (act === 'radius-sharp') {
      activeImageEl.style.borderRadius = '0px';
    } else if (act === 'radius-round') {
      activeImageEl.style.borderRadius = '8px';
    } else if (act === 'radius-circle') {
      activeImageEl.style.borderRadius = '9999px';
      activeImageEl.style.aspectRatio = '1 / 1';
      activeImageEl.style.objectFit = 'cover';
    } else if (act === 'delete') {
      var parentBlock = activeImageEl.closest('.image-block');
      if (parentBlock && parentBlock.parentNode) {
        parentBlock.parentNode.removeChild(parentBlock);
      } else if (activeImageEl.parentNode) {
        activeImageEl.parentNode.removeChild(activeImageEl);
      }
      hideImageToolbar();
    }

    setTimeout(function() {
      if (activeImageEl && act !== 'delete') positionImageToolbar(activeImageEl);
      triggerSync();
    }, 10);
  });

  document.addEventListener('click', function(e) {
    if (imgToolbar.contains(e.target)) return;
    
    var clickedEl = e.target;
    setFocusedComponent(clickedEl);

    if (clickedEl && clickedEl.tagName === 'IMG') {
      activeImageEl = clickedEl;
      activeImageEl.classList.add('wb-active-img');
      positionImageToolbar(activeImageEl);
    } else {
      hideImageToolbar();
    }
  });

  document.addEventListener('focusin', function(e) {
    if (imgToolbar.contains(e.target)) return;
    setFocusedComponent(e.target);
  });

  window.addEventListener('resize', function() {
    if (activeImageEl) positionImageToolbar(activeImageEl);
  });

  window.addEventListener('scroll', function() {
    if (activeImageEl) positionImageToolbar(activeImageEl);
  }, { passive: true });

  // Notify parent of input
  var syncTimeout = null;
  function triggerSync() {
    if (syncTimeout) clearTimeout(syncTimeout);
    syncTimeout = setTimeout(function() {
      // Clone document and clean editor-only attributes before sending
      var docClone = document.documentElement.cloneNode(true);
      
      // Clean temporary helper elements from the cloned doc
      var helperStyle = docClone.querySelector('#__wb_editor_helpers');
      if (helperStyle) helperStyle.remove();
      var projectStyle = docClone.querySelector('#__wb_project_styles');
      if (projectStyle) projectStyle.remove();
      var syncScript = docClone.querySelector('#__wb_editor_sync');
      if (syncScript) syncScript.remove();
      var tb = docClone.querySelector('#wb-image-toolbar');
      if (tb) tb.remove();

      // Clean temporary focus/highlight classes from all cloned nodes
      var focusNodes = docClone.querySelectorAll('.wb-focused-component, .wb-active-img');
      focusNodes.forEach(function(node) {
        node.classList.remove('wb-focused-component', 'wb-active-img');
        if (node.getAttribute('class') === '') node.removeAttribute('class');
      });
      
      // Remove contenteditable from body on the clone
      var body = docClone.querySelector('body');
      if (body) {
        body.removeAttribute('contenteditable');
        body.removeAttribute('spellcheck');
      }

      var fullHtml = '<!DOCTYPE html>\\n' + docClone.outerHTML;
      window.parent.postMessage({
        type: 'WEBSITE_EDITOR_SYNC',
        fullHtml: fullHtml
      }, '*');
    }, 250);
  }

  // Cache for internal copy/cut operations to guarantee data availability
  var lastCopiedData = null;

  function handleCopy(e) {
    try {
      var sel = window.getSelection();
      if (sel && sel.rangeCount > 0 && !sel.isCollapsed) {
        var range = sel.getRangeAt(0);
        var div = document.createElement('div');
        div.appendChild(range.cloneContents());
        lastCopiedData = {
          html: div.innerHTML,
          text: sel.toString()
        };
      } else if (activeFocusedEl) {
        lastCopiedData = {
          html: activeFocusedEl.outerHTML,
          text: activeFocusedEl.textContent
        };
      }
    } catch (err) {}
  }

  function handleCut(e) {
    handleCopy(e);
    triggerSync();
  }

  // Sanitization helper to escape HTML entities for plain text pasting
  function escapeHtmlEntities(str) {
    if (!str) return '';
    return str
      .split('&').join('&amp;')
      .split('<').join('&lt;')
      .split('>').join('&gt;')
      .split('"').join('&quot;')
      .split("'").join('&#039;');
  }

  // Helper to decode HTML entities when inserting text nodes
  function decodeHtmlEntities(str) {
    if (!str) return '';
    return str
      .split('&amp;').join('&')
      .split('&lt;').join('<')
      .split('&gt;').join('>')
      .split('&quot;').join('"')
      .split('&#039;').join("'");
  }

  // Boundary check: is range collapsed and positioned at the very start of container?
  function isCaretAtStart(range, container) {
    if (!container || !range) return false;
    if (!container.contains(range.startContainer)) return false;
    try {
      var testRange = document.createRange();
      testRange.selectNodeContents(container);
      testRange.setEnd(range.startContainer, range.startOffset);
      var textBefore = testRange.toString().replace(/[\\s\\u00a0\\u200b\\r\\n\\t]/g, '');
      if (textBefore.length > 0) return false;
      var frag = testRange.cloneContents();
      if (frag.querySelector('img, svg, button, a, input, video, iframe, hr')) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  // Boundary check: is range collapsed and positioned at the very end of container?
  function isCaretAtEnd(range, container) {
    if (!container || !range) return false;
    if (!container.contains(range.endContainer)) return false;
    try {
      var testRange = document.createRange();
      testRange.selectNodeContents(container);
      testRange.setStart(range.endContainer, range.endOffset);
      var textAfter = testRange.toString().replace(/[\\s\\u00a0\\u200b\\r\\n\\t]/g, '');
      if (textAfter.length > 0) return false;
      var frag = testRange.cloneContents();
      if (frag.querySelector('img, svg, button, a, input, video, iframe, hr')) return false;
      return true;
    } catch (e) {
      return false;
    }
  }

  // Check if element is effectively empty (only whitespace or <br>)
  function isElementEmpty(container) {
    if (!container) return false;
    var text = container.textContent.replace(/[\\s\\u00a0\\u200b\\r\\n\\t]/g, '');
    if (text.length > 0) return false;
    if (container.querySelector('img, svg, button, a, input, video, iframe, hr')) return false;
    return true;
  }

  // Find enclosing interactive and block containers for target
  function findTargetContainers(targetNode) {
    var curr = targetNode;
    if (curr && curr.nodeType === Node.TEXT_NODE) curr = curr.parentNode;

    var hostInteractive = null;
    var hostBlock = null;

    var el = curr;
    while (el && el !== document.body && el !== document.documentElement) {
      var tag = el.tagName ? el.tagName.toLowerCase() : '';
      var cls = (el.getAttribute('class') || '').toLowerCase();
      var role = (el.getAttribute('role') || '').toLowerCase();

      if (!hostInteractive) {
        if (tag === 'a' || tag === 'button' || role === 'link' || role === 'button' ||
            cls.indexOf('btn') !== -1 || cls.indexOf('button') !== -1 ||
            cls.indexOf('nav-link') !== -1 || cls.indexOf('badge') !== -1 ||
            cls.indexOf('chip') !== -1 || cls.indexOf('pill') !== -1 || cls.indexOf('tag') !== -1) {
          hostInteractive = el;
        }
      }

      if (!hostBlock) {
        if (['p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'li', 'blockquote', 'pre', 'address', 'td', 'th', 'dt', 'dd', 'figcaption', 'summary'].indexOf(tag) !== -1) {
          hostBlock = el;
        } else if (tag === 'div' && (cls.indexOf('card') !== -1 || cls.indexOf('block') !== -1 || cls.indexOf('rich-text') !== -1 || cls.indexOf('content') !== -1 || cls.indexOf('item') !== -1)) {
          hostBlock = el;
        } else if (['section', 'article', 'aside', 'header', 'footer', 'nav', 'main'].indexOf(tag) !== -1) {
          hostBlock = el;
        }
      }

      el = el.parentElement;
    }

    return {
      hostInteractive: hostInteractive,
      hostBlock: hostBlock,
      nearestContainer: hostInteractive || hostBlock || curr
    };
  }

  // Parses clipboard content and removes dangerous scripts/styles
  function parseClipboardContent(htmlStr, plainTextStr) {
    var rawHtml = (htmlStr && typeof htmlStr === 'string') ? htmlStr.trim() : '';
    var rawText = (plainTextStr && typeof plainTextStr === 'string') ? plainTextStr : '';

    if (!rawHtml && !rawText) return null;

    var doc = null;
    var body = null;
    if (rawHtml) {
      try {
        var parser = new DOMParser();
        doc = parser.parseFromString(rawHtml, 'text/html');
        body = doc.body;
      } catch (e) {
        body = null;
      }
    }

    if (!body && rawText) {
      try {
        var p = new DOMParser();
        var escaped = escapeHtmlEntities(rawText);
        doc = p.parseFromString('<div>' + escaped + '</div>', 'text/html');
        body = doc.body;
      } catch (e) {}
    }

    if (!body) return null;

    var badEls = body.querySelectorAll('script, style, meta, link, iframe, object, embed, noscript');
    for (var i = 0; i < badEls.length; i++) {
      if (badEls[i].parentNode) badEls[i].parentNode.removeChild(badEls[i]);
    }

    var editorArtifacts = body.querySelectorAll('.wb-focused-component, .wb-active-img');
    for (var k = 0; k < editorArtifacts.length; k++) {
      editorArtifacts[k].classList.remove('wb-focused-component', 'wb-active-img');
      if (editorArtifacts[k].getAttribute('class') === '') editorArtifacts[k].removeAttribute('class');
    }

    return {
      doc: doc,
      body: body,
      rawText: rawText,
      rawHtml: rawHtml
    };
  }

  // Check if clipboard body has standalone element(s) or blocks suitable for between-element insertion
  function hasStandaloneElements(body) {
    if (!body) return false;
    var children = body.children;
    if (children.length === 0) return false;

    for (var i = 0; i < children.length; i++) {
      var tag = children[i].tagName.toLowerCase();
      if (['a', 'button', 'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li', 'section', 'article', 'figure', 'table', 'blockquote', 'hr', 'img'].indexOf(tag) !== -1) {
        return true;
      }
    }
    return false;
  }

  // Clean HTML for insertion BETWEEN elements (preserves full element structure, classes, styles)
  function sanitizeForBetweenInsertion(body) {
    if (!body) return '';
    var badEls = body.querySelectorAll('script, style, meta, link, iframe, object, embed, noscript');
    for (var i = 0; i < badEls.length; i++) {
      if (badEls[i].parentNode) badEls[i].parentNode.removeChild(badEls[i]);
    }
    var editorArtifacts = body.querySelectorAll('.wb-focused-component, .wb-active-img');
    for (var k = 0; k < editorArtifacts.length; k++) {
      editorArtifacts[k].classList.remove('wb-focused-component', 'wb-active-img');
      if (editorArtifacts[k].getAttribute('class') === '') editorArtifacts[k].removeAttribute('class');
    }
    return body.innerHTML.trim();
  }

  // Clean HTML for insertion INSIDE an element (unpacks blocks/conflicting interactive tags to prevent splitting host)
  function sanitizeForInsideInsertion(body, ctx) {
    if (!body) return '';

    var badEls = body.querySelectorAll('script, style, meta, link, iframe, object, embed, noscript');
    for (var i = 0; i < badEls.length; i++) {
      if (badEls[i].parentNode) badEls[i].parentNode.removeChild(badEls[i]);
    }

    // If inside interactive host (link or button), unwrap ANY nested links or buttons
    if (ctx.isInsideLink || ctx.isInsideButton) {
      var linksAndButtons = body.querySelectorAll('a, button, [role="link"], [role="button"]');
      for (var lb = 0; lb < linksAndButtons.length; lb++) {
        var el = linksAndButtons[lb];
        var parent = el.parentNode;
        if (parent) {
          while (el.firstChild) parent.insertBefore(el.firstChild, el);
          parent.removeChild(el);
        }
      }
    }

    // Block elements that would split the current block/container if inserted into contenteditable
    var blockTagList = [
      'p', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'section',
      'article', 'aside', 'header', 'footer', 'nav', 'main', 'blockquote',
      'figure', 'figcaption', 'ul', 'ol', 'li', 'table', 'tbody', 'thead',
      'tr', 'td', 'th', 'hr', 'pre', 'address'
    ];

    var allNodes = body.querySelectorAll('*');
    for (var j = allNodes.length - 1; j >= 0; j--) {
      var node = allNodes[j];
      var tag = node.tagName ? node.tagName.toLowerCase() : '';

      if (blockTagList.indexOf(tag) !== -1) {
        var p = node.parentNode;
        if (p) {
          if (node.nextSibling) {
            if (ctx.isSingleLine) {
              p.insertBefore(document.createTextNode(' '), node.nextSibling);
            } else {
              p.insertBefore(document.createElement('br'), node.nextSibling);
            }
          }
          while (node.firstChild) {
            p.insertBefore(node.firstChild, node);
          }
          p.removeChild(node);
        }
      } else if (['b', 'strong', 'i', 'em', 'u', 's', 'strike', 'del', 'a', 'code', 'mark', 'small', 'br'].indexOf(tag) !== -1) {
        node.removeAttribute('class');
        node.removeAttribute('id');
        node.removeAttribute('style');

        if (tag === 'br' && ctx.isSingleLine) {
          var sp = document.createTextNode(' ');
          if (node.parentNode) {
            node.parentNode.insertBefore(sp, node);
            node.parentNode.removeChild(node);
          }
        } else if (tag === 'a' || tag === 'button') {
          if (ctx.isInsideLink || ctx.isInsideButton || ctx.hostInteractive) {
            var aP = node.parentNode;
            if (aP) {
              while (node.firstChild) aP.insertBefore(node.firstChild, node);
              aP.removeChild(node);
            }
          } else {
            var href = node.getAttribute('href');
            if (href && (href.indexOf('http') === 0 || href.indexOf('/') === 0 || href.indexOf('#') === 0 || href.indexOf('mailto:') === 0)) {
              node.setAttribute('target', '_blank');
              node.setAttribute('rel', 'noopener noreferrer');
            } else {
              node.removeAttribute('href');
            }
          }
        }
      } else {
        var pWrap = node.parentNode;
        if (pWrap) {
          while (node.firstChild) pWrap.insertBefore(node.firstChild, node);
          pWrap.removeChild(node);
        }
      }
    }

    var html = body.innerHTML.trim();
    if (ctx.isSingleLine) {
      html = html.replace(/<br\\s*\\/?>/gi, ' ').replace(/\\s+/g, ' ').trim();
    } else {
      while (html.indexOf('<br><br><br>') !== -1) {
        html = html.split('<br><br><br>').join('<br><br>');
      }
    }
    return html;
  }

  // Legacy wrapper for backwards compatibility
  function cleanPastedContent(htmlStr, plainTextStr, ctx) {
    var parsed = parseClipboardContent(htmlStr, plainTextStr);
    if (!parsed || !parsed.body) return '';
    return sanitizeForInsideInsertion(parsed.body, ctx);
  }

  // Inserts clean content directly at the current selection without splitting the host element (link, button, block)
  function insertCleanContent(sel, cleanContent, targetEl, ctx) {
    if (!sel || sel.rangeCount === 0) return false;
    var range = sel.getRangeAt(0);

    // If target is inside an interactive host (link or button), ensure the range stays strictly within host
    if (ctx.hostInteractive) {
      if (!ctx.hostInteractive.contains(range.startContainer) || !ctx.hostInteractive.contains(range.endContainer)) {
        var newR = document.createRange();
        newR.selectNodeContents(ctx.hostInteractive);
        newR.collapse(false);
        sel.removeAllRanges();
        sel.addRange(newR);
        range = newR;
      }
    }

    range.deleteContents();

    // If target is inside an interactive host (link or button), ensure it is ALWAYS pure text - 100% immune to block splitting!
    if (ctx.hostInteractive || ctx.isInsideButton || ctx.isInsideLink) {
      var plainStr = (cleanContent.indexOf('<') === -1)
        ? decodeHtmlEntities(cleanContent)
        : (function() {
            var d = document.createElement('div');
            d.innerHTML = cleanContent;
            return d.textContent || d.innerText || '';
          })();
      plainStr = plainStr.replace(/[\\r\\n\\t]+/g, ' ').trim();
      var textNode = document.createTextNode(plainStr);
      range.insertNode(textNode);
      var newRange = document.createRange();
      newRange.setStartAfter(textNode);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);
      lastSavedRange = newRange.cloneRange();
      if (ctx.hostInteractive) {
        try { ctx.hostInteractive.normalize(); } catch (e) {}
      }
      return true;
    }

    // If pure text without tags (no '<'), insert a text node directly - 100% immune to block splitting!
    if (cleanContent.indexOf('<') === -1) {
      var plainStr = decodeHtmlEntities(cleanContent);
      var textNode = document.createTextNode(plainStr);
      range.insertNode(textNode);
      var newRange = document.createRange();
      newRange.setStartAfter(textNode);
      newRange.collapse(true);
      sel.removeAllRanges();
      sel.addRange(newRange);
      lastSavedRange = newRange.cloneRange();
      return true;
    }

    // If it contains tags (e.g. <b>, <i>, <a>, <br>):
    // Insert via DocumentFragment directly into the Range inside the unbroken host container
    try {
      var tempDiv = document.createElement('div');
      tempDiv.innerHTML = cleanContent;
      var frag = document.createDocumentFragment();
      var node;
      var lastChild = null;
      while ((node = tempDiv.firstChild)) {
        lastChild = node;
        frag.appendChild(node);
      }
      range.insertNode(frag);
      if (lastChild) {
        var newRange2 = document.createRange();
        newRange2.setStartAfter(lastChild);
        newRange2.collapse(true);
        sel.removeAllRanges();
        sel.addRange(newRange2);
        lastSavedRange = newRange2.cloneRange();
      }
      return true;
    } catch (err) {
      return false;
    }
  }

  // Smart paste handler supporting both inside-element insertion and between-element insertion
  function handlePaste(e) {
    e.preventDefault();

    var clipboardData = e.clipboardData || window.clipboardData;
    var plainText = clipboardData ? (clipboardData.getData('text/plain') || '') : '';
    var htmlText = clipboardData ? (clipboardData.getData('text/html') || '') : '';

    if (!plainText && !htmlText && lastCopiedData) {
      plainText = lastCopiedData.text || '';
      htmlText = lastCopiedData.html || '';
    }

    if (!plainText && !htmlText) return;

    var sel = window.getSelection();
    if (!sel || sel.rangeCount === 0) {
      if (lastSavedRange) {
        sel = window.getSelection();
        try {
          sel.removeAllRanges();
          sel.addRange(lastSavedRange);
        } catch (err) {}
      }
    }

    if (!sel || sel.rangeCount === 0) return;
    var range = sel.getRangeAt(0);

    // If non-collapsed selection (user highlighted text or element to replace), delete contents first
    if (!range.collapsed) {
      range.deleteContents();
    }

    var startNode = range.startContainer;
    if ((!startNode || startNode === document.body || startNode === document.documentElement) && activeFocusedEl) {
      startNode = activeFocusedEl;
    }
    if (!startNode) startNode = document.body;

    var containers = findTargetContainers(startNode);
    var hostInteractive = containers.hostInteractive;
    var hostBlock = containers.hostBlock;
    var targetEl = (startNode.nodeType === Node.TEXT_NODE) ? startNode.parentNode : startNode;
    var ctx = getTargetContext(targetEl);

    var parsed = parseClipboardContent(htmlText, plainText);
    if (!parsed || !parsed.body) return;

    // ----------------------------------------------------
    // CRITICAL: PASTING INSIDE A BUTTON OR LINK
    // Never split buttons or links! Always insert as clean text inside the element
    // ----------------------------------------------------
    var activeHost = hostInteractive || ctx.hostInteractive;
    if (activeHost || ctx.isInsideButton || ctx.isInsideLink) {
      var cleanText = (plainText || (parsed && parsed.body ? parsed.body.textContent : '') || '').replace(/[\\r\\n\\t]+/g, ' ').trim();
      if (!cleanText && htmlText) {
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlText;
        cleanText = (tempDiv.textContent || tempDiv.innerText || '').replace(/[\\r\\n\\t]+/g, ' ').trim();
      }

      if (cleanText) {
        if (!range.collapsed) {
          range.deleteContents();
        }
        if (activeHost && (!activeHost.contains(range.startContainer) || !activeHost.contains(range.endContainer))) {
          var newR = document.createRange();
          newR.selectNodeContents(activeHost);
          newR.collapse(false);
          sel.removeAllRanges();
          sel.addRange(newR);
          range = newR;
        }

        var textNode = document.createTextNode(cleanText);
        range.insertNode(textNode);

        var afterRange = document.createRange();
        afterRange.setStartAfter(textNode);
        afterRange.collapse(true);
        sel.removeAllRanges();
        sel.addRange(afterRange);
        lastSavedRange = afterRange.cloneRange();
        lastNonCollapsedRange = null;

        if (activeHost) {
          activeHost.normalize();
          var badChildren = activeHost.querySelectorAll('a, button, div, p, h1, h2, h3, h4, h5, h6, section, article');
          for (var b = 0; b < badChildren.length; b++) {
            var badEl = badChildren[b];
            var pNode = badEl.parentNode;
            if (pNode) {
              while (badEl.firstChild) pNode.insertBefore(badEl.firstChild, badEl);
              pNode.removeChild(badEl);
            }
          }
          activeHost.normalize();
        }

        try {
          var inputEvt = new Event('input', { bubbles: true, cancelable: true });
          if (targetEl) targetEl.dispatchEvent(inputEvt);
        } catch (err) {}

        saveSelection();
        triggerSync();
        return;
      }
    }

    var hasElements = hasStandaloneElements(parsed.body);

    // ----------------------------------------------------
    // SCENARIO 1: PASTING BETWEEN ELEMENTS
    // ----------------------------------------------------
    // 1. Boundary of an interactive host (link or button)
    if (hostInteractive && hasElements) {
      var atEndInteractive = isCaretAtEnd(range, hostInteractive);
      var atStartInteractive = isCaretAtStart(range, hostInteractive);

      if (atEndInteractive || atStartInteractive) {
        var cleanBetween = sanitizeForBetweenInsertion(parsed.body);
        if (cleanBetween) {
          var temp = document.createElement('div');
          temp.innerHTML = cleanBetween;
          var frag = document.createDocumentFragment();
          var lastNode = null;
          while (temp.firstChild) {
            lastNode = temp.firstChild;
            frag.appendChild(temp.firstChild);
          }
          var parent = hostInteractive.parentNode;
          if (parent) {
            if (atEndInteractive) {
              parent.insertBefore(frag, hostInteractive.nextSibling);
            } else {
              parent.insertBefore(frag, hostInteractive);
            }
            if (lastNode) {
              var newRange = document.createRange();
              newRange.setStartAfter(lastNode);
              newRange.collapse(true);
              sel.removeAllRanges();
              sel.addRange(newRange);
              lastSavedRange = newRange.cloneRange();
            }
            saveSelection();
            triggerSync();
            return;
          }
        }
      }
    }

    // 2. Empty block container (e.g. empty <p><br></p> between two elements)
    if (hostBlock && isElementEmpty(hostBlock) && hasElements) {
      var cleanBetween = sanitizeForBetweenInsertion(parsed.body);
      if (cleanBetween) {
        var temp = document.createElement('div');
        temp.innerHTML = cleanBetween;
        var frag = document.createDocumentFragment();
        var lastNode = null;
        while (temp.firstChild) {
          lastNode = temp.firstChild;
          frag.appendChild(temp.firstChild);
        }
        var p = hostBlock.parentNode;
        if (p) {
          p.insertBefore(frag, hostBlock);
          p.removeChild(hostBlock);
          if (lastNode) {
            var newRange = document.createRange();
            newRange.setStartAfter(lastNode);
            newRange.collapse(true);
            sel.removeAllRanges();
            sel.addRange(newRange);
            lastSavedRange = newRange.cloneRange();
          }
          saveSelection();
          triggerSync();
          return;
        }
      }
    }

    // 3. Boundary of a block container (end or start of paragraph, heading, card, list item)
    if (hostBlock && hasElements) {
      var atEndBlock = isCaretAtEnd(range, hostBlock);
      var atStartBlock = isCaretAtStart(range, hostBlock);

      if (atEndBlock || atStartBlock) {
        var cleanBetween = sanitizeForBetweenInsertion(parsed.body);
        if (cleanBetween) {
          var temp = document.createElement('div');
          temp.innerHTML = cleanBetween;
          var frag = document.createDocumentFragment();
          var lastNode = null;
          while (temp.firstChild) {
            lastNode = temp.firstChild;
            frag.appendChild(temp.firstChild);
          }
          var parent = hostBlock.parentNode;
          if (parent) {
            if (atEndBlock) {
              parent.insertBefore(frag, hostBlock.nextSibling);
            } else {
              parent.insertBefore(frag, hostBlock);
            }
            if (lastNode) {
              var newRange = document.createRange();
              newRange.setStartAfter(lastNode);
              newRange.collapse(true);
              sel.removeAllRanges();
              sel.addRange(newRange);
              lastSavedRange = newRange.cloneRange();
            }
            saveSelection();
            triggerSync();
            return;
          }
        }
      }
    }

    // ----------------------------------------------------
    // SCENARIO 2: PASTING INSIDE AN ELEMENT (TEXT INSERTION)
    // ----------------------------------------------------
    var cleanInside = sanitizeForInsideInsertion(parsed.body, ctx);
    if (!cleanInside) {
      if (plainText) {
        cleanInside = escapeHtmlEntities(ctx.isSingleLine ? plainText.replace(/[\\r\\n\\t]+/g, ' ').trim() : plainText);
      }
    }
    if (!cleanInside) return;

    window.focus();
    insertCleanContent(sel, cleanInside, targetEl, ctx);

    try {
      var inputEvt = new Event('input', { bubbles: true, cancelable: true });
      if (targetEl) targetEl.dispatchEvent(inputEvt);
    } catch (err) {}

    saveSelection();
    triggerSync();
  }

  // Intercept drag and drop with full inside/between anti-splitting logic
  function handleDrop(e) {
    var dataTransfer = e.dataTransfer;
    if (!dataTransfer) return;

    var plainText = dataTransfer.getData('text/plain') || '';
    var htmlText = dataTransfer.getData('text/html') || '';
    if (!plainText && !htmlText) return;

    e.preventDefault();

    var sel = window.getSelection();
    var dropRange = null;
    if (document.caretRangeFromPoint) {
      dropRange = document.caretRangeFromPoint(e.clientX, e.clientY);
    } else if (document.caretPositionFromPoint) {
      var pos = document.caretPositionFromPoint(e.clientX, e.clientY);
      if (pos) {
        dropRange = document.createRange();
        dropRange.setStart(pos.offsetNode, pos.offset);
        dropRange.collapse(true);
      }
    }

    if (dropRange && sel) {
      sel.removeAllRanges();
      sel.addRange(dropRange);
    }

    // Re-use smart paste logic for consistent anti-splitting on drop
    handlePaste({
      preventDefault: function() {},
      clipboardData: dataTransfer
    });
  }

  // Prevent splitting links, buttons, badges, chips, etc. on Enter
  function handleKeydown(e) {
    if (e.key === 'Enter') {
      var sel = window.getSelection();
      var node = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0).startContainer : activeFocusedEl;
      var targetEl = (node && node.nodeType === Node.TEXT_NODE) ? node.parentNode : node;
      var ctx = getTargetContext(targetEl);

      // Prevent block splitting inside links, buttons, badges, nav-links, labels, headings
      if (ctx.isInsideLink || ctx.isInsideButton || (ctx.isSingleLine && !e.shiftKey)) {
        e.preventDefault();

        // If inside a link or button and at the end, move cursor after the element so user can type outside
        if (ctx.hostInteractive) {
          var selR = (sel && sel.rangeCount > 0) ? sel.getRangeAt(0) : null;
          if (selR && isCaretAtEnd(selR, ctx.hostInteractive)) {
            var spaceText = document.createTextNode(' ');
            var parent = ctx.hostInteractive.parentNode;
            if (parent) {
              parent.insertBefore(spaceText, ctx.hostInteractive.nextSibling);
              var exitRange = document.createRange();
              exitRange.setStartAfter(spaceText);
              exitRange.collapse(true);
              sel.removeAllRanges();
              sel.addRange(exitRange);
              lastSavedRange = exitRange.cloneRange();
              saveSelection();
              triggerSync();
              return;
            }
          }
        }

        // In headings, summary, or table cells: Shift+Enter inserts a soft <br> without splitting the block
        if (e.shiftKey && !ctx.isInsideLink && !ctx.isInsideButton) {
          if (sel && sel.rangeCount > 0) {
            var range = sel.getRangeAt(0);
            range.deleteContents();
            var br = document.createElement('br');
            range.insertNode(br);
            var afterBr = document.createRange();
            afterBr.setStartAfter(br);
            afterBr.collapse(true);
            sel.removeAllRanges();
            sel.addRange(afterBr);
            lastSavedRange = afterBr.cloneRange();
          }
        }
        triggerSync();
        return;
      }
    }
  }

  var historyDebounceTimer = null;
  function scheduleHistorySnapshot() {
    if (historyDebounceTimer) clearTimeout(historyDebounceTimer);
    historyDebounceTimer = setTimeout(function() {
      recordHistorySnapshot();
    }, 400);
  }

  document.addEventListener('input', function() {
    scheduleHistorySnapshot();
    triggerSync();
  });
  document.addEventListener('keyup', triggerSync);
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('paste', function(e) {
    handlePaste(e);
    setTimeout(recordHistorySnapshot, 50);
  }, true);
  document.addEventListener('drop', function(e) {
    handleDrop(e);
    setTimeout(recordHistorySnapshot, 50);
  }, true);
  document.addEventListener('copy', handleCopy, true);
  document.addEventListener('cut', function(e) {
    handleCut(e);
    setTimeout(recordHistorySnapshot, 50);
  }, true);

  // Initial history snapshot seed
  setTimeout(function() {
    recordHistorySnapshot();
  }, 200);

  // Scroll position preservation
  var fileKey = '__wb_edit_pos_' + encodeURIComponent('${a.id||a.name}');
  try {
    var savedPos = sessionStorage.getItem(fileKey);
    if (savedPos) {
      var parsed = JSON.parse(savedPos);
      if (parsed && typeof parsed.y === 'number') {
        setTimeout(function() {
          window.scrollTo(parsed.x || 0, parsed.y);
        }, 10);
      }
    }
  } catch (e) {}

  window.addEventListener('scroll', function() {
    var sx = window.scrollX || document.documentElement.scrollLeft || 0;
    var sy = window.scrollY || document.documentElement.scrollTop || 0;
    try {
      sessionStorage.setItem(fileKey, JSON.stringify({ x: sx, y: sy }));
    } catch(e) {}
    window.parent.postMessage({
      type: 'EDITOR_SCROLL_UPDATE',
      scrollX: sx,
      scrollY: sy
    }, '*');
  }, { passive: true });

  function updateSelectionAndRanges(newRange) {
    if (!newRange) return null;
    try {
      var sel = window.getSelection();
      if (sel) {
        sel.removeAllRanges();
        sel.addRange(newRange);
      }
    } catch (e) {}
    try {
      lastSavedRange = newRange.cloneRange();
      if (!newRange.collapsed && newRange.toString().trim().length > 0) {
        lastNonCollapsedRange = newRange.cloneRange();
      }
    } catch (e2) {}
    return lastNonCollapsedRange || lastSavedRange;
  }

  function getEffectiveRange(customRange) {
    if (customRange && document.body && document.body.contains(customRange.commonAncestorContainer)) {
      return customRange;
    }
    if (lastNonCollapsedRange && document.body && document.body.contains(lastNonCollapsedRange.commonAncestorContainer)) {
      return lastNonCollapsedRange;
    }
    try {
      var sel = window.getSelection();
      if (sel && sel.rangeCount > 0) {
        var r = sel.getRangeAt(0);
        if (!r.collapsed && document.body && document.body.contains(r.commonAncestorContainer)) {
          return r;
        }
      }
    } catch (e) {}
    if (lastSavedRange && document.body && document.body.contains(lastSavedRange.commonAncestorContainer)) {
      return lastSavedRange;
    }
    return null;
  }

  // Dedicated helper to apply text color or background highlight color cleanly
  function applySelectionColor(colorHex, isBackground, customRange) {
    if (!colorHex) return;
    var propName = isBackground ? 'background-color' : 'color';
    var range = getEffectiveRange(customRange);

    if ((!range || range.collapsed || range.toString().trim().length === 0) && activeFocusedEl) {
      activeFocusedEl.style.setProperty(propName, colorHex, 'important');
      recordHistorySnapshot();
      saveSelection();
      triggerSync();
      notifyActiveTextStyle();
      return;
    }

    if (!range || range.collapsed || range.toString().trim().length === 0) return;

    var sc = range.startContainer;
    var parentEl = (sc.nodeType === 1) ? sc : sc.parentNode;

    if (parentEl && parentEl.tagName === 'SPAN' && parentEl.textContent.trim() === range.toString().trim()) {
      parentEl.style.setProperty(propName, colorHex, 'important');
      var newR1 = document.createRange();
      newR1.selectNodeContents(parentEl);
      updateSelectionAndRanges(newR1);
    } else {
      try {
        var spanEl = document.createElement('span');
        spanEl.style.setProperty(propName, colorHex, 'important');
        var contents = range.extractContents();
        spanEl.appendChild(contents);
        range.insertNode(spanEl);

        var newR2 = document.createRange();
        newR2.selectNodeContents(spanEl);
        updateSelectionAndRanges(newR2);
      } catch (err) {
        console.warn('applySelectionColor DOM error', err);
      }
    }

    recordHistorySnapshot();
    triggerSync();
    notifyActiveTextStyle();
  }

  // Helper to determine if a text node belongs to user-editable document content
  function isValidEditorTextNode(node, doc) {
    doc = doc || document;
    if (!node || node.nodeType !== 3) return false;
    var p = node.parentElement;
    while (p && p !== doc.body && p !== doc.documentElement) {
      var t = p.tagName ? p.tagName.toLowerCase() : '';
      if (t === 'script' || t === 'style' || p.id === 'wb-image-toolbar' || p.id === '__wb_editor_sync' || p.id === '__wb_editor_helpers') {
        return false;
      }
      p = p.parentElement;
    }
    return true;
  }

  // Calculate character offsets of a range across document body text nodes
  function getRangeCharacterOffsets(root, range, doc) {
    doc = doc || document;
    if (!root || !range) return null;
    try {
      var walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
      var charCount = 0;
      var startOffset = -1;
      var endOffset = -1;
      var node = walker.nextNode();

      while (node) {
        if (isValidEditorTextNode(node, doc)) {
          var len = (node.nodeValue || '').length;
          if (startOffset === -1 && node === range.startContainer) {
            startOffset = charCount + range.startOffset;
          }
          if (endOffset === -1 && node === range.endContainer) {
            endOffset = charCount + range.endOffset;
          }
          charCount += len;
          if (startOffset !== -1 && endOffset !== -1) break;
        }
        node = walker.nextNode();
      }

      if (startOffset !== -1 && endOffset !== -1) {
        return { start: startOffset, end: endOffset };
      }
    } catch (e) {}
    return null;
  }

  // Recreate a Range exactly matching character offsets
  function createRangeFromCharacterOffsets(root, start, end, doc) {
    doc = doc || document;
    if (!root || start < 0 || end < start) return null;
    try {
      var walker = doc.createTreeWalker(root, NodeFilter.SHOW_TEXT, null, false);
      var charCount = 0;
      var startNode = null;
      var startOffsetInNode = 0;
      var endNode = null;
      var endOffsetInNode = 0;
      var node = walker.nextNode();

      while (node) {
        if (isValidEditorTextNode(node, doc)) {
          var len = (node.nodeValue || '').length;
          if (!startNode && charCount + len >= start) {
            startNode = node;
            startOffsetInNode = Math.max(0, start - charCount);
          }
          if (!endNode && charCount + len >= end) {
            endNode = node;
            endOffsetInNode = Math.min(len, end - charCount);
            break;
          }
          charCount += len;
        }
        node = walker.nextNode();
      }

      if (startNode && endNode) {
        var r = doc.createRange();
        r.setStart(startNode, startOffsetInNode);
        r.setEnd(endNode, endOffsetInNode);
        return r;
      }
    } catch (e) {}
    return null;
  }

  // Dedicated Color Preview Engine for text foreground and background colors
  var colorPreviewSession = null;

  function startColorPreview(type) {
    if (colorPreviewSession) {
      cancelColorPreview();
    }

    var range = getEffectiveRange();

    // 1. Suppress native selection mark highlighting so real preview colors are visible
    document.body.classList.add('wb-hide-selection');
    document.documentElement.classList.add('wb-hide-selection');

    // 2. Snapshot current clean HTML and character offsets so Cancel can revert without artifacts
    var originalHtml = getCleanBodyHtmlSnapshot();
    var offsets = range ? getRangeCharacterOffsets(document.body, range, document) : null;
    var originalRange = (range && !range.collapsed) ? range.cloneRange() : (lastSavedRange ? lastSavedRange.cloneRange() : null);

    var previewSpan = null;
    var targetEl = null;

    if (range && !range.collapsed && range.toString().trim().length > 0) {
      var sc = range.startContainer;
      var parentEl = (sc.nodeType === 1) ? sc : sc.parentNode;
      if (parentEl && parentEl.tagName === 'SPAN' && parentEl.textContent.trim() === range.toString().trim()) {
        previewSpan = parentEl;
        previewSpan.classList.add('wb-color-preview-target');
      } else {
        try {
          var spanEl = document.createElement('span');
          spanEl.className = 'wb-color-preview-target';
          var contents = range.extractContents();
          spanEl.appendChild(contents);
          range.insertNode(spanEl);
          previewSpan = spanEl;

          var newR = document.createRange();
          newR.selectNodeContents(spanEl);
          updateSelectionAndRanges(newR);
        } catch (err) {
          console.warn('startColorPreview extractContents error', err);
        }
      }
    } else if (activeFocusedEl && activeFocusedEl !== document.body && activeFocusedEl !== document.documentElement) {
      targetEl = activeFocusedEl;
    }

    colorPreviewSession = {
      type: type,
      originalHtml: originalHtml,
      offsets: offsets,
      originalRange: originalRange,
      previewSpan: previewSpan,
      targetEl: targetEl,
      lastHex: null
    };
  }

  function previewColor(type, colorHex) {
    if (!colorPreviewSession) {
      startColorPreview(type);
    }
    if (!colorHex || !colorPreviewSession) return;

    var propName = (type === 'hiliteColor' || type === 'background') ? 'background-color' : 'color';
    colorPreviewSession.lastHex = colorHex;

    if (colorPreviewSession.previewSpan && document.body.contains(colorPreviewSession.previewSpan)) {
      var span = colorPreviewSession.previewSpan;
      span.style.setProperty(propName, colorHex, 'important');

      if (propName === 'color') {
        var inners = span.querySelectorAll('[style*="color"]');
        for (var i = 0; i < inners.length; i++) {
          inners[i].style.removeProperty('color');
        }
        var fontTags = span.querySelectorAll('font[color]');
        for (var f = 0; f < fontTags.length; f++) {
          fontTags[f].removeAttribute('color');
        }
      } else {
        var innerBgs = span.querySelectorAll('mark, [style*="background"]');
        for (var j = 0; j < innerBgs.length; j++) {
          innerBgs[j].style.removeProperty('background-color');
          innerBgs[j].style.removeProperty('background');
        }
        var marks = span.querySelectorAll('mark');
        for (var m = 0; m < marks.length; m++) {
          marks[m].style.setProperty('background-color', 'transparent', 'important');
        }
      }
    } else if (colorPreviewSession.targetEl && document.body.contains(colorPreviewSession.targetEl)) {
      colorPreviewSession.targetEl.style.setProperty(propName, colorHex, 'important');
    }
  }

  function commitColorPreview() {
    if (!colorPreviewSession) return;

    var session = colorPreviewSession;
    colorPreviewSession = null;

    // Restore selection mark visibility
    document.body.classList.remove('wb-hide-selection');
    document.documentElement.classList.remove('wb-hide-selection');

    if (session.previewSpan && document.body.contains(session.previewSpan)) {
      session.previewSpan.classList.remove('wb-color-preview-target');
      var prop = (session.type === 'hiliteColor' || session.type === 'background') ? 'background-color' : 'color';
      if (session.lastHex) {
        session.previewSpan.style.setProperty(prop, session.lastHex);
      }
      try {
        var finalR = document.createRange();
        finalR.selectNodeContents(session.previewSpan);
        updateSelectionAndRanges(finalR);
      } catch (e) {}
    } else if (session.offsets) {
      var restoredR = createRangeFromCharacterOffsets(document.body, session.offsets.start, session.offsets.end, document);
      if (restoredR) {
        updateSelectionAndRanges(restoredR);
      }
    } else if (session.originalRange) {
      try {
        updateSelectionAndRanges(session.originalRange);
      } catch (e) {}
    }

    try {
      window.focus();
      document.body.focus();
    } catch (e) {}

    recordHistorySnapshot();
    triggerSync();
    notifyActiveTextStyle();
  }

  function cancelColorPreview() {
    if (!colorPreviewSession) return;

    var session = colorPreviewSession;
    colorPreviewSession = null;

    // Restore original HTML before preview began
    if (session.originalHtml !== null && session.originalHtml !== undefined) {
      restoreHistorySnapshot(session.originalHtml);
    }

    // Restore selection mark visibility
    document.body.classList.remove('wb-hide-selection');
    document.documentElement.classList.remove('wb-hide-selection');

    // Restore original selection range
    if (session.offsets) {
      var restoredR = createRangeFromCharacterOffsets(document.body, session.offsets.start, session.offsets.end, document);
      if (restoredR) {
        updateSelectionAndRanges(restoredR);
      }
    } else if (session.originalRange) {
      try {
        updateSelectionAndRanges(session.originalRange);
      } catch (e) {}
    }

    try {
      window.focus();
      document.body.focus();
    } catch (e) {}

    triggerSync();
    notifyActiveTextStyle();
  }

  // Dedicated helper for font size with pixel/rem values on selected text fragment
  function applyFontSize(sizeVal, customRange) {
    if (!sizeVal) return;
    var range = getEffectiveRange(customRange);

    if ((!range || range.collapsed || range.toString().trim().length === 0) && activeFocusedEl) {
      activeFocusedEl.style.setProperty('font-size', sizeVal, 'important');
      recordHistorySnapshot();
      saveSelection();
      triggerSync();
      notifyActiveTextStyle();
      return;
    }

    if (!range || range.collapsed || range.toString().trim().length === 0) return;

    var sc = range.startContainer;
    var parentEl = (sc.nodeType === 1) ? sc : sc.parentNode;

    if (parentEl && parentEl.tagName === 'SPAN' && parentEl.textContent.trim() === range.toString().trim()) {
      parentEl.style.setProperty('font-size', sizeVal, 'important');
      var newR1 = document.createRange();
      newR1.selectNodeContents(parentEl);
      updateSelectionAndRanges(newR1);
    } else {
      try {
        var spanEl = document.createElement('span');
        spanEl.style.setProperty('font-size', sizeVal, 'important');
        var contents = range.extractContents();
        spanEl.appendChild(contents);
        range.insertNode(spanEl);

        var newR2 = document.createRange();
        newR2.selectNodeContents(spanEl);
        updateSelectionAndRanges(newR2);
      } catch (err) {
        console.warn('applyFontSize DOM error', err);
      }
    }

    recordHistorySnapshot();
    triggerSync();
    notifyActiveTextStyle();
  }

  // Dedicated helper to strip formatting from selected text fragment
  function applyRemoveFormat(customRange) {
    var range = getEffectiveRange(customRange);
    if (!range) return;

    try {
      if (!range.collapsed && range.toString().trim().length > 0) {
        var plainText = range.toString();
        range.deleteContents();
        var textNode = document.createTextNode(plainText);
        range.insertNode(textNode);
        var newR = document.createRange();
        newR.selectNodeContents(textNode);
        updateSelectionAndRanges(newR);
      } else if (activeFocusedEl) {
        activeFocusedEl.removeAttribute('style');
      }
    } catch (e) {
      console.warn('applyRemoveFormat error', e);
    }

    recordHistorySnapshot();
    triggerSync();
    notifyActiveTextStyle();
  }

  // Dedicated helper for bold, italic, underline, strikethrough with direct DOM toggle support
  function applyInlineFormat(command, customRange) {
    var range = getEffectiveRange(customRange);

    if (!range && activeFocusedEl) {
      try {
        var autoR = document.createRange();
        autoR.selectNodeContents(activeFocusedEl);
        range = autoR;
      } catch (e) {}
    }

    if (!range) return;

    try {
      window.focus();
      var winSel = window.getSelection();
      if (winSel && range) {
        winSel.removeAllRanges();
        winSel.addRange(range);
      }
    } catch (eSel) {}

    var sc = range.startContainer;
    var targetEl = (sc.nodeType === 3) ? sc.parentNode : sc;
    var comp = targetEl ? window.getComputedStyle(targetEl) : null;

    // Detect if this property is currently active on the selection
    var isCurrentlyActive = false;
    if (command === 'bold') {
      var fw = comp ? comp.fontWeight : '400';
      var isInherentlyBold = (fw === 'bold' || fw === 'bolder' || parseInt(fw, 10) >= 600);
      var closestBold = targetEl ? targetEl.closest('strong, b') : null;
      var hasExplicitNormal = targetEl && targetEl.style && targetEl.style.fontWeight === 'normal';
      isCurrentlyActive = (closestBold !== null || isInherentlyBold) && !hasExplicitNormal;
    } else if (command === 'italic') {
      var fs = comp ? comp.fontStyle : 'normal';
      var isInherentlyItalic = (fs === 'italic' || fs === 'oblique');
      var closestItalic = targetEl ? targetEl.closest('em, i') : null;
      var hasExplicitNormalItalic = targetEl && targetEl.style && targetEl.style.fontStyle === 'normal';
      isCurrentlyActive = (closestItalic !== null || isInherentlyItalic) && !hasExplicitNormalItalic;
    } else if (command === 'underline') {
      var deco = comp ? (comp.textDecorationLine || comp.textDecoration || '').toLowerCase() : '';
      var isUnder = deco.indexOf('underline') !== -1;
      var closestUnder = targetEl ? targetEl.closest('u') : null;
      var hasExplicitNoUnder = targetEl && targetEl.style && (targetEl.style.textDecoration === 'none' || targetEl.style.textDecorationLine === 'none');
      isCurrentlyActive = (closestUnder !== null || isUnder) && !hasExplicitNoUnder;
    } else if (command === 'strikeThrough') {
      var deco2 = comp ? (comp.textDecorationLine || comp.textDecoration || '').toLowerCase() : '';
      var isStrike = deco2.indexOf('line-through') !== -1;
      var closestStrike = targetEl ? targetEl.closest('s, strike, del') : null;
      var hasExplicitNoStrike = targetEl && targetEl.style && (targetEl.style.textDecoration === 'none' || targetEl.style.textDecorationLine === 'none');
      isCurrentlyActive = (closestStrike !== null || isStrike) && !hasExplicitNoStrike;
    }

    if (!range.collapsed && range.toString().trim().length > 0) {
      if (isCurrentlyActive) {
        // Toggle OFF:
        var tagToUnwrap = null;
        if (command === 'bold') tagToUnwrap = targetEl ? targetEl.closest('strong, b') : null;
        else if (command === 'italic') tagToUnwrap = targetEl ? targetEl.closest('em, i') : null;
        else if (command === 'underline') tagToUnwrap = targetEl ? targetEl.closest('u') : null;
        else if (command === 'strikeThrough') tagToUnwrap = targetEl ? targetEl.closest('s, strike, del') : null;

        if (tagToUnwrap && tagToUnwrap.textContent.trim() === range.toString().trim()) {
          var ep = tagToUnwrap.parentNode;
          if (ep) {
            var frag = document.createDocumentFragment();
            while (tagToUnwrap.firstChild) frag.appendChild(tagToUnwrap.firstChild);
            var firstNode = frag.firstChild;
            var lastNode = frag.lastChild;
            ep.replaceChild(frag, tagToUnwrap);
            if (firstNode && lastNode) {
              var newR = document.createRange();
              newR.setStartBefore(firstNode);
              newR.setEndAfter(lastNode);
              updateSelectionAndRanges(newR);
            }
          }
        } else {
          // Inside an element with inherent bold/italic/etc (e.g. heading or link):
          var offSpan = document.createElement('span');
          if (command === 'bold') offSpan.style.setProperty('font-weight', 'normal', 'important');
          else if (command === 'italic') offSpan.style.setProperty('font-style', 'normal', 'important');
          else if (command === 'underline') offSpan.style.setProperty('text-decoration', 'none', 'important');
          else if (command === 'strikeThrough') offSpan.style.setProperty('text-decoration', 'none', 'important');

          try {
            var contents = range.extractContents();
            offSpan.appendChild(contents);
            range.insertNode(offSpan);
            var newR2 = document.createRange();
            newR2.selectNodeContents(offSpan);
            updateSelectionAndRanges(newR2);
          } catch (e) {}
        }
      } else {
        // Toggle ON:
        if (targetEl && targetEl.tagName === 'SPAN' && targetEl.textContent.trim() === range.toString().trim()) {
          if (command === 'bold' && targetEl.style.fontWeight === 'normal') {
            targetEl.style.removeProperty('font-weight');
          } else if (command === 'italic' && targetEl.style.fontStyle === 'normal') {
            targetEl.style.removeProperty('font-style');
          } else if (command === 'underline' && targetEl.style.textDecoration === 'none') {
            targetEl.style.removeProperty('text-decoration');
          } else if (command === 'strikeThrough' && targetEl.style.textDecoration === 'none') {
            targetEl.style.removeProperty('text-decoration');
          }
        }

        try {
          var onEl = null;
          if (command === 'bold') {
            onEl = document.createElement('strong');
            onEl.style.setProperty('font-weight', 'bold', 'important');
          } else if (command === 'italic') {
            onEl = document.createElement('em');
            onEl.style.setProperty('font-style', 'italic', 'important');
          } else if (command === 'underline') {
            onEl = document.createElement('u');
            onEl.style.setProperty('text-decoration', 'underline', 'important');
          } else if (command === 'strikeThrough') {
            onEl = document.createElement('s');
            onEl.style.setProperty('text-decoration', 'line-through', 'important');
          }

          if (onEl) {
            var contents2 = range.extractContents();
            onEl.appendChild(contents2);
            range.insertNode(onEl);
            var newR3 = document.createRange();
            newR3.selectNodeContents(onEl);
            updateSelectionAndRanges(newR3);
          }
        } catch (e2) {}
      }
    } else if (activeFocusedEl) {
      // Toggle on activeFocusedEl directly when no text range selected
      if (command === 'bold') {
        activeFocusedEl.style.setProperty('font-weight', isCurrentlyActive ? 'normal' : 'bold', 'important');
      } else if (command === 'italic') {
        activeFocusedEl.style.setProperty('font-style', isCurrentlyActive ? 'normal' : 'italic', 'important');
      } else if (command === 'underline') {
        activeFocusedEl.style.setProperty('text-decoration', isCurrentlyActive ? 'none' : 'underline', 'important');
      } else if (command === 'strikeThrough') {
        activeFocusedEl.style.setProperty('text-decoration', isCurrentlyActive ? 'none' : 'line-through', 'important');
      }
    }

    recordHistorySnapshot();
    triggerSync();
    notifyActiveTextStyle();
  }

  function applyAlignment(align) {
    var sel = window.getSelection();
    var range = (lastSavedRange && document.body.contains(lastSavedRange.commonAncestorContainer))
      ? lastSavedRange
      : (sel && sel.rangeCount > 0 ? sel.getRangeAt(0) : null);

    if (range && sel) {
      try {
        sel.removeAllRanges();
        sel.addRange(range);
      } catch (e) {}
    }

    var startEl = null;
    if (range) {
      startEl = (range.startContainer.nodeType === 1) ? range.startContainer : range.startContainer.parentElement;
    } else if (activeFocusedEl) {
      startEl = activeFocusedEl;
    }

    if (!startEl) startEl = document.body;

    var blockTags = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'DIV', 'LI', 'BLOCKQUOTE', 'PRE', 'SECTION', 'ARTICLE', 'HEADER', 'FOOTER'];
    var curr = startEl;
    var targetBlock = null;

    while (curr && curr !== document.body && curr !== document.documentElement) {
      if (curr.nodeType === 1 && blockTags.indexOf(curr.tagName) !== -1) {
        targetBlock = curr;
        break;
      }
      curr = curr.parentElement;
    }

    if (!targetBlock && startEl !== document.body) {
      targetBlock = startEl;
    }

    var cmdMap = {
      left: 'justifyLeft',
      center: 'justifyCenter',
      right: 'justifyRight',
      justify: 'justifyFull'
    };
    try {
      if (cmdMap[align]) {
        document.execCommand(cmdMap[align], false, null);
      }
    } catch (e) {}

    if (targetBlock && targetBlock !== document.body) {
      targetBlock.style.setProperty('text-align', align, 'important');
      targetBlock.style.textAlign = align;
    }

    recordHistorySnapshot();
    saveSelection();
    triggerSync();
  }

  function applyListFormat(listType) {
    var sel = window.getSelection();
    var range = (lastSavedRange && document.body.contains(lastSavedRange.commonAncestorContainer))
      ? lastSavedRange
      : (sel && sel.rangeCount > 0 ? sel.getRangeAt(0) : null);

    if (range && sel) {
      try {
        sel.removeAllRanges();
        sel.addRange(range);
      } catch (e) {}
    }

    var startEl = null;
    if (range) {
      startEl = (range.startContainer.nodeType === 1) ? range.startContainer : range.startContainer.parentElement;
    } else if (activeFocusedEl) {
      startEl = activeFocusedEl;
    }

    if (!startEl) startEl = document.body;

    var currentLi = null;
    var checkEl = startEl;
    while (checkEl && checkEl !== document.body && checkEl !== document.documentElement) {
      if (checkEl.tagName === 'LI') {
        currentLi = checkEl;
        break;
      }
      checkEl = checkEl.parentElement;
    }

    if (currentLi) {
      var parentList = currentLi.parentElement;
      var curListTag = parentList ? parentList.tagName.toLowerCase() : '';

      if (curListTag === listType) {
        // Toggle list off: convert LI back to paragraph
        var p = document.createElement('p');
        p.innerHTML = currentLi.innerHTML || '<br>';
        if (parentList && parentList.parentNode) {
          parentList.parentNode.insertBefore(p, parentList.nextSibling);
          currentLi.remove();
          if (parentList.children.length === 0) parentList.remove();
          var newR = document.createRange();
          newR.selectNodeContents(p);
          newR.collapse(false);
          if (sel) {
            sel.removeAllRanges();
            sel.addRange(newR);
          }
          lastSavedRange = newR.cloneRange();
        }
      } else if (parentList && parentList.parentNode) {
        // Switch between UL and OL
        var newList = document.createElement(listType);
        while (parentList.firstChild) newList.appendChild(parentList.firstChild);
        parentList.parentNode.replaceChild(newList, parentList);
        var newR2 = document.createRange();
        newR2.selectNodeContents(newList.querySelector('li') || newList);
        newR2.collapse(false);
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(newR2);
        }
        lastSavedRange = newR2.cloneRange();
      }
    } else {
      var executed = false;
      try {
        executed = document.execCommand(listType === 'ol' ? 'insertOrderedList' : 'insertUnorderedList', false, null);
      } catch (e) {}

      var inListNow = false;
      var newSel = window.getSelection();
      if (newSel && newSel.rangeCount > 0) {
        var chk = newSel.getRangeAt(0).startContainer;
        while (chk && chk !== document.body) {
          if (chk.nodeType === 1 && chk.tagName === 'LI') { inListNow = true; break; }
          chk = chk.parentElement;
        }
      }

      if (!inListNow && startEl && startEl !== document.body) {
        var block = startEl;
        while (block && block.parentElement && block.parentElement !== document.body && ['P', 'DIV', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].indexOf(block.tagName) === -1) {
          block = block.parentElement;
        }

        var listEl = document.createElement(listType);
        var liEl = document.createElement('li');
        if (block && block !== document.body && ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'].indexOf(block.tagName) !== -1) {
          liEl.innerHTML = block.innerHTML || 'List item';
          listEl.appendChild(liEl);
          block.parentNode.replaceChild(listEl, block);
        } else {
          liEl.innerHTML = 'List item';
          listEl.appendChild(liEl);
          if (block && block !== document.body) {
            block.appendChild(listEl);
          } else {
            document.body.appendChild(listEl);
          }
        }

        var newRange = document.createRange();
        newRange.selectNodeContents(liEl);
        newRange.collapse(false);
        if (sel) {
          sel.removeAllRanges();
          sel.addRange(newRange);
        }
        lastSavedRange = newRange.cloneRange();
      }
    }

    recordHistorySnapshot();
    saveSelection();
    triggerSync();
  }

  function applyLinkFormat(url, text) {
    var sel = window.getSelection();
    var range = (lastNonCollapsedRange && document.body.contains(lastNonCollapsedRange.commonAncestorContainer))
      ? lastNonCollapsedRange
      : (lastSavedRange && document.body.contains(lastSavedRange.commonAncestorContainer) ? lastSavedRange : (sel && sel.rangeCount > 0 ? sel.getRangeAt(0) : null));

    if (range && sel) {
      try {
        sel.removeAllRanges();
        sel.addRange(range);
      } catch (e) {}
    }

    var startEl = null;
    if (range) {
      startEl = (range.startContainer.nodeType === 1) ? range.startContainer : range.startContainer.parentElement;
    } else if (activeFocusedEl) {
      startEl = activeFocusedEl;
    }

    var existingA = null;
    var curr = startEl;
    while (curr && curr !== document.body && curr !== document.documentElement) {
      if (curr.tagName === 'A') {
        existingA = curr;
        break;
      }
      curr = curr.parentElement;
    }

    if (!url) {
      if (existingA) {
        var parent = existingA.parentNode;
        while (existingA.firstChild) parent.insertBefore(existingA.firstChild, existingA);
        existingA.remove();
      } else {
        try { document.execCommand('unlink', false, null); } catch (e) {}
      }
    } else {
      if (existingA) {
        existingA.setAttribute('href', url);
        if (text && text.trim()) {
          existingA.textContent = text.trim();
        }
      } else if (range && !range.collapsed && range.toString().length > 0) {
        var handledNative = false;
        try {
          handledNative = document.execCommand('createLink', false, url);
        } catch (e) {}

        if (handledNative) {
          var createdA = null;
          var curSel = window.getSelection();
          if (curSel && curSel.rangeCount > 0) {
            var n = curSel.getRangeAt(0).startContainer;
            while (n && n !== document.body) {
              if (n.nodeType === 1 && n.tagName === 'A') { createdA = n; break; }
              n = n.parentElement;
            }
          }
          if (createdA && text && text.trim()) {
            createdA.textContent = text.trim();
          }
        } else {
          var a = document.createElement('a');
          a.setAttribute('href', url);
          if (text && text.trim()) {
            a.textContent = text.trim();
            range.deleteContents();
            range.insertNode(a);
          } else {
            var contents = range.extractContents();
            a.appendChild(contents);
            range.insertNode(a);
          }

          var newR = document.createRange();
          newR.selectNodeContents(a);
          if (sel) {
            sel.removeAllRanges();
            sel.addRange(newR);
          }
          lastSavedRange = newR.cloneRange();
          lastNonCollapsedRange = newR.cloneRange();
        }
      } else {
        var label = (text && text.trim()) ? text.trim() : url;
        var aEl = document.createElement('a');
        aEl.setAttribute('href', url);
        aEl.textContent = label;

        if (range) {
          range.insertNode(aEl);
          range.setStartAfter(aEl);
          range.collapse(true);
          if (sel) {
            sel.removeAllRanges();
            sel.addRange(range);
          }
          lastSavedRange = range.cloneRange();
        } else if (startEl && startEl !== document.body) {
          startEl.appendChild(aEl);
        } else {
          document.body.appendChild(aEl);
        }
      }
    }

    recordHistorySnapshot();
    saveSelection();
    triggerSync();
  }

  function handleExecCommand(cmd, val, text, customRange) {
    if (cmd === 'undo') {
      var execSuccess = false;
      try {
        if (activeFocusedEl && typeof activeFocusedEl.focus === 'function') {
          activeFocusedEl.focus();
        }
        execSuccess = document.execCommand('undo', false, null);
      } catch (e) {}
      if (!execSuccess && editorHistoryIndex > 0) {
        editorHistoryIndex--;
        restoreHistorySnapshot(editorHistoryStack[editorHistoryIndex]);
      }
      notifyUndoRedoState();
      saveSelection();
      triggerSync();
      return;
    }

    if (cmd === 'redo') {
      var execSuccess2 = false;
      try {
        if (activeFocusedEl && typeof activeFocusedEl.focus === 'function') {
          activeFocusedEl.focus();
        }
        execSuccess2 = document.execCommand('redo', false, null);
      } catch (e) {}
      if (!execSuccess2 && editorHistoryIndex < editorHistoryStack.length - 1) {
        editorHistoryIndex++;
        restoreHistorySnapshot(editorHistoryStack[editorHistoryIndex]);
      }
      notifyUndoRedoState();
      saveSelection();
      triggerSync();
      return;
    }

    if (cmd === 'justifyLeft' || cmd === 'justifyCenter' || cmd === 'justifyRight' || cmd === 'justifyFull' || cmd === 'align') {
      var alignTarget = val || cmd.replace('justify', '').toLowerCase();
      if (alignTarget === 'full') alignTarget = 'justify';
      applyAlignment(alignTarget);
      return;
    }

    if (cmd === 'insertUnorderedList' || cmd === 'insertOrderedList') {
      applyListFormat(cmd === 'insertOrderedList' ? 'ol' : 'ul');
      return;
    }

    if (cmd === 'createLink') {
      applyLinkFormat(val, text);
      return;
    }

    if (cmd === 'unlink') {
      applyLinkFormat(null);
      return;
    }

    if (cmd === 'formatBlock') {
      changeBlockTag(val);
      return;
    }

    if (cmd === 'foreColor' || cmd === 'hiliteColor') {
      if (colorPreviewSession) {
        colorPreviewSession.type = cmd;
        previewColor(cmd, val);
        commitColorPreview();
        return;
      }
      applySelectionColor(val, cmd === 'hiliteColor', customRange);
      return;
    }

    if (cmd === 'fontSize') {
      applyFontSize(val, customRange);
      return;
    }

    if (cmd === 'removeFormat') {
      applyRemoveFormat(customRange);
      return;
    }

    if (cmd === 'bold' || cmd === 'italic' || cmd === 'underline' || cmd === 'strikeThrough') {
      applyInlineFormat(cmd, customRange);
      return;
    }

    try {
      document.execCommand(cmd, false, val);
    } catch (err) {
      console.warn('execCommand fallback failed for ' + cmd, err);
    }
    saveSelection();
    triggerSync();
  }

  // Listen for parent formatting commands
  window.addEventListener('message', function(event) {
    if (!event.data) return;
    if (event.data.type === 'FORMAT_BLOCK') {
      var targetTag = event.data.targetTag || event.data.value || 'p';
      changeBlockTag(targetTag);
    } else if (event.data.type === 'EXEC_COMMAND') {
      var cmd = event.data.command;
      var val = event.data.value !== undefined ? event.data.value : null;
      handleExecCommand(cmd, val, event.data.text);
    } else if (event.data.type === 'UPDATE_PROJECT_STYLES') {
      var existing = document.getElementById('__wb_project_styles');
      if (existing) {
        existing.textContent = event.data.css;
      } else {
        var newStyle = document.createElement('style');
        newStyle.id = '__wb_project_styles';
        newStyle.textContent = event.data.css;
        document.head.appendChild(newStyle);
      }
    } else if (event.data.type === 'RESTORE_SCROLL') {
      if (typeof event.data.scrollY === 'number') {
        window.scrollTo(event.data.scrollX || 0, event.data.scrollY);
      }
    } else if (event.data.type === 'INSERT_IMAGE') {
      var imgSrc = event.data.src;
      var imgAlt = event.data.alt || 'Image';
      var imgId = 'img_' + Date.now();
      
      var imageHtml = '<div class="image-block" style="margin: 1.5rem 0; text-align: center;">' +
        '<img id="' + imgId + '" src="' + imgSrc + '" alt="' + imgAlt + '" class="img-responsive" style="max-width: 100%; border-radius: 8px; display: inline-block;">' +
        '</div>';

      var selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        range.deleteContents();
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = imageHtml;
        var frag = document.createDocumentFragment();
        var node;
        while ((node = tempDiv.firstChild)) {
          frag.appendChild(node);
        }
        range.insertNode(frag);
      } else {
        var mainEl = document.querySelector('main') || document.body;
        var tempDiv2 = document.createElement('div');
        tempDiv2.innerHTML = imageHtml;
        while (tempDiv2.firstChild) {
          mainEl.appendChild(tempDiv2.firstChild);
        }
      }

      setTimeout(function() {
        var newImg = document.getElementById(imgId);
        if (newImg) {
          setFocusedComponent(newImg);
          activeImageEl = newImg;
          newImg.classList.add('wb-active-img');
          newImg.scrollIntoView({ behavior: 'smooth', block: 'center' });
          positionImageToolbar(newImg);
        }
      }, 50);

      triggerSync();
    } else if (event.data.type === 'INSERT_SNIPPET') {
      var selection = window.getSelection();
      if (selection && selection.rangeCount > 0) {
        var range = selection.getRangeAt(0);
        range.deleteContents();
        var tempDiv = document.createElement('div');
        tempDiv.innerHTML = event.data.html;

        var startNode = range.startContainer;
        var containers = findTargetContainers(startNode);
        var hostBlock = containers.hostBlock || containers.hostInteractive;

        var frag = document.createDocumentFragment();
        var node;
        var lastNode = null;
        while ((node = tempDiv.firstChild)) {
          lastNode = node;
          frag.appendChild(node);
        }

        if (hostBlock && hostBlock.parentNode) {
          if (isElementEmpty(hostBlock)) {
            hostBlock.parentNode.insertBefore(frag, hostBlock);
            hostBlock.parentNode.removeChild(hostBlock);
          } else if (isCaretAtStart(range, hostBlock)) {
            hostBlock.parentNode.insertBefore(frag, hostBlock);
          } else {
            hostBlock.parentNode.insertBefore(frag, hostBlock.nextSibling);
          }
          if (lastNode) {
            var newR = document.createRange();
            newR.setStartAfter(lastNode);
            newR.collapse(true);
            selection.removeAllRanges();
            selection.addRange(newR);
            lastSavedRange = newR.cloneRange();
          }
        } else {
          range.insertNode(frag);
        }
      } else {
        var mainEl = document.querySelector('main') || document.body;
        var tempDiv2 = document.createElement('div');
        tempDiv2.innerHTML = event.data.html;
        while (tempDiv2.firstChild) {
          mainEl.appendChild(tempDiv2.firstChild);
        }
      }
      triggerSync();
    } else if (event.data.type === 'START_COLOR_PREVIEW') {
      startColorPreview(event.data.colorType || 'foreColor');
    } else if (event.data.type === 'PREVIEW_COLOR') {
      previewColor(event.data.colorType || 'foreColor', event.data.colorHex);
    } else if (event.data.type === 'COMMIT_COLOR_PREVIEW') {
      commitColorPreview();
    } else if (event.data.type === 'CANCEL_COLOR_PREVIEW') {
      cancelColorPreview();
    }
  });

  window.__wbEditor = {
    execCommand: function(cmd, val, text, customRange) {
      handleExecCommand(cmd, val, text, customRange);
      return (lastNonCollapsedRange && document.body.contains(lastNonCollapsedRange.commonAncestorContainer))
        ? lastNonCollapsedRange
        : (lastSavedRange && document.body.contains(lastSavedRange.commonAncestorContainer) ? lastSavedRange : null);
    },
    getActiveTextStyle: getActiveTextStyle,
    saveSelection: saveSelection,
    getSelectionRange: function() {
      return (lastNonCollapsedRange && document.body.contains(lastNonCollapsedRange.commonAncestorContainer))
        ? lastNonCollapsedRange
        : (lastSavedRange && document.body.contains(lastSavedRange.commonAncestorContainer) ? lastSavedRange : null);
    },
    startColorPreview: startColorPreview,
    previewColor: previewColor,
    commitColorPreview: commitColorPreview,
    cancelColorPreview: cancelColorPreview
  };

  setTimeout(function() {
    notifyActiveTextStyle();
  }, 80);
})();
<\/script>
`,d=`${f}
${p}`;return n.includes("</head>")?n=n.replace("</head>",`${d}
</head>`):n=`${d}
${n}`,n.includes("<body")?n=n.replace(/<body([^>]*)>/i,'<body$1 contenteditable="true" spellcheck="false">'):n=`<body contenteditable="true" spellcheck="false">${n}</body>`,n.includes("</body>")?n=n.replace("</body>",`${w}
</body>`):n+=w,n}const Qa=({project:a,activeFile:t,onChangeActiveFileContent:n,onNavigatePage:s,onInsertElementToActivePage:l})=>{const[f,p]=m.useState("html-editor"),[w,d]=m.useState("desktop"),[v,N]=m.useState(!1),[j,R]=m.useState("#0f172a"),[T,E]=m.useState("#fef08a"),[z,D]=m.useState(!1),[P,K]=m.useState("p"),[H,B]=m.useState({isBold:!1,isItalic:!1,isUnderline:!1,isStrikeThrough:!1,align:"left",isBulletList:!1,isNumberList:!1,isLink:!1,linkHref:"",linkText:"",hasBgColor:!1,fontSize:"16px"}),[Q,Z]=m.useState(!1),[V,ee]=m.useState(""),[me,c]=m.useState(""),L=m.useRef(null),I=m.useRef(null),q=m.useRef(t.id),oe=m.useRef(t.content),ae=m.useRef({x:0,y:0}),$=m.useRef({x:0,y:0}),[ne,ge]=m.useState(()=>Te(t,a)),[y,b]=m.useState(()=>je(t,a)),C=a.files.find(r=>r.type==="css")||a.files.find(r=>r.name.endsWith(".css")),S=(C==null?void 0:C.content)||"",[o,h]=m.useState([t.content]),[A,O]=m.useState(0),[W,U]=m.useState(!1),[pe,He]=m.useState(!1),he=m.useRef(!1),we=m.useRef(null),ft=m.useRef(t.id),We=m.useRef(t.content),Pe=m.useRef(null),G=m.useCallback((r,i=void 0,x=void 0)=>{var u;if(L.current)try{const k=L.current.contentWindow;if(k){if(k.__wbEditor&&typeof k.__wbEditor.execCommand=="function"){const g=k.__wbEditor.execCommand(r,i,x,Pe.current);g&&(Pe.current=g);return}k.focus(),k.postMessage({type:"EXEC_COMMAND",command:r,value:i,text:x},"*")}}catch{(u=L.current.contentWindow)==null||u.postMessage({type:"EXEC_COMMAND",command:r,value:i,text:x},"*")}},[]);m.useEffect(()=>{t.id!==ft.current?(ft.current=t.id,We.current=t.content,h([t.content]),O(0),U(!1),He(!1)):t.content!==We.current&&(We.current=t.content,he.current?he.current=!1:(we.current&&clearTimeout(we.current),we.current=setTimeout(()=>{h(r=>{if(r[A]===t.content)return r;const x=[...r.slice(0,A+1),t.content].slice(-50);return O(x.length-1),x})},400)))},[t.id,t.content,A]);const Ve=W||A>0,Ye=pe||A<o.length-1,Ke=m.useCallback(()=>{G("undo"),A>0&&O(r=>Math.max(0,r-1))},[G,A]),De=m.useCallback(()=>{G("redo"),A<o.length-1&&O(r=>Math.min(o.length-1,r+1))},[G,A,o.length]);m.useEffect(()=>{if(f!=="html-editor")return;const r=i=>{(i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="z"?i.shiftKey?(i.preventDefault(),De()):(i.preventDefault(),Ke()):(i.ctrlKey||i.metaKey)&&i.key.toLowerCase()==="y"&&(i.preventDefault(),De())};return window.addEventListener("keydown",r),()=>window.removeEventListener("keydown",r)},[f,Ke,De]);const Ee=m.useCallback((r,i)=>{var x,u;if(r){try{const k=r.contentDocument||((x=r.contentWindow)==null?void 0:x.document);if(k){let g=k.getElementById("__wb_project_styles");g?g.textContent=i:k.head&&(g=k.createElement("style"),g.id="__wb_project_styles",g.textContent=i,k.head.appendChild(g))}}catch{}try{(u=r.contentWindow)==null||u.postMessage({type:"UPDATE_PROJECT_STYLES",css:i},"*")}catch{}}},[]);m.useEffect(()=>{Ee(L.current,S),Ee(I.current,S),D(!0);const r=setTimeout(()=>D(!1),600);return()=>clearTimeout(r)},[S,Ee]),m.useEffect(()=>{var r,i;if(t.id!==q.current)q.current=t.id,oe.current=t.content,ge(Te(t,a)),b(je(t,a));else if(t.content!==oe.current){if(oe.current=t.content,I.current)try{const x=I.current.contentDocument;if(x&&x.body){const u=document.createElement("div");u.innerHTML=t.content;const k=u.querySelector("body"),g=k?k.innerHTML:t.content,X=$.current.x,_=$.current.y;x.body.innerHTML=g,(r=I.current.contentWindow)==null||r.scrollTo(X,_)}else b(je(t,a))}catch{b(je(t,a))}if(L.current)try{const x=L.current.contentDocument;if(x&&x.body){const u=document.createElement("div");u.innerHTML=t.content;const k=u.querySelector("body"),g=k?k.innerHTML:t.content,X=ae.current.x,_=ae.current.y;x.body.innerHTML=g,(i=L.current.contentWindow)==null||i.scrollTo(X,_)}else ge(Te(t,a))}catch{ge(Te(t,a))}}},[t,a]),m.useEffect(()=>{const r=i=>{var x;if(i.data)if(i.data.type==="WEBSITE_EDITOR_SYNC"&&typeof i.data.fullHtml=="string"){const u=i.data.fullHtml;if(u!==oe.current&&(oe.current=u,n(u),I.current))try{const k=I.current.contentDocument;if(k&&k.body){const g=document.createElement("div");g.innerHTML=u;const X=g.querySelector("body");if(X){const _=$.current.x,re=$.current.y;k.body.innerHTML=X.innerHTML,(x=I.current.contentWindow)==null||x.scrollTo(_,re)}}}catch{}}else if(i.data.type==="WEBSITE_NAVIGATE"){const u=i.data.page;u&&s(u)}else if(i.data.type==="ACTIVE_TEXT_STYLE_CHANGED"&&i.data.style){const u=i.data.style;B({isBold:!!u.isBold,isItalic:!!u.isItalic,isUnderline:!!u.isUnderline,isStrikeThrough:!!u.isStrikeThrough,align:u.align||"left",isBulletList:!!u.isBulletList,isNumberList:!!u.isNumberList,isLink:!!u.isLink,linkHref:u.linkHref||"",linkText:u.linkText||"",hasBgColor:!!u.bgColor,fontSize:u.fontSize||"16px"}),u.textColor&&R(u.textColor),u.bgColor&&E(u.bgColor),u.tagName&&K(u.tagName.toLowerCase())}else i.data.type==="ACTIVE_BLOCK_CHANGED"&&typeof i.data.tagName=="string"?K(i.data.tagName.toLowerCase()):i.data.type==="EDITOR_UNDO_REDO_STATE"?(U(!!i.data.canUndo),He(!!i.data.canRedo)):i.data.type==="EDITOR_SCROLL_UPDATE"?ae.current={x:i.data.scrollX||0,y:i.data.scrollY||0}:i.data.type==="PREVIEW_SCROLL_UPDATE"&&($.current={x:i.data.scrollX||0,y:i.data.scrollY||0})};return window.addEventListener("message",r),()=>window.removeEventListener("message",r)},[n,s]);const de=r=>{if(!r)return null;const i=String(r).trim();if(!i||i==="transparent"||i==="inherit"||i==="initial"||i==="rgba(0, 0, 0, 0)")return null;if(i.startsWith("#"))return i.length===4?("#"+i[1]+i[1]+i[2]+i[2]+i[3]+i[3]).toUpperCase():i.toUpperCase();if(i.includes("rgb")){const x=i.replace(/[^0-9,.]/g,"").split(",");if(x.length>=3){const u=k=>{const g=Math.round(Number(k)||0).toString(16);return g.length===1?"0"+g:g};return("#"+u(x[0])+u(x[1])+u(x[2])).toUpperCase()}}return null},zt=(r,i)=>{if(!r)return null;try{const x=r.startContainer,u=r.startOffset;if(x.nodeType===Node.TEXT_NODE){const k=x.nodeValue||"";if(u<k.length)return x.parentElement;let g=r.commonAncestorContainer;g&&g.nodeType===Node.TEXT_NODE&&(g=g.parentElement),g||(g=i.body);const X=i.createTreeWalker(g,NodeFilter.SHOW_TEXT,null);X.currentNode=x;let _=X.nextNode();for(;_;){if((_.nodeValue||"").length>0)try{if(r.comparePoint(_,0)<=0)return _.parentElement}catch{return _.parentElement}_=X.nextNode()}return x.parentElement}if(x.nodeType===Node.ELEMENT_NODE){if(x.childNodes&&x.childNodes.length>0){const k=Math.min(u,x.childNodes.length-1),g=x.childNodes[k];if(g){if(g.nodeType===Node.TEXT_NODE)return g.parentElement||x;if(g.nodeType===Node.ELEMENT_NODE){const _=i.createTreeWalker(g,NodeFilter.SHOW_TEXT,null).nextNode();return _&&_.parentElement?_.parentElement:g}}}return x}}catch{}return null},qt=(r,i,x)=>{var X;let u=null,k=null;if(!r)return{textColor:null,bgColor:null};try{const _=i.getComputedStyle(r);if(_&&_.color){const re=de(_.color);re&&(u=re)}}catch{}let g=r;for(;g&&g!==x.documentElement&&g!==x.body;){if(g.nodeType===Node.ELEMENT_NODE){const _=g.tagName.toLowerCase(),re=(X=g.style)==null?void 0:X.backgroundColor;if(re){const te=de(re);if(te){k=te;break}}if(_==="mark")try{const te=i.getComputedStyle(g),le=de(te.backgroundColor);if(le){k=le;break}}catch{}try{const te=i.getComputedStyle(g);if(te&&te.backgroundColor&&te.backgroundColor!=="transparent"&&te.backgroundColor!=="rgba(0, 0, 0, 0)"){const le=de(te.backgroundColor);if(le){k=le;break}}}catch{}}g=g.parentElement}return{textColor:u,bgColor:k}},xe=m.useCallback(()=>{var r,i,x,u;try{const k=L.current;if(!k)return;const g=k.contentDocument||((r=k.contentWindow)==null?void 0:r.document),X=k.contentWindow;if(!g||!X)return;let _=!1,re=!1,te=!1,le=!1,ue="left",bt=!1,vt=!1,yt=!1,Ge="",Ze="",be=null,fe=null,Me=null,Qe="p";try{_=g.queryCommandState("bold")}catch{}try{re=g.queryCommandState("italic")}catch{}try{te=g.queryCommandState("underline")}catch{}try{le=g.queryCommandState("strikeThrough")||g.queryCommandState("strikethrough")}catch{}try{g.queryCommandState("justifyCenter")?ue="center":g.queryCommandState("justifyRight")?ue="right":g.queryCommandState("justifyFull")?ue="justify":g.queryCommandState("justifyLeft")&&(ue="left")}catch{}try{bt=g.queryCommandState("insertUnorderedList")}catch{}try{vt=g.queryCommandState("insertOrderedList")}catch{}const et=X.getSelection();let ke=null,Oe=null;if(et&&et.rangeCount>0){const M=et.getRangeAt(0);if(Oe=M,ke=M.startContainer,!M.collapsed&&M.toString().trim().length>0)try{Pe.current=M.cloneRange()}catch{}}ke||(ke=g.body);let _e=!1;if(Oe&&!Oe.collapsed){const M=zt(Oe,g);if(M){const F=qt(M,X,g);be=F.textColor||"#0F172A",fe=F.bgColor,_e=!0}}if(!_e){if(!be)try{const M=g.queryCommandValue("foreColor"),F=de(M);F&&(be=F)}catch{}if(!fe)try{const M=g.queryCommandValue("hiliteColor")||g.queryCommandValue("backColor"),F=de(M);F&&(fe=F)}catch{}}const Ce=ke.nodeType===Node.TEXT_NODE?ke.parentNode:ke;let Y=Ce,wt=!1;for(;Y&&Y!==g.documentElement;){if(Y.nodeType===Node.ELEMENT_NODE){const M=Y.tagName.toLowerCase();wt||["h1","h2","h3","h4","h5","h6","p","blockquote","pre","address"].includes(M)&&(Qe=M,wt=!0),(M==="b"||M==="strong")&&(_=!0),(M==="i"||M==="em")&&(re=!0),M==="u"&&(te=!0),(M==="s"||M==="strike"||M==="del")&&(le=!0),M==="a"&&(yt=!0,Ge||(Ge=Y.getAttribute("href")||""),Ze||(Ze=Y.textContent||""));try{const F=X.getComputedStyle(Y);if(!_&&(Y===Ce||M==="b"||M==="strong"||["h1","h2","h3","h4","h5","h6"].includes(M))){const ie=F.fontWeight;(ie==="bold"||ie==="bolder"||parseInt(ie,10)>=600)&&(_=!0)}if(!re&&(Y===Ce||M==="i"||M==="em")&&(F.fontStyle==="italic"||F.fontStyle==="oblique")&&(re=!0),te||(F.textDecorationLine||F.textDecoration||"").toLowerCase().includes("underline")&&(te=!0),le||(F.textDecorationLine||F.textDecoration||"").toLowerCase().includes("line-through")&&(le=!0),ue==="left"&&F.textAlign&&F.textAlign!=="start"&&(F.textAlign==="center"?ue="center":F.textAlign==="right"?ue="right":F.textAlign==="justify"&&(ue="justify")),!_e&&!be&&Y!==g.body){const ie=(i=Y.style)==null?void 0:i.color;if(ie){const ce=de(ie);ce&&(be=ce)}else if(Y===Ce){const ce=de(F.color);ce&&(be=ce)}}if(!_e&&!fe&&Y!==g.body){const ie=(x=Y.style)==null?void 0:x.backgroundColor;if(ie){const ce=de(ie);ce&&(fe=ce)}else if(M==="mark"||Y===Ce&&F.backgroundColor&&F.backgroundColor!=="transparent"&&F.backgroundColor!=="rgba(0, 0, 0, 0)"){const ce=de(F.backgroundColor);ce&&(fe=ce)}}!Me&&Y!==g.body&&((u=Y.style)!=null&&u.fontSize?Me=Y.style.fontSize:Y===Ce&&F.fontSize&&(Me=F.fontSize))}catch{}}if(Y===g.body)break;Y=Y.parentElement}B({isBold:_,isItalic:re,isUnderline:te,isStrikeThrough:le,align:ue,isBulletList:bt,isNumberList:vt,isLink:yt,linkHref:Ge,linkText:Ze,hasBgColor:!!fe,fontSize:Me||"16px"}),be&&R(be),fe&&E(fe),Qe&&K(Qe)}catch{}},[]),gt=m.useCallback(r=>{var i,x;try{const u=(i=L.current)==null?void 0:i.contentWindow;(x=u==null?void 0:u.__wbEditor)!=null&&x.startColorPreview?u.__wbEditor.startColorPreview(r):u&&u.postMessage({type:"START_COLOR_PREVIEW",colorType:r},"*")}catch{}},[]),pt=m.useCallback((r,i)=>{var x,u;try{const k=(x=L.current)==null?void 0:x.contentWindow;(u=k==null?void 0:k.__wbEditor)!=null&&u.previewColor?k.__wbEditor.previewColor(r,i):k&&k.postMessage({type:"PREVIEW_COLOR",colorType:r,colorHex:i},"*")}catch{}},[]),ht=m.useCallback((r,i)=>{var x,u;try{const k=(x=L.current)==null?void 0:x.contentWindow;(u=k==null?void 0:k.__wbEditor)!=null&&u.commitColorPreview?k.__wbEditor.commitColorPreview():k&&k.postMessage({type:"COMMIT_COLOR_PREVIEW"},"*")}catch{}},[]),xt=m.useCallback((r,i)=>{var x,u;try{const k=(x=L.current)==null?void 0:x.contentWindow;(u=k==null?void 0:k.__wbEditor)!=null&&u.cancelColorPreview?k.__wbEditor.cancelColorPreview():k&&k.postMessage({type:"CANCEL_COLOR_PREVIEW"},"*")}catch{}},[]),Wt=()=>{ee(H.linkHref||""),c(H.linkText||""),Z(!0)},Xe=()=>{const r=V.trim();r&&(G("createLink",r,me.trim()||void 0),Z(!1))},Vt=()=>{G("unlink"),Z(!1)},Yt=r=>{var x;const i=r.toLowerCase();if(K(i),!!L.current)try{const u=L.current.contentWindow;if(u){if(u.__wbEditor&&typeof u.__wbEditor.execCommand=="function"){u.__wbEditor.execCommand("formatBlock",i,void 0,Pe.current);return}u.focus(),u.postMessage({type:"FORMAT_BLOCK",targetTag:i,command:"formatBlock",value:i},"*")}}catch{(x=L.current.contentWindow)==null||x.postMessage({type:"FORMAT_BLOCK",targetTag:i,command:"formatBlock",value:i},"*")}},Je=r=>{var x;we.current&&(clearTimeout(we.current),we.current=null),h(u=>{if(u[A]===t.content)return u;const g=[...u.slice(0,A+1),t.content].slice(-50);return O(g.length-1),g});let i="";r==="rich-text"?i='<div class="rich-text" style="margin: 1.5rem 0;"><p>This is a new rich text block. You can edit text, apply headings, bold, italic, colors, and format freely.</p></div>':r==="heading"?i='<h2 style="margin-top: 2rem;">New Section Heading</h2>':r==="button"?i='<div style="margin: 1.25rem 0;"><a href="contact.html" class="btn btn-primary">Get Started Now →</a></div>':r==="card"?i='<div class="card" style="margin: 1.5rem 0;"><h3>Card Title</h3><div class="rich-text"><p>Card content description with customizable styling and typography.</p></div><a href="about.html" class="btn btn-outline btn-sm">Learn More</a></div>':r==="image"?i='<div class="image-block" style="margin: 1.5rem 0;"><img src="src/local.png" alt="Featured Image" class="img-responsive"></div>':r==="divider"&&(i='<hr style="margin: 2rem 0; border: 0; border-top: 1px solid var(--border-color, #e2e8f0);">'),(x=L.current)!=null&&x.contentWindow?L.current.contentWindow.postMessage({type:"INSERT_SNIPPET",html:i},"*"):l(r)},Kt=()=>{ge(Te(t,a)),b(je(t,a))},Xt=async()=>{try{await navigator.clipboard.writeText(t.content),N(!0),setTimeout(()=>N(!1),2e3)}catch(r){console.error("Failed to copy code",r)}},Jt=()=>{const r=new Blob([t.content],{type:"text/html"}),i=URL.createObjectURL(r),x=document.createElement("a");x.href=i,x.download=t.name,document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(i)},Gt=()=>{var r,i,x,u,k;Ee(L.current,S),(ae.current.y>0||ae.current.x>0)&&((i=(r=L.current)==null?void 0:r.contentWindow)==null||i.scrollTo(ae.current.x,ae.current.y),(u=(x=L.current)==null?void 0:x.contentWindow)==null||u.postMessage({type:"RESTORE_SCROLL",scrollX:ae.current.x,scrollY:ae.current.y},"*"));try{const g=(k=L.current)==null?void 0:k.contentDocument;g&&(g.addEventListener("selectionchange",xe),g.addEventListener("mouseup",xe),g.addEventListener("keyup",xe),g.addEventListener("click",xe),g.addEventListener("focus",xe),g.addEventListener("paste",()=>setTimeout(xe,50)),g.addEventListener("drop",()=>setTimeout(xe,50)))}catch{}setTimeout(xe,50)},Zt=()=>{var r,i,x,u;Ee(I.current,S),($.current.y>0||$.current.x>0)&&((i=(r=I.current)==null?void 0:r.contentWindow)==null||i.scrollTo($.current.x,$.current.y),(u=(x=I.current)==null?void 0:x.contentWindow)==null||u.postMessage({type:"RESTORE_SCROLL",scrollX:$.current.x,scrollY:$.current.y},"*"))};return e.jsxs("main",{className:"flex-1 h-full flex flex-col min-w-0 bg-slate-100 dark:bg-slate-950 overflow-hidden select-none",children:[e.jsxs("header",{className:"h-12 px-4 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 flex items-center justify-between gap-3 shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-1 p-0.5 bg-slate-200/80 dark:bg-slate-800 rounded-lg text-xs font-medium",children:[e.jsxs("button",{onClick:()=>p("html-editor"),className:`py-1.5 px-3 rounded-md transition-all flex items-center gap-1.5 ${f==="html-editor"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs font-semibold":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`,children:[e.jsx(It,{className:"w-3.5 h-3.5 text-sky-500"}),e.jsx("span",{children:"HTML Editor"})]}),e.jsxs("button",{onClick:()=>p("html-preview"),className:`py-1.5 px-3 rounded-md transition-all flex items-center gap-1.5 ${f==="html-preview"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs font-semibold":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`,children:[e.jsx(Ht,{className:"w-3.5 h-3.5 text-emerald-500"}),e.jsx("span",{children:"HTML Preview"})]}),e.jsxs("button",{onClick:()=>p("html-code"),className:`py-1.5 px-3 rounded-md transition-all flex items-center gap-1.5 ${f==="html-code"?"bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100 shadow-xs font-semibold":"text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"}`,children:[e.jsx(ot,{className:"w-3.5 h-3.5 text-purple-500"}),e.jsx("span",{children:"HTML Code"})]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:`flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] font-medium transition-all ${z?"bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-700":"bg-slate-100 dark:bg-slate-800/80 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-700"}`,title:"Real-time smooth CSS sync active",children:[e.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${z?"bg-emerald-500 animate-pulse":"bg-slate-400"}`}),e.jsx("span",{children:z?"CSS Synced":"CSS Live"})]}),e.jsxs("div",{className:"flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 dark:bg-slate-800 rounded-md text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700",children:[e.jsx(Se,{className:"w-3 h-3 text-sky-500"}),e.jsx("span",{children:t.name})]}),e.jsx("button",{onClick:Kt,className:"p-1.5 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",title:"Refresh Canvas & Preview",children:e.jsx(ua,{className:"w-3.5 h-3.5"})}),f==="html-preview"&&e.jsxs("div",{className:"flex items-center gap-1 p-0.5 bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700",children:[e.jsx("button",{onClick:()=>d("desktop"),className:`p-1.5 rounded transition-all ${w==="desktop"?"bg-white dark:bg-slate-700 text-sky-500 shadow-xs":"text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"}`,title:"Desktop View (1280px)",children:e.jsx(fa,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>d("laptop"),className:`p-1.5 rounded transition-all ${w==="laptop"?"bg-white dark:bg-slate-700 text-sky-500 shadow-xs":"text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"}`,title:"Laptop View (1024px)",children:e.jsx(ga,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>d("tablet"),className:`p-1.5 rounded transition-all ${w==="tablet"?"bg-white dark:bg-slate-700 text-sky-500 shadow-xs":"text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"}`,title:"Tablet View (768px)",children:e.jsx(pa,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>d("mobile"),className:`p-1.5 rounded transition-all ${w==="mobile"?"bg-white dark:bg-slate-700 text-sky-500 shadow-xs":"text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"}`,title:"Mobile View (375px)",children:e.jsx(ha,{className:"w-3.5 h-3.5"})}),e.jsx("button",{onClick:()=>d("responsive"),className:`p-1.5 rounded transition-all ${w==="responsive"?"bg-white dark:bg-slate-700 text-sky-500 shadow-xs":"text-slate-500 hover:text-slate-900 dark:hover:text-slate-200"}`,title:"Full Responsive Width",children:e.jsx(xa,{className:"w-3.5 h-3.5"})})]})]})]}),e.jsxs("div",{className:`flex-1 flex flex-col min-h-0 overflow-hidden bg-slate-200/50 dark:bg-slate-950 ${f==="html-editor"?"":"hidden"}`,children:[e.jsxs("div",{className:"sticky top-0 z-20 px-4 py-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3 flex-wrap shrink-0 shadow-xs text-xs",children:[e.jsxs("div",{className:"flex items-center gap-1.5 flex-wrap",children:[e.jsxs("div",{className:"flex items-center gap-0.5",children:[e.jsx("button",{type:"button",id:"html-editor-undo-btn",disabled:!Ve,onMouseDown:r=>r.preventDefault(),onClick:Ke,className:`p-1.5 rounded transition-all ${Ve?"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer active:scale-95":"text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-40"}`,title:Ve?"Undo HTML edit (Ctrl+Z)":"No actions to undo","aria-label":"Undo",children:e.jsx(Pt,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",id:"html-editor-redo-btn",disabled:!Ye,onMouseDown:r=>r.preventDefault(),onClick:De,className:`p-1.5 rounded transition-all ${Ye?"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer active:scale-95":"text-slate-300 dark:text-slate-600 cursor-not-allowed opacity-40"}`,title:Ye?"Redo HTML edit (Ctrl+Y)":"No actions to redo","aria-label":"Redo",children:e.jsx(Dt,{className:"w-4 h-4"})})]}),e.jsx("div",{className:"w-[1px] h-5 bg-slate-300 dark:bg-slate-700 mx-1"}),e.jsxs("select",{value:["p","h1","h2","h3","blockquote","pre"].includes(P)?P:"p",onMouseDown:r=>r.stopPropagation(),onChange:r=>Yt(r.target.value),className:"bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 text-xs font-medium focus:outline-none cursor-pointer",title:"Block Type",children:[e.jsx("option",{value:"p",children:"Paragraph"}),e.jsx("option",{value:"h1",children:"Heading 1"}),e.jsx("option",{value:"h2",children:"Heading 2"}),e.jsx("option",{value:"h3",children:"Heading 3"}),e.jsx("option",{value:"blockquote",children:"Quote Block"}),e.jsx("option",{value:"pre",children:"Code Block"})]}),e.jsxs("select",{value:["12px","14px","16px","18px","20px","24px","30px","36px","48px"].includes(H.fontSize)?H.fontSize:["h1"].includes(P)?"36px":["h2"].includes(P)?"30px":["h3"].includes(P)?"24px":"16px",onMouseDown:r=>r.stopPropagation(),onChange:r=>{const i=r.target.value;B(x=>({...x,fontSize:i})),G("fontSize",i)},className:"bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 text-xs font-medium focus:outline-none cursor-pointer",title:"Font Size",children:[e.jsx("option",{value:"12px",children:"12px"}),e.jsx("option",{value:"14px",children:"14px"}),e.jsx("option",{value:"16px",children:"16px"}),e.jsx("option",{value:"18px",children:"18px"}),e.jsx("option",{value:"20px",children:"20px"}),e.jsx("option",{value:"24px",children:"24px"}),e.jsx("option",{value:"30px",children:"30px"}),e.jsx("option",{value:"36px",children:"36px"}),e.jsx("option",{value:"48px",children:"48px"})]}),e.jsx("div",{className:"w-[1px] h-5 bg-slate-300 dark:bg-slate-700 mx-1"}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,isBold:!r.isBold})),G("bold")},className:`p-1.5 rounded transition-all ${H.isBold?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Bold (Ctrl+B)",children:e.jsx(ba,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,isItalic:!r.isItalic})),G("italic")},className:`p-1.5 rounded transition-all ${H.isItalic?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Italic (Ctrl+I)",children:e.jsx(va,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,isUnderline:!r.isUnderline})),G("underline")},className:`p-1.5 rounded transition-all ${H.isUnderline?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Underline (Ctrl+U)",children:e.jsx(ya,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,isStrikeThrough:!r.isStrikeThrough})),G("strikeThrough")},className:`p-1.5 rounded transition-all ${H.isStrikeThrough?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Strikethrough (Ctrl+Shift+S)",children:e.jsx(wa,{className:"w-4 h-4"})}),e.jsx("div",{className:"w-[1px] h-5 bg-slate-300 dark:bg-slate-700 mx-1"}),e.jsxs(se,{value:j,onOpen:()=>gt("foreColor"),onChange:r=>{R(r),pt("foreColor",r)},onOk:r=>{R(r),ht("foreColor",r)},onCancel:r=>{R(r),xt("foreColor",r)},title:"Text Color",label:`Text Color (${j})`,size:"xs",align:"left",className:"px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700/60 transition-colors",children:[e.jsxs("div",{className:"flex flex-col items-center justify-center min-w-[14px]",children:[e.jsx("span",{className:"text-[11px] font-black text-slate-700 dark:text-slate-200 leading-none",children:"A"}),e.jsx("span",{className:"w-3.5 h-[3px] rounded-xs mt-0.5 border border-black/15 dark:border-white/20 shadow-2xs",style:{backgroundColor:j}})]}),e.jsx("span",{className:"w-3.5 h-3.5 rounded border border-slate-300 dark:border-slate-600 shrink-0 shadow-2xs",style:{backgroundColor:j}})]}),e.jsxs(se,{value:T,onOpen:()=>gt("hiliteColor"),onChange:r=>{E(r),pt("hiliteColor",r)},onOk:r=>{E(r),ht("hiliteColor",r)},onCancel:r=>{E(r),xt("hiliteColor",r)},title:"Highlight Color",label:`Highlight Color (${T})`,size:"xs",align:"left",className:`ml-1 px-1.5 py-0.5 rounded border transition-colors ${H.hasBgColor?"border-amber-300 dark:border-amber-600 bg-amber-50/80 dark:bg-amber-950/40 ring-1 ring-amber-300/60 dark:ring-amber-600/60":"border-slate-200 dark:border-slate-800 bg-slate-50/70 dark:bg-slate-800/60 hover:bg-slate-100 dark:hover:bg-slate-700/60"}`,children:[e.jsxs("div",{className:"flex flex-col items-center justify-center min-w-[16px]",children:[e.jsx("span",{className:"text-[10px] font-black text-slate-700 dark:text-slate-200 leading-none",children:"HL"}),e.jsx("span",{className:"w-4 h-[3px] rounded-xs mt-0.5 border border-black/15 dark:border-white/20 shadow-2xs",style:{backgroundColor:T}})]}),e.jsx("span",{className:"w-3.5 h-3.5 rounded border border-slate-300 dark:border-slate-600 shrink-0 shadow-2xs",style:{backgroundColor:T}})]}),e.jsx("div",{className:"w-[1px] h-5 bg-slate-300 dark:bg-slate-700 mx-1"}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,align:"left"})),G("justifyLeft")},className:`p-1.5 rounded transition-all ${H.align==="left"?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Align Left",children:e.jsx(ka,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,align:"center"})),G("justifyCenter")},className:`p-1.5 rounded transition-all ${H.align==="center"?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Align Center",children:e.jsx(Ca,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,align:"right"})),G("justifyRight")},className:`p-1.5 rounded transition-all ${H.align==="right"?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Align Right",children:e.jsx(Na,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,align:"justify"})),G("justifyFull")},className:`p-1.5 rounded transition-all ${H.align==="justify"?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Justify",children:e.jsx(Sa,{className:"w-4 h-4"})}),e.jsx("div",{className:"w-[1px] h-5 bg-slate-300 dark:bg-slate-700 mx-1"}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,isBulletList:!r.isBulletList})),G("insertUnorderedList")},className:`p-1.5 rounded transition-all ${H.isBulletList?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Bullet List",children:e.jsx(Ea,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",onMouseDown:r=>r.preventDefault(),onClick:()=>{B(r=>({...r,isNumberList:!r.isNumberList})),G("insertOrderedList")},className:`p-1.5 rounded transition-all ${H.isNumberList?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:"Numbered List",children:e.jsx(ja,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",id:"html-editor-link-btn",onMouseDown:r=>r.preventDefault(),onClick:Wt,className:`p-1.5 rounded transition-all cursor-pointer ${H.isLink?"bg-blue-100 dark:bg-blue-900/60 text-blue-700 dark:text-blue-300 ring-1 ring-blue-400 dark:ring-blue-600 font-bold":"hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"}`,title:H.isLink?`Edit Link (${H.linkHref})`:"Insert / Edit Link",children:e.jsx(Et,{className:"w-4 h-4"})}),e.jsx("button",{type:"button",id:"html-editor-remove-formatting-btn",onMouseDown:r=>r.preventDefault(),onClick:()=>{G("removeFormat"),B(r=>({...r,isBold:!1,isItalic:!1,isUnderline:!1,isStrikeThrough:!1,isLink:!1,hasBgColor:!1}))},className:"p-1.5 rounded transition-all hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 cursor-pointer",title:"Clear Formatting on Selected Text","aria-label":"Clear Formatting",children:e.jsx(Ta,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>Je("rich-text"),className:"px-2.5 py-1 bg-sky-500 hover:bg-sky-600 text-white rounded text-xs font-semibold flex items-center gap-1 shadow-xs transition-colors",children:[e.jsx(ve,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Add Text Block"})]}),e.jsxs("button",{onClick:()=>Je("button"),className:"px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded text-xs font-medium border border-slate-300 dark:border-slate-700 flex items-center gap-1 transition-colors",children:[e.jsx(ve,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Button"})]}),e.jsxs("button",{onClick:()=>Je("card"),className:"px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 rounded text-xs font-medium border border-slate-300 dark:border-slate-700 flex items-center gap-1 transition-colors",children:[e.jsx(ve,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Card"})]})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4 flex justify-center bg-slate-200/50 dark:bg-slate-950",children:e.jsx("div",{className:"w-full max-w-5xl h-full bg-white dark:bg-slate-900 rounded-xl shadow-md border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col",children:e.jsx("iframe",{ref:L,srcDoc:ne,onLoad:Gt,title:"HTML Editor Canvas",sandbox:"allow-scripts allow-same-origin allow-forms allow-modals",className:"w-full h-full border-0 bg-white"})})})]}),e.jsx("div",{className:`flex-1 flex flex-col min-h-0 bg-slate-200 dark:bg-slate-950 p-4 items-center justify-center overflow-auto ${f==="html-preview"?"":"hidden"}`,children:e.jsx("div",{className:"bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-300 dark:border-slate-800 overflow-hidden flex flex-col transition-all duration-300",style:{width:w==="responsive"?"100%":`${Tt[w].width}px`,height:w==="responsive"?"100%":`${Tt[w].height}px`,maxWidth:"100%",maxHeight:"100%"},children:e.jsx("iframe",{ref:I,srcDoc:y,onLoad:Zt,title:"Website Live Preview",sandbox:"allow-scripts allow-same-origin allow-forms",className:"w-full h-full border-0 bg-white"})})}),e.jsxs("div",{className:`flex-1 flex flex-col min-h-0 bg-slate-900 text-slate-100 overflow-hidden ${f==="html-code"?"":"hidden"}`,children:[e.jsxs("div",{className:"px-4 py-2 bg-slate-950 border-b border-slate-800 flex items-center justify-between shrink-0 text-xs",children:[e.jsxs("span",{className:"font-mono text-slate-400",children:[t.name," — Pure HTML Document"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:Xt,className:"px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded flex items-center gap-1.5 font-medium transition-colors",children:v?e.jsxs(e.Fragment,{children:[e.jsx(ct,{className:"w-3.5 h-3.5 text-emerald-400"}),e.jsx("span",{children:"Copied!"})]}):e.jsxs(e.Fragment,{children:[e.jsx(Bt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Copy Code"})]})}),e.jsxs("button",{onClick:Jt,className:"px-2.5 py-1 bg-sky-600 hover:bg-sky-500 text-white rounded flex items-center gap-1.5 font-medium transition-colors",children:[e.jsx(Rt,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Download"})]})]})]}),e.jsx("div",{className:"flex-1 overflow-auto p-4 font-mono text-xs leading-relaxed select-text",children:e.jsx("pre",{className:"text-sky-300",children:e.jsx("code",{children:t.content})})})]}),Q&&e.jsx("div",{id:"html-editor-link-modal-backdrop",className:"fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs p-4",onClick:()=>Z(!1),children:e.jsxs("div",{id:"html-editor-link-modal",className:"bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-md p-5 space-y-4",onClick:r=>r.stopPropagation(),children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-100 dark:border-slate-800 pb-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx(Et,{className:"w-5 h-5 text-sky-500"}),e.jsx("h3",{className:"font-semibold text-slate-800 dark:text-slate-100 text-sm",children:H.isLink?"Edit Link":"Insert Link"})]}),e.jsx("button",{type:"button",onClick:()=>Z(!1),className:"p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-md hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors",children:e.jsx(qe,{className:"w-4 h-4"})})]}),e.jsxs("div",{className:"space-y-3 text-xs",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block font-medium text-slate-700 dark:text-slate-300 mb-1",children:"URL or Page Target"}),e.jsx("input",{type:"text",value:V,onChange:r=>ee(r.target.value),placeholder:"https://example.com or about.html or #section",className:"w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs",autoFocus:!0,onKeyDown:r=>{r.key==="Enter"&&(r.preventDefault(),Xe())}}),e.jsx("p",{className:"text-[11px] text-slate-400 dark:text-slate-500 mt-1",children:"Can be a full web link (https://...), relative page (contact.html), or anchor (#features)."})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block font-medium text-slate-700 dark:text-slate-300 mb-1",children:"Display Text (Optional)"}),e.jsx("input",{type:"text",value:me,onChange:r=>c(r.target.value),placeholder:"Anchor text",className:"w-full px-3 py-2 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-sky-500 text-xs",onKeyDown:r=>{r.key==="Enter"&&(r.preventDefault(),Xe())}})]})]}),e.jsxs("div",{className:"flex items-center justify-between pt-2 border-t border-slate-100 dark:border-slate-800",children:[H.isLink?e.jsxs("button",{type:"button",onClick:Vt,className:"px-3 py-1.5 text-xs text-rose-600 hover:text-rose-700 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 rounded-lg flex items-center gap-1.5 font-medium transition-colors cursor-pointer",children:[e.jsx(Ra,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"Remove Link"})]}):e.jsx("div",{}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{type:"button",onClick:()=>Z(!1),className:"px-3 py-1.5 text-xs text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg font-medium transition-colors cursor-pointer",children:"Cancel"}),e.jsx("button",{type:"button",onClick:Xe,disabled:!V.trim(),className:"px-4 py-1.5 text-xs bg-sky-600 hover:bg-sky-500 text-white rounded-lg font-semibold transition-colors disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer shadow-xs",children:"Apply"})]})]})]})})]})},er=({isOpen:a,onClose:t,currentProjectId:n,onSelectProject:s,onNewProject:l})=>{const[f,p]=m.useState([]),[w,d]=m.useState(!0),v=async()=>{d(!0);try{const j=await Ot();p(j)}catch(j){console.error("Failed to load projects",j)}finally{d(!1)}};if(m.useEffect(()=>{a&&v()},[a]),!a)return null;const N=async(j,R)=>{R.stopPropagation(),confirm("Are you sure you want to delete this project from local storage?")&&(await Fa(j),await v())};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150",children:e.jsxs("div",{className:"w-full max-w-2xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[85vh]",children:[e.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0 bg-slate-50 dark:bg-slate-900/50",children:[e.jsxs("div",{className:"flex items-center gap-2.5",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center",children:e.jsx(nt,{className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100",children:"Local Storage Projects"}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:"Manage and open website projects saved in your browser storage (IndexedDB)."})]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("button",{onClick:()=>{t(),l()},className:"px-2.5 py-1.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 shadow-xs",children:[e.jsx(ve,{className:"w-3.5 h-3.5"}),e.jsx("span",{children:"New Project"})]}),e.jsx("button",{onClick:t,className:"p-1.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg",children:e.jsx(qe,{className:"w-4 h-4"})})]})]}),e.jsx("div",{className:"flex-1 overflow-y-auto p-4 space-y-2.5",children:w?e.jsx("div",{className:"p-8 text-center text-xs text-slate-400",children:"Loading saved projects..."}):f.length===0?e.jsxs("div",{className:"p-8 text-center border border-dashed border-slate-200 dark:border-slate-800 rounded-xl text-slate-400 text-xs",children:[e.jsx(nt,{className:"w-8 h-8 mx-auto mb-2 opacity-40"}),e.jsx("p",{className:"font-semibold text-slate-700 dark:text-slate-300",children:"No saved projects found"}),e.jsx("p",{className:"text-[11px] mt-1",children:"Create a new project to get started."})]}):f.map(j=>{const R=j.id===n,T=j.files.filter(D=>D.type==="html").length,E=j.files.filter(D=>D.type==="image").length,z=new Date(j.updatedAt||j.createdAt).toLocaleDateString(void 0,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit"});return e.jsxs("div",{onClick:()=>{s(j),t()},className:`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${R?"bg-sky-500/10 border-sky-500/40 shadow-xs":"bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700/80 hover:border-sky-500/30"}`,children:[e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"font-semibold text-xs text-slate-900 dark:text-slate-100 truncate",children:j.name}),R&&e.jsx("span",{className:"text-[10px] px-2 py-0.5 bg-sky-500 text-white rounded-full font-semibold",children:"Current"}),e.jsx("span",{className:"text-[10px] px-1.5 py-0.5 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded",children:j.template||"light"})]}),e.jsxs("div",{className:"flex items-center gap-3 text-[11px] text-slate-500 dark:text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(Se,{className:"w-3 h-3"}),T," pages, ",E," images"]}),e.jsxs("span",{className:"flex items-center gap-1",children:[e.jsx(La,{className:"w-3 h-3"}),z]})]})]}),e.jsxs("div",{className:"flex items-center gap-2 shrink-0",children:[e.jsx("button",{onClick:D=>{D.stopPropagation(),s(j),t()},className:"px-3 py-1.5 bg-slate-100 dark:bg-slate-700 hover:bg-sky-500 hover:text-white rounded-lg text-xs font-semibold transition-colors",children:"Open"}),e.jsx("button",{onClick:D=>N(j.id,D),className:"p-1.5 text-slate-400 hover:text-rose-500 rounded-lg hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors",title:"Delete project from browser storage",children:e.jsx(Ae,{className:"w-4 h-4"})})]})]},j.id)})})]})})},tr=({isOpen:a,onClose:t,onCreateProject:n})=>{const[s,l]=m.useState("My Modern Site"),[f,p]=m.useState("light");if(!a)return null;const w=d=>{d.preventDefault(),s.trim()&&(n(s.trim(),f),t())};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150",children:e.jsxs("div",{className:"w-full max-w-xl bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center",children:e.jsx(Mt,{className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100",children:"Create New Website Project"}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:"Choose an adaptive theme template to initialize your HTML pages and styles."})]})]}),e.jsx("button",{onClick:t,className:"p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",children:e.jsx(qe,{className:"w-4 h-4"})})]}),e.jsxs("form",{onSubmit:w,className:"p-5 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1",children:"Project Name"}),e.jsx("input",{type:"text",value:s,onChange:d=>l(d.target.value),placeholder:"e.g., Studio Portfolio, SaaS Platform",required:!0,autoFocus:!0,className:"w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-2",children:"Select Adaptive CSS Template"}),e.jsx("div",{className:"grid grid-cols-2 gap-2.5 max-h-60 overflow-y-auto p-1",children:Ie.map(d=>{const v=f===d.id;return e.jsxs("div",{onClick:()=>p(d.id),className:`p-2.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${v?"bg-sky-500/10 border-sky-500 shadow-xs":"bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 hover:border-sky-500/40"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-900 dark:text-slate-100",children:d.name}),v&&e.jsx(ct,{className:"w-3.5 h-3.5 text-sky-500"})]}),e.jsxs("div",{className:"flex items-center gap-1.5 mt-2",children:[e.jsx("div",{className:"w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 shadow-xs",style:{backgroundColor:d.colors.primary}}),e.jsx("div",{className:"w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 shadow-xs",style:{backgroundColor:d.colors.background}}),e.jsx("div",{className:"w-3.5 h-3.5 rounded-full border border-slate-300 dark:border-slate-600 shadow-xs",style:{backgroundColor:d.colors.accent}})]})]},d.id)})})]}),e.jsxs("div",{className:"flex items-center justify-end gap-2.5 pt-3 border-t border-slate-200 dark:border-slate-800",children:[e.jsx("button",{type:"button",onClick:t,className:"px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800",children:"Cancel"}),e.jsx("button",{type:"submit",className:"px-4 py-1.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-semibold shadow-xs",children:"Create Project"})]})]})]})})},ar=({isOpen:a,onClose:t,onCreatePage:n})=>{const[s,l]=m.useState(""),[f,p]=m.useState("");if(!a)return null;const w=d=>{if(d.preventDefault(),s.trim()){let v=s.trim().toLowerCase();v.endsWith(".html")||(v+=".html"),n(v,f.trim()||s.trim()),t()}};return e.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-150",children:e.jsxs("div",{className:"w-full max-w-md bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col",children:[e.jsxs("div",{className:"p-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between shrink-0",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("div",{className:"w-8 h-8 rounded-lg bg-sky-500/10 text-sky-500 flex items-center justify-center",children:e.jsx(Se,{className:"w-4 h-4"})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-sm font-semibold text-slate-900 dark:text-slate-100",children:"Create New HTML Page"}),e.jsx("p",{className:"text-[11px] text-slate-500 dark:text-slate-400",children:"Add a new sub-page or secondary page to your website."})]})]}),e.jsx("button",{onClick:t,className:"p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200",children:e.jsx(qe,{className:"w-4 h-4"})})]}),e.jsxs("form",{onSubmit:w,className:"p-5 space-y-4",children:[e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1",children:"File Name (e.g., pricing.html, team.html)"}),e.jsx("input",{type:"text",value:s,onChange:d=>l(d.target.value),placeholder:"pricing.html",required:!0,autoFocus:!0,className:"w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs font-semibold text-slate-800 dark:text-slate-200 mb-1",children:"Page Title (Browser Title)"}),e.jsx("input",{type:"text",value:f,onChange:d=>p(d.target.value),placeholder:"Pricing & Plans — My Website",className:"w-full px-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-slate-100 focus:outline-none focus:border-sky-500"})]}),e.jsxs("div",{className:"flex items-center justify-end gap-2.5 pt-3 border-t border-slate-200 dark:border-slate-800",children:[e.jsx("button",{type:"button",onClick:t,className:"px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800",children:"Cancel"}),e.jsx("button",{type:"submit",className:"px-4 py-1.5 bg-sky-500 hover:bg-sky-600 text-white rounded-lg text-xs font-semibold shadow-xs",children:"Create Page"})]})]})]})})},nr=()=>{const[a,t]=m.useState(()=>J("Modern Studio Website","light")),[n,s]=m.useState(!1),[l,f]=m.useState(!1),[p,w]=m.useState(null),[d,v]=m.useState(!1),[N,j]=m.useState(!1),[R,T]=m.useState(!1),E=m.useRef(null);m.useEffect(()=>{(async()=>{try{const b=await $a(),C=await Ot();if(C.length>0){const S=b?C.find(o=>o.id===b):C[0];if(S){const o=S.files.map(h=>h.type==="image"&&h.blob&&!h.blobUrl?{...h,blobUrl:URL.createObjectURL(h.blob)}:h);t({...S,files:o})}}else{const S=J("Modern Studio Website","light");await jt(S),await at(S.id),t(S)}}catch(b){console.error("Error loading initial project from storage",b)}finally{s(!0)}})()},[]);const z=m.useCallback(y=>{E.current&&clearTimeout(E.current),f(!0),E.current=setTimeout(async()=>{try{await jt(y),await at(y.id)}catch(b){console.error("Failed to auto-save project",b)}finally{f(!1)}},400)},[]),D=m.useCallback(y=>{t(b=>{const S={...y(b),updatedAt:Date.now()};return z(S),S})},[z]),P=a.files.find(y=>y.id===a.activeFileId)||a.files.find(y=>y.name==="index.html")||a.files.find(y=>y.type==="html")||a.files[0];a.files.find(y=>y.type==="css")||a.files.find(y=>y.name.endsWith(".css"));const K=(y,b)=>{const C=J(y,b);t(C),z(C)},H=y=>{const b=y.files.map(S=>S.type==="image"&&S.blob&&!S.blobUrl?{...S,blobUrl:URL.createObjectURL(S.blob)}:S),C={...y,files:b};t(C),at(C.id)},B=async()=>{await qa(a)},Q=async()=>{await Wa(a)},Z=y=>{D(b=>({...b,name:y}))},V=y=>{D(b=>({...b,activeFileId:y}))},ee=(y,b)=>{const C={id:`file-${Date.now()}`,name:y,path:y,type:"html",content:`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${b}</title>
  <link rel="stylesheet" href="css/styles.css">
  <link rel="icon" href="src/local.png">
</head>
<body>
  <!-- Header Navbar -->
  <header class="navbar">
    <div class="container nav-content">
      <a href="index.html" class="brand">⚡ Modern<strong>Studio</strong></a>
      <nav class="nav-links">
        <a href="index.html" class="nav-link">Home</a>
        <a href="${y}" class="nav-link">${b}</a>
      </nav>
      <div class="nav-actions">
        <a href="index.html" class="btn btn-outline btn-sm">Home</a>
      </div>
    </div>
  </header>

  <!-- Main Content -->
  <main class="section">
    <div class="container">
      <h1>${b}</h1>
      <div class="rich-text">
        <p class="lead">Add your new content here. You can edit text, headings, buttons, and upload local images.</p>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="footer">
    <div class="container footer-bottom">
      <p>&copy; 2026 ModernStudio. All rights reserved.</p>
    </div>
  </footer>
</body>
</html>`,createdAt:Date.now(),updatedAt:Date.now()};D(S=>({...S,files:[...S.files,C],activeFileId:C.id}))},me=y=>{const b=[];Array.from(y).forEach(C=>{const S=URL.createObjectURL(C),o=C.name.replace(/\s+/g,"-").toLowerCase();b.push({id:`img-${Date.now()}-${Math.random().toString(36).substr(2,5)}`,name:o,path:`src/${o}`,type:"image",content:"",blob:C,blobUrl:S,mimeType:C.type,size:C.size,createdAt:Date.now(),updatedAt:Date.now()})}),b.length>0&&D(C=>({...C,files:[...C.files,...b]}))},c=(y,b)=>{D(C=>({...C,files:C.files.map(S=>S.id===y&&!S.isPrimary&&S.name!=="index.html"&&S.type==="html"?{...S,name:b,path:b,updatedAt:Date.now()}:S)}))},L=y=>{D(b=>{var h;const C=b.files.find(A=>A.id===y);if(!C||C.isPrimary||C.name==="index.html"||C.type==="css")return b;const S=b.files.filter(A=>A.id!==y),o=b.activeFileId===y?((h=S.find(A=>A.type==="html"))==null?void 0:h.id)||"file-index-html":b.activeFileId;return{...b,files:S,activeFileId:o}})},I=y=>{const b=a.files.find(h=>h.id===y);if(!b||b.type!=="html")return;const S=`${b.name.replace(/\.html$/,"")}-copy.html`,o={...b,id:`file-${Date.now()}`,name:S,path:S,isPrimary:!1,createdAt:Date.now(),updatedAt:Date.now()};D(h=>({...h,files:[...h.files,o],activeFileId:o.id}))},q=y=>{const b=y.cssContent||dt(y);D(C=>{const S=C.files.map(o=>o.type==="css"||o.name.endsWith(".css")?{...o,content:b,updatedAt:Date.now()}:o);return{...C,template:y.id,files:S,settings:{...C.settings,themeColor:y.colors.primary}}})},oe=y=>{const b=y.blobUrl||y.externalUrl||y.path,C=document.querySelector('iframe[title="HTML Editor Canvas"]')||document.querySelector('iframe[title="HTML WYSIWYG Canvas"]');if(C!=null&&C.contentWindow)C.contentWindow.postMessage({type:"INSERT_IMAGE",src:b,alt:y.name,name:y.name},"*");else{const S=`
<div class="image-block" style="margin: 1.5rem 0; text-align: center;">
  <img src="${b}" alt="${y.name}" class="img-responsive" style="max-width: 100%; border-radius: var(--radius); display: inline-block;">
</div>
`,h=new DOMParser().parseFromString(P.content,"text/html"),A=h.querySelector("main, .content-container")||h.body,O=h.createElement("div");O.innerHTML=S,A.appendChild(O.firstElementChild||O);const W=`<!DOCTYPE html>
${h.documentElement.outerHTML}`;$(W)}},ae=y=>{D(b=>({...b,files:b.files.map(C=>C.type==="css"||C.name.endsWith(".css")?{...C,content:y,updatedAt:Date.now()}:C)}))},$=y=>{D(b=>({...b,files:b.files.map(C=>C.id===P.id?{...C,content:y,updatedAt:Date.now()}:C)}))},ne=y=>{let b="";y==="rich-text"?b='<div class="rich-text" style="margin: 1.5rem 0;"><p>This is a new rich text block. You can highlight text, change colors, bold, and format freely.</p></div>':y==="heading"?b="<h2>New Section Heading</h2>":y==="button"?b='<div style="margin: 1rem 0;"><a href="contact.html" class="btn btn-primary">Button (OK) →</a></div>':y==="card"?b='<div class="card" style="margin: 1.5rem 0;"><h3>Card Title</h3><div class="rich-text"><p>Card content description with customizable styling.</p></div><a href="about.html" class="btn btn-outline btn-sm">Learn More</a></div>':y==="image"?b='<div style="margin: 1.5rem 0;"><img src="src/local.png" alt="Featured Image" class="img-responsive"></div>':y==="divider"&&(b='<hr style="margin: 2rem 0; border: 0; border-top: 1px solid var(--border-color);">');const S=new DOMParser().parseFromString(P.content,"text/html"),o=S.querySelector("main, .content-container")||S.body,h=S.createElement("div");h.innerHTML=b,h.firstElementChild&&o.appendChild(h.firstElementChild);const A=`<!DOCTYPE html>
${S.documentElement.outerHTML}`;$(A)},ge=y=>{const b=y.replace(/^\.\//,"").replace(/^.*\//,""),C=a.files.find(S=>S.type==="html"&&(S.name===b||S.path.endsWith(b)));C&&V(C.id)};return n?e.jsxs("div",{className:"w-full h-screen flex flex-col bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-100 overflow-hidden font-sans",children:[e.jsx(Va,{project:a,onNewProject:()=>v(!0),onOpenProjectManager:()=>j(!0),onExportZip:B,onExportHtml:Q,onUpdateProjectName:Z,isSaving:l}),e.jsxs("div",{className:"flex-1 flex min-h-0 overflow-hidden",children:[e.jsx(Ya,{project:a,activeFileId:P.id,onSelectFile:V,onSelectCssTab:()=>{},onCreatePage:()=>T(!0),onUploadLocalImage:me,onRenameFile:c,onDeleteFile:L,onDuplicateFile:I,onApplyTemplate:q,onInsertImageToActivePage:oe}),e.jsx(Za,{project:a,activeFile:P,onChangeActiveFileContent:$,onChangeCssContent:ae,selectedNodeId:p,onSelectNodeId:w,onInsertElementToActivePage:ne}),e.jsx(Qa,{project:a,activeFile:P,onChangeActiveFileContent:$,onNavigatePage:ge,onInsertElementToActivePage:ne})]}),e.jsx(tr,{isOpen:d,onClose:()=>v(!1),onCreateProject:K}),e.jsx(er,{isOpen:N,onClose:()=>j(!1),currentProjectId:a.id,onSelectProject:H,onNewProject:()=>v(!0)}),e.jsx(ar,{isOpen:R,onClose:()=>T(!1),onCreatePage:ee})]}):e.jsx("div",{className:"w-full h-screen flex items-center justify-center bg-slate-900 text-slate-400 text-xs",children:"Loading Website Builder Studio..."})};export{nr as WebsiteBuilderTool};
