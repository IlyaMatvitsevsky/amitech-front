import cn from 'clsx'
import React, { FC, ReactNode, useEffect } from 'react'
import { FooterStructure } from '@lib/cms/types/footer'
import { LoadingDots } from '@components/ui';
import { HeaderStructure } from '@lib/cms/types/header';
import { Header } from '@components/common';

import s from './Layout.module.css'
import Footer from '@components/common/Footer';

const Loading = () => (
  <div className="w-80 h-80 flex items-center text-center justify-center p-3">
    <LoadingDots/>
  </div>
)

const dynamicProps = {
  loading: Loading,
}

interface Props {
  pageProps: {
    pages?: any[]
    header: HeaderStructure
    footer: FooterStructure
  }
  children: ReactNode
}

const Layout: FC<Props> = (
  {
    children,
    pageProps: {
      header: headerItem,
      footer: footerItem,
      ...pageProps
    },
  }) => {

  return (
    <>
      <Header header={headerItem}/>
      <div className={s.mainOverflowHidden}>
        <div className={cn(s.root)}>
          <main className="fit">
            {children}
          </main>
        </div>
      </div>
      <Footer item={footerItem}/>
    </>
  )
}

export default Layout
