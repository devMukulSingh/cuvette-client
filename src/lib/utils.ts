import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import * as jose from "jose";
import axios from "axios";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetcher = ({ args, url }: { args: string; url: string }) =>
  axios
    .get(url, {
      withCredentials: true,
      headers: {
        Authorization: args,
      },
    })
    .then((res) => res.data);

export const base_url_server =
  process.env.NODE_ENV === "production"
    ? `https://cuvette-server.onrender.com/api/v1`
    : `http://localhost:8000/api/v1`;

export const isAuth = async (token: string) => {
  const secret = new TextEncoder().encode("cuvette");
  try {
    const isAuth = await jose.jwtVerify(token, secret);
    return isAuth;
  } catch (e) {
    console.log(e);
    return false;
  }
};
