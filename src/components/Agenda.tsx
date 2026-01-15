

export default function Agenda() {
  return (
    <section className="bg-cyan-300 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="text-left mb-16">
          <h2 className="text-blue-600 text-3xl md:text-4xl font-bold mb-4">
            Event Agenda
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto px-6">
  {/* Card 1 */}
  <div className="bg-white rounded-lg p-8 shadow-sm">
    <h3 className="text-blue-600 font-bold text-xl mb-6">
      Welcome & Opening
    </h3>
    <p className="text-gray-800 font-semibold mb-4">
      Sudipto Mitra, CRO Simplilearn
    </p>
    <p className="text-gray-600 text-sm leading-relaxed">
      Why capability-building is now a board-level issue and what's changing in the workforce landscape.
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-white rounded-lg p-8 shadow-sm">
    <h3 className="text-blue-600 font-bold text-xl mb-6">
      Keynote:<br />
      What Enterprise Leaders Are Seeing on the Ground
    </h3>
    <p className="text-gray-800 font-semibold mb-4">
      Rob Lauber, Former CLO McDonald's
    </p>
    <p className="text-gray-600 text-sm leading-relaxed">
      A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-white rounded-lg p-8 shadow-sm">
    <h3 className="text-blue-600 font-bold text-xl mb-6">
      Lunch & Executive Conversation
    </h3>
    <p className="text-gray-800 font-semibold mb-4">
      Industry Experts Invited
    </p>
    <p className="text-gray-600 text-sm leading-relaxed">
      What large enterprise talent ecosystems are learning about capability-building at scale.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}
