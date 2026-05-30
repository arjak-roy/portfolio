import { createCookieSessionStorage } from "react-router";

export const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__admin_session",
    // httpOnly ensures the cookie cannot be accessed via client-side JavaScript
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    // This secret comes from your .env file to encrypt the session
    secrets: [import.meta.env.VITE_SESSION_SECRET || "super-strong-secret"],
    secure: import.meta.env.PROD,
  },
});

export const { getSession, commitSession, destroySession } = sessionStorage;