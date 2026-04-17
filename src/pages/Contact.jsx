export default function Contact() {
  return (
    <main className="min-h-screen pt-12 pb-24 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-20 text-center">
          <span className="font-label text-primary text-sm tracking-[0.3em] uppercase block mb-4">Initialize Connection</span>
          <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-6">Let's build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-tertiary">flawless</span> systems.</h1>
          <p className="font-body text-on-surface-variant text-lg max-w-2xl mx-auto">
            Whether you're looking to scale your QA infrastructure or need a surgical code review, my door is always open for technical consultation.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-12">
            <section>
              <h3 className="font-label text-xs uppercase tracking-widest text-outline mb-6">Technical Nodes</h3>
              <div className="space-y-6">
                <a className="flex items-center group" href="#">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">terminal</span>
                  </div>
                  <div>
                    <p className="font-label text-xs text-outline uppercase tracking-widest">GitHub</p>
                    <p className="font-headline text-on-surface group-hover:text-primary transition-colors">/qa-architect-main</p>
                  </div>
                </a>
                <a className="flex items-center group" href="#">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">account_tree</span>
                  </div>
                  <div>
                    <p className="font-label text-xs text-outline uppercase tracking-widest">LinkedIn</p>
                    <p className="font-headline text-on-surface group-hover:text-primary transition-colors">/in/precision-engineer</p>
                  </div>
                </a>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mr-4">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <p className="font-label text-xs text-outline uppercase tracking-widest">Direct</p>
                    <p className="font-headline text-on-surface">hello@qa-architect.io</p>
                  </div>
                </div>
              </div>
            </section>
            <div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/15 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2">
                <span className="material-symbols-outlined text-primary/20 text-4xl">verified_user</span>
              </div>
              <p className="font-label text-xs text-primary uppercase tracking-[0.2em] mb-2">System Status</p>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-sm font-headline text-on-surface">Available for projects</span>
              </div>
              <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                Current Response Latency: <br/>
                <span className="text-on-surface font-label">&lt; 24 Hours</span>
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <form className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="group relative">
                  <label className="block font-label text-xs text-outline uppercase tracking-widest mb-2 ml-1">Identity</label>
                  <input className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-4 py-3 font-body text-on-surface placeholder:text-outline-variant/50" placeholder="Your Name" type="text"/>
                </div>
                <div className="group relative">
                  <label className="block font-label text-xs text-outline uppercase tracking-widest mb-2 ml-1">Response Node</label>
                  <input className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-4 py-3 font-body text-on-surface placeholder:text-outline-variant/50" placeholder="Email Address" type="email"/>
                </div>
              </div>
              <div className="mb-8">
                <label className="block font-label text-xs text-outline uppercase tracking-widest mb-2 ml-1">Log Subject</label>
                <input className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-4 py-3 font-body text-on-surface placeholder:text-outline-variant/50" placeholder="Technical Inquiry / Collaboration / Project" type="text"/>
              </div>
              <div className="mb-10">
                <label className="block font-label text-xs text-outline uppercase tracking-widest mb-2 ml-1">Detailed Payload</label>
                <textarea className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-4 py-3 font-body text-on-surface placeholder:text-outline-variant/50 resize-none" placeholder="Define your project requirements or message..." rows="5"></textarea>
              </div>
              <button className="w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-label font-bold text-sm uppercase tracking-[0.2em] rounded-lg hover:shadow-[0_0_20px_rgba(109,221,255,0.4)] transition-all flex items-center justify-center gap-3 group" type="submit">
                Transmit Data
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
