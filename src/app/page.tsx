"use client";
import { useEffect } from "react";

// Root redirect — sends visitors to /fr/ (static export compatible)
export default function RootPage() {
  useEffect(() => {
    window.location.replace("/fr/");
  }, []);
  return null;
}
