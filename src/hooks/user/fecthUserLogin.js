import { useEffect, useState } from "react";
import useAxios from "../../lib/axios";

export default function fecthUserLogin() {
  const [getUserLogin, setGetUserLogin] = useState(null);

  const fetchUserByLogin = async () => {
    try {
      const res = await useAxios.get("/user");
      setGetUserLogin(res.data); // Simpan data pengguna ke dalam state
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUserByLogin();
  }, []);

  return getUserLogin;
}
