import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(req: NextRequest) {
  // Check for specific AWS Amplify auth cookies
  const allCookies = req.cookies.getAll()
  const parseForCookie = allCookies.find((cookie) =>
    cookie.name.includes('CognitoIdentityServiceProvider'),
  )

  if (parseForCookie) {
    return NextResponse.next()
  } else {
    return NextResponse.redirect(new URL('/login', req.url))
  }
}

export const config = {
  matcher: ['/dashboard/:path*'],
}
