import React from 'react';
import CreatePost from './CreatePost.js';
import Posts from './Posts.js';

const Feed = () => {
    return (
        <div className='flex-grow bg-gray-100 h-screen pt-6 mr-6 overflow-y-auto no-scrollbar '>
            <div className='mx-auto max-w-md md:max-w-xl lg:max-w-2xl'>
                {/* Create Post Box */}
                <CreatePost />

                {/* Posts */}
                <Posts />
            </div>
        </div>
    );
}

export default Feed;