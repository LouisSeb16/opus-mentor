import SignUpComponent from '@/components/features/signup'
import { opusMentorHooks } from '@/sdk'
import React from 'react'

const SignUpPage = () => {
  return (
    <SignUpComponent {...opusMentorHooks.authHooks.signupHooks.default()} />
  )
}

export default SignUpPage