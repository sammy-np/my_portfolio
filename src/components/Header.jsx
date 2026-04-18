import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => currentPath === path;
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#0b0e14]/70 backdrop-blur-xl bg-gradient-to-b from-[#10131a] to-transparent">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4 md:px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-[#6dddff] font-headline">Saiyam Basnet</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10 font-headline font-medium tracking-tight">
          <Link
            to="/"
            className={`transition-all ${isActive('/') ? 'text-[#6dddff] border-b-2 border-[#6dddff] pb-1' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Home
          </Link>
          <Link
            to="/experience"
            className={`transition-all ${isActive('/experience') ? 'text-[#6dddff] border-b-2 border-[#6dddff] pb-1' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className={`transition-all ${isActive('/projects') ? 'text-[#6dddff] border-b-2 border-[#6dddff] pb-1' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className={`transition-all ${isActive('/contact') ? 'text-[#6dddff] border-b-2 border-[#6dddff] pb-1' : 'text-slate-400 hover:text-slate-100'}`}
          >
            Contact
          </Link>
        </div>
        
        {/* Action Button & Hamburger */}
        <div className="flex items-center gap-4">
          <a 
            href="/resume.pdf" 
            download="Saiyam_Basnet_Resume.pdf"
            className="hidden md:inline-block bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-label font-bold tracking-tight hover:scale-95 duration-200 ease-out transition-all"
          >
            Resume
          </a>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-white/5 transition-colors"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0b0e14]/95 backdrop-blur-xl border-b border-[#45484f]/30 shadow-2xl">
          <div className="flex flex-col px-4 py-6 space-y-2 font-headline font-medium tracking-tight">
            <Link
              to="/"
              onClick={toggleMenu}
              className={`transition-all block px-4 py-3 rounded-lg ${isActive('/') ? 'text-[#6dddff] bg-[#1e232d]' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Home
            </Link>
            <Link
              to="/experience"
              onClick={toggleMenu}
              className={`transition-all block px-4 py-3 rounded-lg ${isActive('/experience') ? 'text-[#6dddff] bg-[#1e232d]' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Experience
            </Link>
            <Link
              to="/projects"
              onClick={toggleMenu}
              className={`transition-all block px-4 py-3 rounded-lg ${isActive('/projects') ? 'text-[#6dddff] bg-[#1e232d]' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Projects
            </Link>
            <Link
              to="/contact"
              onClick={toggleMenu}
              className={`transition-all block px-4 py-3 rounded-lg ${isActive('/contact') ? 'text-[#6dddff] bg-[#1e232d]' : 'text-slate-300 hover:text-white hover:bg-white/5'}`}
            >
              Contact
            </Link>
            
            <div className="pt-4 mt-2 border-t border-white/10">
              <a 
                href="/resume.pdf" 
                download="Saiyam_Basnet_Resume.pdf"
                className="block w-full text-center bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-3 rounded-lg font-label font-bold tracking-tight hover:scale-95 duration-200 ease-out transition-all"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
