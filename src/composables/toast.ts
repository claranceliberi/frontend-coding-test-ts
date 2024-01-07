import { useToast } from 'vue-toast-notification'

export default function useToaster() {
  const $toast = useToast()

  function toastSuccess(message: string) {
    const instance = $toast.success(message, {
      position: 'top-right',
    })

    setTimeout(() => {
      instance.dismiss()
    }, 3000)
  }

  function toastError(message: string) {
    const instance = $toast.error(message, {
      position: 'top-right',
    })

    setTimeout(() => {
      instance.dismiss()
    }, 3000)
  }

  return {
    toastSuccess,
    toastError,
  }
}
