const projects = [
  {
    title: "E-Commerce",
    desc: "Full stack shop app",
  },
  {
    title: "Chat App",
    desc: "Realtime messaging",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="p-6 border rounded-xl">
            <h3 className="font-bold">{p.title}</h3>
            <p className="text-gray-400">{p.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}