import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as jose from "jose";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const base_url_server =
  process.env.NODE_ENV === "production" ? `` : `http://localhost:8000/api/v1`;

export const isAuth = async (token: string) => {
  const secret = new TextEncoder().encode(process.env.JWT_SECRET);
  try {
    const isAuth = await jose.jwtVerify(token, secret);
    return isAuth;
  } catch (e) {
    console.log(e);
    return false;
  }
};
