const skillCategories = [
  {
    icon: '◈',
    title: 'Design Research',
    description: 'User research, ethnographic studies, and design thinking frameworks to uncover real needs.',
    tools: ['User Interviews', 'Surveys', 'Journey Mapping', 'Heuristic Analysis'],
  },
  {
    icon: '⬡',
    title: 'MAYA/ALIAS',
    description: 'Advanced 3D surface modeling for automotive and industrial product development.',
    tools: ['MAYA', 'Alias', 'Rhino', 'SolidWorks', 'Fusion 360'],
  },
  {
    icon: '◻',
    title: 'Sketch & Prototyping',
    description: 'From ideation sketches to physical rapid prototypes with high fidelity.',
    tools: ['Industrial Sketching', '3D Printing', 'Laser Cutting', 'Clay Modeling'],
  },
  {
    icon: '⬤',
    title: 'Tech',
    description: 'Bridging design with technology through code, sensors, and embedded systems.',
    tools: ['HTML/CSS', 'Figma', 'Arduino', 'Processing', 'React'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-gray-50/60">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Left Label */}
          <div className="lg:w-48 flex-shrink-0">
            <h2 className="text-3xl font-bold text-gray-900">
              Skills &amp; Tools
            </h2>
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <p className="text-gray-500 text-sm mb-8 max-w-md">
              Blending physical craftsmanship and digital fluency to bring bold ideas to life across the full design stack.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {skillCategories.map((cat) => (
                <div
                  key={cat.title}
                  className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-sm transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-9 h-9 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 text-lg font-light">
                      {cat.icon}
                    </div>
                    <h3 className="text-sm font-semibold text-gray-900">{cat.title}</h3>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs bg-gray-50 text-gray-500 border border-gray-100 rounded-full px-2.5 py-0.5"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
