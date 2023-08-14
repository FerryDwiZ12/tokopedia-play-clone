import { useEffect, useState } from "react";
import useAxios from "../lib/axios";

export default function fecthVideo() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const fecthData = async () => {
    try {
      const res = await useAxios.get("/videos" + (search ? `/search?q=${search}` : ""));
      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fecthData();
  }, [search]);

  return { data, setSearch };
}
