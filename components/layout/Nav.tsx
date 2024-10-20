'use client';

import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button } from "@nextui-org/react";
import { ThemeSwitch } from '../theme-switch';
import { siteConfig } from "@/config/site";
import Image from "next/image";
import Link from 'next/link';

export default function App() {
  return (
    <Navbar className="bg-whitebg">
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
        {/* Content section */}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="/apply" variant="flat">
            Apply for admission
          </Button>
        </NavbarItem>
        <NavbarItem>
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
