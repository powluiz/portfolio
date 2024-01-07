import { ToastContainer } from 'react-toastify'

const Toast = () => {
  return (
    <ToastContainer
      autoClose={5000}
      position="top-center"
      hideProgressBar={false}
      closeButton={false}
      closeOnClick={true}
      pauseOnHover={false}
      draggable={true}
      theme="colored"
    />
  )
}

export default Toast
