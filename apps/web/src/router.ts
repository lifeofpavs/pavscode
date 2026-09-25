import { createRouter, RouterHistory } from "@tanstack/react-router";

import { routeTree } from "./routeTree.gen";

export function getRouter(history: RouterHistory, basepath?: string) {
  return createRouter({
    routeTree,
    history,
    context: {},
    // Route components are split chunks (autoCodeSplitting in vite.config);
    // fetching them on hover/focus intent hides the load from the first
    // settings or pull-request navigation.
    defaultPreload: "intent",
    ...(basepath ? { basepath } : {}),
  });
}

export type AppRouter = ReturnType<typeof getRouter>;

declare module "@tanstack/react-router" {
  interface Register {
    router: AppRouter;
  }
}
