export default function Experience() {
  return (
    <main className="relative">
      <div className="absolute inset-0 dot-pattern pointer-events-none"></div>
      
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16 relative">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
          <div className="max-w-3xl w-full">
            <span className="font-label text-primary uppercase tracking-[0.2em] sm:tracking-[0.3em] text-xs sm:text-sm mb-4 block break-words">System validation specialist</span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-headline tracking-tighter leading-[0.95] md:leading-[0.9] mb-6 md:mb-8 break-words">
              Precision <br className="hidden sm:block" />Engineering.
            </h1>
            <p className="text-on-surface-variant text-base sm:text-lg md:text-xl leading-relaxed max-w-xl">
              Expert in architectural quality assurance, focusing on high-integrity systems through rigorous automated verification and lifecycle management.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="w-px h-32 bg-outline-variant/30 mb-4 mx-auto"></div>
            <span className="font-label text-xs text-outline vertical-text rotate-180" style={{writingMode: 'vertical-rl'}}>VERIFIED_BUILD_v2.0.4</span>
          </div>
        </div>
      </section>

      <section className="bg-surface-container-low py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-4xl font-headline font-bold tracking-tight">Core Expertise</h2>
            <div className="h-px flex-grow bg-outline-variant/20"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <div className="md:col-span-8 group bg-surface-container p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="material-symbols-outlined text-8xl">web</span>
              </div>
              <span className="font-label text-xs text-primary mb-4 block">01 / FRONTEND QUALITY</span>
              <h3 className="text-2xl font-bold mb-4">UI Testing</h3>
              <p className="text-on-surface-variant mb-6 max-w-md">Developing robust end-to-end testing suites for complex web architectures, focusing on cross-browser integrity and accessibility compliance.</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-tertiary-container/20 text-tertiary-fixed-dim px-3 py-1 rounded-full font-label text-xs uppercase tracking-wider">Visual Regression</span>
                <span className="bg-tertiary-container/20 text-tertiary-fixed-dim px-3 py-1 rounded-full font-label text-xs uppercase tracking-wider">A11y Checks</span>
              </div>
            </div>

            <div className="md:col-span-4 group bg-surface-container p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 border border-outline-variant/5">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">api</span>
              <span className="font-label text-xs text-primary mb-4 block">02 / DATA INTEGRITY</span>
              <h3 className="text-2xl font-bold mb-4">API Testing</h3>
              <p className="text-on-surface-variant mb-6">Rigorous validation of RESTful services, contract testing, and performance benchmarking under peak loads.</p>
            </div>

            <div className="md:col-span-5 group bg-surface-container p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 border border-outline-variant/5">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">schema</span>
              <span className="font-label text-xs text-primary mb-4 block">03 / METHODOLOGY</span>
              <h3 className="text-2xl font-bold mb-4">STLC Management</h3>
              <p className="text-on-surface-variant">Mastering the Software Testing Life Cycle from requirement analysis to test closure reports in agile environments.</p>
            </div>

            <div className="md:col-span-7 group bg-surface-container p-8 rounded-xl hover:bg-surface-container-highest transition-all duration-300 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                <img className="w-full h-full object-cover grayscale" alt="high contrast technical blueprint pattern" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArqY7zBTB-XXOSL844EAS2pBshH_du99GiZMtjM2Y5egowWRdgtPcx1qwxzSKLGsyu_HmKQoVvXvIGsA8zE2W4lzrQGNc0Hmx72L187H6lxVG_Y2Mxx5gQrP7j8pC0Ki3tECbKAjlMo33u0ih-72Gv37k6hv9AJj_i4lsNq9vYc5_Uzm6M9eEaYBvB2npiDom8e43e3JE2YO99idGT5VKO29GKqLhQgZKoTMacV0QKzJaaBLTd2V9sn9XN17R5o5TwMzAaZ8yxw6g"/>
              </div>
              <div className="relative z-10">
                <span className="font-label text-xs text-primary mb-4 block">04 / EXPLORATORY ANALYSIS</span>
                <h3 className="text-2xl font-bold mb-4">Manual Testing</h3>
                <p className="text-on-surface-variant mb-6">Strategic edge-case discovery through heuristic evaluation and user-centric exploratory sessions that automation might miss.</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-error animate-pulse"></div>
                  <span className="font-label text-xs text-on-surface-variant uppercase tracking-widest">Bugs Found: 1,420+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-headline font-bold tracking-tight mb-2">Automation Stack</h2>
            <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Technological Core / Engine Room</p>
          </div>
          <div className="flex gap-2">
            <span className="w-3 h-3 rounded-sm bg-primary"></span>
            <span className="w-3 h-3 rounded-sm bg-primary-container"></span>
            <span className="w-3 h-3 rounded-sm bg-outline-variant"></span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-6 bg-surface-container rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">terminal</span>
            </div>
            <h4 className="font-headline font-bold text-xl mb-1">Python</h4>
            <p className="font-label text-xs text-on-surface-variant uppercase tracking-tighter">Core Language</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-6 bg-surface-container rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">browser_updated</span>
            </div>
            <h4 className="font-headline font-bold text-xl mb-1">Selenium</h4>
            <p className="font-label text-xs text-on-surface-variant uppercase tracking-tighter">Web Automation</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-6 bg-surface-container rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">inventory_2</span>
            </div>
            <h4 className="font-headline font-bold text-xl mb-1">Pytest</h4>
            <p className="font-label text-xs text-on-surface-variant uppercase tracking-tighter">Test Framework</p>
          </div>
          <div className="flex flex-col items-center text-center group">
            <div className="w-20 h-20 mb-6 bg-surface-container rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-4xl text-primary">send</span>
            </div>
            <h4 className="font-headline font-bold text-xl mb-1">Postman</h4>
            <p className="font-label text-xs text-on-surface-variant uppercase tracking-tighter">API Workspace</p>
          </div>
        </div>
      </section>

      <section className="mb-24 px-8 max-w-7xl mx-auto">
        <div className="bg-surface-container-high rounded-2xl p-12 relative overflow-hidden border border-outline-variant/10">
          <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hidden md:block">
            <img className="w-full h-full object-cover" alt="clean abstract data visualization" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDd4FdX6iA5_rs_u3Stb6zwGxEgI_GkiCmwp7z30BlRV-0XfHtzeTqssSDifldEkioEJPPvPsSNyfxztPS17Ufd6r9Ry28OQUmkntfvl8qjpdJCYzspyjTvZaMCQMxSo76ZtyoiixubdUl_x2ffaGlDllbfO4mxiQWOUcoe_0zZvhlii29VeUZZ5KNQYKqFS5tuj5YIweTkiWg0lVedgw7GsMtUefSYr8yZ-j1Lrry-0X0O2vk0IKjZZRXtcp3kEIvktqn0toCNxzA"/>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="text-5xl font-black font-headline text-primary mb-2">99.8%</div>
              <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Test Pass Rate Target</div>
            </div>
            <div>
              <div className="text-5xl font-black font-headline text-primary mb-2">450ms</div>
              <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Average API Response Latency</div>
            </div>
            <div>
              <div className="text-5xl font-black font-headline text-primary mb-2">0</div>
              <div className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Critical Regressions Post-Deploy</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
