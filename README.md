# 🎵 Musify  

Welcome to **Musify**, a sleek and modern music streaming web app built with **Next.js** and **Tailwind CSS**. This project allows users to browse and play songs with a seamless and interactive UI.  

---

## 🚀 Features  

✅ **Modern UI/UX** – Intuitive and responsive design powered by Tailwind CSS.  
✅ **Custom Music Player** – Play, pause, and navigate through your favorite tracks.  
✅ **Dark Mode Support** – Seamless theme switching with `ThemeChanger.tsx`.  
✅ **Dynamic Sidebar & Navigation** – Organizes recent plays, user profiles, and workspaces.  
✅ **Optimized Performance** – Efficient state management and lightweight UI components.  

---

## 📁 Directory Structure  

```bash
musify.git/
├── README.md              # Project documentation
├── components.json        # Component metadata
├── eslint.config.mjs      # ESLint configuration
├── next.config.ts         # Next.js configuration
├── package.json           # Project dependencies
├── postcss.config.mjs     # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS setup
├── tsconfig.json          # TypeScript configuration
├── Data/
│   └── index.tsx          # Data handling components
├── app/
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Page layout
│   └── page.tsx           # Main page
├── components/
│   ├── ThemeChanger.tsx   # Dark mode toggle
│   ├── hero.tsx           # Hero section UI
│   ├── nav-*.tsx          # Various navigation components
│   ├── player.tsx         # Music player UI
│   ├── sidebar-*.tsx      # Left & Right sidebars
│   └── ui/                # UI components (buttons, cards, tooltips, etc.)
│       ├── avatar.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── collapsible.tsx
│       ├── dropdown-menu.tsx
│       ├── input.tsx
│       ├── sheet.tsx
│       ├── sidebar.tsx
│       ├── skeleton.tsx
│       ├── slider.tsx
│       └── tooltip.tsx
├── hooks/
│   ├── use-mobile.tsx      # Mobile responsiveness hook
│   └── useScreenSize.tsx   # Screen size detection hook
├── lib/
│   └── utils.ts            # Utility functions
└── public/
    └── musicFiles/         # Audio files
```

---

## 🛠️ Installation & Setup  

1️⃣ **Clone the repository**  
```bash
git clone https://github.com/your-username/musify.git
cd musify
```

2️⃣ **Install dependencies**  
```bash
npm install
# or
yarn install
```

3️⃣ **Run the development server**  
```bash
npm run dev
# or
yarn dev
```

4️⃣ **Open the app in your browser**  
```
http://localhost:3000
```

---

## 🎨 Technologies Used  

- **Next.js** – For server-side rendering and routing  
- **TypeScript** – For type-safe development  
- **Tailwind CSS** – For styling  
- **ESLint & Prettier** – For code quality  
- **React Hooks** – For state management  

---

## 🤝 Contributing  

We welcome contributions! If you have ideas for improvements or bug fixes:  

1. Fork the repo  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit your changes (`git commit -m "Added new feature"`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a pull request 🚀  

---

## 📜 License  

This project is open-source and available under the **MIT License**.  

---

🎧 **Enjoy your music with Musify!** 🚀
