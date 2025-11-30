import { cookies } from "next/headers"
import { FamilyDashboard } from "../../components/FamilyDashboard/FamilyDashboard"


export default async function AppDashboardPage() {
  const familiesCookie = (await cookies()).get("families")?.value;
  let families: { id: number; name: string; code: string }[] = [];
  if (familiesCookie) {
    try {
      families = JSON.parse(familiesCookie);
    } catch (e) {
      console.error("Failed to parse families cookie:", e);
    }
  }

  return <FamilyDashboard families={families} />;
}
