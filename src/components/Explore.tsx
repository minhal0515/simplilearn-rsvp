
import { Clock, Workflow, BarChart3, Shield, LayoutList , Rocket } from "lucide-react";
export default function Explore() {
    return (
        <section className="bg-gray-200 py-16">
  <div className="max-w-6xl mx-auto px-6">
    {/* Header */}
    <h2 className="text-orange-500 text-3xl font-bold mb-4">
      What We'll Explore
    </h2>
    <p className="text-gray-800 mb-10">
      The critical shifts every enterprise must plan for:
    </p>

    {/* Grid of cards */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Card 1 */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Clock className = "text-blue-600 w-8 h-8"/>
          <h3 className="text-black font-bold text-lg">
            Skills Decay
          </h3>
        </div>
        <p className="text-gray-700 text-sm">
          every 2-3 years<br />
          faster for technical skills
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Workflow className = "text-blue-600 w-8 h-8"/>
        <h3 className="text-black font-bold text-lg mb-3">
          Manager Role Shift
        </h3>
        </div>
        <p className="text-gray-700 text-sm">
          orchestrating<br />
          people + AI agents
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <BarChart3 className = "text-blue-600 w-8 h-8"/>
        <h3 className="text-black font-bold text-lg mb-3">
          Leaders + AI Co-Pilots
        </h3>
        </div>
        <p className="text-gray-700 text-sm">
          requires sensemaking<br />
          and systems thinking
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-lg p-6">
          <div className="flex items-center gap-3 mb-3">

        <h3 className="text-black font-bold text-lg mb-3">
            <Shield className = "text-blue-600 w-8 h-8"/>
          Frontline Capability
        </h3>
        </div>
        <p className="text-gray-700 text-sm">
          now depends<br />
          on digital fluency
        </p>
      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <LayoutList className = "text-blue-600 w-8 h-8"/>
        <h3 className="text-black font-bold text-lg mb-3">
          Core Human Capabilities
        </h3>
        </div>
        <p className="text-gray-700 text-sm">
          analytical reasoning<br />
          and scenario planning
        </p>
      </div>

      {/* Card 6 */}
      <div className="bg-white rounded-lg p-6">
        <div className="flex items-center gap-3 mb-3">
          <Rocket className = "text-blue-600 w-8 h-8"/>
        <h3 className="text-black font-bold text-lg mb-3">
          Winning Organizations
        </h3>
        </div>
        <p className="text-gray-700 text-sm">
          predict skills<br />
          ahead of demand
        </p>
      </div>
    </div>
  </div>
</section>
    );
}