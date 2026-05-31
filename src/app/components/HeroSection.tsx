import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const heroImageUrl =
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZW9wbGUlMjB3b3JraW5nJTIwdGVjaG5vbG9neSUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3ODAwNDU5MTR8MA&ixlib=rb-4.1.0&q=80&w=1080";

const stats = [
  { value: "50K+", label: "Pencari Kerja Aktif" },
  { value: "2.400+", label: "Perusahaan Mitra" },
  { value: "98%", label: "Tingkat Kepuasan" },
];

const trust = [
  "Sertifikasi BNSP diakui",
  "Kemitraan Kemenaker RI",
  "Teknologi AI terdepan",
];

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-16 overflow-hidden bg-white">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent)" }}
        />
        <div
          className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-8 blur-3xl"
          style={{ background: "radial-gradient(circle, #93C5FD, transparent)" }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)",
            backgroundSize: "40px 40px",
            opacity: 0.4,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text content */}
          <div className="flex flex-col gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200 w-fit"
              style={{ background: "#EFF6FF" }}>
              <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span
                style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.8rem", color: "#3B82F6" }}
              >
                Platform Ketenagakerjaan #1 Indonesia
              </span>
            </div>

            <div className="flex flex-col gap-4">
              <h1
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(2rem, 4vw, 3.25rem)",
                  lineHeight: "1.15",
                  color: "#0f172a",
                  letterSpacing: "-0.02em",
                }}
              >
                Orkestrator{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Ekosistem
                </span>{" "}
                Ketenagakerjaan Digital Indonesia.
              </h1>
              <p
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 400,
                  fontSize: "1.1rem",
                  lineHeight: "1.7",
                  color: "#64748b",
                }}
              >
                Memulihkan produktivitas nasional melalui inklusivitas dan adaptasi teknologi cerdas.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  background: "linear-gradient(135deg, #3B82F6, #2563EB)",
                  color: "white",
                  borderRadius: "14px",
                  padding: "14px 28px",
                  boxShadow: "0 8px 24px rgba(59, 130, 246, 0.35)",
                }}
                className="flex items-center gap-2 hover:shadow-lg transition-all duration-200 group"
              >
                Mulai Gratis
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontWeight: 600,
                  fontSize: "1rem",
                  color: "#374151",
                  borderRadius: "14px",
                  padding: "14px 28px",
                  border: "1.5px solid #e2e8f0",
                  background: "white",
                }}
                className="flex items-center gap-2 hover:border-blue-300 hover:text-blue-600 transition-all duration-200 group"
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: "#EFF6FF" }}
                >
                  <Play size={12} style={{ color: "#3B82F6", marginLeft: "2px" }} />
                </div>
                Pelajari Program
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {trust.map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 size={16} style={{ color: "#3B82F6", flexShrink: 0 }} />
                  <span
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#64748b" }}
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image + stats */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl"
              style={{
                borderRadius: "24px",
                aspectRatio: "4/3",
              }}
            >
              <img
                src={heroImageUrl}
                alt="Professional working with technology"
                className="w-full h-full object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(180deg, transparent 50%, rgba(15,23,42,0.4) 100%)",
                }}
              />
            </div>

            {/* Floating stats card */}
            <div
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex gap-6"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              {stats.map((stat) => (
                <div key={stat.value} className="flex flex-col items-center">
                  <span
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#0f172a" }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.7rem", color: "#94a3b8", textAlign: "center", maxWidth: "64px" }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2"
              style={{ border: "1px solid rgba(0,0,0,0.06)" }}
            >
              <div
                className="w-8 h-8 rounded-xl flex items-center justify-center"
                style={{ background: "#EFF6FF" }}
              >
                <span style={{ fontSize: "1rem" }}>🤖</span>
              </div>
              <div>
                <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#0f172a" }}>AI-Powered</p>
                <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "#94a3b8" }}>Smart Matching</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
