'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-smoke/90 backdrop-blur px-4 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-brandRed rounded-full flex items-center justify-center text-smoke font-bold">SG</div>
          <div className="text-smokeWhite font-semibold">SmokeGrill</div>
        </Link>
        <nav className="space-x-4 hidden md:block">
          <Link href="#menu" className="hover:underline">Menú</Link>
          <Link href="#gallery" className="hover:underline">Galería</Link>
          <Link href="/admin" className="hover:underline">Admin</Link>
        </nav>
      </div>
    </header>
  );
}
