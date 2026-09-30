import { useState } from 'react';

const filters = ['All', 'Industrial Design', 'UX/UI', 'Engineering', 'Research'];

const projects = [
  {
    id: 1,
    source: 'project',
    title: 'Free Support Moving Arc',
    category: 'Industrial Design',
    description: 'An ergonomic support system designed to assist mobility and reduce physical strain during transitions.',
    tags: ['Ergonomics', 'Mobility', 'Prototyping'],
    image: '/images/project-1.png',
    featured: true,
  },
  {
    id: 2,
    source: 'project',
    title: 'SunBoard',
    category: 'Industrial Design',
    description: 'A modular solar panel mounting board designed for ease of installation and maintenance.',
    tags: ['Solar', 'Modular', 'Sustainability'],
    image: '/images/project-2.png',
    featured: false,
  },
  {
    id: 3,
    source: 'project',
    title: 'Doctor Dashboard',
    category: 'UX/UI',
    description: 'A comprehensive medical dashboard interface to streamline patient management workflows.',
    tags: ['Health Tech', 'UX Design', 'Dashboard'],
    image: '/images/project-3.png',
    featured: false,
  },
  {
    id: 4,
    source: 'project',
    title: 'Kids Fruit Letter Game-Farm',
    category: 'UX/UI',
    description: 'An engaging educational game for children combining fruit recognition with letter learning.',
    tags: ['Education', 'Children', 'Game Design'],
    image: '/images/project-4.png',
    featured: false,
  },
];

function ProjectCard({ project, onSelect, isActive }) {
  return (
    <div
      onClick={() => onSelect(project)}
      className={`group bg-white border rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
        isActive
          ? 'border-gray-900 shadow-lg ring-2 ring-gray-900/10'
          : 'border-gray-100 hover:shadow-md hover:border-gray-300'
      }`}
    >
      {/* Image */}
      <div className="relative h-44 bg-gray-50 overflow-hidden">
        {project.featured && (
          <div className="absolute top-3 left-3 z-10">
            <span className="text-xs font-medium text-white bg-gray-900 rounded-full px-2.5 py-1">
              Featured
            </span>
          </div>
        )}
        {isActive && (
          <div className="absolute top-3 right-3 z-10">
            <span className="text-xs font-medium text-white bg-gray-900 rounded-full px-2.5 py-1">
              Viewing ▼
            </span>
          </div>
        )}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        {/* Fallback */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 text-gray-300 bg-gray-50 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span className="text-xs">{project.image.split('/').pop()}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">{project.category}</span>
        <h3 className="text-sm font-semibold text-gray-900 mt-1 mb-2">{project.title}</h3>
        <p className="text-xs text-gray-500 leading-relaxed mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs bg-gray-50 text-gray-400 border border-gray-100 rounded-full px-2 py-0.5">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ onSelect, selectedItem }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16" style={{ backgroundColor: '#f5f4f0' }}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Selected Projects</h2>
              <p className="text-gray-500 text-sm max-w-sm">
                A curated selection of the work I'm proud to share with you. Click any card to view details.
              </p>
            </div>


          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {filtered.map((project) => {
            const isActive = selectedItem && selectedItem.id === project.id && selectedItem.source === 'project';
            return (
              <ProjectCard key={project.id} project={project} onSelect={onSelect} isActive={isActive} />
            );
          })}
        </div>

        {/* More projects nudge */}
        <div className="mt-10 flex items-center justify-center">
          <div className="text-center">
            <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <p className="text-xs text-gray-400">More projects coming soon</p>
          </div>
        </div>
      </div>
    </section>
  );
}
