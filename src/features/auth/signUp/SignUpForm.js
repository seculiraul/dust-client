import { LockClosedIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import PrimaryButton from '../../../components/shared/buttons/PrimaryButton'
import useLinks from '../../../hooks/shared/useLinks'
import useSignUpForm from '../../../hooks/signUp/useSignUpForm'

const SignUpForm = ({ submitSIgnUp }) => {
  const { inputs, getAllValues, resetAllFields, allFieldsAreValid } =
    useSignUpForm()

  const {
    pathnames: { signIn },
  } = useLinks()

  const onSubmit = (e) => {
    e.preventDefault()

    const values = getAllValues()
    submitSIgnUp(values)

    resetAllFields()
  }

  const renderInputs = inputs.map((input) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={input?.id}>{input?.label}</label>
        <input
          type={input?.type}
          id={input?.id}
          value={input?.value}
          name={input?.id}
          required
          onChange={input?.onChange}
          aria-invalid={input?.ariaInvalid}
          aria-describedby={input?.ariaInvalid}
          onFocus={input?.onFocus}
          onBlur={input?.onBlur}
          className={`relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 mt-1 mb-3.5 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm duration-200 ${input.extraClasses}`}
        />
        {input?.focus && input?.value && !input?.validation ? (
          <p
            id={input?.ariaInvalid}
            className="p-2 mx-2 bg-zinc-300 text-red-600 rounded-xl"
          >
            {input?.paragraphText.map((text) => (
              <>
                {text} <br />
              </>
            ))}
          </p>
        ) : (
          <></>
        )}
      </div>
    )
  })

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
            <div className="flex flex-col">{renderInputs}</div>
          </div>
          <div>
            <PrimaryButton
              disabled={allFieldsAreValid ? false : true}
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

export default SignUpForm
