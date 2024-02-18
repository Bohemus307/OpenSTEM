import { useState } from 'react'
import { TextField } from '@components/Fields'
import { ConfirmSignUpInput, confirmSignUp } from 'aws-amplify/auth'
import { useRouter } from 'next/navigation'

interface VerificationFormProps {
  username: string
}
const VerificationForm = ({ username }: VerificationFormProps) => {
  const router = useRouter()
  const [confirmationCode, setConfirmationCode] = useState<string>('')

  async function handleSignUpConfirmation({
    username,
    confirmationCode,
  }: ConfirmSignUpInput) {
    try {
      const { isSignUpComplete, nextStep } = await confirmSignUp({
        username,
        confirmationCode,
      })
    } catch (error) {
      console.log('error confirming sign up', error)
    } finally {
      router.push('/login')
    }
  }

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h3 className="text-base font-semibold leading-6 text-gray-900">
          Verify Your Email
        </h3>
        <div className="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            You should have recieved an email with a verification code to
            complete your signup.
          </p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:max-w-xs">
            <label htmlFor="verfication code" className="sr-only">
              Verification Code
            </label>
            <TextField
              label="Confirmation code"
              name="confirmationCode"
              type="text"
              required
              onChange={(e) => setConfirmationCode(e.target.value)}
            />
          </div>
          <button
            onClick={() =>
              handleSignUpConfirmation({ username, confirmationCode })
            }
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-auto"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}

export default VerificationForm
