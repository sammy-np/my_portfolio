import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if fields are filled
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill out all required fields.', {
        style: {
          background: '#10131a',
          color: '#ecedf6',
          border: '1px solid rgba(255, 113, 108, 0.2)',
        },
        iconTheme: {
          primary: '#ff716c',
          secondary: '#10131a',
        },
      });
      return;
    }

    setIsSubmitting(true);

    // Web3Forms API Integration using Vite Environment Variables
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: accessKey,
          name: formData.name,
          email: formData.email,
          subject: formData.subject || "New Contact from QA Portfolio",
          message: formData.message,
        }),
      });

      const json = await response.json();

      if (response.status === 200) {
        toast.success('Payload transmitted! Email sent successfully.', {
          style: {
            background: '#10131a',
            color: '#ecedf6',
            border: '1px solid rgba(109, 221, 255, 0.2)',
          },
          iconTheme: {
            primary: '#6dddff',
            secondary: '#10131a',
          },
        });

        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        toast.error('Transmission failed: ' + json.message, {
          style: {
            background: '#10131a',
            color: '#ecedf6',
            border: '1px solid rgba(255, 113, 108, 0.2)',
          },
        });
      }
    } catch (error) {
      toast.error('Network Error during transmission.', {
        style: {
          background: '#10131a',
          color: '#ecedf6',
          border: '1px solid rgba(255, 113, 108, 0.2)',
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-12 pb-24 px-8 relative">
      <Toaster position="bottom-right" reverseOrder={false} />

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
                <a className="flex items-center group" href="https://github.com/sammy-np" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">terminal</span>
                  </div>
                  <div>
                    <p className="font-label text-xs text-outline uppercase tracking-widest">GitHub</p>
                    <p className="font-headline text-on-surface group-hover:text-primary transition-colors">/sammy-np</p>
                  </div>
                </a>
                <a className="flex items-center group" href="https://www.linkedin.com/in/saiyam-basnet07/" target="_blank" rel="noopener noreferrer">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mr-4 group-hover:bg-primary/10 transition-colors">
                    <span className="material-symbols-outlined text-primary">account_tree</span>
                  </div>
                  <div>
                    <p className="font-label text-xs text-outline uppercase tracking-widest">LinkedIn</p>
                    <p className="font-headline text-on-surface group-hover:text-primary transition-colors">/in/saiyam-basnet07</p>
                  </div>
                </a>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center mr-4">
                    <span className="material-symbols-outlined text-primary">mail</span>
                  </div>
                  <div>
                    <p className="font-label text-xs text-outline uppercase tracking-widest">Direct</p>
                    <p className="font-headline text-on-surface">saiyambasnet@gmail.com</p>
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
                Current Response Latency: <br />
                <span className="text-on-surface font-label">&lt; 24 Hours</span>
              </p>
            </div>
          </div>
          <div className="lg:col-span-8">
            <form onSubmit={handleSubmit} className="bg-surface-container-low p-8 md:p-12 rounded-2xl border border-outline-variant/10 shadow-2xl relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none rounded-2xl"></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 relative z-10">
                <div className="group relative">
                  <label className="block font-label text-xs text-outline uppercase tracking-widest mb-2 ml-1">Identity *</label>
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-4 py-3 font-body text-on-surface placeholder:text-outline-variant/50"
                    placeholder="Your Name"
                    type="text"
                    required
                  />
                </div>
                <div className="group relative">
                  <label className="block font-label text-xs text-outline uppercase tracking-widest mb-2 ml-1">Response Node *</label>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-4 py-3 font-body text-on-surface placeholder:text-outline-variant/50"
                    placeholder="Email Address"
                    type="email"
                    required
                  />
                </div>
              </div>
              <div className="mb-8 relative z-10">
                <label className="block font-label text-xs text-outline uppercase tracking-widest mb-2 ml-1">Log Subject</label>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-4 py-3 font-body text-on-surface placeholder:text-outline-variant/50"
                  placeholder="Technical Inquiry / Collaboration / Project"
                  type="text"
                />
              </div>
              <div className="mb-10 relative z-10">
                <label className="block font-label text-xs text-outline uppercase tracking-widest mb-2 ml-1">Detailed Payload *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-surface-container-lowest border-0 border-b border-outline-variant focus:ring-0 focus:border-primary transition-all px-4 py-3 font-body text-on-surface placeholder:text-outline-variant/50 resize-none"
                  placeholder="Define your project requirements or message..."
                  rows="5"
                  required
                ></textarea>
              </div>
              <button
                className="relative z-10 w-full md:w-auto px-10 py-4 bg-gradient-to-r from-primary to-primary-container text-on-primary-container font-label font-bold text-sm uppercase tracking-[0.2em] rounded-lg hover:shadow-[0_0_20px_rgba(109,221,255,0.4)] transition-all flex items-center justify-center gap-3 group disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    Transmitting...
                    <span className="material-symbols-outlined text-sm animate-spin">refresh</span>
                  </>
                ) : (
                  <>
                    Transmit Data
                    <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
