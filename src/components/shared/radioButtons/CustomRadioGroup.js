import { RadioGroup } from '@headlessui/react'
import { CheckCircleIcon } from '@heroicons/react/20/solid'
import { useState } from 'react'

const CustomRadioGroup = ({ radioTitle, radioInputs, onValueChange }) => {
  const [radioValue, setRadioValue] = useState('')

  const onChange = (value) => {
    setRadioValue(value)
    onValueChange(value)
  }

  const renderRadioGroup = radioInputs.map((input, index) => {
    return (
      <RadioGroup.Option key={index} value={input?.value}>
        {({ checked }) => (
          <div
            className={`flex flex-row justify-center items-center p-2 mx-auto hover:bg-blue-200  ${
              checked ? 'bg-blue-300' : ''
            } duration-200 cursor-pointer`}
          >
            {checked && <CheckCircleIcon className="h-8 w-8" />}
            <span className="px-2">{input?.title}</span>
          </div>
        )}
      </RadioGroup.Option>
    )
  })
  return (
    <RadioGroup value={radioValue} onChange={(value) => onChange(value)}>
      <RadioGroup.Label className="mx-4 p-2 text-xl font-bold">
        {radioTitle}
      </RadioGroup.Label>
      {renderRadioGroup}
    </RadioGroup>
  )
}

export default CustomRadioGroup
