'use client'

import { CallToAction } from '@components/Landing/CallToAction'
import { Footer } from '@components/Landing/Footer'
import { Header } from '@components/Landing/Header'
import { Hero } from '@components/Landing/Hero'
import { Current } from '@components/Landing/Current'
import { PrimaryFeatures } from '@components/Landing/PrimaryFeatures'
import { SecondaryFeatures } from '@components/Landing/SecondaryFeatures'
import { Testimonials } from '@components/Landing/Testimonials'
import { Authenticator } from '@aws-amplify/ui-react'

export default function Home() {
  return (
    <>
      <Authenticator.Provider>
        <Header />
      </Authenticator.Provider>
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Current />
      </main>
      <Footer />
    </>
  )
}
