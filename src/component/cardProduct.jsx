import React from "react";
import { Link } from "react-router-dom";

export default function CardProduct({ urlThumbnailProduct, titleProduct, Price, urlProduct }) {
  const formattedRupiah = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(Price);
  return (
    <div className='h-auto w-full md:w-[166px] rounded-xl shadow-md'>
      <div>
        <img className='w-full h-[150px] object-cover rounded-t-md' src={urlThumbnailProduct} alt='' />
      </div>
      <div>
        <h1 className='pl-2 pt-2 font-medium text-base'>{titleProduct}</h1>
        <h1 className='pl-2 pt-1 font-medium text-sm'>{formattedRupiah}</h1>
      </div>
      <div className='px-2 py-2'>
        <Link to={urlProduct}>
          <div className='w-full py-2 flex justify-center bg-green-500 font-base text-white rounded hover:bg-green-600'>Product detail</div>
        </Link>
      </div>
    </div>
  );
}
