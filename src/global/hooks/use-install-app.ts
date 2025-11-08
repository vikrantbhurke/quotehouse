"use client";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RootState } from "../states/store";
import { setIsInstalled } from "../states/global-slice";

export const useInstallApp = () => {
  const dispatch = useDispatch();

  const { isInstalled } = useSelector((state: RootState) => state.global);

  const installPromptRef = useRef<any>(null);

  useEffect(() => {
    const handler = (event: any) => {
      event.preventDefault();
      installPromptRef.current = event;
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  useEffect(() => {
    const handleInstalled = () => dispatch(setIsInstalled(true));
    window.addEventListener("appinstalled", handleInstalled);
    return () => window.removeEventListener("appinstalled", handleInstalled);
  }, [dispatch]);

  const handleInstallClick = async () => {
    const promptEvent = installPromptRef.current;
    if (promptEvent) {
      promptEvent.prompt();
      const { outcome } = await promptEvent.userChoice;
      if (outcome === "accepted") {
        console.log("✅ User accepted the install prompt");
        installPromptRef.current = null;
      }
    }
  };

  return { isInstalled, handleInstallClick };
};
