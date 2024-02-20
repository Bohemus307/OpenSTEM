/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { ReactQueryClientProvider } from './queryProvider'
import ExperimentsLayoutHeader from '@components/shared/ExperimentsLayoutHeader'

export default function ExperimentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReactQueryClientProvider>
      <section>
        <ExperimentsLayoutHeader />
        {children}
      </section>
    </ReactQueryClientProvider>
  )
}
