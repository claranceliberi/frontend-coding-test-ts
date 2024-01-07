import { useToast, ActiveToast } from 'vue-toast-notification'

export default function useToaster() {
  const $toast = useToast()
  let instance: ActiveToast

  function toastSuccess(message: string) {
    instance = $toast.success(message, {
      position: 'top-right',
    })

    setTimeout(() => {
      instance.dismiss()
    }, 3000)
  }

  function toastError(message: string) {
    instance = $toast.error(message, {
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
