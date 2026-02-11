"use client";

import { useEffect } from "react";

export function BooksyWidget() {
  useEffect(() => {
    // Load Booksy widget script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://booksy.com/widget/code.js?id=1704442&country=us&lang=en";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Booksy widget will be injected here */}
      <div id="booksy-widget-container" />
    </div>
  );
}
