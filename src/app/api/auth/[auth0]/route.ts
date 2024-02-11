// app/api/auth/[auth0]/route.js
import { handleAuth } from '@auth0/nextjs-auth0'
import { Amplify } from 'aws-amplify'
import config from '../../../../amplifyconfiguration.json'

Amplify.configure(config)

export const GET = handleAuth()
