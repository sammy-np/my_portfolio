import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#0b0e14] w-full py-12 border-t border-[#45484f]/15">
      <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto px-8 gap-8">
        <div className="text-lg font-black text-slate-100 font-headline">QA_ARCHITECT</div>
        <div className="flex space-x-12 font-['Space_Grotesk'] text-sm uppercase tracking-widest">
          <Link className="text-slate-500 hover:text-[#6dddff] transition-colors opacity-80 hover:opacity-100" to="#">LinkedIn</Link>
          <Link className="text-slate-500 hover:text-[#6dddff] transition-colors opacity-80 hover:opacity-100" to="#">GitHub</Link>
          <Link className="text-slate-500 hover:text-[#6dddff] transition-colors opacity-80 hover:opacity-100" to="#">Documentation</Link>
        </div>
        <div className="font-['Space_Grotesk'] text-xs uppercase tracking-widest text-slate-500">
          © 2024 QA Architect. Built with Precision.
        </div>
      </div>
    </footer>
  );
}
