import tillMotorImg from '../assets/Background+Border.png';

export const experiences = [
  {
    id: 1,
    source: 'experience',
    role: 'Till Motor Developing',
    company: 'Company Name',
    period: 'Jan 2023 – Present',
    type: 'Full-time',
    description: 'Led the design and development of core product features using human-centered design methodologies.',
    tags: ['Industrial Design', 'UX Research', 'Prototyping'],
    image: tillMotorImg,
    imageScale: 'scale-[1.35]',
  },
  {
    id: 2,
    source: 'experience',
    role: 'Simple Ant-Drip/span BA',
    company: 'Drip Irrigation Internship',
    period: 'Jun 2022 – Dec 2022',
    type: 'Internship',
    description: 'Developed innovative solutions for agricultural irrigation using biomechanical design principles.',
    tags: ['Product Design', 'Engineering', 'Sustainability'],
    image: '/images/exp-2.png',
  },
];

function ExperienceCard({ exp, onSelect, isActive }) {
  return (
    <div
      onClick={() => onSelect({ ...exp, title: exp.role })}
      className={`bg-white border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
        isActive
          ? 'border-gray-900 shadow-lg ring-2 ring-gray-900/10'
          : 'border-gray-100 hover:shadow-md hover:border-gray-300'
      }`}
    >
      {/* Image */}
      <div className="h-40 bg-gray-50 overflow-hidden relative">
        <img
          src={exp.image}
          alt={exp.role}
          className={`relative z-10 w-full h-full object-cover transition-transform duration-300 ${exp.imageScale || 'scale-125'}`}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-gray-300 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">{exp.image.split('/').pop()}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="text-sm font-semibold text-gray-900">{exp.role}</h3>
            <p className="text-xs text-gray-500">{exp.company}</p>
          </div>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            exp.type === 'Internship'
              ? 'bg-blue-50 text-blue-600'
              : 'bg-green-50 text-green-600'
          }`}>
            {exp.type}
          </span>
        </div>
        <p className="text-xs text-gray-400 mb-3">{exp.period}</p>
        <p className="text-sm text-gray-600 mb-4 leading-relaxed">{exp.description}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {exp.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-50 text-gray-500 border border-gray-100 rounded-full px-2.5 py-0.5">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function WorkExperience({ onSelect, selectedItem }) {
  return (
    <section id="experience" className="py-16" style={{ backgroundColor: '#eeecea' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Work Experience</h2>
              <p className="text-gray-500 text-sm max-w-sm">
                Here's where I've turned ideas into meaningful, real-world design outcomes.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => {
            const isActive = selectedItem && selectedItem.id === exp.id && selectedItem.source === 'experience';
            return (
              <ExperienceCard key={exp.id} exp={exp} onSelect={onSelect} isActive={isActive} />
            );
          })}
        </div>
      </div>
    </section>
  );
}
