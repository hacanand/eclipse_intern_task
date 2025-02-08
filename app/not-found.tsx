"use client"; // ✅ Ensures it's a client component

import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="flex min-h-screen rounded flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 text-white px-6">
      <h1 className="text-6xl font-extrabold text-blue-400">404</h1>
      <p className="mt-2 text-lg text-gray-300">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Home Button */}
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-blue-500  px-6 py-3 text-lg font-medium text-white shadow-md transition-all hover:bg-blue-600 hover:shadow-lg"
      >
        Go Home
      </Link>
    </div>
  );
}
