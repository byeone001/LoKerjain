import { useState } from "react";
import { Link, NavLink } from "react-router";
import { Menu, X, Sparkles, Bell } from "lucide-react";

import logoImg from "../../../imports/Logo_LoKerjain_2.png";

const NAV_LINKS = [
  { to: "/home", label: "Cari Kerja", exact: false },
  { to: "/career-pivot", label: "Career Pivot AI" },
  { to: "/learning", label: "LoKerjainUp" },
  { to: "/companies", label: "Job-Connect" },
  { to: "/community", label: "Komunitas" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={logoImg}
              alt="LoKerjain"
              style={{ height: "34px", width: "auto", objectFit: "contain" }}
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.exact}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-lg text-sm transition-all ${
                    isActive
                      ? "text-blue-600 bg-blue-50 font-medium"
                      : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  }`
                }
              >
                {link.label === "Career Pivot AI" ? (
                  <span className="flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    {link.label}
                  </span>
                ) : (
                  link.label
                )}
              </NavLink>
            ))}
          </nav>

          {/* Profile */}
          <div className="hidden md:flex items-center gap-2">
            <button className="relative p-2 rounded-xl hover:bg-gray-50 transition-colors">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: "#0F4CFF" }} />
            </button>
            <Link to="/candidate" className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-gray-50 transition-colors">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs" style={{ background: "linear-gradient(135deg, #0F4CFF, #7C4DFF)", fontFamily: "Poppins", fontWeight: 700 }}>
                BS
              </div>
              <div className="text-left">
                <p className="text-sm leading-tight" style={{ fontFamily: "Poppins", fontWeight: 600, color: "#0F172A" }}>Budi Santoso</p>
                <p className="text-xs text-gray-400 leading-tight">Pencari Kerja</p>
              </div>
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-1" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.exact}
              className={({ isActive }) =>
                `block px-3 py-2.5 rounded-lg text-sm ${
                  isActive ? "text-blue-600 bg-blue-50 font-medium" : "text-gray-600"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/candidate"
            className="flex items-center gap-3 pt-3 border-t"
            style={{ borderColor: "rgba(0,0,0,0.07)" }}
            onClick={() => setMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs shrink-0" style={{ background: "linear-gradient(135deg, #0F4CFF, #7C4DFF)", fontFamily: "Poppins", fontWeight: 700 }}>
              BS
            </div>
            <div>
              <p className="text-sm" style={{ fontFamily: "Poppins", fontWeight: 600, color: "#0F172A" }}>Budi Santoso</p>
              <p className="text-xs text-gray-400">Pencari Kerja</p>
            </div>
          </Link>
        </div>
      )}
    </header>
  );
}
