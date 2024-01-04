import { useSession } from 'next-auth/react';
import Image from 'next/image'
import React, { useRef, useState } from 'react';
import { HiOutlineVideoCamera } from 'react-icons/hi';
import { IoMdPhotos } from 'react-icons/io';
import { BsEmojiSmile } from 'react-icons/bs';
import { RiDeleteBin6Line } from 'react-icons/ri';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addPost } from '../public/src/features/postSlice';
import { FACEBOOK_CLONE_ENDPOINT } from '../config';


const CreatePost = () => {
    const { data: session } = useSession();
    const inputRef = useRef(null);
    const hiddenFileInput = useRef(null);

    const [imageToPost, setImageToPost] = useState(null);

    const dispatch = useDispatch();

    const handleClick = () => {
        hiddenFileInput.current.click();
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }
        reader.onload = (r) => {
            setImageToPost(r.target.result);
        }
    };


    const deleteImage = () => {
        setImageToPost(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!inputRef.current.value) return;

        const formData = new FormData();
        formData.append('file', imageToPost);
        formData.append('post', inputRef.current.value);
        formData.append('name', session?.user?.name);
        formData.append('email', session?.user?.email);
        formData.append('profilePic', session?.user?.image);

        // send to backend
        axios.post(FACEBOOK_CLONE_ENDPOINT, formData, {
            headers: {
                Accept: 'application/json'
            },
        })
            .then((res) => {
                inputRef.current.value = '';
                dispatch(addPost(res.data));
                deleteImage();
            })
            .catch((err) => {
                console.log(err);
            })




    }

    return (
        <div className='bg-white rounded-md shadow-md text-gray-500 p-2'>
            <div className='flex space-x-2 p-4 items-center'>
                <Image
                    className='rounded-full cursor-pointer'
                    src='https://i0.wp.com/wishes143.com/wp-content/uploads/2023/10/choclate-boy-anime-dp.jpg?fit=736%2C736&ssl=1'
                    // src={session?.user?.image}
                    alt='profile'
                    width={50}
                    height={50}
                />

                <form className='flex flex-1'>
                    <input className='rounded-full h-12 flex-grow  lg:inline-flex px-4 bg-gray-100 focus:outline-none font-medium'
                        type="text" placeholder={`Whats on your mind, ${session?.user?.name.split(' ')[0]}?`}
                        ref={inputRef} />
                    <button hidden onClick={handleSubmit}></button>
                </form>
            </div>

            {imageToPost && (
                <div onClick={deleteImage} className='flex items-center px-4 py-2 space-x-4 
        filter hover:brightness-110 transition duration-150 transform cursor-pointer'>
                    <img src={imageToPost} alt='image to post' className='h-14 object-contain' />
                    <RiDeleteBin6Line size={20} className='cursor-pointer h-7 hover:text-red-500' />
                </div>
            )}

            <div className='flex justify-evenly py-2'>

                <div onClick={handleClick} className='flex items-center space-x-1 hover:bg-gray-100 rounded-md p-1 flex-grow justify-center hover:cursor-pointer'>
                    <HiOutlineVideoCamera className='text-red-500' size={20} />
                    <p className='text-gray-600 font-semibold'>Live Video</p>
                </div>

                <div onClick={handleClick} className='flex items-center space-x-1 hover:bg-gray-100 rounded-md p-1 flex-grow justify-center cursor-pointer'>
                    <IoMdPhotos size={20} className='text-green-500' />
                    <p className='text-gray-600 font-semibold'>Photos</p>
                    <input type="file" ref={hiddenFileInput} onChange={addImageToPost} hidden accept='image/*' />
                </div>

                <div className='flex items-center space-x-1 hover:bg-gray-100 rounded-md p-1 flex-grow justify-center cursor-pointer'>
                    <BsEmojiSmile size={20} className='text-yellow-500' />
                    <p className='text-gray-600 font-semibold'>Feeling/Activity</p>
                </div>

            </div>
        </div>
    )
}

export default CreatePost