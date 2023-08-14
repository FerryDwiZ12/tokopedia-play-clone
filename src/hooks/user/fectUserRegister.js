import { useState } from "react";
import useAxios from "../../lib/axios"; // Ganti dengan path yang sesuai

export function fectUserRegister() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    urlPicture: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await useAxios.post("/user/register", formData);
      console.log("Registration successful:", response.data);
      window.location.href = "/";
    } catch (error) {
      console.error("Registration error:", error);
    }
  };

  return { handleInputChange, handleSubmit };
}
