export default function LogoutModal({ open, onClose, onConfirm }) {
  if (!open) {
    return null;
  }

  return (
    <div className='fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80'>
      <div className='bg-white p-10 rounded-lg shadow-md'>
        <div className='flex items-center justify-center mb-2'>
          <img className=' w-8' src='/asset/icons/bird.png' alt='Logo' />
          <p className='ml-4 text-lg text-gray-700 font-semibold'>Logout</p>
        </div>
        <p className='text-gray-600 pt-3'>Are you sure you want to logout ?</p>
        <div className='flex justify-center gap-3 pt-7'>
          <button className='px-6 py-2 bg-gray-300 text-gray-700 rounded-lg mr-2' onClick={onClose}>
            Cancel
          </button>
          <button className='px-6 py-2 bg-red-600 text-white rounded-lg' onClick={onConfirm}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}
