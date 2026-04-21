"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4 shadow-md">
      
      <h1 className="font-bold text-xl text-blue-600">Accredian</h1>

      {/* Desktop */}
      <div className="hidden md:flex gap-6">
        <Link href="#features">Features</Link>
        <Link href="#how">How it Works</Link>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      <button className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-4 md:hidden gap-4">
          <Link href="#features">Features</Link>
          <Link href="#how">How it Works</Link>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            Login
          </button>
        </div>
      )}
    </nav>
  );
}
