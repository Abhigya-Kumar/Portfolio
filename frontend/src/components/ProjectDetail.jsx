import { useEffect, useRef } from 'react';

export default function ProjectDetail({ item, onClose, isDefault }) {
  const ref = useRef(null);

  // Auto-scroll to the detail panel only when a user actively clicks a card (not on default load)
  useEffect(() => {
    if (item && !isDefault && ref.current) {
      setTimeout(() => {
        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 50);
    }
  }, [item?.id, item?.source]);

  // Always render — show the default item on first load
  if (!item) return null;

  const isExperience = item.source === 'experience';

  return (
    <section
      id="project-detail"
      ref={ref}
      className="py-16 border-t border-gray-200/60"
      style={{ backgroundColor: '#f5f4f0' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header row */}
        <div className="flex items-start justify-between mb-8">
          <div>
            <p className="section-label mb-3 flex items-center gap-2">
              <span className="inline-block w-4 h-px bg-gray-300"></span>
              {isExperience ? 'WORK EXPERIENCE · DETAIL' : 'PROJECT · DETAIL'}
            </p>
            <h2 className="text-4xl font-bold text-gray-900 leading-tight">{item.title}</h2>
            {item.company && (
              <p className="text-sm text-gray-500 mt-2">
                {item.company} · {item.period}
              </p>
            )}
            {item.category && !isExperience && (
              <span className="inline-block mt-3 text-xs font-medium text-gray-500 bg-gray-100 border border-gray-200 rounded-full px-3 py-1">
                {item.category}
              </span>
            )}
          </div>

          {/* Close / Reset button — only visible when a non-default item is selected */}
          {!isDefault && (
            <button
              onClick={onClose}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-gray-900 border border-gray-300 hover:border-gray-500 bg-white rounded-full px-3 py-1.5 transition-all shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
              Close
            </button>
          )}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left — Image */}
          <div className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 aspect-video relative shadow-sm">
            <img
              src={item.image}
              alt={item.title}
              className={`relative z-10 w-full h-full object-cover transition-transform duration-300 ${item.imageScale || 'scale-110'}`}
              onError={(e) => { e.target.style.display = 'none'; }}
            />
            {/* Fallback placeholder */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium">{item.image?.split('/').pop()}</span>
            </div>
          </div>

          {/* Right — Details */}
          <div>
            {/* Overview */}
            <h3 className="text-base font-semibold text-gray-900 mb-2">Overview</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">{item.description}</p>

            {/* Tags */}
            {item.tags && item.tags.length > 0 && (
              <div className="mb-5">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Tags</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white text-gray-700 border border-gray-200 rounded-full px-3 py-1 shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Type (for experience) */}
            {item.type && (
              <div className="mb-6">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">Type</p>
                <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  item.type === 'Internship'
                    ? 'bg-blue-50 text-blue-600'
                    : 'bg-green-50 text-green-700'
                }`}>
                  {item.type}
                </span>
              </div>
            )}

            {/* Detail cards */}
            <div className="space-y-3">
              {['Design Process', 'Outcome & Impact'].map((section) => (
                <div key={section} className="bg-white border border-gray-100 rounded-xl p-4 shadow-sm">
                  <p className="text-xs font-semibold text-gray-800 mb-1">{section}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Detailed content coming soon — update this in the project data.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
