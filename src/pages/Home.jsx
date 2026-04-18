export default function Home() {
  return (
    <main>
      <section className="relative min-h-[100vh] md:min-h-[921px] flex flex-col justify-center items-center overflow-hidden px-4 sm:px-6 md:px-8 pt-20 md:pt-0">
        <div className="absolute inset-0 dot-pattern pointer-events-none"></div>
        <div className="absolute top-1/4 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-primary/10 blur-[80px] md:blur-[120px] rounded-full"></div>
        <div className="relative z-10 max-w-5xl text-center">
          <div className="inline-flex items-center space-x-2 bg-surface-container-high px-4 py-2 rounded-full mb-6 md:mb-8 border border-outline-variant/10">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            <span className="font-label text-xs uppercase tracking-widest text-primary text-[10px] sm:text-xs">System Integrity Status: Nominal</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-headline font-extrabold tracking-tighter text-on-surface leading-[1.1] mb-6 md:mb-8 break-words">
            Ensuring Software Excellence with <span className="block sm:inline text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-container leading-normal sm:leading-[1.1]">Precision Testing.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-2xl mx-auto font-body leading-relaxed mb-8 md:mb-12 px-2 sm:px-0">
            Hands-on experience in API testing, UI validation, and building automation scripts using Selenium with Java and Cypress to ensure reliable and high-quality applications.          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 w-full">
            <button className="w-full sm:w-auto bg-gradient-to-br from-primary to-primary-container text-on-primary-container px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg font-headline font-bold text-base md:text-lg hover:shadow-[0_0_20px_rgba(109,221,255,0.3)] transition-all scale-100 hover:scale-[1.02] active:scale-95">
              View My Work
            </button>
            <button className="w-full sm:w-auto glass-card border border-outline-variant/20 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-lg font-headline font-semibold text-base md:text-lg hover:bg-surface-container-highest transition-all">
              Technical Stack
            </button>
          </div>
        </div>

        <div className="mt-16 md:mt-24 w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-12 gap-4 auto-rows-[100px]">
            <div className="col-span-12 md:col-span-8 row-span-4 bg-surface-container-low rounded-xl overflow-hidden relative group p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
              <img className="w-full h-full object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity duration-500" alt="Technical visualization of complex automation code in a dark mode IDE with highlighted syntax and terminal output" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBF9Sbi7tjfgs8G_gBJ5lOkUVqJ6PPDI88PyaGe1KWlWipMnBVWDzCHxhEb5hypZ7zdoNZipWJFtMWZ5sOfU6q1HGvSAe8v7koUBxz0Vwj6EXggxsOv3KFbj9NJtmgZEra9tHy7XIlrWqicutLC1lXu9--1ca3TIoe-THDF-eHXIYMPmDUHu15KlNSni-qwefliNQf2TWtQvlbDCtbCY9TtnMgrc0V1rA422-ODNKan7KnW57T6lmxsIdXkuGMmO0XggomSxbkN77U" />
              <div className="absolute bottom-6 left-6 z-20">
                <span className="font-label text-xs bg-primary/20 text-primary px-3 py-1 rounded-sm backdrop-blur-md">AUTOMATION_CORE</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 row-span-2 bg-surface-container-high rounded-xl p-6 flex flex-col justify-between">
              <span className="material-symbols-outlined text-primary text-3xl">api</span>
              <div>
                <h3 className="font-headline font-bold text-xl">API Validation</h3>
                <p className="font-body text-sm text-on-surface-variant">Restful &amp; GraphQL architecture testing.</p>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 row-span-2 bg-surface-container rounded-xl p-6 flex flex-col justify-between border border-outline-variant/5">
              <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">terminal</span>
              <div className="font-label text-[10px] text-primary/40 space-y-1">
                <p>&gt; pytest --headful</p>
                <p>&gt; status: PASSED (12.4s)</p>
                <p>&gt; coverage: 98.4%</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-32 bg-surface-container-low relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-20 gap-4 md:gap-8">
            <div className="max-w-xl">
              <h2 className="font-headline text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-4 md:mb-6">Mastering the <span className="text-primary">Logic</span> of Quality.</h2>
              <p className="text-on-surface-variant text-base md:text-lg">I bridge the gap between complex development cycles and flawless end-user experiences through rigorous methodology.</p>
            </div>
            <div className="font-label text-[10px] sm:text-sm uppercase tracking-widest text-primary opacity-50 mb-2 mt-4 md:mt-0">Core_Competencies_v2.0</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="p-6 md:p-8 rounded-xl bg-surface hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">web</span>
              </div>
              <h4 className="font-headline font-bold text-xl mb-3 md:mb-4">UI Automation</h4>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">Designing and maintaining Selenium-based automation scripts using Java to validate critical user flows and support efficient regression testing.</p>
            </div>
            <div className="p-6 md:p-8 rounded-xl bg-surface hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">settings_ethernet</span>
              </div>
              <h4 className="font-headline font-bold text-xl mb-3 md:mb-4">End-to-End Testing</h4>
              <p className="font-body text-sm md:text-base text-on-surface-variant leading-relaxed">Executing end-to-end testing across multiple modules to ensure seamless user experience and functional consistency throughout the application.</p>
            </div>
            <div className="p-6 md:p-8 rounded-xl bg-surface hover:bg-surface-container-highest transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-surface-container-high flex items-center justify-center mb-6 md:mb-8 group-hover:bg-primary transition-colors">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary">monitoring</span>
              </div>
              <h4 className="font-headline font-bold text-xl mb-4">Performance Metrics</h4>
              <p className="font-body text-on-surface-variant leading-relaxed">Analyzing load patterns and stress testing APIs to guarantee system resilience under peak traffic conditions.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <div className="text-center">
            <div className="font-label text-primary text-3xl md:text-4xl font-bold mb-2">500+</div>
            <div className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Automated Test Cases</div>
          </div>
          <div className="text-center">
            <div className="font-label text-primary text-3xl md:text-4xl font-bold mb-2">99.9%</div>
            <div className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Deployment Reliability</div>
          </div>
          <div className="text-center">
            <div className="font-label text-primary text-3xl md:text-4xl font-bold mb-2">0.5s</div>
            <div className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">API Response Threshold</div>
          </div>
          <div className="text-center">
            <div className="font-label text-primary text-3xl md:text-4xl font-bold mb-2">12+</div>
            <div className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Complex Frameworks Built</div>
          </div>
        </div>
      </section>
    </main>
  );
}
