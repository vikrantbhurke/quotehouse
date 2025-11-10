import { viewQuoteRoute } from "@/global/constants";
import { redirect } from "next/navigation";

export default function Page() {
  redirect(viewQuoteRoute(1));
}
