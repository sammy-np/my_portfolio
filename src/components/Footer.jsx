import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] w-full py-12 border-t border-[#45484f]/15 relative z-10 mt-auto">
      <div className="flex flex-col min-[880px]:flex-row justify-between items-center max-w-7xl mx-auto px-6 md:px-8 gap-8 min-[880px]:gap-0">
        <div className="text-xl md:text-lg font-black text-slate-100 font-headline tracking-tight text-center min-[880px]:text-left">
          Saiyam Basnet
        </div>
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-['Space_Grotesk'] text-sm uppercase tracking-widest w-full min-[880px]:w-auto">
          <Link className="text-slate-500 hover:text-[#6dddff] transition-colors opacity-80 hover:opacity-100" to="https://www.linkedin.com/in/saiyam-basnet07/">LinkedIn</Link>
          <Link className="text-slate-500 hover:text-[#6dddff] transition-colors opacity-80 hover:opacity-100" to="https://github.com/sammy-np">GitHub</Link>
          <Link className="text-slate-500 hover:text-[#6dddff] transition-colors opacity-80 hover:opacity-100" to="#">Documentation</Link>
        </div>
        <div className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-slate-500 text-center min-[880px]:text-right">
          © 2026 QA Engineer. Built with Precision.
        </div>
      </div>
    </footer>
  );
}
