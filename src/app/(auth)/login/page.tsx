'use client'

import { useState } from 'react'
import { Amplify } from 'aws-amplify'
// import { Hub } from 'aws-amplify'
import awsExports from '../../../aws-exports'
import '@aws-amplify/ui-react/styles.css'
import { useTheme, View } from '@aws-amplify/ui-react'
import Link from 'next/link'
import { Logo } from '@components/Logo'
import { NavLink } from '@components/NavLink'
import { SlimLayout } from '@components/SlimLayout'
// import { useRouter } from 'next/navigation'

import Authenticator from './authenticator'

Amplify.configure({ ...awsExports, ssr: true })

const components = {
  Header() {
    const { tokens } = useTheme()

    return (
      <View textAlign="center" padding={tokens.space.medium}>
        <div className="flex">
          <Link
            href="/"
            aria-label="Home"
            className="flex items-center justify-center"
          >
            <Logo variant="Medium" />
            <span className="-ml-8 mt-4 text-lg font-bold text-primary-500">
              OpenSTEM
            </span>
          </Link>
        </div>
        <h2 className=" text-lg font-semibold text-gray-900">
          Sign in to your account
        </h2>
        <p className="mt-2 text-sm text-gray-700">
          Don’t have an account?{' '}
          <Link
            href="/register"
            className="font-medium text-primary-500 hover:underline"
          >
            Sign up
          </Link>{' '}
          for a free trial.
        </p>
      </View>
    )
  },
}

export default function Login() {
  // const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)

  // useEffect(() => {
  //   Hub.listen('auth', (data) => {
  //     if (data?.payload?.event === 'signIn') {
  //       router.push('/dashboard')
  //       setLoading(false)
  //     } else {
  //       setLoading(true)
  //     }
  //   })
  // }, [router])

  return (
    <SlimLayout>
      <div className="-ml-12">
        <Authenticator hideSignUp components={components}>
          {({ signOut, user }) => (
            <main className="font-mono">
              {!loading && (
                <section>
                  <h1 className="mb-6 text-lg">
                    Hello {user?.attributes?.email}
                  </h1>
                  <span className="whitespace-nowrap text-sm">
                    {' '}
                    not sure how you got here! But you are already logged in.
                  </span>
                  <div className="mt-6">
                    <span>Would you like to </span>
                    <button
                      className="hover:text-primary-500 hover:underline"
                      onClick={signOut}
                    >
                      Sign out
                    </button>
                  </div>
                  <div className="mt-6 flex-col">
                    <span>Or go back to your</span>
                    <NavLink href="/dashboard">Dashboard</NavLink>
                  </div>
                </section>
              )}
            </main>
          )}
        </Authenticator>
      </div>
    </SlimLayout>
  )
}
