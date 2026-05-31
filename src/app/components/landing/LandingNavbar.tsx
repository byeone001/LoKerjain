import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import logoImg from "../../../imports/Logo_LoKerjain_2.png";

const NAV_ITEMS = ["Fitur", "Program", "Harga", "Tentang"];

export function LandingNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.05)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="flex items-center justify-between transition-all duration-300"
          style={{ height: scrolled ? "56px" : "68px" }}
        >
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logoImg}
              alt="LoKerjain"
              style={{
                height: scrolled ? "28px" : "32px",
                width: "auto",
                objectFit: "contain",
                transition: "height 0.3s ease",
              }}
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="relative group transition-colors duration-200 hover:text-blue-500"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#374151" }}
              >
                {item}
                <span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg, #3B82F6, #00A8A8)" }}
                />
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/home"
              className="px-4 py-2 rounded-xl border transition-all duration-200 hover:bg-blue-50"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "#3B82F6", borderColor: "rgba(59,130,246,0.25)" }}
            >
              Masuk
            </Link>
            <Link
              to="/home"
              className="hover:opacity-90 hover:shadow-lg transition-all duration-200"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "0.875rem",
                background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                color: "white",
                borderRadius: "12px",
                padding: "8px 20px",
                boxShadow: "0 4px 14px rgba(59,130,246,0.35)",
                display: "inline-block",
              }}
            >
              Mulai Gratis
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <a
                key={item}
                href="#"
                className="py-2 hover:text-blue-500 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.9rem", color: "#374151" }}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <Link
                to="/home"
                className="flex-1 py-2 text-center rounded-xl border border-blue-200 hover:bg-blue-50 transition-colors"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.875rem", color: "#3B82F6" }}
                onClick={() => setIsOpen(false)}
              >
                Masuk
              </Link>
              <Link
                to="/home"
                className="flex-1 py-2 text-center rounded-xl"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem", background: "linear-gradient(135deg, #3B82F6, #2563EB)", color: "white" }}
                onClick={() => setIsOpen(false)}
              >
                Mulai Gratis
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
