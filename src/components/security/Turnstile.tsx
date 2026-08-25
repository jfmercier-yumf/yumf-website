"use client";

import Script from "next/script";
import { useCallback, useEffect, useRef } from "react";

type TurnstileLanguage = "fr" | "en";

type TurnstileProps = {
  language: TurnstileLanguage;
  onVerify: (token: string) => void;
  onExpire?: () => void;
  onError?: () => void;
};

type TurnstileWidgetOptions = {
  theme: "light" | "dark" | "auto";
  size: "normal" | "compact" | "flexible";
  sitekey: string;
  language: TurnstileLanguage;
  callback: (token: string) => void;
  "expired-callback": () => void;
  "error-callback": () => void;
};

type TurnstileApi = {
  render: (container: HTMLElement, options: TurnstileWidgetOptions) => string;
  remove: (widgetId: string) => void;
};

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const TURNSTILE_SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

export function Turnstile({
  language,
  onVerify,
  onExpire,
  onError,
}: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);

  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

  const renderWidget = useCallback(() => {
    if (
      !siteKey ||
      !containerRef.current ||
      !window.turnstile ||
      widgetIdRef.current
    ) {
      return;
    }

    widgetIdRef.current = window.turnstile.render(containerRef.current, {
      theme: "light",
      size: "flexible",
      sitekey: siteKey,
      language,
      callback: onVerify,
      "expired-callback": () => {
        onExpire?.();
      },
      "error-callback": () => {
        onError?.();
      },
    });
  }, [language, onError, onExpire, onVerify, siteKey]);

  useEffect(() => {
    renderWidget();
  }, [renderWidget]);

  useEffect(() => {
    return () => {
      if (widgetIdRef.current && window.turnstile) {
        window.turnstile.remove(widgetIdRef.current);
        widgetIdRef.current = null;
      }
    };
  }, []);

  if (!siteKey) {
    if (process.env.NODE_ENV === "development") {
      console.warn(
        "NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY is not configured.",
      );
    }

    return null;
  }

  return (
    <>
      <Script
        src={TURNSTILE_SCRIPT_SRC}
        strategy="afterInteractive"
        onLoad={renderWidget}
      />

      <div ref={containerRef} className="w-full" />
    </>
  );
}
