import React, { useEffect } from 'react';
import Post from './Post.js';
import { useDispatch, useSelector } from 'react-redux';
import { addAllPosts, addPost, clearPosts, selectPosts } from '../public/src/features/postSlice.js';
import axios from 'axios';
import { FACEBOOK_CLONE_ENDPOINT } from '../config.js';


const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);


    useEffect(() => {
        const fetchData = () => {
            const response = axios.get(FACEBOOK_CLONE_ENDPOINT)
                .then((res) => {

                    dispatch(clearPosts());

                    res.data.forEach((post) => {
                        dispatch(addPost(post));
                    });

                    // console.log(res.data);

                })
                .catch((err) => {
                    return console.log(err);
                })
        };
        fetchData();
    }, []);


    return (
        <div>
            {posts.map((post) => (
                <Post key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Posts