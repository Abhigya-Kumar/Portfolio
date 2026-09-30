const stats = [
  { value: '5+', label: 'Years of Experience' },
  { value: '30+', label: 'Projects Delivered' },
  { value: '12+', label: 'Happy Clients' },
];

const tags = [
  'Skills & Knows',
  'Bits & Brains',
  'Physical Tips',
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-24 pb-16 max-w-6xl mx-auto px-6"
    >

      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Left – Text Content */}
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-gray-900 mb-5">
            Industrial Design Engineer crafting human-centered products and intuitive interfaces.
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8 max-w-md">
            I combine the discipline of engineering with the empathy of design, building products that speak UX and feel elegantly real.
          </p>


        </div>

        {/* Right – Hero Image Card */}
        <div className="w-full lg:w-80 xl:w-96 flex-shrink-0">
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
            {/* Product image */}
            <div className="h-52 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
              <img
                src="/images/hero-product.png"
                alt="Hero product"
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'flex';
                }}
              />
              {/* Fallback placeholder */}
              <div className="absolute inset-0 hidden items-center justify-center flex-col gap-2 text-gray-300">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs">hero-product.png</span>
              </div>
            </div>

            {/* Card footer */}
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-800">View My Work</p>
                <p className="text-xs text-gray-400">See latest projects →</p>
              </div>
              <button className="text-xs font-medium text-white bg-gray-900 hover:bg-gray-700 rounded-full px-4 py-2 transition-all">
                Explore
              </button>
            </div>
          </div>

          {/* Floating badge */}
          
        </div>
      </div>
    </section>
  );
}
