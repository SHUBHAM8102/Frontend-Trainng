# Frontend Training

A comprehensive React + Vite learning project to master modern frontend development.

## 📋 Overview

This project is built with **React** and **Vite**, providing a fast and optimized development environment for learning and building frontend applications. It includes ESLint configuration for code quality and best practices.

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/SHUBHAM8102/Frontend-Trainng.git

# Navigate to the project directory
cd Frontend-Trainng

# Install dependencies
npm install
```

### Development

```bash
# Start the development server with HMR (Hot Module Replacement)
npm run dev
```

The application will be available at `http://localhost:5173`

### Build for Production

```bash
# Create an optimized production build
npm run build
```

### Preview Production Build

```bash
# Preview the production build locally
npm run preview
```

## 🛠 Tech Stack

- **React** - UI library for building interactive components
- **Vite** - Next-generation frontend build tool with lightning-fast HMR
- **ESLint** - Code linting for maintaining code quality
- **Oxc/SWC** - Fast JavaScript/TypeScript transformation tools

## 🔌 Available Vite Plugins

Currently, two official React plugins are available:

- **[@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react)** - Uses [Oxc](https://oxc.rs) for fast transpilation
- **[@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc)** - Uses [SWC](https://swc.rs/) as an alternative transpiler

## 📝 ESLint Configuration

This project comes with ESLint pre-configured. For production applications, it's recommended to:

1. Enable TypeScript support with type-aware lint rules
2. Integrate `typescript-eslint` for better type checking

Refer to the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for detailed instructions.

## ⚙️ React Compiler

The React Compiler is **not enabled** by default due to its impact on development and build performance. 

To enable the React Compiler, refer to the [official documentation](https://react.dev/learn/react-compiler/installation).

## 📁 Project Structure

```
Frontend-Trainng/
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── ...
├── public/
├── index.html
├── vite.config.js
├── package.json
├── .eslintrc.cjs
└── README.md
```

## 📚 Learning Path

- Understand React fundamentals
- Master component composition
- Learn state management
- Explore hooks and side effects
- Optimize performance
- Build real-world projects

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Fork the repository
- Create a feature branch
- Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 📞 Support

For issues, questions, or suggestions, please open an issue on the [GitHub repository](https://github.com/SHUBHAM8102/Frontend-Trainng).

---

**Happy Learning! 🎉**
