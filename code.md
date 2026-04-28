# Vite Recreation Code Map

This file tells you what code goes in each file when recreating the portfolio project in a new Vite React app.

## 1) New Vite project files

### `package.json`
Use Vite scripts and newer package versions.

```json
{
  "name": "portfolio-vite",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.4",
    "@fortawesome/fontawesome-svg-core": "^6.5.1",
    "@fortawesome/free-brands-svg-icons": "^6.5.1",
    "@fortawesome/free-solid-svg-icons": "^6.5.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "formik": "^2.4.5",
    "framer-motion": "^10.16.16",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "yup": "^1.3.3"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.1",
    "prettier": "^3.1.1",
    "vite": "^5.0.10"
  }
}
```

### `vite.config.js`

```javascript
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});
```

### `index.html`
Replace the CRA HTML entry with the Vite one.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

### `src/main.jsx`
This replaces `src/index.js`.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## 2) App entry files

### `src/App.jsx`
Copy the current `src/App.js` content into `App.jsx`.

```javascript
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <ContactMeSection />
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
```

### `src/index.css`
Copy the current global CSS.

```css
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  background-color: #18181b;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
```

## 3) Component files to copy into Vite

Rename `.js` files to `.jsx` in the new project, then copy the current contents over.

### `src/components/Header.jsx`
Copy the current header file into Vite. Keep the social array, the internal section scroll handler, and the fixed Chakra `Box` layout.

### `src/components/LandingSection.jsx`
Copy the current landing section file into Vite. It uses:
- `FullScreenSection`
- `Avatar`
- `Heading`
- `VStack`

### `src/components/ProjectsSection.jsx`
Copy the current projects section file into Vite. It uses:
- `FullScreenSection`
- `Box`
- `Heading`
- `Card`
- the local `projects` array with `photo1.jpg` to `photo4.jpg`

### `src/components/Card.jsx`
Copy the current card file into Vite, then complete the card UI later if needed. It already imports:
- `Heading`
- `HStack`
- `Image`
- `Text`
- `VStack`
- `FontAwesomeIcon`
- `faArrowRight`

### `src/components/ContactMeSection.jsx`
Copy the current contact section file into Vite. It already contains the Chakra form shell, Formik hook, Yup import, `useSubmit`, and `useAlertContext` wiring points.

### `src/components/Footer.jsx`
Copy the current footer file into Vite.

### `src/components/FullScreenSection.jsx`
Copy the current reusable layout wrapper into Vite.

### `src/components/Alert.jsx`
Copy the current alert dialog component into Vite.

## 4) Context and hook files

### `src/context/alertContext.jsx`
Copy the current alert context provider and hook into Vite.

### `src/hooks/useSubmit.jsx`
Copy the current mock submit hook into Vite.

## 5) Assets to recreate

Copy these image files into `src/images/` in the new Vite project:

- `avatar.png`
- `avatar_smile.png`
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- `photo4.jpg`

## 6) Files from CRA that should not be recreated

These are CRA-specific and can be removed in Vite:

- `src/index.js`
- `src/reportWebVitals.js`
- `src/setupTests.js`
- `src/App.test.js` if you are not keeping the old CRA test setup

## 7) Public folder files

For a simple Vite recreation, you can keep or omit the CRA public extras. If you want the cleanest Vite setup, only keep what you actually use.

Current public files in the CRA project:
- `public/favicon.ico`
- `public/logo192.png`
- `public/logo512.png`
- `public/manifest.json`
- `public/robots.txt`
- `public/index.html` only exists in CRA and is replaced by root `index.html` in Vite

## 8) Final Vite file layout

```text
portfolio-vite/
├── index.html
├── vite.config.js
├── package.json
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── LandingSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   ├── Card.jsx
│   │   ├── ContactMeSection.jsx
│   │   ├── Footer.jsx
│   │   ├── FullScreenSection.jsx
│   │   └── Alert.jsx
│   ├── context/
│   │   └── alertContext.jsx
│   ├── hooks/
│   │   └── useSubmit.jsx
│   └── images/
│       ├── avatar.png
│       ├── avatar_smile.png
│       ├── photo1.jpg
│       ├── photo2.jpg
│       ├── photo3.jpg
│       └── photo4.jpg
└── public/
    ├── favicon.ico
    ├── logo192.png
    ├── logo512.png
    ├── manifest.json
    └── robots.txt
```

## 9) Short answer: what you actually need to recreate

If you only want the minimum set of code to recreate the project in Vite, you need:

1. `package.json` with Vite scripts and updated dependencies
2. `vite.config.js`
3. root `index.html`
4. `src/main.jsx`
5. `src/App.jsx`
6. all files under `src/components/`
7. `src/context/alertContext.jsx`
8. `src/hooks/useSubmit.jsx`
9. `src/index.css`
10. the six image assets in `src/images/`

