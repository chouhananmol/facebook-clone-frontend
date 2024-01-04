import React from 'react';
import { RiVideoAddFill } from 'react-icons/ri';
import { BiSearch } from 'react-icons/bi';
import { CgMoreAlt } from 'react-icons/cg';
import Contacts from './Contacts';

const RightSidebar = () => {
    return (
        <div className='hidden md:inline-flex flex-col py-2 pl-2 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
            <div className='flex items-center space-x-2 py-3 pl-4 text-gray-500'>
                <p className='flex text-lg flex-grow font-semibold'>Contacts</p>

                <div className='flex space-x-1 px-2'>
                    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <RiVideoAddFill />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <BiSearch />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <CgMoreAlt />
                    </div>
                </div>
            </div>





            {/* Contacts */}
            <Contacts name='Vishal' src='https://randomuser.me/api/portraits/men/1.jpg' status="Online" />
            <Contacts name='Anurag' src="https://randomuser.me/api/portraits/men/41.jpg" status="Offline" />
            <Contacts name="Vaibhav" src="https://randomuser.me/api/portraits/women/41.jpg" status="Offline" />
            <Contacts name="Joseph" src="https://randomuser.me/api/portraits/men/42.jpg" status="Online" />
            <Contacts name="Priya" src="https://randomuser.me/api/portraits/women/42.jpg" status="Offline" />
            <Contacts name="Raghav" src="https://randomuser.me/api/portraits/men/43.jpg" status="Online" />
            <Contacts name="Mena" src="https://randomuser.me/api/portraits/men/40.jpg" status="Online" />
            <Contacts name="Aishwarya" src="https://randomuser.me/api/portraits/women/63.jpg" status="Online" />
            <Contacts name="Bhavin" src="https://randomuser.me/api/portraits/men/13.jpg" status="Offline" />
            <Contacts name="alisha" src="https://randomuser.me/api/portraits/women/3.jpg" status="Online" />


        </div>
    )
}

export default RightSidebar