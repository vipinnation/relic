import { useState, useCallback } from "react";

interface CookieOptions {
  path?: string;
  expires?: number | Date;
  secure?: boolean;
  sameSite?: "Strict" | "Lax" | "None";
  domain?: string;
}

interface UseCookieReturn {
  getCookie: (name: string) => string | null;
  setCookie: (name: string, value: string, options?: CookieOptions) => void;
  updateCookie: (
    name: string,
    value: string,
    options?: CookieOptions
  ) => boolean;
  removeCookie: (name: string, path?: string) => void;
  removeAllCookies: () => void;
  getAllCookies: () => { [key: string]: string };
  hasCookie: (name: string) => boolean;
}

export const useCookie = (): UseCookieReturn => {
  const [, setForceUpdate] = useState<number>(0);

  const getCookie = useCallback((name: string): string | null => {
    const cookies = document.cookie.split(";");
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());
      if (cookieName === name) {
        return decodeURIComponent(cookieValue);
      }
    }
    return null;
  }, []);

  const setCookie = useCallback(
    (name: string, value: string, options: CookieOptions = {}): void => {
      let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(
        value
      )}`;

      if (options.expires) {
        if (typeof options.expires === "number") {
          const days = options.expires;
          const date = new Date();
          date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
          options.expires = date;
        }
        cookieString += `; expires=${options.expires.toUTCString()}`;
      }

      if (options.path) cookieString += `; path=${options.path}`;
      if (options.domain) cookieString += `; domain=${options.domain}`;
      if (options.secure) cookieString += "; secure";
      if (options.sameSite) cookieString += `; samesite=${options.sameSite}`;

      document.cookie = cookieString;
      setForceUpdate((prev) => prev + 1);
    },
    []
  );

  const getAllCookies = useCallback((): { [key: string]: string } => {
    return document.cookie
      .split(";")
      .reduce((cookies: { [key: string]: string }, cookie) => {
        const [name, value] = cookie.split("=").map((c) => c.trim());
        if (name && value) {
          cookies[name] = decodeURIComponent(value);
        }
        return cookies;
      }, {});
  }, []);

  const removeCookie = useCallback(
    (name: string, path: string = "/"): void => {
      setCookie(name, "", {
        path,
        expires: new Date(0),
      });
    },
    [setCookie]
  );

  const removeAllCookies = useCallback((): void => {
    const cookies = getAllCookies();
    Object.keys(cookies).forEach((cookieName) => removeCookie(cookieName));
  }, [getAllCookies, removeCookie]);

  const updateCookie = useCallback(
    (name: string, value: string, options: CookieOptions = {}): boolean => {
      if (!hasCookie(name)) return false;
      setCookie(name, value, options);
      return true;
    },
    [setCookie]
  );

  const hasCookie = useCallback(
    (name: string): boolean => {
      return getCookie(name) !== null;
    },
    [getCookie]
  );

  return {
    getCookie,
    setCookie,
    updateCookie,
    removeCookie,
    removeAllCookies,
    getAllCookies,
    hasCookie,
  };
};
