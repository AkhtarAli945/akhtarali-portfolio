const skillsData = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Tailwind"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "Python"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skillsData.map((cat) => (
          <div key={cat.category} className="p-6 border rounded-xl">
            <h3 className="font-bold mb-3">{cat.category}</h3>
            <ul className="space-y-2">
              {cat.skills.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}