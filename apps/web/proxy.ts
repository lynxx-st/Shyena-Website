import { internationalizationMiddleware } from "@repo/internationalization/proxy";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|robots\\.txt|.*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
  ],
};

export default internationalizationMiddleware;
