"use client";

import { useState } from "react";
import Link from "next/link";

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="absolute left-4 top-8 z-20 bg-gray-200 rounded-full shadow p-2 hover:bg-gray-300 transition"
        onClick={() => setOpen(!open)}
        aria-label="Open"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
          <path d="M15 19l-7-7 7-7" stroke="currentColor" className="stroke-gray-500" />
        </svg>
      </button>
      {open && (
        <nav className="fixed left-0 top-0 h-full w-56 bg-gray-300 shadow-lg z-30 flex flex-col pt-16 px-4">
          <button
            className="self-end mb-8 text-gray-500 bg-gray-200 rounded-full p-2 hover:bg-gray-400 transition"
            onClick={() => setOpen(false)}
            aria-label="Close"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" className="text-gray-500">
              <path d="M6 6l12 12M6 18L18 6" stroke="currentColor" className="stroke-gray-500" />
            </svg>
          </button>
          <Link href="/" className="mb-4 text-gray-500 hover:underline text-lg">Home</Link>
          <Link href="/rmc-protocol" className="mb-4 text-gray-500 hover:underline text-lg">RMC Protocol</Link>
          <Link href="/prudp-protocol" className="text-gray-500 hover:underline text-lg">PRUDP Protocol</Link>
          <Link href="/nex-protocols" className="text-gray-500 hover:underline text-lg">NEX Protocols</Link>
          <Link href="/game-servers" className="text-gray-500 hover:underline text-lg">Game Servers</Link>
        </nav>
      )}
    </>
  );
}