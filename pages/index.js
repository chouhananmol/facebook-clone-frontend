import Head from 'next/head'
import Header from '../Components/Header'
import Sidebar from '../Components/Sidebar'
import Login from '../Components/Login.js'
import Feed from '../Components/Feed.js'
import RightSidebar from '../Components/RightSidebar.js'
import { getSession, useSession } from 'next-auth/react';


export default function Home({ session }) {

  console.log("session", session);

  if (!session) return (
    <Login />
  );

  return (
    <div >
      <Head>
        <title>Facebook Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className='flex bg-gray-100'>
        {/* Left SideBar */}
        <Sidebar />

        {/*  Feed - (Create Post and Posts) */}
        <Feed />

        {/* Right SideBar - Contacts */}
        <RightSidebar />

      </main>
    </div>
  )
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  return {
    props: {
      session
    }
  }
};
