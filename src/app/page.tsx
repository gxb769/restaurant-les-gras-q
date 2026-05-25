import { redirect } from "next/navigation";

// Server-side redirect — sends visitors to /fr/ immediately
export default function RootPage() {
  redirect("/fr");
}
