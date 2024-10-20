import Link from 'next/link';
import { HiOutlineUser, HiOutlineBookOpen, HiOutlineCreditCard } from 'react-icons/hi'; 

const Sidebar = ({ isOpen, toggleSidebar }: { isOpen: boolean; toggleSidebar: () => void }) => {
  return (
    <aside
      className={`fixed md:relative z-10 text-foreground bg-white min-h-screen p-6 transition-transform transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } md:translate-x-0`}
    >
      <h3 className="text-lg font-bold mb-6">Student Portal</h3>
      <ul className="space-y-4">
        <li>
          <Link href="/student/dashboard" className="flex items-center hover:bg-gray-200 p-2 rounded transition duration-200">
            <HiOutlineUser className="mr-2" />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/student/biodata" className="flex items-center hover:bg-gray-200 p-2 rounded transition duration-200">
            <HiOutlineUser className="mr-2" />
            Update Biodata
          </Link>
        </li>
        <li>
          <Link href="/student/course-registration" className="flex items-center hover:bg-gray-200 p-2 rounded transition duration-200">
            <HiOutlineBookOpen className="mr-2" />
            Course Registration
          </Link>
        </li>
        <li>
          <Link href="/student/payment" className="flex items-center hover:bg-gray-200 p-2 rounded transition duration-200">
            <HiOutlineCreditCard className="mr-2" />
            Payment
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
