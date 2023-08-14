import React, { useState } from "react";
import Layout from "../layout/home.layout";
import CardVideos from "../component/cardVideos";
import fecthVideo from "../hooks/fecthVideo";
import { Link } from "react-router-dom";

export default function Home() {
  const { data, setSearch } = fecthVideo();
  const [searchInput, setSearchInput] = useState("");

  const handleSearchInputChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
    setSearch(inputValue); // Memanggil setSearch untuk memulai pencarian
  };

  const handleSearch = () => {
    setSearch(searchInput); // Memanggil setSearch untuk memulai pencarian
  };

  return (
    <div>
      <Layout />
      <div className='ml-4 md:ml-24 mr-4 md:mr-24 pt-6'>
        <div className='all/search flex flex-col md:flex-row justify-between items-center'>
          <div className='mb-3 md:mb-0'>
            <h1 className='bg-green-500 p-3 flex items-center justify-center rounded-md font-semibold text-base text-white'>All Videos</h1>
          </div>
          <div className='flex mt-3 md:mt-0'>
            <input
              placeholder='Search your product...'
              type='text'
              id='search'
              name='search'
              className='w-full md:w-80 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-green-400'
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>
      <div className='ml-4 md:ml-24 mr-4 md:mr-24 pt-6'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4'>
          {data.map((data) => (
            <Link key={data._id} to={`/detail/${data._id}`} className='block'>
              <CardVideos {...data} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
