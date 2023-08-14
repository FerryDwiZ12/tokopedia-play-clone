import React from "react";
import Layout from "../layout/home.layout";
import { HiOutlinePaperAirplane } from "react-icons/hi2";
import CardProduct from "../component/cardProduct";
import fectComment from "../hooks/fectComment";
import { useParams } from "react-router-dom";
import fecthOneVideo from "../hooks/fecthOneVideo";
import createComment from "../hooks/createComment";
import fectProduct from "../hooks/product/fecthProduct";

export default function DetailProduct() {
  const { id } = useParams();
  const { getProduct } = fectProduct(id);
  const { comment } = fectComment(id);
  const { oneVideo } = fecthOneVideo(id);

  const videoId = oneVideo.urlVideo;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?rel=0&showinfo=0`;

  const { newComment, handleCommentChange, handleSubmit } = createComment(id);

  function getTimeAgo(datestamp) {
    const now = new Date();
    const timestamp = new Date(datestamp);
    const timeDiff = now - timestamp;

    if (timeDiff < 60000) {
      return Math.floor(timeDiff / 1000) + " seconds ago";
    } else if (timeDiff < 3600000) {
      return Math.floor(timeDiff / 60000) + " minutes ago";
    } else if (timeDiff < 86400000) {
      return Math.floor(timeDiff / 3600000) + " hours ago";
    } else {
      return Math.floor(timeDiff / 86400000) + " days ago";
    }
  }

  return (
    <div className='font-poppins pb-12'>
      <Layout />
      <div className='ml-1 md:ml-4 lg:ml-24 mr-1 md:mr-4 lg:mr-24 pt-4 md:pt-6'>
        <div className='atas h-auto md:h-[530px] flex flex-col md:flex-row gap-4 justify-center'>
          <div className='kiri'>
            <iframe className='w-full h-[224px] md:w-[827px] md:h-[424px]' src={embedUrl} title='YouTube Video' frameBorder='0' allowFullScreen></iframe>
            <div className='pt-3'>
              <h1 className='text-xl font-bold text-gray-700'>{oneVideo.titleVideo}</h1>
            </div>
            <div className='pt-3'>
              <h1 className='text-base font-medium text-green-500'>
                <span className='text-gray-400'>Upload by:</span> {oneVideo.storeName}
              </h1>
            </div>
          </div>
          <div className='kanan flex relative'>
            <div className='h-auto md:h-[526px] w-full md:w-[378px] border-green-300 bg-[#F4FFEE] border-2 rounded-xl'>
              <div className='p-4'>
                <h1 className='font-medium text-green-500'>All Comments</h1>
              </div>
              <div className='overflow-y-auto flex-grow flex flex-col-reverse h-[390px] mx-4 bottom-0'>
                <div>
                  {comment.map((data, index) => {
                    return (
                      <div key={index} className='card-comment pt-2 items-center flex space-y-2 space-x-4 overflow-y-auto'>
                        <div className='w-[50px]'>
                          <img className='w-11 h-11 object-cover rounded-full' src={data.userId.urlPicture} alt='' />
                        </div>
                        <div className='h-full w-full overflow-hidden'>
                          <div className='flex items-center justify-between'>
                            <h1 className='font-medium text-base text-green-500'>{data.userId.username}</h1>
                            <p className='font-light flex justify-end text-xs text-green-500'>{getTimeAgo(data.createdAt)}</p>
                          </div>
                          <p className='font-normal text-xs text-gray-700'>{data.comment}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className='absolute flex rounded-xl bottom-0 w-full md:w-[352px] ml-4 md:ml-[13px] py-4'>
              <form onSubmit={handleSubmit} className='w-full flex bottom-0'>
                <input placeholder='Create comments...' className='pl-3 pr-3 border-green-500 border outline-green-500 text-gray-500 rounded-md w-[295px] md:w-[295px]  h-12' type='text' value={newComment} onChange={handleCommentChange} />
                <button type='submit' className='bg-green-500 w-12 h-12 flex items-center justify-center rounded-md ml-2 font-semibold text-base text-white'>
                  <HiOutlinePaperAirplane className='text-white stroke-2' />
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className='ml-4 md:ml-10 mr-4 md:mr-10 pt-4'>
          <div className='pt-4'>
            <h1 className='text-xl font-semibold text-gray-700'>Products :</h1>
          </div>
        </div>
        <div className='px-1 md:px-10 mr-1 md:mr-8'>
          <div className='border mt-4'></div>
        </div>
        <div className='w-full pt-5 px-4 md:px-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3'>
            {getProduct.map((dataProduct) => {
              return <CardProduct key={dataProduct.id} {...dataProduct} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
