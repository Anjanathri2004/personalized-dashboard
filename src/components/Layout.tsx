import React from 'react';
import Link from 'next/link';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900">
      <aside className="w-60 bg-white dark:bg-gray-800 p-4">
        <h2 className="text-xl font-bold mb-4 text-gray-700 dark:text-white">Dashboard</h2>
        <nav>
          <Link href="/">
            <p className="text-gray-600 dark:text-gray-300 hover:text-blue-500">Home</p>
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 text-gray-900 dark:text-white">{children}</main>
    </div>
  );
};

export default Layout;
