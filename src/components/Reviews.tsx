"use client";

import { useEffect, useState } from "react";

const Reviews = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute("data-use-service-core", "");
    script.defer = true;

    script.onload = () => setIsLoaded(true);

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      setIsLoaded(false);
    };
  }, []);

  return (
    <div>
      {isLoaded ? (
        <div
          className="elfsight-app-a74695d4-b438-4bd1-a05a-621b1976c86a"
          style={{ backgroundColor: "#f3f4f6" }}
          data-elfsight-app-lazy
        ></div>
      ) : (
        <p className="text-center text-gray-500">Loading reviews...</p>
      )}
    </div>
  );
};

export default Reviews;
