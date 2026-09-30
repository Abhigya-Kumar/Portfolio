import { useState } from 'react';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Invalid email';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setSent(true);
    setForm(initialForm);
  };

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">
          <p className="section-label mb-3 flex items-center gap-2 text-gray-500">
            <span className="inline-block w-4 h-px bg-gray-600"></span>
            GET IN TOUCH
          </p>
          <h2 className="text-3xl font-bold text-white mb-3 leading-snug">
            Let's build something useful together.
          </h2>
          <p className="text-gray-400 text-sm max-w-md leading-relaxed">
            Whether it's a freelance project, a full-time role, or simply talking design—I'm always open to meaningful conversations and opportunities.
          </p>
        </div>

        {/* Form Card */}
        <div className="rounded-2xl p-8" style={{ backgroundColor: '#dde3f0' }}>
          {sent ? (
            <div className="text-center py-12">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="text-gray-900 font-semibold text-lg mb-1">Message sent! 🎉</p>
              <p className="text-gray-600 text-sm mb-5">I'll get back to you as soon as possible.</p>
              <button
                onClick={() => setSent(false)}
                className="text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              {/* Row 1: Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className={`w-full bg-white/80 text-gray-800 placeholder-gray-400 text-sm rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                      errors.name ? 'border-red-400' : 'border-transparent'
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className={`w-full bg-white/80 text-gray-800 placeholder-gray-400 text-sm rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all ${
                      errors.email ? 'border-red-400' : 'border-transparent'
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Row 2: Phone + Subject */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="w-full bg-white/80 text-gray-800 placeholder-gray-400 text-sm rounded-xl border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-1.5">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    className="w-full bg-white/80 text-gray-800 placeholder-gray-400 text-sm rounded-xl border border-transparent px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Message */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-800 mb-1.5">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project or question..."
                  rows={5}
                  className={`w-full bg-white/80 text-gray-800 placeholder-gray-400 text-sm rounded-xl border px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all resize-none ${
                    errors.message ? 'border-red-400' : 'border-transparent'
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
              </div>

              {/* Submit */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="flex items-center gap-2 font-semibold text-sm text-white rounded-full px-8 py-3.5 transition-all hover:opacity-90 active:scale-95"
                  style={{ background: 'linear-gradient(135deg, #3b6ef5, #2563eb)' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Get In Touch
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Social Links */}
        <div className="mt-6 flex flex-wrap gap-2">
          {[
            { label: 'LinkedIn', href: 'https://linkedin.com' },
            { label: 'GitHub', href: 'https://github.com' },
          ].map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-gray-400 hover:text-white border border-white/10 hover:border-white/30 rounded-full px-3 py-1.5 transition-all"
            >
              ↗ {social.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
