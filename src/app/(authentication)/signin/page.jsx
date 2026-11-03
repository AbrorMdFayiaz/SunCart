import React from 'react'
import SignInForm from '../../../../components/authentication/signIn/SignInForm'

const page = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInForm></SignInForm>
    </Suspense>
  )
}


export default page
