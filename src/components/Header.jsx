import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow">
      <div className="max-w-6xl mx-auto p-4 flex justify-between items-center">
        <div className="text-xl font-semibold">CloudFolio</div>
        <nav className="space-x-4">
          <a className="hover:underline" href="#">Docs</a>
          <a className="hover:underline" href="#">Blog</a>
          <a className="px-3 py-1 bg-slate-800 text-white rounded" href="#">Get Started</a>
        </nav>
      </div>
    </header>
  );
}
