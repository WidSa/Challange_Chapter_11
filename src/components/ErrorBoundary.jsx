import React, { useState } from "react";

export default function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  const handleOnError = (error, errorInfo) => {
    // Log error information or send it to an error reporting service
    console.error("Error:", error);
    console.error("Error Info:", errorInfo);

    // Update state to display fallback UI
    setHasError(true);
  };

  if (hasError) {
    // Render fallback UI
    return <div>Something went wrong.</div>;
  }

  return <React.ErrorBoundary onError={handleOnError}>{children}</React.ErrorBoundary>;
}
