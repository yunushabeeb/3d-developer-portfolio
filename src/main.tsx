import { StrictMode } from 'react'; // Import StrictMode for highlighting potential issues in development
import { createRoot } from 'react-dom/client'; // Import createRoot for rendering the React app in React 18+
import './index.css'; // Import global CSS styles
import App from './App.tsx'; // Import the root component of the application

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Wrap the application in StrictMode to enable additional development checks */}
    <App /> {/* Render the App component */}
  </StrictMode>
);
