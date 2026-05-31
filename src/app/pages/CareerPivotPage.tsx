import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Sparkles,
  TrendingUp,
  BookOpen,
  DollarSign,
  Target,
  Play,
  CheckCircle,
  BarChart2,
  Zap,
  Brain,
} from "lucide-react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from "recharts";

const CURRENT_ROLES = [
  "Software Engineer", "Data Analyst", "Marketing Manager", "Product Manager",
  "UI/UX Designer", "Sales Executive", "Finance Analyst", "HR Manager",
  "Content Creator", "Business Analyst",
];

const SKILLS_LIST = [
  "Python", "JavaScript", "SQL", "Excel", "Figma", "Google Analytics",
  "Communication", "Leadership", "Project Management", "Data Visualization",
];

const CAREER_PATHS = [
  {
    title: "AI/ML Engineer",
    match: 92,
    avgSalary: "Rp 28–45jt",
    growth: "+34%",
    timeframe: "6–9 bulan",
    color: "#0F4CFF",
    desc: "Karier dengan pertumbuhan tertinggi di era AI. Kombinasikan skill teknis Anda dengan machine learning.",
    skills: ["Python", "TensorFlow", "PyTorch", "Data Pipeline", "MLOps"],
    gapSkills: ["TensorFlow", "MLOps"],
  },
  {
    title: "Data Science Lead",
    match: 87,
    avgSalary: "Rp 25–40jt",
    growth: "+28%",
    timeframe: "4–6 bulan",
    color: "#00A8A8",
    desc: "Pimpin tim data dan buat keputusan bisnis berbasis insight yang kuat dari data kompleks.",
    skills: ["Python", "ML", "Statistics", "Storytelling", "Leadership"],
    gapSkills: ["Statistics", "Leadership"],
  },
  {
    title: "Product Manager",
    match: 81,
    avgSalary: "Rp 20–35jt",
    growth: "+22%",
    timeframe: "3–4 bulan",
    color: "#7C4DFF",
    desc: "Jadikan jembatan antara teknis dan bisnis. Skill analitis Anda adalah aset besar di sini.",
    skills: ["Product Strategy", "Agile", "Analytics", "Communication", "A/B Testing"],
    gapSkills: ["Product Strategy", "A/B Testing"],
  },
];

const RADAR_DATA = [
  { skill: "Technical", current: 85, target: 95 },
  { skill: "Analytics", current: 75, target: 90 },
  { skill: "Leadership", current: 55, target: 80 },
  { skill: "Business", current: 60, target: 85 },
  { skill: "Communication", current: 70, target: 85 },
  { skill: "Design", current: 40, target: 65 },
];

const SALARY_DATA = [
  { month: "Sekarang", value: 12 },
  { month: "3 Bln", value: 14 },
  { month: "6 Bln", value: 18 },
  { month: "9 Bln", value: 22 },
  { month: "12 Bln", value: 28 },
  { month: "18 Bln", value: 35 },
];

const ROADMAP = [
  { phase: "Fase 1", title: "Fondasi (2 minggu)", items: ["Python Intermediate", "SQL Advanced", "Statistics Dasar"], done: true },
  { phase: "Fase 2", title: "Core Skills (6 minggu)", items: ["Machine Learning Fundamentals", "TensorFlow/Keras", "Data Pipeline"], done: false },
  { phase: "Fase 3", title: "Praktik (4 minggu)", items: ["3 Proyek Portfolio", "Kaggle Competitions", "GitHub Showcase"], done: false },
  { phase: "Fase 4", title: "Sertifikasi (2 minggu)", items: ["Google ML Certificate", "AWS ML Specialty", "TensorFlow Developer"], done: false },
];

