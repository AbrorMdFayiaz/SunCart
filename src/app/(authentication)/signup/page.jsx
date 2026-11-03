import React, { Suspense } from 'react'
import SignUpForm from '../../../../components/authentication/signUp/SignUpForm'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignUpForm></SignUpForm>
    </Suspense>
  )
}

export default page