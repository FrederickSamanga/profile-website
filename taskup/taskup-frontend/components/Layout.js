// components/Layout.js
import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <h1 className="text-2xl font-bold">TaskUp</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-blue-600 text-white p-4 text-center shadow-md">
        TaskUp &copy; {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;