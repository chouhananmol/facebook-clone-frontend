import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { FaRegThumbsUp, FaThumbsUp } from "react-icons/fa";
import { FaRegCommentAlt } from 'react-icons/fa';
import { RiShareForwardLine } from 'react-icons/ri';


const Post = ({ post }) => {

    const [isLiked, setIsLiked] = React.useState(false);

    const { data: session } = useSession();


    const handleLikeClick = () => {
        setIsLiked(!isLiked);
    };

    return (
        <div className='flex flex-col' key={post.id}>
            <div className='bg-white mt-6 p-4 rounded-md'>
                <div className='flex items-center space-x-2'>
                    <img
                        className='h-10 w-10 rounded-full object-cover'
                        // src={post.profilePic}
                        src="https://i0.wp.com/wishes143.com/wp-content/uploads/2023/10/choclate-boy-anime-dp.jpg?fit=736%2C736&ssl=1"
                        alt="profile"
                    />
                    <div>
                        <p className='font-medium'>{post.name}</p>
                        <p className='text-xs text-gray-400'>
                            {post.timeStamp}
                        </p>
                    </div>
                </div>

                <p className='py-4'>
                    {post.post}
                </p>
            </div>

            {/* If Any Image */}
            {post.image && (
                <div className='relative h-64 md:h-96 bg-white'>
                    <Image
                        src={post.image}
                        layout="fill"
                        objectFit="cover"
                        alt='post'
                    />
                </div>
            )}

            {/* Footer */}
            <div className='flex items-center justify-center rounded-b-md bg-white p-2 shadow-md text-gray-400 border-t'>

                <div className={`flex items-center space-x-1 p-2 hover:bg-gray-100 hover:text-blue-600 flex-grow justify-center rounded-xl cursor-pointer ${isLiked ? 'text-blue-600' : ''}`}
                    onClick={handleLikeClick}>
                    {isLiked ?
                        <FaThumbsUp size={20} className='h-4' />
                        :
                        <FaRegThumbsUp size={20} className='h-4' />
                    }
                    <p className='text-xs sm:text-base '>Like</p>
                </div>


                <div className='flex items-center space-x-1 p-2 hover:bg-gray-100 hover:text-green-600  flex-grow justify-center rounded-xl cursor-pointer'>
                    <FaRegCommentAlt size={20} className='h-4' />
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>

                <div className='flex items-center space-x-1 p-2 hover:bg-gray-100 hover:text-blue-600 flex-grow justify-center rounded-xl cursor-pointer'>
                    <RiShareForwardLine size={20} className='h-4' />
                    <p className='text-xs sm:text-base'>Share</p>
                </div>

            </div>
        </div>
    )
}

export default Post