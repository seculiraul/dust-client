import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import PrimaryButton from './buttons/PrimaryButton'

const DialogPopup = ({ dialogProperties }) => {
  return (
    <Transition show={dialogProperties?.open} as={Fragment}>
      <Dialog
        className="relative z-50"
        open={dialogProperties?.open}
        onClose={() => dialogProperties?.onCancel}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-400"
          leaveFrom="opacity-100"
          leaveTo="opacity-0 "
        >
          <div className="fixed inset-0 bg-black/30" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-400"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="fixed inset-0 flex w-screen items-center justify-center p-4 backdrop-blur">
            <Dialog.Panel className="w-full max-w-sm rounded-xl shadow-md border bg-zinc-300 p-4">
              <Dialog.Title className="text-2xl">
                {dialogProperties?.title}
              </Dialog.Title>
              <Dialog.Description className="p-2 my-6 font-bold">
                {dialogProperties?.description}
              </Dialog.Description>
              <div className="flex flex-row justify-end gap-2">
                {dialogProperties?.confirm && (
                  <PrimaryButton onClick={dialogProperties?.onConfirm}>
                    Confirm
                  </PrimaryButton>
                )}
                {dialogProperties?.cancel && (
                  <button onClick={dialogProperties?.onCancel}>Cancel</button>
                )}
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  )
}

export default DialogPopup
