import { Link, useLocation } from 'react-router-dom';

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;

  return (
    <nav className="sticky top-0 w-full z-50 bg-[#0b0e14]/70 backdrop-blur-xl bg-gradient-to-b from-[#10131a] to-transparent">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="text-xl font-bold tracking-tighter text-[#6dddff] font-headline">Saiyam Basnet</div>
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
        <a 
          href="/resume.pdf" 
          download="Saiyam_Basnet_Resume.pdf"
          className="bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 py-2.5 rounded-lg font-label font-bold tracking-tight hover:scale-95 duration-200 ease-out transition-all inline-block"
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
