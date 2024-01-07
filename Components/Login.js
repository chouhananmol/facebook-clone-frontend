import { signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

const Login = () => {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen py-2'>
            <Image src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width={240} height={240} alt='logo' />
            <div className='px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white'>
                <a onClick={signIn}
                    className='px-20 py-4 z-10 text-2xl cursor-pointer  -mt-16 bg-blue-500 rounded-md text-white'>
                    Login
                </a>
            </div>
        </div>
    )
}

export default Login