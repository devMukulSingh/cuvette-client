import { SWRConfig } from "swr/_internal";
import localStorageProvider from "./localStorageProvider";
import { ReactNode } from "react";

export default function CacheProvider({ children }: { children: ReactNode }) {
  return (
    //@ts-ignore
    <SWRConfig value={{ provider: localStorageProvider }}>{children}</SWRConfig>
  );
}
