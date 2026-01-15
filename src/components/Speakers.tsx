type Speaker = {
  name: string;
  description: string;
  initials: string;
};

const speakers: Speaker[] = [
  {
    name: "Rob Lauber",
    initials: "RL",
    description:
      "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald's, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
  },
  {
    name: "Krishna Kumar",
    initials: "KK",
    description:
      "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales—and what doesn’t—in building workforce readiness for the AI era.",
  },
  {
    name: "Sudipto Mitra",
    initials: "SM",
    description:
      "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
  },
];

export default function Speakers() {
  return (
    <section className="bg-[#1E4BE0] text-white py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Featured Speakers
        </h2>

        {/* Speakers List */}
        <div className="space-y-16">
          {speakers.map((speaker) => (
            <div
              key={speaker.name}
              className="flex flex-col md:flex-row gap-8"
            >
              {/* Image Placeholder */}
              <div className="w-40 h-40 shrink-0 rounded-lg bg-white/10 flex items-center justify-center">
                <span className="text-3xl font-semibold text-white/70">
                  {speaker.initials}
                </span>
              </div>

              {/* Text Content */}
              <div>
                <h3 className="text-xl font-semibold text-cyan-300 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Experts Box */}
        <div className="mt-16 bg-white/10 border border-white/20 rounded-lg p-6">
          <h4 className="text-lg font-semibold text-cyan-300 mb-2">
            Additional Expert Perspectives
          </h4>
          <p className="text-blue-100">
            Invited experts from leading consulting and enterprise learning
            organizations will contribute short perspectives, offering insight
            into how large organizations are evolving skills and leadership
            models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
}
