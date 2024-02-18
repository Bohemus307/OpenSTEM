'use client'

import Link from 'next/link'

import { Amplify } from 'aws-amplify'
import { Authenticator } from '@aws-amplify/ui-react'
import amplifyconfig from '../../../amplifyconfiguration.json'
import '@aws-amplify/ui-react/styles.css'

Amplify.configure(amplifyconfig)

import { Logo } from '@components/Logo'
import { SlimLayout } from '@components/SlimLayout'

import { PasswordField, TextField } from '@components/Fields'
import { Button } from '@components/Button'
import { Form, Formik } from 'formik'
import * as Yup from 'yup'
import ModalWrapper from '@components/ModalWrapper'
import ResetPasswordForm from '@components/auth/ResetPassword/ResetPasswordForm'
import { useState } from 'react'
import { SignInInput, signIn } from 'aws-amplify/auth'
import { useRouter } from 'next/navigation'

interface SignInValues {
  username: string
  password: string
}

const SignInSchema = Yup.object().shape({
  username: Yup.string().required('Required'),
  password: Yup.string().required('Required'),
})

export default function Login() {
  const router = useRouter()
  const [loading, setLoading] = useState<boolean>(false)
  const [showResetPasswordModal, setShowResetPasswordModal] =
    useState<boolean>(false)
  const initialValues: SignInValues = {
    username: '',
    password: '',
  }

  async function handleSignIn({ username, password }: SignInInput) {
    try {
      const { isSignedIn } = await signIn({ username, password })
      if (isSignedIn) {
        router.push('/dashboard')
      }
    } catch (error) {
      console.log('error signing in', error)
    }
  }

  return (
    <Authenticator.Provider>
      <SlimLayout>
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
        <h2 className="flex flex-col text-lg font-semibold text-gray-900">
          Sign In
          <span className="text-sm font-normal text-gray-700">
            or head back to{' '}
            <Link
              className="font-medium text-primary-500 hover:underline"
              href={'/register'}
            >
              Register
            </Link>
          </span>
        </h2>
        <Formik
          validationSchema={SignInSchema}
          initialValues={initialValues}
          onSubmit={async (values, actions) => {
            setLoading(true)
            await handleSignIn({
              username: values.username,
              password: values.password,
            })
          }}
        >
          {({ handleChange }) => (
            <Form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
              <TextField
                label="Username"
                name="username"
                type="text"
                autoComplete="username"
                required
                onChange={handleChange}
              />
              <PasswordField
                label="Password"
                name="password"
                autoComplete="password"
                required
                onChange={handleChange}
              />
              <div className="col-span-full">
                <Button
                  disabled={loading}
                  type="submit"
                  variant="solid"
                  color="primary"
                  className="w-full disabled:cursor-wait"
                >
                  <span>
                    Sign In <span aria-hidden="true">&rarr;</span>
                  </span>
                </Button>
              </div>
              <button
                type="button"
                onClick={() => {
                  setShowResetPasswordModal(true)
                }}
                className="font-sans text-sm font-semibold text-primary-600 underline hover:opacity-40"
              >
                Forgot Your Password?
              </button>
            </Form>
          )}
        </Formik>
        {showResetPasswordModal && (
          <ModalWrapper
            isOpen={showResetPasswordModal}
            setIsOpen={setShowResetPasswordModal}
          >
            <ResetPasswordForm />
          </ModalWrapper>
        )}
      </SlimLayout>
    </Authenticator.Provider>
  )
}
