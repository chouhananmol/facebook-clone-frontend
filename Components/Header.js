import Image from 'next/image';
import React from 'react'
import { HiOutlineHome, HiOutlineSearch } from 'react-icons/hi';
import { RiFlag2Line } from 'react-icons/ri';
import { MdOutlineOndemandVideo } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { IoGameControllerOutline } from 'react-icons/io5';
import { CgMenuGridO } from 'react-icons/cg';
import { signOut, useSession } from 'next-auth/react';
import { TbLogout } from "react-icons/tb";



const Header = () => {

    const { data: session } = useSession();

    return (
        <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
            {/* Left */}
            <div className='flex min-w-fit'>
                <Image src="https://links.papareact.com/5me" width={40} height={40} alt='logo' />
                <div className='flex items-center space-x-2 px-2 ml-2 rounded-full bg-gray-100 p-2'>
                    <HiOutlineSearch size={20} />
                    <input className='hidden lg:inline-flex bg-transparent focus:outline-none' type="text" placeholder='Search Facebook' />

                </div>
            </div>

            {/* Center */}
            <div className='flex flex-grow justify-center mx-2'>
                <div className='flex items-center'>

                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md
                hover:bg-gray-100 cursor-pointer'>
                        <HiOutlineHome size={25} className='mx-auto' />
                    </div>

                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md
                hover:bg-gray-100 cursor-pointer'>
                        <RiFlag2Line size={25} className='mx-auto' />
                    </div>

                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md
                hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineOndemandVideo size={25} className='mx-auto' />
                    </div>

                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md
                hover:bg-gray-100 cursor-pointer'>
                        <AiOutlineShop size={25} className='mx-auto' />
                    </div>

                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md
                hover:bg-gray-100 cursor-pointer'>
                        <IoGameControllerOutline size={25} className='mx-auto' />
                    </div>

                </div>
            </div>

            {/* Right */}
            <div className='flex items-center justify-end min-w-fit space-x-2'>

                <Image
                    className='rounded-full cursor-pointer'
                    src="https://i0.wp.com/wishes143.com/wp-content/uploads/2023/10/choclate-boy-anime-dp.jpg?fit=736%2C736&ssl=1"
                    // src={session?.user.image}
                    alt='profile'
                    width={50}
                    height={50}
                />

                <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs'>
                    {session?.user.name}
                </p>

                {/* <CgMenuGridO size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-300' /> */}
                {/* <AiFillMessage size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-300' />
                <AiFillBell size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-300' />
                <MdOutlineExpandMore size={20} className='hidden lg:inline-flex h-10 w-10 bg-gray-200 p-2 text-gray-600 rounded-full cursor-pointer hover:bg-gray-300' /> */}


                <div className='relative group'>
                    <TbLogout
                        size={20}
                        onClick={signOut}
                        className='hidden lg:inline-flex h-10 w-10 bg-gray-200 p-2 text-gray-600 rounded-full cursor-pointer group-hover:bg-gray-300 transition duration-300 ease-in-out transform'

                    />
                    <span className='absolute opacity-0 text-white bg-black text-xs px-2 py-1 rounded-md top-8 left-5 group-hover:translate-y-4 transition duration-300 ease-in-out transform -translate-y-1/2 -translate-x-1/2 group-hover:opacity-100'>
                        Logout
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;
