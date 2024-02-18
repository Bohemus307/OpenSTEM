/* eslint-disable @next/next/no-img-element */
'use client'

import WelcomePanel from '@components/Dashboard/WelcomePanel'
import Featured from '@components/Dashboard/Featured'

import { Amplify } from 'aws-amplify'
import config from '../../amplifyconfiguration.json'
import { withAuthenticator } from '@aws-amplify/ui-react'

Amplify.configure(config)

const Page = () => {
  return (
    <>
      <main className="-mt-24 pb-8">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-[90%] lg:px-8">
          <h1 className="sr-only">User Dashboard</h1>
          <div className="flex-col">
            <h2 className="sr-only" id="welcome-panel">
              Welcome Panel
            </h2>
            <WelcomePanel />
            <div className="mt-4">
              <h2 className="sr-only" id="current-featured-experiments">
                Current Featured Experiments
              </h2>
              <Featured />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 sm:text-left">
            <span className="block sm:inline">&copy; 2023 OpenSTEM, Inc.</span>{' '}
            <span className="block sm:inline">All rights reserved.</span>
          </div>
        </div>
      </footer>
    </>
  )
}
export default withAuthenticator(Page)
