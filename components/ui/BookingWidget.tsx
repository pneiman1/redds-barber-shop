"use client";

import { useEffect, useRef, useState } from "react";

export function BookingWidget() {
  const [isLoading, setIsLoading] = useState(true);
  const widgetRef = useRef<HTMLDivElement>(null);
  const scriptLoadedRef = useRef(false);

  useEffect(() => {
    // Only load the script once
    if (scriptLoadedRef.current) return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://booksy.com/widget/code.js?id=1704442&country=us&lang=en";
    script.async = true;
    script.onload = () => {
      setIsLoading(false);
      scriptLoadedRef.current = true;
    };
    script.onerror = () => {
      setIsLoading(false);
      console.error("Failed to load Booksy widget");
    };

    if (widgetRef.current) {
      widgetRef.current.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="w-full">
      <div className="bg-background rounded-xl border-2 border-primary-500/30 shadow-glow-red overflow-hidden">
        {isLoading && (
          <div className="flex flex-col items-center justify-center py-12 bg-background-secondary">
            <div className="w-12 h-12 border-4 border-primary-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-foreground-muted">Loading booking widget...</p>
          </div>
        )}

        <div
          ref={widgetRef}
          id="booksy-widget-container"
          className="min-h-[600px] booksy-widget-wrapper"
        />
      </div>

      <style jsx global>{`
        /* Style the Booksy widget to match our dark theme */
        #booksy-widget-container iframe {
          border: none !important;
          width: 100% !important;
        }

        .booksy-widget-wrapper {
          background: #0a0a0a !important;
        }

        /* Try to match Booksy widget colors to our theme */
        #booksy-widget-container * {
          color-scheme: dark;
        }
      `}</style>
    </div>
  );
}
