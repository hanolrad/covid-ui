"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      cacheTime: 1000 * 60 * 30, // 30 minutes
      retry: 1,
    },
  },
});

function Providers({ children }: React.PropsWithChildren) {
  const [client] = React.useState(queryClient);

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default Providers;
