export default function Footer() {
  return (
    <footer className="bg-gray-900 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-semibold text-white">Animesh Prakash</span>
            <span className="text-gray-600 text-xs">·</span>
            <span className="text-gray-400 text-xs">Industrial Design Engineer</span>
          </div>

          {/* Center */}
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} · All rights reserved
          </p>

          {/* Right */}
          <div className="flex items-center gap-4">
            {['LinkedIn', 'GitHub'].map((s) => (
              <a key={s} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
