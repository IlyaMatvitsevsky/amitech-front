import '@assets/main.css'
import '@assets/animation.css'

import type { AppProps } from 'next/app'

import { Head, Layout as DefaultLayout } from '@components/common'

function MyApp({ Component, pageProps }: AppProps) {
  const Comp = Component as any
  const Layout = Comp.Layout || DefaultLayout

  return (
    <>
      <Head/>
      <Layout pageProps={pageProps}>
        <Comp {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
