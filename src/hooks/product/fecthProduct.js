import { useEffect, useState } from "react";
import useAxios from "../../lib/axios";

export default function fectProduct(id) {
  const [getProduct, setGetProduct] = useState([]);

  const fetchProductByVideoId = async (videoId) => {
    try {
      const res = await useAxios.get(`/product/${videoId}`); // Mengambil komentar berdasarkan videoId
      setGetProduct(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    // Ganti 'videoId' dengan ID video yang sesuai
    const videoId = id;
    fetchProductByVideoId(videoId);
  }, [id]);

  return { getProduct };
}
