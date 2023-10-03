import SignUpForm from './SignUpForm'

const SignUp = () => {
  const submitSIgnUp = (data) => {
    console.log(data)
  }
  return (
    <>
      <SignUpForm submitSIgnUp={submitSIgnUp} />
    </>
  )
}

export default SignUp
