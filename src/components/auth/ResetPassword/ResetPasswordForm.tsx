import { Button } from '@components/Button'
import { PasswordField, TextField } from '@components/Fields'
import { Logo } from '@components/Logo'
import { Form, Formik } from 'formik'
import React, { ChangeEvent, useState } from 'react'
import { handleConfirmResetPassword, handleResetPassword } from './helpers'

const ResetPasswordForm = () => {
  const [step, setStep] = useState<number>(1)
  return (
    <div>
      <div className="flex items-center">
        <Logo variant="small" />
        <h2 className="text-xl font-semibold text-primary-600">
          Reset Password
        </h2>
      </div>
      {step === 1 && (
        <span className="font-sans text-sm">
          Please enter your username and you will receive a verification code
          shortly to continue the password reset process.
        </span>
      )}
      {step === 2 && (
        <span className="font-sans text-sm">
          Please enter the verification code as well as your new password.
        </span>
      )}
      <Formik
        initialValues={{
          username: '',
          confirmationCode: '',
          newPassword: '',
          newPasswordConfirm: '',
        }}
        onSubmit={async ({ username, confirmationCode, newPassword }) => {
          console.log('SUBMITTED')
          handleConfirmResetPassword({
            username,
            confirmationCode,
            newPassword,
          })
        }}
      >
        {({ handleChange, handleSubmit }) => (
          <Form className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8">
            {step === 1 && (
              <Step1 setStep={setStep} handleChange={handleChange} />
            )}
            {step === 2 && (
              <Step2 handleSubmit={handleSubmit} handleChange={handleChange} />
            )}
          </Form>
        )}
      </Formik>
    </div>
  )
}

const Step1 = ({
  setStep,
  handleChange,
}: {
  setStep: React.Dispatch<React.SetStateAction<number>>
  handleChange: (e: ChangeEvent<any>) => void
}) => {
  return (
    <>
      <TextField
        label="Username"
        name="username"
        type="text"
        autoComplete="username"
        required
        onChange={handleChange}
      />
      <div className="col-span-full">
        <Button
          type="button"
          variant="solid"
          color="primary"
          className="w-full"
          onClick={() => setStep(2)}
        >
          <span>
            Send Verification Code <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </>
  )
}

const Step2 = ({
  handleSubmit,
  handleChange,
}: {
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void
  handleChange: (e: ChangeEvent<any>) => void
}) => {
  return (
    <>
      <TextField
        label="Verification Code"
        name="verificationCode"
        type="text"
        required
        onChange={handleChange}
      />
      <PasswordField
        label="New Password"
        name="newPassword"
        required
        onChange={handleChange}
      />
      <PasswordField
        label="New Password Confirmation"
        name="newPasswordConfirm"
        required
        onChange={handleChange}
      />
      <div className="col-span-full">
        <Button
          type="submit"
          variant="solid"
          color="primary"
          className="w-full"
          onClick={() => handleSubmit()}
        >
          <span>
            Reset Password <span aria-hidden="true">&rarr;</span>
          </span>
        </Button>
      </div>
    </>
  )
}

export default ResetPasswordForm
