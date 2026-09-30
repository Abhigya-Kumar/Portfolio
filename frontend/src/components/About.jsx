const highlights = [
  'Industrial Design Engineering',
  'Human-Centered Research',
  'Physical & Digital Prototyping',
  'Cross-functional Collaboration',
];

export default function About() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden bg-gray-100 aspect-[4/5] max-w-sm mx-auto lg:mx-0 shadow-sm border border-gray-100">
              <img
                src="/images/about-photo.png"
                alt="Animesh Prakash"
                className="w-full h-full object-cover"
                onError={(e) => { e.target.style.display = 'none'; }}
              />
              {/* Fallback */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-300 bg-gray-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span className="text-xs font-medium">about-photo.png</span>
              </div>
            </div>

            {/* Floating name card */}
            <div className="absolute bottom-4 left-4 right-4 lg:left-auto lg:right-auto bg-white/90 backdrop-blur-md border border-gray-100 rounded-xl p-3 shadow-md max-w-xs">
              <p className="text-sm font-semibold text-gray-900">Animesh Prakash</p>
              <p className="text-xs text-gray-500">Industrial Design Engineer</p>
              <div className="mt-2 flex gap-2">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-gray-500 hover:text-gray-900 border border-gray-200 hover:border-gray-400 rounded-full px-2.5 py-1 transition-all"
                >
                  LinkedIn
                </a>

              </div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 leading-snug mb-5">
              Bridging mechanical precision with empathetic design.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              I am a passionate <strong className="text-gray-700">Industrial Design Engineer</strong> at the intersection of Technology, Math, and Design. My work spans conceptual ideation, form exploration, and contextual prototyping aligned to human needs and manufacturing reality.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              I believe the best products speak through subtlety—precise tolerances, clean ergonomics, and honest materials. My background lets me bridge the language of engineering teams and creative directors alike.
            </p>

            <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-2">
              {highlights.map((h) => (
                <div key={h} className="flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gray-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-600">{h}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href="/images/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 rounded-full px-5 py-2.5 transition-all"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="text-sm font-medium text-gray-600 border border-gray-200 hover:border-gray-400 hover:text-gray-900 rounded-full px-5 py-2.5 transition-all"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
