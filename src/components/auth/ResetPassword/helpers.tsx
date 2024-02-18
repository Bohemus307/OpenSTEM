import {
  ConfirmResetPasswordInput,
  ResetPasswordOutput,
  confirmResetPassword,
  resetPassword,
} from 'aws-amplify/auth'

// begin here for PW reset
export async function handleResetPassword(username: string) {
  try {
    const output = await resetPassword({ username })
    handleResetPasswordNextSteps(output)
  } catch (error) {
    console.log(error)
  }
}

// Middle step for PW reset
export function handleResetPasswordNextSteps(output: ResetPasswordOutput) {
  const { nextStep } = output
  switch (nextStep.resetPasswordStep) {
    case 'CONFIRM_RESET_PASSWORD_WITH_CODE':
      const codeDeliveryDetails = nextStep.codeDeliveryDetails
      console.log(
        `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`,
      )
      // Collect the confirmation code from the user and pass to confirmResetPassword.
      break
    case 'DONE':
      console.log('Successfully reset password.')
      break
  }
}

// final step for PW reset
export async function handleConfirmResetPassword({
  username,
  confirmationCode,
  newPassword,
}: ConfirmResetPasswordInput) {
  try {
    await confirmResetPassword({ username, confirmationCode, newPassword })
  } catch (error) {
    console.log(error)
  }
}
