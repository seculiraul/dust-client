import { Dialog } from '@headlessui/react'
import { useEffect, useState } from 'react'
import PrimaryButton from './buttons/PrimaryButton'

const DialogPopup = ({
  dialogState,
  dialogTitle,
  dialogDescription,
  confirmButton,
  cancelButton,
  onConfirm,
  onCancel,
}) => {
  //const [isOpen, setIsOpen] = useState(dialogState)

  // useEffect(() => {
  //   setIsOpen(dialogState)
  // }, [dialogState])

  // const onConfirmDialog = () => {
  //   onConfirm()
  // }

  // const onCloseDialog = () => {
  //   onCancel()
  // }
  return (
    <Dialog
      className="relative z-50"
      open={dialogState}
      onClose={() => onCancel()}
    >
      <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-sm rounded-xl shadow-md border bg-zinc-300 p-4">
          <Dialog.Title className="text-2xl">{dialogTitle}</Dialog.Title>
          <Dialog.Description className="p-2 my-6 font-bold">
            {dialogDescription}
          </Dialog.Description>
          <div className="flex flex-row justify-end gap-2">
            {confirmButton && (
              <PrimaryButton onClick={() => onConfirm()}>Confirm</PrimaryButton>
            )}
            {cancelButton && <button onClick={() => onCancel()}>Cancel</button>}
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  )
}

export default DialogPopup
