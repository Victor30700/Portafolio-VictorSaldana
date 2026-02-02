# Portfolio - Victor Saldaña

![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Three Fiber](https://img.shields.io/badge/R3F-8.15-black?style=for-the-badge&logo=three.js&logoColor=white)

A high-performance, immersive portfolio website built with modern web technologies. This project showcases a "Software Architect" persona through 3D visuals, smooth animations, and a bilingual interface (English/Spanish).

![Project Preview](/public/assets/preview.png)

## 🚀 Key Features

*   **Immersive 3D Experience**: Integrated **Three.js** & **React Three Fiber** hero section with interactive particles.
*   **Bilingual Support (i18n)**: Full English/Spanish toggle with persistent state and instant content switching.
*   **Modern UI/UX**:
    *   **Glassmorphism** design language.
    *   **Smooth Scroll** implementation using Lenis.
    *   **Framer Motion** animations (page transitions, hover effects, entrance animations).
    *   **Responsive Design** with a specialized mobile-first bottom navigation dock.
*   **Dynamic Content**:
    *   Project gallery with category filtering and immersive "lightbox" details.
    *   Timeline visualization for professional experience.
    *   Radar/Grid visualization for technical skills.
*   **Contact Integration**: Fully functional contact form powered by **Resend** for server-side email delivery.

## 🛠 Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Animation**: [Framer Motion](https://www.framer.com/motion/) & [Lenis](https://github.com/darkroomengineering/lenis) (Scroll)
*   **3D Graphics**: [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) & [Drei](https://github.com/pmndrs/drei)
*   **Email**: [Resend](https://resend.com/)
*   **Deployment**: [Vercel](https://vercel.com/)

## 📂 Project Structure

```bash
├── src/
│   ├── actions/       # Server Actions (e.g., Email sending)
│   ├── app/           # App Router pages and layouts
│   ├── components/    # Reusable UI components
│   │   ├── 3d/        # Three.js scenes
│   │   ├── ui/        # Standard UI (Cards, Navbar, Forms)
│   │   └── layout/    # Layout wrappers (SmoothScroll)
│   ├── context/       # Global state (Language)
│   ├── data/          # Static content (Projects, Experience)
│   └── lib/           # Utilities and Helpers
└── public/            # Static assets
```

## ⚡ Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/portfolio-victor-saldana.git
    cd portfolio-victor-saldana
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Environment Variables:**
    Create a `.env.local` file in the root directory and add your Resend API key:
    ```env
    RESEND_API_KEY=re_123456...
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```

5.  Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with ❤️ by Victor Saldaña
</p>