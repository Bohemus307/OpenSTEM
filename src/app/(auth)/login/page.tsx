'use client'

import { NavLink } from '@components/NavLink'
import { SlimLayout } from '@components/SlimLayout'

export default function Login() {
  return (
    <SlimLayout>
      <div className="-ml-12">
        <main className="font-mono">
          <section>
            <h1 className="mb-6 text-lg">Hello User</h1>
            <span className="whitespace-nowrap text-sm">
              {' '}
              not sure how you got here! But you are already logged in.
            </span>
            <div className="mt-6">
              <span>Would you like to </span>
              <button className="hover:text-primary-500 hover:underline">
                Sign out
              </button>
            </div>
            <div className="mt-6 flex-col">
              <span>Or go back to your</span>
              <NavLink href="/dashboard">Dashboard</NavLink>
            </div>
          </section>
        </main>
      </div>
    </SlimLayout>
  )
}
