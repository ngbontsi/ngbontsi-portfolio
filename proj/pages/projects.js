export default function Projects() {
  const projects = [
    { name: "Task Manager App", tech: "Spring Boot + Flutter", status: "In Progress" },
    { name: "Zozo’s Shop POS", tech: "Spring Boot + React", status: "Live" },
    { name: "Rasmeni Guesthouse Website", tech: "Next.js", status: "Development" },
  ];

  return (
    <section className="max-w-4xl mx-auto mt-10">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">Projects</h2>
      <ul className="space-y-4">
        {projects.map((p, i) => (
          <li key={i} className="p-4 bg-white rounded-2xl shadow">
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-600">Tech: {p.tech}</p>
            <p className="text-gray-500 text-sm">Status: {p.status}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
