import { useState } from "react";
import { ArrowRight, CheckCircle2, Search, MapPin, ChevronDown } from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

const heroImageUrl =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3b3JraW5nJTIwdGVjaG5vbG9neSUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3ODAwNDU5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { value: "50K+", label: "Pencari Kerja" },
  { value: "2.400+", label: "Perusahaan Mitra" },
  { value: "98%", label: "Kepuasan" },
];

const trust = [
  "Sertifikasi BNSP diakui",
  "Kemitraan Kemenaker RI",
  "Teknologi AI terdepan",
];

export function HeroSection() {
  const [searchFocused, setSearchFocused] = useState(false);
  const [locationFocused, setLocationFocused] = useState(false);
  const glowing = searchFocused || locationFocused;

  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-white">
      {/* Layer 1 — dot mesh */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
          backgroundSize: "36px 36px",
          opacity: 0.55,
          zIndex: 0,
        }}
      />

      {/* Layer 2 — floating color orbs (parallax-ready, each independent) */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div
          className="absolute"
          style={{
            top: "-10%", right: "-5%",
            width: "640px", height: "640px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(59,130,246,0.13) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        <div
          className="absolute"
          style={{
            bottom: "-8%", left: "-8%",
            width: "520px", height: "520px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,168,168,0.1) 0%, transparent 70%)",
            filter: "blur(48px)",
          }}
        />
        <div
          className="absolute"
          style={{
            top: "40%", left: "38%",
            width: "320px", height: "320px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,77,255,0.07) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* Layer 3 — content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24" style={{ zIndex: 1 }}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── Left column ── */}
          <div className="flex flex-col gap-7">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 w-fit"
              style={{ background: "#EFF6FF" }}
            >
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#3B82F6" }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.8rem", color: "#3B82F6" }}>
                Platform Ketenagakerjaan #1 Indonesia
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex flex-col gap-4"
            >
              <h1
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  lineHeight: "1.13",
                  color: "#0f172a",
                  letterSpacing: "-0.025em",
                }}
              >
                Orkestrator{" "}
                <span style={{ background: "linear-gradient(135deg, #3B82F6, #7C4DFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                  Ekosistem
                </span>{" "}
                Ketenagakerjaan Digital Indonesia.
              </h1>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "1.05rem", lineHeight: "1.75", color: "#64748b" }}>
                Memulihkan produktivitas nasional melalui inklusivitas dan adaptasi teknologi cerdas.
              </p>
            </motion.div>

            {/* Search bar with glow focus */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="transition-all duration-300"
              style={{
                background: "white",
                borderRadius: "20px",
                border: glowing ? "1.5px solid #3B82F6" : "1.5px solid #e2e8f0",
                boxShadow: glowing
                  ? "0 0 0 5px rgba(59,130,246,0.1), 0 8px 40px rgba(59,130,246,0.18)"
                  : "0 4px 20px rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex flex-col sm:flex-row">
                <div className="flex items-center gap-3 flex-1 px-5 py-4">
                  <Search size={17} style={{ color: searchFocused ? "#3B82F6" : "#94a3b8", flexShrink: 0, transition: "color 0.2s" }} />
                  <input
                    type="text"
                    placeholder="Posisi atau skill (mis. Product Manager)"
                    onFocus={() => setSearchFocused(true)}
                    onBlur={() => setSearchFocused(false)}
                    className="flex-1 outline-none bg-transparent"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#0f172a" }}
                  />
                </div>
                <div className="hidden sm:block w-px bg-gray-100 my-3" />
                <div className="flex items-center gap-3 flex-1 px-5 py-4">
                  <MapPin size={17} style={{ color: locationFocused ? "#3B82F6" : "#94a3b8", flexShrink: 0, transition: "color 0.2s" }} />
                  <input
                    type="text"
                    placeholder="Lokasi (mis. Jakarta, Remote)"
                    onFocus={() => setLocationFocused(true)}
                    onBlur={() => setLocationFocused(false)}
                    className="flex-1 outline-none bg-transparent"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#0f172a" }}
                  />
                </div>
                <div className="px-3 py-3">
                  <Link
                    to="/home"
                    className="flex items-center gap-2 px-6 py-2.5 rounded-2xl text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg"
                    style={{
                      background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.875rem",
                      boxShadow: "0 4px 14px rgba(59,130,246,0.38)",
                      whiteSpace: "nowrap",
                    }}
                  >
                    Cari Kerja <ArrowRight size={15} />
                  </Link>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={15} style={{ color: "#3B82F6", flexShrink: 0 }} />
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#64748b" }}>
                    {item}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative"
          >
            {/* Main image */}
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: "28px", aspectRatio: "4/3" }}
            >
              <img
                src={heroImageUrl}
                alt="Professional working with technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.35) 100%)" }} />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white flex gap-5 px-5 py-4"
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              {stats.map((stat, i) => (
                <div key={stat.value} className="flex flex-col items-center" style={{ borderLeft: i > 0 ? "1px solid #f1f5f9" : "none", paddingLeft: i > 0 ? "16px" : "0" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#0f172a" }}>
                    {stat.value}
                  </span>
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#94a3b8", textAlign: "center", maxWidth: "60px" }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* Floating AI badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7, type: "spring", stiffness: 200 }}
              className="absolute -top-4 -right-4 bg-white flex items-center gap-2 px-4 py-3"
              style={{
                borderRadius: "18px",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 16px 48px rgba(0,0,0,0.08)",
              }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #EFF6FF, #DBEAFE)" }}>
                <span style={{ fontSize: "1rem" }}>🤖</span>
              </div>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#0f172a" }}>AI-Powered</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#94a3b8" }}>Smart Matching</p>
              </div>
            </motion.div>

            {/* Floating match ring card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="absolute bg-white flex items-center gap-3 px-4 py-3"
              style={{
                top: "50%",
                right: "-52px",
                transform: "translateY(-50%)",
                borderRadius: "16px",
                border: "1px solid rgba(59,130,246,0.18)",
                boxShadow: "0 8px 32px rgba(59,130,246,0.12)",
              }}
            >
              <div className="relative w-11 h-11 shrink-0">
                <svg viewBox="0 0 44 44" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
                  <circle cx="22" cy="22" r="17" fill="none" stroke="#EFF6FF" strokeWidth="4" />
                  <circle
                    cx="22" cy="22" r="17" fill="none" stroke="#3B82F6" strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${2 * Math.PI * 17 * 0.94} ${2 * Math.PI * 17}`}
                    style={{ filter: "drop-shadow(0 0 4px rgba(59,130,246,0.6))" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.55rem", color: "#3B82F6" }}>94%</span>
                </div>
              </div>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "#0f172a" }}>AI Match</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.62rem", color: "#94a3b8" }}>Score</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll hint — Layer 4 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5" style={{ zIndex: 1 }}>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "#b0bec5", fontWeight: 400, letterSpacing: "0.04em" }}>
          Scroll untuk menjelajahi
        </p>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} style={{ color: "#b0bec5" }} />
        </motion.div>
      </div>
    </section>
  );
}
