/* eslint-disable @next/next/no-img-element */
'use client'

import React from 'react'
import { ReactQueryClientProvider } from './queryProvider'
import ExperimentsLayoutHeader from '@components/shared/ExperimentsLayoutHeader'
import Authenticator from 'src/app/(auth)/login/authenticator'

export default function ExperimentDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Authenticator.Provider>
      <ReactQueryClientProvider>
        <section>
          <ExperimentsLayoutHeader />
          {children}
        </section>
      </ReactQueryClientProvider>
    </Authenticator.Provider>
  )
}
