import Image from 'next/image';
import SidebarItem from './SidebarItem';
import React from 'react'
import { ImUsers } from 'react-icons/im'
import { MdGroups, MdOutlineExpandMore, MdOutlineOndemandVideo } from 'react-icons/md';
import { AiOutlineShop } from 'react-icons/ai';
import { BsStopwatch } from 'react-icons/bs';
import { useSession } from 'next-auth/react';


const Sidebar = () => {

    const { data: session } = useSession();
    return (
        <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
            <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
                <Image
                    src="https://i0.wp.com/wishes143.com/wp-content/uploads/2023/10/choclate-boy-anime-dp.jpg?fit=736%2C736&ssl=1"
                    // src={session?.user?.image} 
                    width={40} height={40}
                    className='rounded-full cursor-pointer' alt='profile' />
                <p className='hidden sm:inline-flex font-medium'>
                    {session?.user?.name}
                </p>
            </div>

            <SidebarItem Icon={ImUsers} Value="Friends" />
            <SidebarItem Icon={MdGroups} Value="Groups" />
            <SidebarItem Icon={AiOutlineShop} Value="Marketplace" />
            <SidebarItem Icon={MdOutlineOndemandVideo} Value="Watch" />
            <SidebarItem Icon={BsStopwatch} Value="Memories" />
            <SidebarItem Icon={MdOutlineExpandMore} Value="See More" />
        </div>
    )
};

export default Sidebar;