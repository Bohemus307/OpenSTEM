'use client'

import { Amplify } from 'aws-amplify'
import amplifyconfig from '../../../amplifyconfiguration.json'
Amplify.configure(amplifyconfig)

import { Authenticator } from '@aws-amplify/ui-react'

export default Authenticator
