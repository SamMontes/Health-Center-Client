import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';

export default function Layout({ isCenter = false }) {
  return (
    <div className='min-h-screen flex flex-col items-stretch'>
      <Header />
      <div
        className={`flex-grow bg-white-light flex flex-col items-stretch ${
          isCenter ? 'justify-center' : ''
        }`}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
