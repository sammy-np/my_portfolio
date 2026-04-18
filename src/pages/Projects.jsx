export default function Projects() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">
      <header className="mb-16 md:mb-24 relative">
        <div className="absolute -top-16 md:-top-24 -left-6 md:-left-12 w-48 md:w-64 h-48 md:h-64 bg-primary/10 rounded-full blur-[80px] md:blur-[120px]"></div>
        <div className="inline-block px-3 py-1 mb-4 md:mb-6 rounded-sm bg-surface-container-highest border border-outline-variant/15">
          <span className="font-label text-[10px] sm:text-xs uppercase tracking-[0.2em] text-primary">Technical Showcase</span>
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-on-background mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] break-words">
          ENGINEERED <br className="hidden sm:block"/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary-dim">PRECISION.</span>
        </h1>
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-on-surface-variant leading-relaxed">
          Exploring the boundary between development and quality through automated architectures, rigorous testing suites, and data-driven verification.
        </p>
      </header>
      
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container transition-all duration-300">
          <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity bg-[radial-gradient(circle_at_50%_50%,rgba(109,221,255,0.15),transparent_70%)]"></div>
          <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full justify-between relative z-10">
            <div>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <span className="material-symbols-outlined text-primary text-3xl md:text-4xl">api</span>
                <div className="h-[1px] flex-grow bg-outline-variant/20"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-on-surface">API Automation Framework</h3>
              <p className="text-on-surface-variant text-base md:text-lg max-w-xl mb-6 md:mb-8 leading-relaxed">
                A highly scalable REST API testing engine built with PyTest and Requests. Features dynamic environment switching, automated report generation via Allure, and seamless CI/CD integration.
              </p>
            </div>
            <div className="flex flex-wrap gap-2 font-label text-xs">
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">PYTHON</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">PYTEST</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">DOCKER</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">JENKINS</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full hidden lg:block grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-60 transition-all duration-500">
            <img alt="Network server and data lines" className="object-cover h-full w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBq39CaKgvaW2sQPaB4n0wAn19-kfOoNQtlA-LzjsfMp9b7D3Cdh7TctOkPsFKJ5-M9-549YN8M0Ir6U4cIndBj90ay7-3puDgURozIrsnaCmeWE51q4jOSWIR0WBm55YY0Oib5WkuHdI8gd9b3Z2pk-JZ2XhkoulevtP-7Jtl8bNvURiWU_406crgf2kv2rwa-FbXuTOKrTQgkwo0vnpz2Md5Ql5Fzerc3qhkWmJrenkbluiUt4IJyGcGuGqlRfPn-xQ7XV7wn_r0"/>
          </div>
        </div>

        <div className="lg:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container transition-all duration-300">
          <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full relative z-10">
            <span className="material-symbols-outlined text-primary mb-6 md:mb-8">shopping_cart</span>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-on-surface leading-tight">UI Regression Suite for E-commerce</h3>
            <p className="text-on-surface-variant text-base mb-8 md:mb-12 flex-grow leading-relaxed">
              Comprehensive end-to-end testing suite using Playwright. Covers critical paths: checkout, user auth, and payment gateway simulations across multiple browser engines.
            </p>
            <div className="flex flex-wrap gap-2 font-label text-xs">
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">PLAYWRIGHT</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">TYPESCRIPT</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container transition-all duration-300">
          <div className="p-6 sm:p-8 md:p-10 flex flex-col md:flex-row gap-6 md:gap-8 items-start relative z-10">
            <div className="flex-grow">
              <span className="material-symbols-outlined text-primary mb-4 md:mb-6">database</span>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-on-surface">Selenium-Python Web Scraper</h3>
              <p className="text-on-surface-variant text-base mb-6 md:mb-8 leading-relaxed">
                Engineered a robust data extraction tool that bypasses common anti-bot measures to monitor competitor pricing and availability for high-volume retail platforms.
              </p>
              <div className="flex flex-wrap gap-2 font-label text-xs">
                <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">SELENIUM</span>
                <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">PYTHON</span>
                <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">MONGODB</span>
              </div>
            </div>
            <div className="w-full md:w-48 h-48 rounded-lg overflow-hidden shrink-0 border border-outline-variant/10">
              <img alt="Code snippets on dark screen" className="object-cover h-full w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDloof8mGJIun_URcSmbiYOfXkKmLQrgeoLr2KCEGLmLLx7oot-fHo0j8dVcBhvEfJNW-shXyffL27Fzmq4OLiOC89tVTBCWnP3HlQ3aJUTMQlIHQnQ92KSZgkOJWqig7n_zUqmOcSfyyuXNciJeFoMEoAbHymwp_E9VuTfA9kDJ-UVXSlnvpNN9dtCVOMllV4dnYGE2-uIedOOF1eec9vAlLcHZIhPqh6vaNxtSsEBhf3Nl2wj32PBFMTSHqkBh3gHSPZV9O555h4"/>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 group relative overflow-hidden rounded-xl bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container transition-all duration-300">
          <div className="p-6 sm:p-8 md:p-10 flex flex-col h-full relative z-10">
            <div className="flex justify-between items-start mb-6">
              <span className="material-symbols-outlined text-primary">speed</span>
              <span className="font-label text-[10px] text-error-dim flex items-center gap-1 border border-error-container/30 px-2 py-0.5 rounded">
                <span className="w-1.5 h-1.5 rounded-full bg-error-dim animate-pulse"></span> SYSTEM CRITICAL
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold tracking-tight mb-4 text-on-surface">Load &amp; Stress Orchestrator</h3>
            <p className="text-on-surface-variant text-base mb-6 md:mb-8 leading-relaxed">
              Customized JMeter scripts integrated with Grafana for real-time visualization of system bottlenecks under 10k+ concurrent user loads.
            </p>
            <div className="mt-auto flex flex-wrap gap-2 font-label text-xs">
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">JMETER</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">GRAFANA</span>
              <span className="px-3 py-1 rounded-full bg-tertiary-container/20 text-tertiary-dim border border-tertiary-dim/30">K6</span>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 md:mt-32 pt-12 md:pt-20 border-t border-outline-variant/15 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center md:text-left">
        <div>
          <div className="font-label text-[10px] sm:text-xs text-primary mb-2 tracking-widest uppercase">Coverage</div>
          <div className="text-4xl md:text-5xl font-black text-on-surface">98.4%</div>
        </div>
        <div>
          <div className="font-label text-[10px] sm:text-xs text-primary mb-2 tracking-widest uppercase">Tests Automated</div>
          <div className="text-4xl md:text-5xl font-black text-on-surface">2.5k+</div>
        </div>
        <div>
          <div className="font-label text-[10px] sm:text-xs text-primary mb-2 tracking-widest uppercase">Success Rate</div>
          <div className="text-4xl md:text-5xl font-black text-on-surface">99.9%</div>
        </div>
        <div>
          <div className="font-label text-[10px] sm:text-xs text-primary mb-2 tracking-widest uppercase">CI/CD Speed</div>
          <div className="text-4xl md:text-5xl font-black text-on-surface">-40%</div>
        </div>
      </section>
    </main>
  );
}
