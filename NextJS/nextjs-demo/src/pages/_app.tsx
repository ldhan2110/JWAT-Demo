import { Layout } from "@modules/common/layouts/Layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
}
 
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout ? getLayout(<Component {...pageProps}/>) : 
  (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}