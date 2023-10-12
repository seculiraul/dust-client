import { useEffect, useState } from 'react'

const useCheckouForm = (userDetails) => {
  const [firstName, setFirstName] = useState(userDetails?.firstName ?? '')

  const [lastName, setLastName] = useState(userDetails?.lastName ?? '')

  const [address, setAddress] = useState(userDetails?.address ?? '')

  const [city, setCity] = useState(userDetails?.city ?? '')
  const [region, setRegion] = useState(userDetails?.region ?? '')

  const [phone, setPhone] = useState(userDetails?.phone ?? '')
  const [phoneFocus, setPhoneFocus] = useState(false)
  const [phoneValid, setPhoneValid] = useState(false)

  const [email, setEmail] = useState(userDetails?.email ?? '')
  const [emailFocus, setEmailFocus] = useState(false)
  const [emailValid, setEmailValid] = useState(false)

  const PHONE_REGEX = /^\(\d{3}\) \d{3}-\d{4}$/
  const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

  useEffect(() => {
    setPhoneValid(PHONE_REGEX.test(phone))
  }, [phone])

  useEffect(() => {
    setEmailValid(EMAIL_REGEX.test(email))
  }, [email])

  const inputs = {
    nameInputs: [
      {
        labelText: 'First Name',
        name: 'firstName',
        value: firstName,
        onChange: (e) => setFirstName(e.target.value),
        onInvalid: (e) => e.target.setCustomValidity('Enter First Name'),
        extraClasses: '',
        placeholder: 'Enter First Name',
      },
      {
        labelText: 'Last Name',
        name: 'lastName',
        value: lastName,
        onChange: (e) => setLastName(e.target.value),
        onInvalid: (e) => e.target.setCustomValidity('Enter Last Name'),
        extraClasses: '',
        placeholder: 'Enter Last Name',
      },
    ],
    fullLengthInputs: [
      {
        labelText: 'Address',
        name: 'address',
        value: address,
        onChange: (e) => setAddress(e.target.value),
        onInvalid: (e) => e.target.setCustomValidity('Enter Address'),
        extraClasses: '',
        placeholder: 'Enter Address',
      },
    ],
    locationInputs: [
      {
        labelText: 'City',
        name: 'city',
        value: city,
        onChange: (e) => setCity(e.target.value),
        onInvalid: (e) => e.target.setCustomValidity('Enter City'),
        extraClasses: '',
        placeholder: 'Enter City',
      },
      {
        labelText: 'Region',
        name: 'region',
        value: region,
        onChange: (e) => setRegion(e.target.value),
        onInvalid: (e) => e.target.setCustomValidity('Enter Region'),
        extraClasses: '',
        placeholder: 'Enter Region',
      },
    ],

    contactInputs: [
      {
        labelText: 'Phone',
        name: 'phone',
        value: phone,
        onChange: (e) => setPhone(e.target.value),
        onFocus: () => setPhoneFocus(true),
        onBlur: () => setPhoneFocus(false),
        validation: phoneValid,
        extraClasses: '',
        placeholder: 'Enter Phone',
        focus: phoneFocus,
        paragraphMsg: 'Enter a Valid Phone Number',
      },
      {
        labelText: 'Email',
        name: 'email',
        value: email,
        onChange: (e) => setEmail(e.target.value),
        onFocus: () => setEmailFocus(true),
        onBlur: () => setEmailFocus(false),
        validation: emailValid,
        extraClasses: '',
        placeholder: 'Enter Email',
        focus: emailFocus,
        paragraphMsg: 'Enter a Valid Email',
      },
    ],
  }

  const areAllInputsValid =
    !emailValid ||
    !phoneValid ||
    firstName.length < 1 ||
    lastName.length < 1 ||
    address.length < 1 ||
    city.length < 1 ||
    region < 1

  const getInputs = {
    firstName,
    lastName,
    address,
    city,
    region,
    phone,
    email,
  }

  return { inputs, areAllInputsValid, getInputs }
}

export default useCheckouForm
