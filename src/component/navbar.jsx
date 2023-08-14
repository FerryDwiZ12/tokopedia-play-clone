import { useState } from "react";
import LogoutModal from "./logout"; // Ganti dengan path yang sesuai
import fetchUserLogin from "../hooks/user/fecthUserLogin"; // Ganti dengan path yang sesuai

export default function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);
  const userLoginData = fetchUserLogin();

  if (!userLoginData) {
    return <div className='flex justify-center text-green-500'>Loading...</div>;
  }

  const handleLogout = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handleConfirmLogout = () => {
    document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/";
  };

  return (
    <div className='navbar bg-white h-16 md:h-20 flex w-full'>
      <div className='w-full flex justify-between items-center px-4 md:px-24'>
        <div className='bg-white md:mx-3 flex items-center'>
          <div>
            <img className='h-6 md:h-7 ml-4 md:ml-0' src='/asset/icons/bird.png' alt='Logo' />
          </div>
          <div className='hidden md:block ml-4'>
            <img className='h-7 md:h-8' src='/asset/icons/tokped.png' alt='Tokopedia' />
          </div>
        </div>
        <div className='foto bg-white h-full flex-row-reverse flex items-center'>
          <div className='foto cursor-pointer' onClick={handleLogout}>
            <img className='h-6 w-6 md:h-7 md:w-7 mr-4 md:mr-0 rounded-full object-cover' src={userLoginData.urlPicture} alt='Logo' />
          </div>
          <div className='name mr-2 md:mr-4'>
            <h1 className='text-sm md:text-base font-medium text-gray-700'>{userLoginData.username}</h1>
          </div>
        </div>
      </div>
      <LogoutModal open={modalOpen} onClose={handleCloseModal} onConfirm={handleConfirmLogout} />
    </div>
  );
}
