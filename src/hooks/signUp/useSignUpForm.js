import { useEffect, useState } from 'react'

const useSignUpForm = () => {
  //  const [errorMsg, setErrorMsg] = useState('')

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

  const getAllValues = () => {
    return {
      email,
      password,
      passwordConfirmed,
      firstName,
      lastName,
    }
  }

  const resetAllFields = () => {
    setEmail('')
    setPassword('')
    setConfirmPassword('')
    setFirstName('')
    setLastName('')
  }

  const allFieldsAreValid =
    emailValid && pwdValid && pwdConfValid && firstNameValid && lastNameValid

  const inputs = [
    {
      label: 'Email address',
      id: 'email',
      type: 'email',
      value: email,
      validation: emailValid,
      focus: focusEmail,
      onChange: (e) => setEmail(e.target.value),
      onFocus: () => setFocusEmail(true),
      onBlur: () => setFocusEmail(false),
      extraClasses: emailValid
        ? ' border-green-500 focus:border-green-500'
        : '',
      ariaInvalid: emailValid ? 'true' : 'false',
      ariaDescribedby: 'uidnote',
      paragraphText: ['Email is not valid'],
    },
    {
      label: 'Password',
      id: 'password',
      type: 'password',
      value: password,
      validation: pwdValid,
      focus: focusPwd,
      onChange: (e) => setPassword(e.target.value),
      onFocus: () => setFocusPwd(true),
      onBlur: () => setFocusPwd(false),
      extraClasses: pwdValid ? ' border-green-500 focus:border-green-500' : '',
      ariaInvalid: pwdValid ? 'true' : 'false',
      ariaDescribedby: 'pwdnote',
      paragraphText: [
        'Password must have:',
        'At least one upper character',
        'At least one lower character',
        'At least one number At least 6 characters',
      ],
    },
    {
      label: 'Confirm Password',
      id: 'confirmPassword',
      type: 'password',
      value: passwordConfirmed,
      validation: pwdConfValid,
      focus: focusPwdConf,
      onChange: (e) => setConfirmPassword(e.target.value),
      onFocus: () => setFocusPwdConf(true),
      onBlur: () => setFocusPwdConf(false),
      extraClasses:
        pwdConfValid && password.length > 1
          ? ' border-green-500 focus:border-green-500'
          : '',
      ariaInvalid: pwdConfValid ? 'true' : 'false',
      ariaDescribedby: 'confnote',
      paragraphText: ['Must match the password'],
    },
    {
      label: 'First Name',
      id: 'firstName',
      type: 'text',
      value: firstName,
      validation: firstNameValid,
      focus: firstNameFocus,
      onChange: (e) => setFirstName(e.target.value),
      onFocus: () => setFirstNameFocus(true),
      onBlur: () => setFirstNameFocus(false),
      extraClasses: firstNameValid
        ? ' border-green-500 focus:border-green-500'
        : '',
      ariaInvalid: firstNameValid ? 'true' : 'false',
      ariaDescribedby: 'fifnote',
      paragraphText: ['Must have at least 2 characters'],
    },
    {
      label: 'Last Name',
      id: 'lastName',
      type: 'text',
      value: lastName,
      validation: lastNameValid,
      focus: lastNameFocus,
      onChange: (e) => setLastName(e.target.value),
      onFocus: () => setLastNameFocus(true),
      onBlur: () => setLastNameFocus(false),
      extraClasses: lastNameValid
        ? ' border-green-500 focus:border-green-500'
        : '',
      ariaInvalid: lastNameValid ? 'true' : 'false',
      ariaDescribedby: 'lafnote',
      paragraphText: ['Must have at least 2 characters'],
    },
  ]

  return {
    inputs,
    getAllValues,
    resetAllFields,
    allFieldsAreValid,
  }
}

export default useSignUpForm
