"use client";

import SideMenu from "./components/sidemenu";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 relative text-center bg-gray-100">
      <SideMenu />

      <h1 className="text-5xl font-extrabold text-blue-700 mb-6">Welcome to NEX-Docs Wiki</h1>

      <p className="text-lg text-gray-700 max-w-3xl mb-10">
        <strong>NEX-Docs</strong> is the official documentation platform for the <strong>NEX</strong>, 
        and more specifically for its <strong>QRV</strong> (Quazal Rendez-Vous) component.  
        <br /><br />
        This wiki provides comprehensive technical insight into how NEX works — including its authentication, session, 
        matchmaking, and communication layers — all originally used in Nintendo network titles. Whether you&#39;re a 
        developer, researcher, or enthusiast, this documentation is your go-to resource to learn everything 
        about implementing and interacting with NEX servers and clients.
      </p>
    </main>
  );
}