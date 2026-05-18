import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { hasLocale, defaultLocale, locales } from "@/lib/i18n/getDictionary";

function getLocale(request: NextRequest): string {
  const accepted = request.headers.get("accept-language") ?? "";
  const preferred = accepted.split(",")[0]?.split("-")[0]?.toLowerCase() ?? "";
  return locales.find((l) => l === preferred) ?? defaultLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) =>
      pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request);

  if (!hasLocale(locale)) {
    request.nextUrl.pathname = `/${defaultLocale}${pathname}`;
  } else {
    request.nextUrl.pathname = `/${locale}${pathname}`;
  }

  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|api|assets|favicon.ico|.*\\..*).*)"],
};
