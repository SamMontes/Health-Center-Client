import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

export default function Layout() {
  return (
    <div className='min-h-screen flex flex-col items-stretch'>
      <Header />
      <div className='flex-grow bg-white-light-blue flex flex-col items-stretch justify-center h-full'>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
