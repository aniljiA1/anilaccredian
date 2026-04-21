"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between p-4 shadow">
      <h1 className="font-bold text-xl">Accredian</h1>

      <div className="hidden md:flex gap-6">
        <Link href="#features">Features</Link>
        <Link href="#how">How</Link>
      </div>

      <button className="bg-blue-600 text-white px-4 py-2 rounded">
        Login
      </button>
    </nav>
  );
}
