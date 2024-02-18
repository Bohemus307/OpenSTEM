'use client'

import { Amplify } from 'aws-amplify'
import amplifyconfig from '../../../amplifyconfiguration.json'
Amplify.configure(amplifyconfig)
import { Authenticator } from '@aws-amplify/ui-react'

import '@aws-amplify/ui-react/styles.css'

import { Button } from '@components/Button'
import { Logo } from '@components/Logo'
import { PasswordField, SelectField, TextField } from '@components/Fields'
import { SlimLayout } from '@components/SlimLayout'

import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import ModalWrapper from '@components/ModalWrapper'
import VerificationForm from '@components/auth/VerificationForm'
import { signUp } from 'aws-amplify/auth'

interface SignUpValues {
  userName: string
  email: string
  password: string
  refferalSource: string
}

const SignupSchema = Yup.object().shape({
  userName: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
  refferalSource: Yup.string(),
})

const Register: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false)
  const [showConfirmVerificationCode, setShowConfirmVerificationCode] =
    useState<boolean>(false)
  const router = useRouter()
  const initialValues: SignUpValues = {
    userName: '',
    email: '',
    password: '',
    refferalSource: 'AltaVista search',
  }

  async function signUpUser(formValues: SignUpValues) {
    try {
      // Use Amplify's signUp method to register the user with additional attributes
      await signUp({
        username: formValues.userName,
        password: formValues.password,
        options: {
          userAttributes: {
            email: formValues.email,
            'custom:refferalSource': formValues.refferalSource,
          },
          // optional
          autoSignIn: true,
        },
      })
    } catch (error) {
      console.error('Sign-up error:', error)
    } finally {
      setLoading(false)
      setShowConfirmVerificationCode(true)
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
        <h2 className="text-lg font-semibold text-gray-900">
          Join our mailing list
        </h2>
        <span className="mt-2 text-sm text-gray-700">
          Already on the list?{' '}
          <Link
            href="/login"
            className="font-medium text-primary-500 hover:underline"
          >
            Sign in
          </Link>{' '}
          to your account.
        </span>

        <Formik
          validationSchema={SignupSchema}
          initialValues={initialValues}
          onSubmit={async (values) => {
            setLoading(true)
            await signUpUser(values)
          }}
        >
          {({ handleChange, values }) => (
            <Form className="mt-4 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <TextField
                className="col-span-full"
                label="Username"
                name="userName"
                type="text"
                required
                onChange={handleChange}
              />
              <TextField
                className="col-span-full"
                label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                required
                onChange={handleChange}
              />
              <PasswordField
                className="col-span-full"
                label="Password"
                name="password"
                autoComplete="password"
                required
                onChange={handleChange}
              />
              <SelectField
                className="col-span-full"
                label="How did you hear about us?"
                name="referralSource"
                onChange={handleChange}
              >
                <option>AltaVista search</option>
                <option>Super Bowl commercial</option>
                <option>Our route 34 city bus ad</option>
                <option>The “Never Use This” podcast</option>
              </SelectField>
              <div className="col-span-full pt-4">
                <Button
                  disabled={loading}
                  type="submit"
                  variant="solid"
                  color="primary"
                  className="w-full disabled:cursor-wait"
                >
                  <span>
                    Sign up <span aria-hidden="true">&rarr;</span>
                  </span>
                </Button>
              </div>
              {showConfirmVerificationCode && (
                <ModalWrapper
                  isOpen={showConfirmVerificationCode}
                  setIsOpen={setShowConfirmVerificationCode}
                >
                  <VerificationForm username={values.userName} />
                </ModalWrapper>
              )}
            </Form>
          )}
        </Formik>
      </SlimLayout>
    </Authenticator.Provider>
  )
}

export default Register
