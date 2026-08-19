import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") ?? "";

  const preferredLanguage = acceptLanguage.split(",")[0]?.trim().toLowerCase();

  const language = preferredLanguage.startsWith("fr") ? "fr" : "en";

  redirect(`/${language}`);
}
