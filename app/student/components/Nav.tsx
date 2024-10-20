import {Navbar, NavbarBrand, NavbarContent, NavbarItem, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from '@/components/theme-switch';
import Image from "next/image";
import Link from 'next/link';


export default function App() {
  return (
    <Navbar className="bg-whitebg border-b-primary border-b-2">
       <NavbarBrand className="p-2">
        <Link href="/" passHref> 
          <Image 
            src={siteConfig.logo_url!}  
            width={40}
            height={40}
            priority      
            alt="Logo" 
            className="m-2"
          />
        </Link>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="primary" aria-current="page"  href="./">
            Home
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="course-registration" color="primary">
            Course Registration
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="primary" href="/payments">
            Payments
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="primary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Signed in as</p>
              <p className="font-semibold">john@doe.com</p>
            </DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <NavbarItem className="mx-6">
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}