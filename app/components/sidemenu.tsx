"use client";

import React, { useState } from "react";
import Link from "next/link";

const menuItems = [
  { name: "Home", href: "/" },
  { name: "NEX Protocols", href: "/nex-protocols" },
  { name: "PRUDP Protocol", href: "/prudp-protocol" },
  { name: "RMC Protocol", href: "/rmc-protocol" },
  { name: "Game Servers", href: "/game-servers" },
  { name: "Credits", href: "/credits" },
];

export default function SideMenu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/10 z-30 md:hidden"
          onClick={() => setOpen(false)}
          aria-label="Close"
        />
      )}
      <aside
        className={`fixed top-0 left-0 h-full z-40 bg-[#e5e9f2] transition-transform duration-200
          ${open ? "translate-x-0" : "-translate-x-full"} w-60 flex flex-col shadow-lg`}
        style={{ minWidth: 200 }}
      >
        <button
          aria-label={open ? "Close" : "Open"}
          onClick={() => setOpen((o) => !o)}
          className="absolute top-4 right-4 text-2xl bg-white rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200 transition"
        >
          {open ? "✕" : "←"}
        </button>
        <nav className="mt-20 flex-1 flex flex-col gap-2 px-6">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-gray-700 hover:text-blue-700 text-lg py-2 px-2 rounded transition font-medium"
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </aside>
      {!open && (
        <button
          aria-label="Open"
          onClick={() => setOpen(true)}
          className="fixed top-4 left-4 z-50 bg-[#335eff] text-white rounded-full w-10 h-10 flex items-center justify-center shadow-lg text-2xl hover:bg-blue-700 transition"
        >
          →
        </button>
      )}
    </>
  );
}