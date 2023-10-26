import LoginComponent from '@/components/features/login'
import { opusMentorHooks } from '@/sdk'
import React from 'react'

const LoginPage = () => {
  return <LoginComponent {...opusMentorHooks.authHooks.signupHooks.default()}/>
}

export default LoginPage