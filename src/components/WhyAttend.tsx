"use client";
import {submitRSVP} from "@/app/actions/submit";

export default function WhyAttend() {
  return (
    <section className="bg-gray-50 py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start relative z-10">
          {/* Left side - Content */}
          <div>
            {/* Section header */}
            <h2 className="text-orange-400 text-3xl md:text-4xl font-bold mb-6">
              Go behind the curtain with real examples and high-scale insights
            </h2>
            <p className="text-gray-800 font-semibold mb-8">
              You'll walk away with:
            </p>

            {/* Feature list */}
            <div className="space-y-6">
              {/* Item 1 */}
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-[59px] bg-[#F5AB40] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  A clear view of the leadership & workforce capabilities that will matter most over the next 24-36 months.
                </p>
              </div>

              {/* Item 2 */}
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-[59px] bg-[#F5AB40] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  Insights from high-scale operating environments including the former CLO of McDonald's on what truly scales and what breaks under pressure.
                </p>
              </div>

              {/* Item 3 */}
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-[59px] bg-[#F5AB40] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  Signals for where capability gaps may already be forming in your organization.
                </p>
              </div>

              {/* Item 4 */}
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-[59px] bg-[#F5AB40] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.
                </p>
              </div>

              {/* Item 5 */}
              <div className="flex items-start gap-4">
                <div className="w-[3px] h-[59px] bg-[#F5AB40] flex-shrink-0 mt-1" />
                <p className="text-gray-700 text-base leading-relaxed">
                  Actionable insights you can take straight into your next exec meeting.
                </p>
              </div>
            </div>

            {/* RSVP Form */}
            <form action={submitRSVP} className="mt-10 flex gap-3">
              <input
                name="email"
                type="email"
                placeholder="📧Enter your work email to confirm your attendance"
                className="flex-1 border border-gray-300 rounded px-4 py-3 text-gray-600 placeholder-gray-400"
                required
              />
              <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded whitespace-nowrap"
              >
                RSVP Now
              </button>
            </form>
          </div>

{/* Decorative chess image */}
<img
  src="/images/chess.png"
  alt="Chess pieces"
  className="
    hidden lg:block
    absolute
    top-12
    right-[-180px]
    w-[900px]
    xl:w-[1050px]
    2xl:w-[1200px]
    h-auto
    pointer-events-none
  "
/>



        </div>
      </div>
    </section>
  );
}