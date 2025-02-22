# 🎶 **Musify**

Welcome to **Musify**, your AI-powered music player built with Next.js! Enjoy seamless music playback, personalized recommendations, and a sleek user interface.

---

## 🚀 **Features**
- 🎵 Play music with real-time audio controls
- 🔁 Repeat and skip tracks
- 📱 Responsive design for all devices
- 🌙 Light/Dark theme switcher
- 🧠 AI-driven recommendations

---

## 🗂️ **Project Structure**
```
└── musify.git/ 
    ├── README.md
    ├── components.json
    ├── eslint.config.mjs
    ├── next.config.ts
    ├── package.json
    ├── postcss.config.mjs
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── Data/
    │   └── index.tsx
    ├── app/
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── page.tsx
    ├── components/
    │   ├── ThemeChanger.tsx
    │   ├── hero.tsx
    │   ├── nav-recentlyPlayed.tsx
    │   ├── nav-secondary.tsx
    │   ├── nav-user.tsx
    │   ├── nav-workspaces.tsx
    │   ├── player.tsx
    │   ├── sidebar-left.tsx
    │   ├── sidebar-right.tsx
    │   └── ui/
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
    │   ├── use-mobile.tsx
    │   └── useScreenSize.tsx
    ├── lib/
    │   └── utils.ts
    └── public/
        └── musicFiles/
```

---

## 💾 **Installation**
```bash
# Clone the repository
git clone https://github.com/Freak3123/musify.git

# Navigate to the project directory
cd musify

# Install dependencies
npm install

# Start the development server
npm run dev
```

---

## ⚙️ **Usage**
1. Open your browser and go to `http://localhost:3000`
2. Explore the music player, play tracks, and enjoy AI-powered suggestions
3. Use the sidebar to navigate between playlists, recently played songs, and user settings

---

## 🧩 **Key Components**
- **Player.tsx**: Core music player with audio controls
- **ThemeChanger.tsx**: Light/Dark mode toggle
- **Sidebar-left.tsx** and **Sidebar-right.tsx**: Navigation sidebars
- **Hooks**: Custom React hooks for responsive design

---

## 🧠 **AI Integration**
- AI model recommends tracks based on listening patterns
- Predicts optimal playlists for different moods

---

## 📝 **Contributing**
We welcome contributions! Follow these steps:
1. Fork the repository
2. Create a new branch: `git checkout -b feature-branch`
3. Make your changes
4. Commit and push: `git commit -m "Add new feature"` and `git push origin feature-branch`
5. Open a Pull Request

---

## 📜 **License**
This project is licensed under the MIT License. Feel free to use and modify it.

---

## 📧 **Contact**
Created by [Ashreeta Patra](https://linkedin.com/in/ashreeta-patra-012a0426a). For any queries, feel free to reach out!

---

_Enjoy your musical journey with Musify! 🎶_
