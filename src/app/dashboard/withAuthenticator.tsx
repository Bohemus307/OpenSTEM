'use client'

import { Amplify } from 'aws-amplify'
import awsExports from '../../aws-exports'

Amplify.configure({ ...awsExports, ssr: true })

import { withAuthenticator } from '@aws-amplify/ui-react'

export default withAuthenticator
