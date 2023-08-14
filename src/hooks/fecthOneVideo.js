import { useEffect, useState } from "react";
import useAxios from "../lib/axios";

export default function fecthOneVideo(id) {

  const [oneVideo, setOneVideo] = useState([]);

  const fecthVideoOne = async (_id) => {
    try {
      const res = await useAxios.get(`/videos/${_id}`);
      setOneVideo(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthVideoOne(id);
  }, [id]);

  
  return{oneVideo}
}


