import { useState } from "react";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex justify-center items-center py-5 w-full xl:w-[1120px] mx-auto">
      <button
        className="md:hidden absolute left-5 top-6 z-20"
        aria-label="Abrir menú"
        onClick={() => setIsOpen((v) => !v)}
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <nav
        className={`flex flex-col md:flex-row gap-y-4 md:gap-y-0 gap-x-10 opacity-80 bg-white md:bg-transparent px-8 py-6 md:p-0 rounded-lg shadow md:shadow-none fixed md:static top-16 left-4 right-4 z-10 transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        } md:flex`}
      >
        <a href="/" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        <a href="#experience" onClick={() => setIsOpen(false)}>Experience</a>
        <a href="#skills" onClick={() => setIsOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
      </nav>
    </header>
  );
}
