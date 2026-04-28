# Portfolio Project: Vite Migration Plan

## Overview
This document outlines the complete migration strategy from Create React App to Vite with modern packages and best practices.

---

## Current Project Analysis

### Existing Stack
- **Build Tool**: Create React App (react-scripts)
- **React Version**: ^18.2.0
- **State Management**: React Context API
- **Form Handling**: Formik + Yup
- **UI Framework**: Chakra UI ^2.3.2
- **Icons**: FontAwesome (multiple packs)
- **Animation**: Framer Motion
- **Testing**: Jest + React Testing Library

### Project Structure
```
src/
├── App.js (Main component with ChakraProvider + AlertProvider)
├── index.js (Entry point)
├── index.css (Global styles)
├── components/
│   ├── Header.js (Navigation + social links + scroll animation)
│   ├── LandingSection.js (Avatar + bio)
│   ├── ProjectsSection.js (Grid of project cards)
│   ├── Card.js (Individual project card)
│   ├── ContactMeSection.js (Form with Formik/Yup validation)
│   ├── Footer.js
│   └── Alert.js (Alert notifications)
├── context/
│   └── alertContext.js (Alert state management)
├── hooks/
│   └── useSubmit.js (Mock API submission)
└── images/ (Static assets)
```

### Key Features Implemented
1. **Header**: Fixed navigation with social links + internal section links + scroll-based animation
2. **Landing Section**: Centered avatar + greeting + bio text
3. **Projects Section**: Grid layout with Card components
4. **Contact Form**: Full validation with real-time error feedback + loading states
5. **Alert System**: Toast-like notifications for form submission feedback
6. **Scroll Behavior**: Smooth scrolling + header hide/show animation

---

## New Vite Stack

### Recommended Package Versions (2024-2025)
```json
{
  "dependencies": {
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "@chakra-ui/react": "^2.8.2",
    "@chakra-ui/icons": "^2.1.1",
    "@emotion/react": "^11.11.4",
    "@emotion/styled": "^11.11.4",
    "framer-motion": "^10.16.16",
    "@fortawesome/fontawesome-svg-core": "^6.5.1",
    "@fortawesome/free-brands-svg-icons": "^6.5.1",
    "@fortawesome/free-solid-svg-icons": "^6.5.1",
    "@fortawesome/react-fontawesome": "^0.2.0",
    "formik": "^2.4.5",
    "yup": "^1.3.3"
  },
  "devDependencies": {
    "vite": "^5.0.10",
    "@vitejs/plugin-react": "^4.2.1",
    "react-router-dom": "^6.20.0",
    "@testing-library/react": "^14.1.2",
    "@testing-library/jest-dom": "^6.1.5",
    "@testing-library/user-event": "^14.5.1",
    "vitest": "^1.1.1",
    "prettier": "^3.1.1"
  }
}
```

### Key Changes in Newer Packages
- **React**: Bug fixes and performance improvements
- **Chakra UI**: Better TypeScript support, performance optimizations
- **Yup**: Breaking change - validation schema now async-first
- **Formik**: Supports async validation better
- **Vite**: 5x faster dev server, native ESM

---

## Step-by-Step Migration Plan

### Phase 1: Project Setup (Vite Initialization)

#### 1.1 Create New Vite Project
```bash
npm create vite@latest portfolio-vite -- --template react
cd portfolio-vite
npm install
```

#### 1.2 Install All Dependencies
```bash
npm install react react-dom
npm install @chakra-ui/react @emotion/react @emotion/styled framer-motion
npm install @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome
npm install formik yup
npm install -D vite @vitejs/plugin-react prettier
```

#### 1.3 Vite Configuration
Create `vite.config.js`:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true
  }
})
```

---

### Phase 2: Entry Point & Main App Structure

#### 2.1 Update `index.html`
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Portfolio</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

#### 2.2 Create `src/main.jsx`
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```

#### 2.3 Migrate `src/App.jsx`
- Change `.js` to `.jsx` for React files with JSX
- Keep the exact same component structure
- No logic changes needed

---

### Phase 3: Component Migration

#### 3.1 Rename All Component Files
- `components/*.js` → `components/*.jsx`
- `hooks/*.js` → `hooks/*.jsx`
- `context/*.js` → `context/*.jsx`

#### 3.2 No Breaking Changes for Components
All existing components can be copied as-is:
- ✅ Header.js
- ✅ LandingSection.js
- ✅ ProjectsSection.js
- ✅ Card.js
- ✅ ContactMeSection.js
- ✅ Footer.js
- ✅ Alert.js
- ✅ alertContext.js
- ✅ useSubmit.js

#### 3.3 Update Imports
- No changes needed in import paths
- Vite automatically resolves JSX

---

### Phase 4: Static Assets & Public Files

#### 4.1 Move Public Assets
- Copy all images from `public/` → `public/` (same location in Vite)
- Update references to assets in components if needed

#### 4.2 CSS Handling
- `index.css` works as-is
- Import in `main.jsx`: `import './index.css'`

---

### Phase 5: Update Package.json Scripts

#### Before (Create React App)
```json
{
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  }
}
```

