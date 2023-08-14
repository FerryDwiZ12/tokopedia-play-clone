import { useState } from 'react';
import useAxios from '../lib/axios';
import { io } from "socket.io-client";

export default function createComment(videoId) {
    const [newComment, setNewComment] = useState('');
    const socket = io(import.meta.env.VITE_BASE_URL);

    const fecthCreateComment = async () => {
        try {
            const res = await useAxios.post(`/comment/${videoId}`, { comment: newComment }); 
            setNewComment(''); 
            console.log('comment:', res);
            socket.emit("new-comment", res.data);
        } catch (error) {
            console.log(error);
        }
    }

    const handleCommentChange = (event) => {
        setNewComment(event.target.value); 
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        fecthCreateComment();
    };

    return { newComment, handleCommentChange, handleSubmit }; 
}
