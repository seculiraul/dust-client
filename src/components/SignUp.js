import { LockClosedIcon } from '@heroicons/react/20/solid'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import useLinks from '../hooks/shared/useLinks'
import PrimaryButton from './shared/buttons/PrimaryButton'

const SignUp = () => {
  const emailRef = useRef()
  const errorRef = useRef()

  const [email, setEmail] = useState('')
  const [emailValid, setEmailValid] = useState(false)
  const [focusEmail, setFocusEmail] = useState(false)

  const [password, setPassword] = useState('')
  const [pwdValid, setPwdValid] = useState(false)
  const [focusPwd, setFocusPwd] = useState(false)

  const [passwordConfirmed, setConfirmPassword] = useState('')
  const [pwdConfValid, setPwdConfValid] = useState(false)
  const [focusPwdConf, setFocusPwdConf] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [firstNameValid, setFirstNameValid] = useState(false)
  const [firstNameFocus, setFirstNameFocus] = useState(false)

  const [lastName, setLastName] = useState('')
  const [lastNameValid, setLastNameValid] = useState(false)
  const [lastNameFocus, setLastNameFocus] = useState(false)

  const [errorMsg, setErrorMsg] = useState('')
  const [success, setSuccess] = useState(false)

  const {
    pathnames: { signIn },
  } = useLinks()

  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
  const PWD_REGEX = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/

  useEffect(() => {
    setEmailValid(EMAIL_REGEX.test(email))
  }, [email])

  useEffect(() => {
    setPwdValid(PWD_REGEX.test(password))
    const match = password === passwordConfirmed
    setPwdConfValid(match)
  }, [password, passwordConfirmed])

  useEffect(() => {
    setFirstNameValid(firstName.length > 2)
  }, [firstName])

  useEffect(() => {
    setLastNameValid(lastName.length > 2)
  }, [lastName])

  useEffect(() => {
    setErrorMsg('')
  }, [email, password, passwordConfirmed, firstName, lastName])

  const onSubmit = (e) => {
    e.preventDefault()

    console.log(email, password, passwordConfirmed, firstName, lastName)

    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setFirstName('')
    setLastName('')
  }

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
            Sign up now
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={onSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div className="flex flex-col">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                id="email"
                value={email}
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={emailValid ? 'true' : 'false'}
                aria-describedby="uidnote"
                onFocus={() => setFocusEmail(true)}
                onBlur={() => setFocusEmail(false)}
                className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 mt-1 mb-3.5 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm duration-200 ${
                  emailValid ? ' border-green-500 focus:border-green-500' : ''
                }`}
              />
              {focusEmail && email && !emailValid ? (
                <p
                  id="uidnote"
                  className="p-2 mx-2 bg-zinc-300 text-red-600 rounded-xl"
                >
                  Email is not valid
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                required
                aria-invalid={pwdValid ? 'true' : 'false'}
                aria-describedby="pwdnote"
                onFocus={() => setFocusPwd(true)}
                onBlur={() => setFocusPwd(false)}
                className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 mt-1 mb-3.5 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm duration-200 ${
                  pwdValid ? ' border-green-500 focus:border-green-500' : ''
                }`}
              />
              {focusPwd && password && !pwdValid ? (
                <p
                  id="pwdnote"
                  className="p-2 mx-2 bg-zinc-300 text-red-600 rounded-xl"
                >
                  Password must have: <br />
                  At least one upper character <br />
                  At least one lower character <br />
                  At least one number <br />
                  At least 6 characters
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                value={passwordConfirmed}
                onChange={(e) => setConfirmPassword(e.target.value)}
                type="password"
                required
                aria-invalid={pwdConfValid ? 'true' : 'false'}
                aria-describedby="confnote"
                onFocus={() => setFocusPwdConf(true)}
                onBlur={() => setFocusPwdConf(false)}
                className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 mt-1 mb-3.5 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm duration-200 ${
                  pwdConfValid && password.length > 1
                    ? ' border-green-500 focus:border-green-500'
                    : ''
                }`}
              />
              {focusPwdConf && passwordConfirmed && !pwdConfValid ? (
                <p
                  className="p-2 mx-2 bg-zinc-300 text-red-600 rounded-xl"
                  id="confnote"
                >
                  Must match the password
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="first-name">First Name</label>
              <input
                id="first-name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                name="first-name"
                type="text"
                required
                aria-invalid={firstNameValid ? 'true' : 'false'}
                aria-describedby="firstnote"
                onFocus={() => setFirstNameFocus(true)}
                onBlur={() => setFirstNameFocus(false)}
                className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 mt-1 mb-3.5 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm duration-200 ${
                  firstName ? ' border-green-500 focus:border-green-500' : ''
                }`}
              />
              {firstNameFocus && firstName && !firstNameValid ? (
                <p
                  className="p-2 mx-2 bg-zinc-300 text-red-600 rounded-xl"
                  id="firstnote"
                >
                  {' '}
                  Must have at least 2 characters
                </p>
              ) : (
                <></>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="last-name">Last Name</label>
              <input
                id="last-name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                name="last-name"
                type="text"
                required
                aria-invalid={lastNameValid ? 'true' : 'false'}
                aria-describedby="lastnote"
                onFocus={() => setLastNameFocus(true)}
                onBlur={() => setLastNameFocus(false)}
                className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 mt-1 mb-3.5 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm duration-200 ${
                  lastNameValid
                    ? ' border-green-500 focus:border-green-500'
                    : ''
                }`}
              />
              {lastNameFocus && lastName && !lastNameValid ? (
                <p
                  className="p-2 mx-2 bg-zinc-300 text-red-600 rounded-xl"
                  id="lastnote"
                >
                  {' '}
                  Must have at least 2 characters
                </p>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div>
            <PrimaryButton
              disabled={
                !emailValid ||
                !pwdValid ||
                !pwdConfValid ||
                !firstNameValid ||
                !lastNameValid
                  ? true
                  : false
              }
              type="submit"
              extraClasses={
                'group relative flex w-full justify-center py-2 px-4'
              }
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon
                  className="h-5 w-5 text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Register Now
            </PrimaryButton>
          </div>
        </form>
        <p className="mt-2 text-center text-sm text-blue-600">
          <Link to={signIn}>Already have an account? Sign In HERE</Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
