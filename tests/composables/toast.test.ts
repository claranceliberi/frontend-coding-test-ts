import { useToast } from 'vue-toast-notification'
import useToaster from '../../src/composables/toast'

// Mocking the vue-toast-notification module
vi.mock('vue-toast-notification', () => {
  const mockDismiss = vi.fn()
  const mockSuccess = vi.fn(() => ({ dismiss: mockDismiss }))
  const mockError = vi.fn(() => ({ dismiss: mockDismiss }))
  const mockUseToast = () => ({
    success: mockSuccess,
    error: mockError,
  })

  return {
    useToast: mockUseToast,
    ActiveToast: vi.fn(),
  }
})

describe('useToaster', () => {
  it('should return toastSuccess and toastError', () => {
    const { toastSuccess, toastError } = useToaster()
    expect(toastSuccess).toBeDefined()
    expect(toastError).toBeDefined()
  })

  it('should call toast success method', async () => {
    const { toastSuccess } = useToaster()

    toastSuccess('Success message')
    const mockSuccess = vi.mocked(useToast().success)

    expect(vi.mocked(mockSuccess)).toHaveBeenCalledWith('Success message', {
      position: 'top-right',
    })
  })

  it('should call toast error method', async () => {
    const { toastError } = useToaster()

    toastError('Error message')

    const mockError = vi.mocked(useToast().error)

    expect(vi.mocked(mockError)).toHaveBeenCalledWith('Error message', {
      position: 'top-right',
    })
  })
})
