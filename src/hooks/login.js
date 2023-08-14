// hooks/login.js
import { useState } from "react";
import useAxios from "../lib/axios";
import { useNavigate } from "react-router-dom";

export default function useLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const res = await useAxios.post("/user/login", {
        email,
        password,
      });

      if (res.status === 200) {
        console.log("Login successful");
        navigate("/home"); // Redirect jika login berhasil
      } else {
        setError("Invalid email or password");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
    }
  };

  return { email, password, error, handleLogin, setEmail, setPassword };
}