export function CareerPivotPage() {
  const [currentRole, setCurrentRole] = useState("Software Engineer");
  const [selectedSkills, setSelectedSkills] = useState<string[]>(["Python", "JavaScript", "SQL"]);
  const [experience, setExperience] = useState("3-5 tahun");
  const [analyzed, setAnalyzed] = useState(false);
  const [activeCareer, setActiveCareer] = useState(CAREER_PATHS[0]);
  const [loading, setLoading] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  const toggleSkill = (s: string) =>
    setSelectedSkills((prev) => (prev.includes(s) ? prev.filter((x) => x !== s) : [...prev, s]));

  const handleAnalyze = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setAnalyzed(true);
    }, 1800);
  };

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 70%, #312E81 100%)" }}
      >
        {/* Floating orb layers */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-60px",
            left: "-80px",
            width: "360px",
            height: "360px",
            background: "radial-gradient(circle, rgba(15,76,255,0.45) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-40px",
            right: "-60px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(124,77,255,0.4) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-40px",
            left: "40%",
            width: "260px",
            height: "260px",
            background: "radial-gradient(circle, rgba(0,168,168,0.35) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Dot mesh overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4 text-xs" style={{ background: "rgba(124,77,255,0.2)", color: "#C4B5FD", border: "1px solid rgba(124,77,255,0.3)" }}>
            <Brain className="w-3.5 h-3.5" /> Powered by LokerjainAI
          </div>
          <h1 className="text-3xl md:text-5xl mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#fff" }}>
            Career Pivot AI
          </h1>
          <p className="text-blue-200 max-w-xl mx-auto">
            Analisis mendalam berbasis AI untuk menemukan jalur karier terbaik sesuai profil dan tujuan Anda.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" style={{ background: "#f8faff" }}>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Input Panel */}
          <div className="lg:col-span-2">
            <div
              className="bg-white sticky top-20"
              style={{
                borderRadius: "1.5rem",
                padding: "1.5rem",
                boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                border: "1px solid rgba(0,0,0,0.05)",
              }}
            >
              <h2 className="font-semibold mb-5" style={{ fontFamily: "Poppins, sans-serif", color: "#0F172A" }}>Profil Saya</h2>

              <div className="space-y-5">
                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-2">Pekerjaan Saat Ini</label>
                  <select
                    value={currentRole}
                    onChange={(e) => setCurrentRole(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border text-sm outline-none"
                    style={{ borderColor: "#E2E8F0", color: "#0F172A" }}
                  >
                    {CURRENT_ROLES.map((r) => <option key={r}>{r}</option>)}
                  </select>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-2">Pengalaman Kerja</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["< 1 tahun", "1-3 tahun", "3-5 tahun", "5-8 tahun", "8-10 tahun", "10+ tahun"].map((e) => (
                      <button
                        key={e}
                        onClick={() => setExperience(e)}
                        className="px-2 py-2 text-xs font-medium transition-all"
                        style={
                          experience === e
                            ? { background: "#0F4CFF", color: "#fff", borderRadius: "1rem" }
                            : { background: "#F8FAFC", color: "#64748B", border: "1px solid #E2E8F0", borderRadius: "1rem" }
                        }
                      >
                        {e}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-2">
                    Skills Anda ({selectedSkills.length} dipilih)
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {SKILLS_LIST.map((s) => (
                      <button
                        key={s}
                        onClick={() => toggleSkill(s)}
                        className="px-3 py-1 text-xs font-medium transition-all"
                        style={
                          selectedSkills.includes(s)
                            ? { background: "#0F4CFF", color: "#fff", borderRadius: "1rem" }
                            : { background: "#F1F5F9", color: "#64748B", borderRadius: "1rem" }
                        }
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-500 uppercase tracking-wider block mb-2">Minat Industri</label>
                  <input
                    type="text"
                    placeholder="Mis. Teknologi, Fintech, Healthcare..."
                    className="w-full px-3 py-2.5 rounded-xl border text-sm outline-none"
                    style={{ borderColor: "#E2E8F0" }}
                  />
                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={loading}
                  className="w-full py-3 rounded-xl text-white font-medium text-sm transition-all hover:opacity-90 flex items-center justify-center gap-2"
                  style={{
                    background: loading ? "#94A3B8" : "linear-gradient(135deg, #0F4CFF, #7C4DFF)",
                    boxShadow: loading ? "none" : "0 8px 24px rgba(15,76,255,0.3)",
                  }}
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Menganalisis...
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      Analisis Karier Saya
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Results Panel */}
          <div className="lg:col-span-3 space-y-6">
            {!analyzed ? (
              <div
                className="bg-white p-12 text-center"
                style={{
                  borderRadius: "1.5rem",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
                  border: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="w-20 h-20 mx-auto mb-4 flex items-center justify-center"
                  style={{
                    borderRadius: "1.5rem",
                    background: "linear-gradient(135deg, #f0f4ff, #faf5ff)",
                  }}
                >
                  <Brain className="w-10 h-10" style={{ color: "#0F4CFF" }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Siap Menganalisis Karier Anda</h3>
                <p className="text-sm text-gray-500">Isi profil Anda di sebelah kiri, lalu klik "Analisis Karier Saya" untuk mendapatkan rekomendasi AI yang personal.</p>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Recommended Career Paths */}
                <div
                  className="bg-white p-6"
                  style={{
                    borderRadius: "1.5rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <Target className="w-5 h-5" style={{ color: "#0F4CFF" }} />
                    <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Jalur Karier yang Direkomendasikan</h3>
                  </div>
                  <div className="space-y-3">
                    {CAREER_PATHS.map((path) => {
                      const isActive = activeCareer.title === path.title;
                      const isHovered = hoveredPath === path.title;
                      return (
                        <div
                          key={path.title}
                          onClick={() => setActiveCareer(path)}
                          onMouseEnter={() => setHoveredPath(path.title)}
                          onMouseLeave={() => setHoveredPath(null)}
                          className="p-4 cursor-pointer transition-all duration-300 border-2"
                          style={{
                            borderRadius: "0.75rem",
                            borderColor: isActive ? path.color : isHovered ? `${path.color}50` : "transparent",
                            background: isActive ? `${path.color}08` : "#F8FAFC",
                            boxShadow: isHovered || isActive ? `0 8px 32px ${path.color}20` : "none",
                          }}
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-semibold text-sm" style={{ color: "#0F172A" }}>{path.title}</h4>
                                <span className="px-2 py-0.5 rounded-full text-xs font-bold" style={{ background: `${path.color}15`, color: path.color }}>
                                  {path.match}% Match
                                </span>
                              </div>
                              <p className="text-xs text-gray-500 mb-2">{path.desc}</p>
                              <div className="flex gap-3 text-xs">
                                <span className="flex items-center gap-1 text-gray-500"><DollarSign className="w-3 h-3" />{path.avgSalary}</span>
                                <span className="flex items-center gap-1 text-gray-500"><TrendingUp className="w-3 h-3" style={{ color: "#22C55E" }} />{path.growth} growth</span>
                                <span className="flex items-center gap-1 text-gray-500"><Zap className="w-3 h-3" style={{ color: "#F59E0B" }} />{path.timeframe}</span>
                              </div>
                            </div>
                            {/* SVG Progress Ring */}
                            <div className="relative w-12 h-12 shrink-0">
                              <svg viewBox="0 0 48 48" className="w-full h-full" style={{ transform: "rotate(-90deg)" }}>
                                <circle cx="24" cy="24" r="18" fill="none" stroke={`${path.color}20`} strokeWidth="4" />
                                <circle
                                  cx="24" cy="24" r="18"
                                  fill="none"
                                  stroke={path.color}
                                  strokeWidth="4"
                                  strokeLinecap="round"
                                  strokeDasharray={`${2 * Math.PI * 18 * (path.match / 100)} ${2 * Math.PI * 18}`}
                                  style={{ filter: `drop-shadow(0 0 4px ${path.color}80)` }}
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.6rem", color: path.color }}>{path.match}%</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Skill Analysis & Salary Projection */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div
                    className="bg-white p-6"
                    style={{
                      borderRadius: "1.5rem",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <h3 className="font-semibold mb-4 text-sm" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Analisis Skill Gap</h3>
                    <ResponsiveContainer width="100%" height={220}>
                      <RadarChart data={RADAR_DATA}>
                        <PolarGrid stroke="#E2E8F0" />
                        <PolarAngleAxis dataKey="skill" tick={{ fontSize: 10, fill: "#64748B" }} />
                        <Radar name="Saat ini" dataKey="current" stroke="#0F4CFF" fill="#0F4CFF" fillOpacity={0.15} />
                        <Radar name="Target" dataKey="target" stroke="#7C4DFF" fill="#7C4DFF" fillOpacity={0.1} strokeDasharray="4 4" />
                      </RadarChart>
                    </ResponsiveContainer>
                    <div className="flex gap-4 justify-center mt-2">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <div className="w-3 h-0.5 rounded" style={{ background: "#0F4CFF" }} /> Saat Ini
                      </div>
                      <div className="flex items-center gap-1.5 text-xs text-gray-500">
                        <div className="w-3 h-0.5 rounded border-t-2 border-dashed" style={{ borderColor: "#7C4DFF" }} /> Target
                      </div>
                    </div>
                  </div>

                  <div
                    className="bg-white p-6"
                    style={{
                      borderRadius: "1.5rem",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <h3 className="font-semibold mb-4 text-sm" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Proyeksi Gaji (Juta IDR)</h3>
                    <ResponsiveContainer width="100%" height={220}>
                      <BarChart data={SALARY_DATA} barSize={24}>
                        <XAxis dataKey="month" tick={{ fontSize: 10, fill: "#64748B" }} axisLine={false} tickLine={false} />
                        <YAxis tick={{ fontSize: 10, fill: "#64748B" }} axisLine={false} tickLine={false} />
                        <Tooltip formatter={(v) => [`Rp ${v}jt`, "Gaji"]} />
                        <Bar dataKey="value" radius={[6, 6, 0, 0]}>
                          {SALARY_DATA.map((_, i) => (
                            <Cell key={`salary-cell-${i}`} fill={i === 0 ? "#CBD5E1" : i < 3 ? "#93C5FD" : "#0F4CFF"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Skill Gap Details */}
                <div
                  className="bg-white p-6"
                  style={{
                    borderRadius: "1.5rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <BookOpen className="w-5 h-5" style={{ color: "#0F4CFF" }} />
                    <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
                      Skill yang Perlu Ditingkatkan untuk {activeCareer.title}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {activeCareer.skills.map((s) => {
                      const isGap = activeCareer.gapSkills.includes(s);
                      return (
                        <span
                          key={s}
                          className="flex items-center gap-1 px-3 py-1 text-xs font-medium"
                          style={
                            isGap
                              ? { background: "#FFF7ED", color: "#C2410C", border: "1px solid #FED7AA", borderRadius: "1rem" }
                              : { background: "#F0FDF4", color: "#15803D", border: "1px solid #BBF7D0", borderRadius: "1rem" }
                          }
                        >
                          {isGap ? <Zap className="w-3 h-3" /> : <CheckCircle className="w-3 h-3" />}
                          {s}
                        </span>
                      );
                    })}
                  </div>
                  <div className="p-4 rounded-xl" style={{ background: "#F8FAFC" }}>
                    <p className="text-sm text-gray-600 mb-1">
                      <span style={{ color: "#22C55E" }}>●</span> Skills yang sudah kamu miliki &nbsp;
                      <span style={{ color: "#F97316" }}>●</span> Skills yang perlu ditingkatkan
                    </p>
                  </div>
                </div>

                {/* Learning Roadmap */}
                <div
                  className="bg-white p-6"
                  style={{
                    borderRadius: "1.5rem",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    border: "1px solid rgba(0,0,0,0.05)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-5">
                    <TrendingUp className="w-5 h-5" style={{ color: "#0F4CFF" }} />
                    <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Learning Roadmap Personalisasi</h3>
                  </div>
                  <div className="space-y-4">
                    {ROADMAP.map((phase, i) => (
                      <div key={phase.phase} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div
                            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                            style={{
                              background: phase.done ? "#0F4CFF" : "#F1F5F9",
                              color: phase.done ? "#fff" : "#94A3B8",
                              boxShadow: phase.done ? "0 0 0 4px rgba(15,76,255,0.15)" : "none",
                            }}
                          >
                            {phase.done ? <CheckCircle className="w-4 h-4" /> : i + 1}
                          </div>
                          {i < ROADMAP.length - 1 && <div className="w-0.5 h-full mt-1" style={{ background: phase.done ? "#0F4CFF" : "#E2E8F0" }} />}
                        </div>
                        <div
                          className="pb-4 flex-1 rounded-2xl p-3 transition-all duration-200 hover:bg-slate-50"
                        >
                          <p className="text-xs font-medium mb-0.5" style={{ color: "#0F4CFF" }}>{phase.phase}</p>
                          <h4 className="font-semibold text-sm mb-2" style={{ color: "#0F172A" }}>{phase.title}</h4>
                          <div className="flex flex-wrap gap-1.5">
                            {phase.items.map((item) => (
                              <span key={item} className="px-2 py-0.5 rounded text-xs" style={{ background: "#F1F5F9", color: "#64748B" }}>{item}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/learning"
                    className="mt-4 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                    style={{
                      background: "linear-gradient(135deg, #0F4CFF, #1A73E8)",
                      color: "#fff",
                      boxShadow: "0 8px 24px rgba(15,76,255,0.3)",
                    }}
                  >
                    <Play className="w-4 h-4" />
                    Mulai Belajar di LokerjainUp
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
