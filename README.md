# Lakshya Choudhary — Portfolio v2
> A premium, cyber-dark monochrome portfolio showcasing full-stack engineering, generative AI systems, and competitive programming achievements.

---

## 🎨 Design Philosophy
* **Monochrome Theme**: Strictly styled using values of black, white, and customized grays for a clean, premium, high-contrast developer aesthetic.
* **Dynamic Animations**: Seamless interaction feedback, custom cursor tracking, staggered mobile menu slide-up animations, and IntersectionObserver-driven scroll reveals.
* **Canvas Particles**: An interactive, low-latency background particle engine built using the HTML5 Canvas API in the Hero landing section.

---

## 🚀 Key Features

### 1. Conversational AI Chat Agent
* Simulated agentic chat console allowing visitors to ask questions about projects, contest ratings, or skill matrices.
* Supported by a comprehensive keyword-matching response helper containing details about all 9 projects.
* Local message scrolling isolated cleanly inside the chat bubble list with layout-paint timing timeout.

### 2. Interactive Projects (3-Column Grid)
* Loads all 9 projects into a responsive layout (3 columns on desktop, 2 on tablet, 1 on mobile).
* Utilizes interactive accordion toggles; clicking a project card expands details to show 3 results-oriented bullet points.

### 3. Professional Experience Timeline
* Features details of your role as a **Full Stack Developer** at **ModelSuite AI** (July 2026 - Present) and **Open Source Contributor** (Zulip & Rocket.Chat).
* Rendered in a clean, vertical timeline pattern with responsive stacking rules for mobile screens.

### 4. Competitive Programming stats
* Highlights a LeetCode Contest Rating of **1980+ (Knight Level)** placing you in the top 1% globally.
* Visually breaks down 500+ solved problems into Easy, Medium, and Hard progress widgets.

### 5. Categorized Skill Matrix
* Organized into a modular 5-tab console:
  1. **Languages**: Python, TypeScript, JavaScript, SQL
  2. **Frameworks & Libraries**: Next.js, React, FastAPI, Node.js, Prisma ORM, Django
  3. **AI / ML Engineering**: LangGraph, Generative AI, RAG, Chroma DB, TensorFlow, PyTorch
  4. **Cloud & DevOps**: AWS, GCP, Docker, Docker Compose, Git & GitHub
  5. **Core CS & APIs**: Data Structures, OAuth 2.0, API Testing

---

## 🛠️ Technology Stack
* **Framework**: React 19 (Hooks, Contexts, Refs)
* **Build System**: Vite 8 (Hot Module Replacement)
* **Icons**: Lucide React
* **Styling**: Vanilla CSS (Tailored variables for monochrome colors)
* **Asset Hosting**: Single-page static bundle serving `/Full_Stack2.pdf` resume directly from the static `public` route.

---

## 📂 Project Structure
```text
my-portfolio2/
├── public/                 # Static assets (Resume PDF, SVGs, Favicons)
├── src/
│   ├── assets/             # Theme logos and image resources
│   ├── components/         # Modular layout sections
│   │   ├── Navbar.jsx      # Sticky glass navigation header
│   │   ├── Hero.jsx        # Landing segment with Canvas particle system
│   │   ├── About.jsx       # Academics and focus indicators
│   │   ├── Projects.jsx    # Collapsible 3-column project grid
│   │   ├── Experience.jsx  # Interactive professional timeline
│   │   ├── Stats.jsx       # LeetCode rating & CP stats panel
│   │   ├── Skills.jsx      # Categorized 5-tab technical skills matrix
│   │   ├── AiChat.jsx      # Conversational AI assistant
│   │   └── Footer.jsx      # Bottom contact links and branding
│   ├── App.css             # Root configurations
│   ├── App.jsx             # Render shell and IntersectionObserver registry
│   ├── index.css           # Global typography, colors, scroll reveals
│   └── main.jsx            # React root mount
├── package.json            # Dependencies and scripts
└── vite.config.js          # Vite build environment configs
```

---

## 💻 Local Setup & Development

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
*Accessible at: [http://localhost:5173/](http://localhost:5173/)*

### 3. Build for Production
```bash
npm run build
```
*Build artifacts are outputted directly to the `/dist` directory.*

### 4. Preview Local Build
```bash
npm run preview
```
