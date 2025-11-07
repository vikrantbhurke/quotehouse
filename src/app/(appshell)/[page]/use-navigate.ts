"use client";
import { usePathname, useRouter } from "next/navigation";

export function useNavigate() {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const last = segments[segments.length - 1];
  const page = Number(last);
  console.log(router, pathname, page);

  const getHref = (page: number) => {
    segments[segments.length - 1] = page.toString();
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const increment = () => getHref(page + 1);
  const decrement = () => getHref(page - 1);

  return { increment, decrement, page };
}
