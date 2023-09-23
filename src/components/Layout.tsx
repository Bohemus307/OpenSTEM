import React, { ReactNode } from 'react'
import Head from 'next/head'
import Main from '@components/Main'


type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = "StemHub" }: Props) => (
  <div className="w-full h-screen bg-[#ededed]">
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="flex">
      <Main />
      {children}
    </main>
    <footer>
      <span>I'm here to stay (Footer)</span>
    </footer>
  </div>
);

export default Layout
