"use client";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">
          Mi App
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Inicio
          </Link>
          <Link href="/login" className="text-white hover:text-gray-300">
            Iniciar Sesión
          </Link>
        </div>
      </div>
    </nav>
  );
}