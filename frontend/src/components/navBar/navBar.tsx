'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 mr-10 bg-transparent ">
      {/* Logo */}
      <Link href="/">
        <Image src="/logo3.png" alt="Logo" width={50} height={50} />
      </Link>

      {/* Centered Navigation Links */}
      <div className="hidden md:flex space-x-8 text-white font-semibold">
        <Link href="/" className="hover:text-[#df86aa]">Home</Link>
        <Link href="/faq" className="hover:text-[#df86aa]">Faq</Link>
        <Link href="/contact" className="hover:text-[#df86aa]">Contact</Link>
      </div>
 
      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="w-6 h-6 text-white" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-[#0B0C10] text-white">
            <div className="flex flex-col space-y-4 mt-6">
              <Link href="/" onClick={() => setOpen(false)}>Home</Link>
              <Link href="/blog" onClick={() => setOpen(false)}>Faq</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
