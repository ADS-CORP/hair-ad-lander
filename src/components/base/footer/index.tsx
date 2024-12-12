'use client';
import React from 'react';
import type { FooterDataType } from './types';

interface FooterProps {
  data?: FooterDataType;
}

const Footer: React.FC<FooterProps> = ({ data }) => {
  const currentYear = new Date().getFullYear();

  if (!data) return null;

  return (
    <footer className="bg-[#1f2937] text-gray-400">
      <div className="max-w-screen-xl mx-auto px-6 pt-12 pb-8">
        {/* Stay Updated - Centered */}
        <div className="max-w-md mx-auto mb-16 text-center">
          <h3 className="text-white text-sm font-semibold uppercase mb-4">Stay Updated</h3>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full bg-gray-800 border-2 border-gray-400 rounded px-3 py-2 text-sm focus:outline-none focus:border-[#0098d9] transition-colors"
            />
            <button className="w-full bg-[#0098d9] text-white rounded px-3 py-2 text-sm font-medium hover:opacity-90 transition-opacity">
              Subscribe
            </button>
          </form>
        </div>

        {/* Company Links */}
        <div className="mb-8">
          <h3 className="text-white text-sm font-semibold uppercase mb-4 text-center">Company</h3>
          <div className="flex flex-col items-center space-y-3">
            <a href="https://peoplesjustice.net/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Privacy Policy</a>
            <a href="https://peoplesjustice.net/terms-of-service" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Terms of Service</a>
            <a href="https://peoplesjustice.net/cookie-policy" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Cookie Policy</a>
            <a href="https://peoplesjustice.net/data-control" target="_blank" rel="noopener noreferrer" className="text-sm hover:text-white transition-colors">Do Not Sell or Share My Personal Info</a>
          </div>
        </div>

        {/* Logo */}
        <div className="flex justify-center mb-8">
          <img
            src="/images/pj-logo-white.svg"
            alt="People's Justice Logo"
            className="h-32 w-auto"
          />
        </div>

        {/* Legal Text */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <div className="mb-6">
            <p className="text-xs leading-relaxed">
            People's Justice is not a law firm, does not provide legal or medical advice, and should not be relied upon as such. Our free Service provides your submissions to law firms at no cost. Results are not guaranteed and past performance is not an indication of future success. People's Justice does not endorse or recommend any particular law firm and has not analyzed your submissions. 
            </p>
          </div>
          
          <p className="text-xs">
            © {currentYear} {data.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;