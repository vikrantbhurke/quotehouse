"use client";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useRef } from "react";

export function useNavigate(total: number) {
  const router = useRouter();
  const pathname = usePathname();
  const touchStartX = useRef<number | null>(null);

  const segments = pathname.split("/");
  const last = segments[segments.length - 1];
  const page = Number(last);

  const getHref = useCallback(
    (pageNum: number) => {
      const newSegments = [...segments];
      newSegments[newSegments.length - 1] = pageNum.toString();
      return newSegments.join("/");
    },
    [segments]
  );

  const nextUrl = page < total ? getHref(page + 1) : null;
  const previousUrl = page > 1 ? getHref(page - 1) : null;

  const increment = useCallback(() => {
    if (nextUrl) router.push(nextUrl);
  }, [nextUrl, router]);

  const decrement = useCallback(() => {
    if (previousUrl) router.push(previousUrl);
  }, [previousUrl, router]);

  const shuffle = useCallback(() => {
    if (total <= 1) return;
    let newPage: number;
    do {
      newPage = Math.floor(Math.random() * total) + 1;
    } while (newPage === page);
    router.push(getHref(newPage));
  }, [getHref, total, page, router]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "ArrowDown") increment();
      else if (e.key === "ArrowUp") decrement();
    }

    function handleTouchStart(e: TouchEvent) {
      touchStartX.current = e.touches[0].clientX;
    }

    function handleTouchEnd(e: TouchEvent) {
      if (touchStartX.current === null) return;
      const touchEndX = e.changedTouches[0].clientX;
      const diff = touchStartX.current - touchEndX;

      if (Math.abs(diff) > 50) {
        if (diff > 0) increment();
        else decrement();
      }

      touchStartX.current = null;
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [increment, decrement]);

  return { increment, decrement, shuffle, page };
}
