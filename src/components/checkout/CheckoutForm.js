import { useRef } from 'react'
import useCheckouForm from '../../hooks/checkout/useCheckoutForm'
import PrimaryButton from '../shared/buttons/PrimaryButton'
import CustomRadioGroup from '../shared/radioButtons/CustomRadioGroup'

const CheckoutForm = ({ totalCart, userDetails, onSubmit }) => {
  const form = useRef()
  const {
    inputs,
    areAllInputsValid,
    getInputs,
    payMethod,
    deliveryOption,
    total,
    handleOnDeliveryChange,
    handleOnPayMethodChange,
  } = useCheckouForm(userDetails, totalCart)

  const handleOnSubmit = (e) => {
    e.preventDefault()

    const info = {
      deliveryDetails: getInputs,
      payMethod,
      deliveryOption,
    }
    onSubmit(info)
  }

  const mapInput = (input) => {
    return (
      <div
        key={input?.name}
        className={`${
          input?.inputType === 'full' ? 'w-full' : 'w-11/12'
        } text-left`}
      >
        <label htmlFor={input?.name} className="block mb-2">
          {input.labelText}
        </label>
        <input
          name={input?.name}
          value={input.value}
          required
          onInvalid={input?.onInvalid}
          onInput={(e) => e.target.setCustomValidity('')}
          onFocus={input?.onFocus}
          onChange={input.onChange}
          className={`w-11/12 p-2 border-2 border-slate-300 rounded-md focus:bg-gray-100 hover:border-gray-400 focus:border-gray-400 focus:outline-0 duration-200 ${input.extraClasses}`}
          type="text"
          placeholder={input.placeholder}
        />
        {input?.focus && input?.value && !input?.validation ? (
          <p className="text-red-600">{input?.paragraphMsg}</p>
        ) : (
          <></>
        )}
      </div>
    )
  }

  const renderInputs = {
    nameInputs: inputs.nameInputs.map((input) => mapInput(input)),
    fullInputs: inputs.fullLengthInputs.map((input) => mapInput(input)),
    locationInputs: inputs.locationInputs.map((input) => mapInput(input)),
    contactInputs: inputs.contactInputs.map((input) => mapInput(input)),
  }

  return (
    <div className="max-w-[1500px] w-full mx-auto text-center m-5 p-10">
      <div className="flex flex-col w-full p-4  items-start justify-items-center  border border-gray-200 space-y-2 md:items-center md:flex-row md:space-y-0 md:space=x=4 md:items-start">
        <form
          ref={form}
          onSubmit={handleOnSubmit}
          className="flex flex-col p-4 m-2 w-full space-y-4 md:flex-row md:space-y-0 md:space-x-2"
        >
          <div className="h-42 w-full md:w-2/3 border-b02 md:border-b-0 md:border-r-2 border-gray-200 w-full">
            <div className="flex flex-col p-4 m-2 w-full items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              {renderInputs.nameInputs}
            </div>
            <div className="flex flex-col p-4 m-2 items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              {renderInputs.fullInputs}
            </div>
            <div className="flex flex-col p-4 m-2 items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              {renderInputs.locationInputs}
            </div>
            <div className="flex flex-col p-4 m-2 items-stretch justify-between space-y-4 md:flex-row md:space-y-0 md:space-x-2">
              {renderInputs.contactInputs}
            </div>
          </div>
          <div className="flex flex-col h-42 p-2 space-y-2 md:w-1/3">
            <div className="m-2 p-2 border-b-0 w-full">
              <CustomRadioGroup
                radioTitle="Select payment method"
                radioInputs={inputs?.payMethods}
                onValueChange={(value) => handleOnPayMethodChange(value)}
              />
              <CustomRadioGroup
                radioTitle="Select delivery method"
                radioInputs={inputs?.deliveryMethods}
                onValueChange={(value) => handleOnDeliveryChange(value)}
              />
            </div>
            <div className="m-2 p-2 border-b-0 w-full">
              <div className="p-2 m-4 text-lg">
                <h2 className="text-lg font-medium">
                  Total:{' '}
                  <span className="ml-2 text-2xl font-bold">{`${total} $`}</span>
                </h2>
              </div>
              <PrimaryButton
                disabled={
                  areAllInputsValid || payMethod === '' || deliveryOption === ''
                }
                extraClasses={'w-full'}
              >
                Place Order
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default CheckoutForm
