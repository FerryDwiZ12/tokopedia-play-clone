import React from "react";

export default function CardVideos({ storeName, titleVideo, urlVideoThumbnail }) {
  return (
    <div className='pembungkus-card relative pt-4'>
      <div className='card cursor-pointer'>
        <img className='rounded-xl object-cover h-[330px] md:h-[260px] lg:h-[330px] w-full transform transition-transform hover:scale-105' src={urlVideoThumbnail} alt='' />
      </div>
      <div className='absolute rounded-xl bottom-0 w-full py-2 bg-black bg-opacity-30 md:py-4'>
        <div className='font-bold text-white text-sm md:text-base lg:text-lg mb-1 md:mb-2 text-left px-4'>{titleVideo}</div>
        <p className='text-white text-xs md:text-sm text-left px-4'>{storeName}</p>
      </div>
    </div>
  );
}
