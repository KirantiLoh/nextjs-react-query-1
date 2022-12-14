import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import Navbar from 'components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {

  const queryClient = new QueryClient()

  return (
    <>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
      </Hydrate>
      <ReactQueryDevtools />
    </QueryClientProvider>
    </>
  )
}

export default MyApp
