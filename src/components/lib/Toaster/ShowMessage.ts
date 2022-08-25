
import Toast from 'toastr'

Toast.options = {
  closeButton: true,
  debug: false,
  newestOnTop: true,
  progressBar: true,
  positionClass: 'toast-top-right',
  preventDuplicates: true,
  onclick: () => ({}),
  showEasing: 'swing',
  hideEasing: 'linear',
  showMethod: 'fadeIn',
  hideMethod: 'fadeOut'
}
export const type = {
  DONE: 'DONE',
  INFO: 'INFO',
  ERROR: 'ERROR',
  WARN: 'WARN'
}
export const ShowMessage = (header: keyof typeof type, message: string) => {
  let type = ''
  switch (header) {
    case 'DONE':
      type = 'success'
      break
    case 'INFO':
      type = 'info'
      break
    case 'ERROR':
      type = 'error'
      break
    case 'WARN':
      type = 'warning'
      break
    default:
      type = 'info'
      break
  }
  ;(Toast as any)[type](message)
}
