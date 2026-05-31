import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}>
              <span className="text-white text-xs" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>LK</span>
            </div>
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.125rem", color: "#0f172a" }}>
              Lo<span style={{ color: "#3B82F6" }}>Kerjain</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {["Fitur", "Program", "Harga", "Tentang"].map((item) => (
              <a
                key={item}
                href="#"
                className="transition-colors duration-200 hover:text-blue-500"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#374151" }}
              >
                {item}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "#3B82F6" }}
              className="px-4 py-2 rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors duration-200"
            >
              Masuk
            </button>
            <button
              style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.875rem", background: "linear-gradient(135deg, #3B82F6, #2563EB)", color: "white" }}
              className="px-5 py-2 rounded-xl shadow-sm hover:shadow-md transition-all duration-200"
            >
              Mulai Gratis
            </button>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            {["Fitur", "Program", "Harga", "Tentang"].map((item) => (
              <a
                key={item}
                href="#"
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#374151" }}
                className="py-2 hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <button
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "#3B82F6" }}
                className="flex-1 py-2 rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors"
              >
                Masuk
              </button>
              <button
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.875rem", background: "linear-gradient(135deg, #3B82F6, #2563EB)", color: "white" }}
                className="flex-1 py-2 rounded-xl"
              >
                Mulai Gratis
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
