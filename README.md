# 🎵 Musify

Welcome to *Musify* – a sleek and modern music streaming web app built with *Next.js, **Tailwind CSS, and **TypeScript*. Experience a seamless way to play and manage your favorite songs with an intuitive UI and smooth playback.

## 🚀 Features
- 🎧 *Play and Pause* songs with a single click.
- 🔄 *Seamless UI* with a dark/light theme toggle.
- 📂 *Organized Directory Structure* for scalability.
- 🎨 *Responsive Design* powered by Tailwind CSS.
- ⚡ *Fast Performance* with optimized Next.js rendering.

---

## 📂 Directory Structure

musify.git/
├── README.md             # Project documentation
├── components.json       # Component metadata
├── eslint.config.mjs     # ESLint configuration
├── next.config.ts        # Next.js configuration
├── package.json         # Dependencies and scripts
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── Data/
│   └── index.tsx         # Data handling logic
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Layout wrapper
│   └── page.tsx          # Main page component
├── components/
│   ├── ThemeChanger.tsx  # Dark/Light mode toggle
│   ├── hero.tsx          # Hero section
│   ├── nav-*.tsx         # Navigation components
│   ├── player.tsx        # Music player UI
│   ├── sidebar-*.tsx     # Sidebars for UI
│   └── ui/               # UI components (buttons, cards, inputs, etc.)
├── hooks/
│   ├── use-mobile.tsx    # Hook for mobile detection
│   └── useScreenSize.tsx # Hook for screen size detection
├── lib/
│   └── utils.ts          # Utility functions
└── public/
    └── musicFiles/       # Stored music files


---

## 🛠 Tech Stack
- *Next.js* – React framework for fast rendering
- *TypeScript* – Strongly typed JavaScript
- *Tailwind CSS* – Utility-first CSS framework
- *ESLint & Prettier* – Code linting and formatting
- *Custom Hooks* – Reusable logic for UI enhancements

---

## 🎯 How to Run
1️⃣ Clone the repository:
bash
git clone https://github.com/your-username/musify.git
cd musify


2️⃣ Install dependencies:
bash
npm install  # or yarn install


3️⃣ Run the development server:
bash
npm run dev  # or yarn dev


🚀 Open [http://localhost:3000](http://localhost:3000) in your browser to explore *Musify*!

---

## 📌 Contributing
We welcome contributions! Feel free to submit issues, create pull requests, or suggest improvements.

1️⃣ Fork the repository.
2️⃣ Create a new branch (git checkout -b feature-branch).
3️⃣ Commit your changes (git commit -m "Added a cool feature").
4️⃣ Push to your branch (git push origin feature-branch).
5️⃣ Open a pull request!

---

## 📜 License
This project is licensed under the [MIT License](LICENSE).

---

💖 *Enjoy your music experience with Musify!* 🎶
