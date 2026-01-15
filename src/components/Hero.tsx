export default function Hero() {
    return (
<section className="relative bg-gray-900 text-white py-10 md:py-16 min-h-[600px] flex items-center">
  
  {/* Background */}
  <div className="absolute inset-0">
    
    {/* Image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: "url('/images/Hero.jpg')" }}
    />

    {/* Darken image (simulates Figma "Plus Darker") */}
    <div className="absolute inset-0 bg-black/65" />

    {/* Blue vertical gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-[#1C4EF1]/25 to-[#1A3CB6]/30" />
  </div>

  {/* Content */}
  <div className="relative max-w-6xl ml-12 px-6 w-full">
    {/* Logo */}
    <div className="mb-12">
      <img
        src="/images/Simplilearn_Logo.jpg"
        alt="Simplilearn"
        className="h-12 w-auto"
      />
    </div>

        {/* Invite-Only Badge */}
        <div className="flex items-center gap-3 mb-8">
          <span className="bg-cyan-400 text-black font-bold px-4 py-2 text-sm whitespace-nowrap">
            Invite-Only
          </span>
          <span className="text-cyan-200 text-sm">
            An Executive Roundtable · Lunch
          </span>
        </div>

        {/* Main Heading with Border */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span className="text-yellow-400">The Skills That Matter Next:</span>
            <br />
            <span className="text-yellow-300">Preparing Your Workforce</span>
            <br />
            <span className="text-yellow-300">& Leaders for the AI Era</span>
          </h1>

        {/* Date and Location */}
        <div className="space-y-4 text-lg">
          <div className="flex items-center gap-3">
            <span className="text-2xl">📅</span>
            <span className="font-semibold">February 20, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-2xl">📍</span>
            <span className="font-semibold">Chamberlain's Steak & Fish House, Dallas</span>
          </div>
        </div>
      </div>
    </section>
  );
}