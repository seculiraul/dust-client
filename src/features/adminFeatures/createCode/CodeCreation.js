import PrimaryButton from '../../../components/shared/buttons/PrimaryButton'
import TextInput from '../../../components/shared/TextInput'

const CodeCreation = () => {
  const codes = [
    {
      name: 'code 1',
      expirationDate: '12/12/2022',
    },
  ]
  const renderExistingCodes = codes.map((code) => {
    return (
      <div className="relative flex flex-col gap-1 items-start p-2 bg-zinc-200 rounded shadow-md">
        <span>{code.name}</span>
        <span> Expires at {code.expirationDate}</span>
        <span className="absolute top-0 right-0 cursor-pointer px-2 hover:text-red-800 ">
          X
        </span>
      </div>
    )
  })
  return (
    <div className="p-2 sm:p-4 sm:mx-12 ">
      <div className="flex flex-col">
        <h2 className="text-xl font-bold mb-4">Create new Code</h2>
        <div className="gap-8 ">
          <label>Code Name</label>
          <div className="flex flex-row gap-2">
            <TextInput placeholder={'sal'} />
            <PrimaryButton>Create Code</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="p-2">
        <h2 className="text-xl font-bold mt-12 mb-4">List of Codes</h2>
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-row gap-1 items-start">
            {renderExistingCodes}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CodeCreation
