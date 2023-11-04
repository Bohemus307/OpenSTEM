'use client'

import { Button } from '@components/Button'
import { Form, Formik } from 'formik'
import Link from 'next/link'
import { Logo } from '@components/Logo'
import { SelectField, TextField } from '@components/Fields'
import { SlimLayout } from '@components/SlimLayout'
import * as Yup from 'yup'
import { useRouter } from 'next/navigation'

interface SignUpValues {
  firstName: string
  lastName: string
  email: string
  password: string
  refferalSource: string
}

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, 'Little More!')
    .max(50, 'Little Less!')
    .required('Required'),
  lastName: Yup.string()
    .min(2, 'Little More!')
    .max(50, 'Little Less!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string(),
  refferalSource: Yup.string(),
})

const Register: React.FC = () => {
  const router = useRouter()
  const initialValues: SignUpValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    refferalSource: 'AltaVista search',
  }

  async function signUpUser(formValues: SignUpValues) {
    try {
      alert('Sign-up successful!')
    } catch (error) {
      console.error('Sign-up error:', error)
    } finally {
      router.push('/login')
    }
  }

  return (
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
      <div className="mt-2 text-sm text-gray-700">
        Already on the list?{' '}
        <Link
          href="/login"
          className="font-medium text-primary-500 hover:underline"
        >
          Sign in
        </Link>{' '}
        to your account.
      </div>

      <Formik
        validationSchema={SignupSchema}
        initialValues={initialValues}
        onSubmit={async (values, actions) => {
          await signUpUser(values)
        }}
      >
        {({ handleChange }) => (
          <Form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2">
            <TextField
              label="First name"
              name="firstName"
              type="text"
              autoComplete="given-name"
              required
              onChange={handleChange}
            />
            <TextField
              label="Last name"
              name="lastName"
              type="text"
              autoComplete="family-name"
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
            <TextField
              className="col-span-full"
              label="Password"
              name="password"
              type="password"
              autoComplete="new-password"
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
            <div className="col-span-full">
              <Button
                type="submit"
                variant="solid"
                color="primary"
                className="w-full"
              >
                <span>
                  Sign up <span aria-hidden="true">&rarr;</span>
                </span>
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </SlimLayout>
  )
}

export default Register
