import { getCookie } from "cookies-next"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { Welcome } from "../components/Welcome/Welcome"


export default async function HomePage() {
  const familiesCookie = await getCookie("families", { cookies });

  if (familiesCookie && JSON.parse(familiesCookie).length > 0) {
    redirect("/app");
  }

  return <Welcome />;
}
