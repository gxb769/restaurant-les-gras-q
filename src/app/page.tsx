"use client";
import { useEffect } from "react";

// Root redirect — sends visitors to /fr by default (static export compatible)
export default function RootPage() {
  useEffect(() => {
    window.location.replace("/fr/");
  }, []);
  return (
    <noscript>
      <meta httpEquiv="refresh" content="0;url=/fr/" />
    </noscript>
  );
}