#### After (Vite)
```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "test": "vitest",
    "lint": "prettier --check ."
  }
}
```

---

### Phase 6: Environment Variables (if needed)

#### For Vite
- Prefix with `VITE_`: `VITE_API_URL=...`
- Access via: `import.meta.env.VITE_API_URL`

---

## File-by-File Recreation Checklist

### Keep As-Is (Just Rename .js → .jsx)
- [ ] `src/components/Header.jsx`
- [ ] `src/components/LandingSection.jsx`
- [ ] `src/components/ProjectsSection.jsx`
- [ ] `src/components/Card.jsx`
- [ ] `src/components/ContactMeSection.jsx`
- [ ] `src/components/Footer.jsx`
- [ ] `src/components/Alert.jsx`
- [ ] `src/context/alertContext.jsx`
- [ ] `src/hooks/useSubmit.jsx`

### Recreate (Vite-specific)
- [ ] `vite.config.js` ✨ NEW
- [ ] `src/main.jsx` ✨ NEW (replaces src/index.js)
- [ ] `src/App.jsx` (copy from src/App.js)
- [ ] `index.html` (update root div reference)
- [ ] `package.json` (update scripts + dependencies)
- [ ] `.env` files if needed

### Optional Additions
- [ ] `.env.example` (document required env vars)
- [ ] `.gitignore` (Vite-specific: `dist/`, `.env.local`)
- [ ] `vitest.config.js` (for testing setup)

---

## Potential Breaking Changes & Solutions

### 1. **Import Extensions**
- **Issue**: Some modules may need explicit `.jsx` extensions in Vite
- **Solution**: Vite handles this automatically; use standard ES6 imports

### 2. **Global Variable Access**
- **Issue**: Code using `window`, `document` works the same
- **Solution**: No changes needed

### 3. **Asset Imports**
- **Issue**: Vite handles asset imports differently
- **Solution**: Use relative paths for images; Vite handles bundling automatically

### 4. **Formik Validation**
- **Yup v1 Breaking Change**: Schema validation is now stricter
- **Solution**: May need to update validation rules if they fail tests

### 5. **Environment Variables**
- **Issue**: `process.env.NAME` → `import.meta.env.VITE_NAME`
- **Solution**: Update if any env vars are used

---

## Testing & Validation

### What to Test
1. [ ] Header renders correctly with social links
2. [ ] Header animation works on scroll
3. [ ] Landing section displays avatar + bio
4. [ ] Projects grid displays all cards
5. [ ] Card layout matches design
6. [ ] Form validation shows errors correctly
7. [ ] Form submission triggers API call
8. [ ] Alert appears on success/error
9. [ ] Smooth scroll navigation works
10. [ ] Responsive design on mobile/tablet

### Debug Checklist
- [ ] Check browser console for errors
- [ ] Verify all images load correctly
- [ ] Confirm no CSS conflicts
- [ ] Test form validation flow
- [ ] Check mobile responsiveness

---

## Performance Improvements with Vite

### Expected Benefits
1. **Dev Server**: 5-10x faster startup
2. **HMR (Hot Module Replacement)**: Near-instant updates
3. **Build Size**: ~15-20% smaller bundle
4. **Build Time**: ~2-3x faster production builds
5. **ESM**: Native ES modules support

### Build Optimization
- Vite automatically code-splits components
- Dynamic imports work out of the box
- CSS is tree-shaken automatically

---

## File Structure in New Project

```
portfolio-vite/
├── index.html
├── vite.config.js
├── package.json
├── public/
│   └── images/
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
│   │   └── Alert.jsx
│   ├── context/
│   │   └── alertContext.jsx
│   ├── hooks/
│   │   └── useSubmit.jsx
│   └── images/
└── .gitignore
```

---

## Migration Execution Order

1. ✅ Create new Vite project
2. ✅ Install all dependencies
3. ✅ Create vite.config.js
4. ✅ Create index.html
5. ✅ Create src/main.jsx
6. ✅ Migrate App.jsx
7. ✅ Rename & migrate all components
8. ✅ Rename & migrate context/hooks
9. ✅ Copy CSS files
10. ✅ Copy public assets
11. ✅ Update package.json scripts
12. ✅ Test all features
13. ✅ Delete old CRA project

---

## Summary: What Needs to Be Recreated

### Core Files to Create (NEW)
- `vite.config.js`
- `src/main.jsx`
- `index.html` (modified for Vite)

### Files to Migrate (RENAME .js → .jsx)
- All 9 component/hook/context files
- No logic changes needed

### Files to Delete
- `public/manifest.json` (optional)
- `public/robots.txt` (optional)
- `src/index.js` (replaced by src/main.jsx)
- `src/reportWebVitals.js` (CRA specific)
- `src/setupTests.js` (CRA testing setup)
- `src/App.test.js` (old tests)

### Configuration to Update
- `package.json` (scripts + dependencies)
- `.gitignore` (add dist/, .env.local)

---

## Estimated Time

- **Setup**: 15-20 minutes
- **Migration**: 10-15 minutes
- **Testing**: 15-20 minutes
- **Total**: ~45-60 minutes

---

## Rollback Plan

Keep the original CRA project until Vite project is fully tested and verified working.
