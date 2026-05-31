import { useState } from "react";
import { GraduationCap, Compass, Zap, ArrowRight, Users, Brain, Target, Sparkles } from "lucide-react";
import { motion } from "motion/react";

/* ─── SVG Visualizations ─── */

function CareerPivotViz() {
  const metrics = [
    { label: "Skill Fit", value: 92, color: "#3B82F6", r: 88 },
    { label: "Career Alignment", value: 87, color: "#7C4DFF", r: 68 },
    { label: "Market Growth", value: 74, color: "#00A8A8", r: 48 },
    { label: "Salary Potential", value: 81, color: "#60A5FA", r: 28 },
  ];
  const CX = 130, CY = 130;

  return (
    <div
      className="relative w-full h-full flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #1e1b4b 0%, #1e3a8a 55%, #0f172a 100%)",
        minHeight: "320px",
      }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative">
        <svg width="260" height="260" viewBox="0 0 260 260">
          {metrics.map((m) => {
            const circ = 2 * Math.PI * m.r;
            const dash = circ * (m.value / 100);
            return (
              <g key={m.label}>
                <circle cx={CX} cy={CY} r={m.r} fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="11" />
                <circle
                  cx={CX} cy={CY} r={m.r} fill="none"
                  stroke={m.color} strokeWidth="11"
                  strokeLinecap="round"
                  strokeDasharray={`${dash} ${circ}`}
                  transform={`rotate(-90 ${CX} ${CY})`}
                  style={{ filter: `drop-shadow(0 0 7px ${m.color}90)` }}
                />
              </g>
            );
          })}
          {/* Center circle */}
          <circle cx={CX} cy={CY} r="22" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          <text x={CX} y={CY - 4} textAnchor="middle" fill="white" style={{ fontSize: "10px", fontWeight: 700, fontFamily: "Inter, sans-serif" }}>AI</text>
          <text x={CX} y={CY + 8} textAnchor="middle" fill="rgba(255,255,255,0.45)" style={{ fontSize: "7px", fontFamily: "Inter, sans-serif" }}>Analysis</text>
        </svg>

        {/* Floating value labels */}
        <div className="absolute" style={{ top: "8px", right: "-28px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", color: "#7C4DFF", fontWeight: 700 }}>87%</span>
        </div>
        <div className="absolute" style={{ top: "32px", left: "-36px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", color: "#3B82F6", fontWeight: 700 }}>92%</span>
        </div>
        <div className="absolute" style={{ bottom: "32px", left: "-36px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", color: "#00A8A8", fontWeight: 700 }}>74%</span>
        </div>
        <div className="absolute" style={{ bottom: "8px", right: "-28px" }}>
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.68rem", color: "#60A5FA", fontWeight: 700 }}>81%</span>
        </div>
      </div>

      {/* Legend */}
      <div className="relative flex flex-wrap gap-3 justify-center mt-3 px-6">
        {metrics.map((m) => (
          <div key={m.label} className="flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full" style={{ background: m.color, boxShadow: `0 0 5px ${m.color}` }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.62rem", color: "rgba(255,255,255,0.55)" }}>{m.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function JobConnectViz() {
  const jobs = [
    { title: "Senior Frontend Dev", company: "Tokopedia", abbr: "T", color: "#00AE68", match: 94 },
    { title: "Data Scientist", company: "GoJek", abbr: "G", color: "#22C55E", match: 87 },
    { title: "Product Manager", company: "Shopee", abbr: "S", color: "#EE4D2D", match: 82 },
  ];

  return (
    <div
      className="relative w-full h-full flex flex-col justify-center px-8 py-8 gap-4"
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 80%, #0f172a 100%)",
        minHeight: "320px",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative">
        <p className="mb-4 text-center" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.35)", textTransform: "uppercase", letterSpacing: "0.12em" }}>
          AI Match Results
        </p>
        <div className="flex flex-col gap-3">
          {jobs.map((job, i) => {
            const r = 17;
            const circ = 2 * Math.PI * r;
            const dash = circ * (job.match / 100);
            return (
              <div
                key={job.title}
                className="flex items-center gap-4 rounded-2xl p-3.5 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  transform: `translateX(${i * 10}px)`,
                }}
              >
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center text-white shrink-0"
                  style={{ background: job.color, fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.8rem" }}
                >
                  {job.abbr}
                </div>
                <div className="flex-1 min-w-0">
                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.78rem", color: "white", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {job.title}
                  </p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.65rem", color: "rgba(255,255,255,0.4)" }}>
                    {job.company}
                  </p>
                </div>
                {/* Progress ring */}
                <div className="relative w-10 h-10 shrink-0">
                  <svg viewBox="0 0 40 40" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
                    <circle cx="20" cy="20" r={r} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="3.5" />
                    <circle
                      cx="20" cy="20" r={r} fill="none"
                      stroke={job.color} strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray={`${dash} ${circ}`}
                      style={{ filter: `drop-shadow(0 0 4px ${job.color}90)` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.5rem", color: "white" }}>
                      {job.match}%
                    </span>
                  </div>
                </div>
                <Sparkles size={14} style={{ color: "#3B82F6", flexShrink: 0 }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ─── Feature data ─── */

const features = [
  {
    id: "lokerjain-up",
    icon: GraduationCap,
    accentIcon: Users,
    tag: "Upskilling Platform",
    name: "LoKerjain-Up",
    tagline: "Tingkatkan Kesiapan Kerja Digital Anda",
    description:
      "Program pelatihan intensif berbasis experiential learning untuk meningkatkan workforce readiness talenta. Kurikulum tercurasi sesuai standar industri dipadukan proyek nyata dari mitra industri, berfokus pada penguasaan Digital Communication & Collaboration (DCC) serta Digital Creativity & Production (DCP). Hasilnya: Portofolio Digital Terverifikasi yang divalidasi langsung oleh praktisi industri sebagai bukti sahih kemampuan siap kerja.",
    highlights: ["Kurikulum sesuai standar industri", "Proyek nyata dari mitra industri", "Penguasaan DCC & DCP", "Portofolio Digital Terverifikasi"],
    color: "#3B82F6",
    bg: "#EFF6FF",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwZW9wbGUlMjB3b3JraW5nJTIwdGVjaG5vbG9neSUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3ODAwNDU5MTR8MA&ixlib=rb-4.1.0&q=80&w=600",
    vizType: "photo",
  },
  {
    id: "career-pivot",
    icon: Compass,
    accentIcon: Brain,
    tag: "AI Career Tool",
    name: "Career-Pivot AI",
    tagline: "Temukan Arah Baru Karier Anda",
    description:
      "Mesin AI LoKerjain bekerja secara personal melalui tiga tahap: menganalisis profil, keterampilan, dan pengalaman masa lalu Anda; mengukur kedekatan rumpun keahlian lama dengan keahlian baru secara akurat; lalu mengidentifikasi sektor industri dan peran pekerjaan yang sedang tumbuh positif. Outputnya adalah rekomendasi jalur transisi karier yang jelas, relevan, dan realistis — membawa Anda dari sektor yang lesu menuju masa depan yang lebih cerah.",
    highlights: ["Analisis profil & pengalaman personal", "Pemetaan Skill-Relatedness akurat", "Identifikasi sektor industri tumbuh", "Rekomendasi jalur transisi personal"],
    color: "#7C4DFF",
    bg: "#F5F3FF",
    gradient: "linear-gradient(135deg, #7C4DFF 0%, #6D28D9 100%)",
    imageUrl: "",
    vizType: "radial",
  },
  {
    id: "job-connect",
    icon: Zap,
    accentIcon: Target,
    tag: "Smart Matchmaking",
    name: "Job-Connect",
    tagline: "Muara Ekosistem: Talenta Bertemu Industri",
    description:
      "Pilar ketiga yang mempertemukan talenta siap kerja dengan industri secara presisi. Algoritma AI mencocokkan kebutuhan perusahaan berdasarkan portofolio digital relevan kandidat — bukan sekadar kata kunci resume. Perusahaan mendapat rekrutmen lebih cepat, akurat, dan transparan sehingga memangkas time-to-hire, sementara talenta dinilai secara adil berdasarkan karya nyata mereka.",
    highlights: ["Matching berbasis portofolio digital", "Rekrutmen lebih cepat & akurat", "Transparansi proses seleksi", "Dinilai dari karya nyata, bukan CV"],
    color: "#00A8A8",
    bg: "#ECFDF5",
    gradient: "linear-gradient(135deg, #00A8A8 0%, #0e7490 100%)",
    imageUrl: "",
    vizType: "rings",
  },
];

/* ─── Main component ─── */

export function FeaturesSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  const cardOffsets = ["mt-0", "mt-6", "mt-3"];

  return (
    <section id="fitur" className="py-24" style={{ background: "#f8faff" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 flex flex-col items-center gap-4"
        >
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200"
            style={{ background: "#EFF6FF" }}
          >
            <Zap size={14} style={{ color: "#3B82F6" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.8rem", color: "#3B82F6" }}>
              Ekosistem Terintegrasi
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#0f172a",
              letterSpacing: "-0.025em",
              lineHeight: "1.2",
            }}
          >
            Tiga Pilar Utama{" "}
            <span style={{ background: "linear-gradient(135deg, #3B82F6, #7C4DFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              LoKerjain
            </span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "1rem", color: "#64748b", maxWidth: "520px", lineHeight: "1.7" }}>
            Solusi komprehensif dari belajar, pivot karier, hingga mendapatkan pekerjaan impian Anda.
          </p>
        </motion.div>

        {/* Staggered cards */}
        <div className="flex flex-col gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const AccentIcon = feature.accentIcon;
            const isEven = index % 2 === 1;
            const isHovered = hovered === feature.id;

            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ scale: 1.012, y: -6 }}
                className={`grid lg:grid-cols-2 gap-0 overflow-hidden cursor-default transition-all duration-300 ${cardOffsets[index]}`}
                style={{
                  borderRadius: "28px",
                  border: isHovered ? `1.5px solid ${feature.color}35` : "1.5px solid rgba(0,0,0,0.06)",
                  background: "white",
                  boxShadow: isHovered
                    ? `0 24px 64px ${feature.color}14, 0 8px 24px rgba(0,0,0,0.06)`
                    : "0 2px 16px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={() => setHovered(feature.id)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Visual side */}
                <div
                  className={`relative overflow-hidden ${isEven ? "lg:order-2" : ""}`}
                  style={{ minHeight: "300px" }}
                >
                  {feature.vizType === "photo" ? (
                    <>
                      <img
                        src={feature.imageUrl}
                        alt={feature.name}
                        className="w-full h-full object-cover transition-transform duration-500"
                        style={{ transform: isHovered ? "scale(1.04)" : "scale(1)" }}
                      />
                      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${feature.color}30, transparent)` }} />
                      {/* Floating tag */}
                      <div
                        className="absolute top-4 left-4 px-3 py-1.5 rounded-full"
                        style={{ background: "rgba(255,255,255,0.92)", backdropFilter: "blur(10px)" }}
                      >
                        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: feature.color }}>
                          {feature.tag}
                        </span>
                      </div>
                    </>
                  ) : feature.vizType === "radial" ? (
                    <CareerPivotViz />
                  ) : (
                    <JobConnectViz />
                  )}

                  {/* Tag overlay for viz types */}
                  {feature.vizType !== "photo" && (
                    <div
                      className="absolute top-4 left-4 px-3 py-1.5 rounded-full"
                      style={{ background: "rgba(255,255,255,0.15)", backdropFilter: "blur(10px)", border: "1px solid rgba(255,255,255,0.2)" }}
                    >
                      <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "rgba(255,255,255,0.9)" }}>
                        {feature.tag}
                      </span>
                    </div>
                  )}
                </div>

                {/* Content side */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center gap-6 ${isEven ? "lg:order-1" : ""}`}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: isHovered ? feature.color : feature.bg,
                        boxShadow: isHovered ? `0 8px 24px ${feature.color}40` : "none",
                      }}
                    >
                      <IconComponent size={22} style={{ color: isHovered ? "white" : feature.color }} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#0f172a", lineHeight: "1.2", letterSpacing: "-0.01em" }}>
                        {feature.name}
                      </h3>
                      <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.875rem", color: feature.color }}>
                        {feature.tagline}
                      </p>
                    </div>
                  </div>

                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.93rem", color: "#64748b", lineHeight: "1.75" }}>
                    {feature.description}
                  </p>

                  {/* Highlights — staggered visual */}
                  <div className="grid grid-cols-2 gap-2">
                    {feature.highlights.map((hl, hi) => (
                      <div
                        key={hl}
                        className="flex items-center gap-2"
                        style={{ transform: `translateY(${hi * 2}px)` }}
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: feature.bg }}
                        >
                          <AccentIcon size={10} style={{ color: feature.color }} />
                        </div>
                        <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#374151" }}>
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="flex items-center gap-2 group/btn w-fit"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.875rem", color: feature.color }}
                  >
                    Pelajari lebih lanjut
                    <ArrowRight size={15} className="group-hover/btn:translate-x-1.5 transition-transform duration-200" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
