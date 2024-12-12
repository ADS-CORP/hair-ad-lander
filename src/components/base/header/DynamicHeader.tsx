'use client';

import React from 'react';
import Link from 'next/link';
import { HeaderData } from '@/app/data';

const DynamicHeader = ({ data = HeaderData }) => {
  return (
    <header className="fixed w-full top-0 bg-white z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex-shrink-0">
            <img
              src={data.logo.src}
              alt={data.logo.alt}
              className="h-8 w-auto"
            />
          </Link>
          <nav className="hidden md:flex space-x-8">
            {data.navigation?.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-gray-600 hover:text-gray-900"
              >
                {item.text}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default DynamicHeader;
