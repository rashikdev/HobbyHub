import React from "react";

const LoadingPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="rounded-md h-12 w-12 border-4 border-t-4 border-blue-500 animate-spin absolute"></div>
    </div>
  );
};

export default LoadingPage;
