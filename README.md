# Cudify

Cudify is a modern website built with React and TypeScript. It features a responsive navigation bar with dropdowns, mobile support, and a clean, accessible UI. This project demonstrates best practices in React component structure, state management, and responsive design.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- Responsive navigation bar with dropdown menus
- Mobile-friendly hamburger menu
- Smooth transitions and accessibility support
- Modular component structure
- TypeScript for type safety
- Easy to extend and customize

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
   ```sh
   git clone https://github.com/joesef127/cudify.git
   cd cudify
   ```

2. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```sh
   npm start
   # or
   yarn start
   ```

4. **Open in your browser:**
   Visit [http://localhost:5173](http://localhost:5173)

## Available Scripts

- `npm start` — Runs the app in development mode.
- `npm run build` — Builds the app for production.
- `npm test` — Runs the test suite.
- `npm run lint` — Lints the codebase.

## Project Structure

```
cudify/
├── public/
│   └── cudify_logo
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ui/
│   │   └── Header.tsx
│   │   └── ....
│   ├── hooks/
│   ├── pages/
│   ├── DataArrays.ts
│   ├── Types.ts
│   ├── App.tsx
│   ├── index.tsx
│   └── ...
├── package.json
├── tsconfig.json
└── README.md
```

- **components/**: Reusable React components (e.g., Header, DropdownNav, Button)
- **assets/**: Images and static assets
- **DataArrays.ts**: Navigation and dropdown data
- **App.tsx**: Main application entry point

## Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (for styling)
- [React Router](https://reactrouter.com/) (for routing)
- [Lucide React](https://lucide.dev/) (for icons)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License

This project is licensed under the [MIT License](LICENSE).

---

**Made with ❤️ using React and TypeScript.**