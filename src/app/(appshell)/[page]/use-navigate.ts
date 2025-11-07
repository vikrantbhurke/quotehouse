"use client";
import { usePathname, useRouter } from "next/navigation";

export function useNavigate(total: number) {
  const router = useRouter();
  const pathname = usePathname();

  const segments = pathname.split("/");
  const last = segments[segments.length - 1];
  const page = Number(last);

  const getHref = (page: number) => {
    segments[segments.length - 1] = page.toString();
    const newPath = segments.join("/");
    router.push(newPath);
  };

  const increment = () => {
    getHref(page < total ? page + 1 : page);
  };
  const decrement = () => {
    getHref(page > 1 ? page - 1 : 1);
  };

  const shuffle = () => {
    if (total <= 1) return page;

    let newPage: number;
    do {
      newPage = Math.floor(Math.random() * total) + 1;
    } while (newPage === page);

    getHref(newPage);
  };

  return { increment, decrement, shuffle, page };
}
