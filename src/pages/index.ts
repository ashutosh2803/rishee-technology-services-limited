import type { PageEntry, PageModule } from "../types/page";

const modules = import.meta.glob<PageModule>("./*Page.tsx", { eager: true });

/** All routable pages — auto-collected from `pageEntry` exports in `*Page.tsx` files */
export const sitePages: PageEntry[] = Object.values(modules)
  .map((module) => module.pageEntry)
  .filter((entry): entry is PageEntry => Boolean(entry));
