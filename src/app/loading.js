import {FaSpinner} from 'react-icons/fa'

const loading = () => {
  return (
    <div className='text-white grid h-screen place-items-center'>
      <FaSpinner size={60} className='text-red-700' />
    </div>
  )
}

export default loading