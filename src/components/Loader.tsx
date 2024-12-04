// Importing necessary components from the 'react-three/drei' library
import { Html, useProgress } from '@react-three/drei';

// CanvasLoader component to display the loading progress while assets load
const CanvasLoader = () => {
  // Destructuring 'progress' from the 'useProgress' hook to get the loading percentage
  const { progress } = useProgress();

  return (
    // Html component to render HTML inside the 3D canvas (positioned at the center
    <Html
      as="div" // Specifies the HTML tag to use for the loader container
      center // Ensures the loader is centered within the canvas
      style={{
        display: 'flex', // Use Flexbox for centering
        justifyContent: 'center', // Align horizontally
        alignItems: 'center', // Align vertically
        flexDirection: 'column', // Stack content (spinner and percentage)
      }}
    >
      {/* This span can be styled to represent a loader icon (e.g., a spinner) */}
      <span className="canvas-loader"></span>

      {/* Displaying the loading progress as a percentage */}
      <p
        style={{
          fontSize: 14, // Small font size for the progress text
          color: '#F1F1F1', // White color for contrast
          fontWeight: 800, // Bold font for visibility
          marginTop: 40, // Space between the spinner and the text
        }}
      >
        {/* Showing the loading percentage with two decimal places */}
        {progress.toFixed(2)}%
      </p>
    </Html>
  );
};

// Exporting the CanvasLoader to use it in other parts of the application
export default CanvasLoader;
