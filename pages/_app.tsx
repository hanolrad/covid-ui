import React from "react";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { AppProps } from "next/app";
import { trpc } from "../src/utils/trpc";
import { withTRPC } from "@trpc/next";
// import { AppType } from 'next/dist/shared/lib/utils';
import type { AppRouter } from "./api/trpc/[trpc]";

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
};

// export default withTRPC<AppRouter>({
//   config({ ctx }) {
//     /**
//      * If you want to use SSR, you need to use the server's full URL
//      * @link https://trpc.io/docs/ssr
//      */
//     const url = process.env.VERCEL_URL
//       ? `https://${process.env.VERCEL_URL}/api/trpc`
//       : 'http://localhost:3000/api/trpc';
//     return {
//       url,
//       /**
//        * @link https://tanstack.com/query/v3/docs/react/reference/QueryClient
//        */
//       queryClientConfig: { defaultOptions: { queries: { staleTime: 60 } } },
//       links: []
//     };
//   },
//   /**
//    * @link https://trpc.io/docs/ssr
//    */
//   ssr: true,
// })(MyApp);

export default trpc.withTRPC(MyApp);
