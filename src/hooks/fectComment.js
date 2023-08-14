import { useEffect, useState } from "react";
import useAxios from "../lib/axios";
import { io } from "socket.io-client";

export default function fectComment(id) {
  const [comment, setComment] = useState([]);
  const socket = io(import.meta.env.VITE_BASE_URL);

  const fetchCommentsByVideoId = async (videoId) => {
    try {
      const res = await useAxios.get(`/comment/${videoId}`); // Mengambil komentar berdasarkan videoId
      setComment(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const videoId = id;
    fetchCommentsByVideoId(videoId);

    socket.on("new-comment", (newComment) => {
      setComment((prevComments) => [...prevComments, newComment]);
    });

    return () => {
      socket.off("new-comment");
    };
  }, [id, socket]);

  return { comment };
}
