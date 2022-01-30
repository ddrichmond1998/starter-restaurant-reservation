import React from "react";

// Loading wheel is used while waiting for API response
function LoadingWheel() {
  return (
    <div className="spinner-border text-info mx-auto" role="status">
      <span className="sr-only">Loading...</span>
    </div>
  );
}

export default LoadingWheel;