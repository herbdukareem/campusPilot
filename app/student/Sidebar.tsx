import { useState } from "react";
import { Button, Navbar, Link, Text } from "@nextui-org/react";
import { FiMenu, FiHome, FiSettings, FiUser } from "react-icons/fi";

const Sidebar = ({ isMinimized, toggleSidebar }: { isMinimized: boolean, toggleSidebar: () => void }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-gray-800 text-white transition-all duration-300 shadow-sm ${isMinimized ? "w-16" : "w-64"} z-20`}>
      <div className="flex items-center justify-between p-4">
        <Text h3 size={18} color="white" className={`${isMinimized ? 'hidden' : ''}`}>
          MyApp
        </Text>
        <Button auto flat onClick={toggleSidebar} icon={<FiMenu size={24} />} />
      </div>
      <nav className="mt-4">
        <Link className="flex items-center p-4 text-gray-300 hover:bg-gray-700" href="/">
          <FiHome size={24} />
          {!isMinimized && <span className="ml-4">Home</span>}
        </Link>
        <Link className="flex items-center p-4 text-gray-300 hover:bg-gray-700" href="/profile">
          <FiUser size={24} />
          {!isMinimized && <span className="ml-4">Profile</span>}
        </Link>
        <Link className="flex items-center p-4 text-gray-300 hover:bg-gray-700" href="/settings">
          <FiSettings size={24} />
          {!isMinimized && <span className="ml-4">Settings</span>}
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
