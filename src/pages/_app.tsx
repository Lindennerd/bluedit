// src/pages/_app.tsx
import { httpBatchLink } from "@trpc/client/links/httpBatchLink";
import { loggerLink } from "@trpc/client/links/loggerLink";
import { withTRPC } from "@trpc/next";
import { SessionProvider } from "next-auth/react";
import superjson from "superjson";
import type { AppType } from "next/app";
import type { AppRouter } from "../server/router";
import type { Session } from "next-auth";
import "../styles/globals.css";
import { MainLayout } from "../components/Layouts";
import { ThemeProvider } from "next-themes";
import { trpcConfig } from "../utils/trpc-config";
import { ToastContainer } from "react-toastify";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="class">
        <MainLayout>
          <ToastContainer />
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </SessionProvider>
  );
};

export default withTRPC<AppRouter>(trpcConfig)(MyApp);
