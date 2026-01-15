"use client"
import {submitRSVP} from "@/app/actions/submit";
export default function CTAForm() {
    return (
        <section id = "register" className = "bg-white px-6 py-20">
        <form action = {submitRSVP} className = "space-y-2 ml-12">
            
            <input
                name = "email"
                type="email"
                placeholder = "📧Enter your work email to confirm your attendence"
                className="border p-3 w-md border-gray-400 text-gray-400"
                required
            />
                          <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded whitespace-nowrap ml-6"
              >
                RSVP Now
              </button>  
        </form>
<section className="bg-white py-16 pb-8">
  <div className="max-w-4xl mx-auto px-6">
    {/* First paragraph */}
    <p className="text-gray-700 font-bold text-base leading-relaxed mb-6">
      AI is accelerating change across every operational layer. Roles are shifting. Leadership models are collapsing and reforming. Frontline and mid-level managers will soon lead teams of people and intelligent agents.
    </p>

    {/* Second paragraph */}
    <p className="text-gray-700 font-bold text-base leading-relaxed mb-8">
      But even the most advanced enterprises are asking the same question:
    </p>

    {/* Centered highlighted text */}
    <div className="text-center my-12">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
        Which capabilities will matter most,<br />
        and how do we build them at scale?
      </h2>
    </div>

    {/* Final paragraph */}
    <p className="text-gray-700 font-bold text-base leading-relaxed">
      This invite-only roundtable gathers CHROs, CLOs, and enterprise workforce leaders for a candid, senior-level discussion on what's coming next.
    </p>
  </div>
</section>        </section>
    );
}