"use client";
import {submitRSVP} from "@/app/actions/submit";
import {Mail} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-gray-800 text-white py-16">
      {/* Background image placeholder */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-700/80">
        {/* Add your background image here */}
                  <div  className="absolute inset-0 bg-cover bg-center" style = {{backgroundImage: "url('/images/Mask.png')"}} />

      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Top section with form */}
        <div className="mb-16">
          <h3 className="text-white text-xl font-semibold mb-4">
            Space is limited.
          </h3>
          
        <form action = {submitRSVP} className = "space-y-2 ml-1">
            <input
                name = "email"
                type="email"
                placeholder = "📧Enter your work email to confirm your attendence"
                className="border p-3 w-md border-gray-400 text-gray-400 bg-white/75 placeholder-gray-400"
                required
            />
                          <button
                type="submit"
                className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 py-3 rounded whitespace-nowrap ml-6"
              >
                RSVP Now
              </button>  
        </form>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/20">
          {/* Logo placeholder */}
          <div className="text-2xl font-bold">
            {/* Add Simplilearn logo here */}
<img 
  src="/images/Simplilearn_Logo.jpg" 
  alt="Simplilearn" 
  className="h-12 w-auto"
/>
          </div>

          {/* Copyright */}
          <p className="text-sm text-white/80">
            © 2009-2025 - Simplilearn Solutions. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}