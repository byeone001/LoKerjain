import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Sparkles,
  CheckCircle,
  Circle,
  MapPin,
  Clock,
  ChevronRight,
  TrendingUp,
  Zap,
  Star,
  Award,
  BarChart2,
  Activity,
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

const PROFILE_ITEMS = [
  { label: "Informasi Dasar", done: true },
  { label: "Pengalaman Kerja", done: true },
  { label: "Pendidikan", done: true },
  { label: "Skills & Keahlian", done: true },
  { label: "Portfolio", done: false },
  { label: "Sertifikasi", done: false },
];

const SKILL_VERIFICATIONS = [
  { skill: "React.js", status: "verified", score: 92 },
  { skill: "TypeScript", status: "verified", score: 88 },
  { skill: "Python", status: "pending", score: 0 },
  { skill: "SQL", status: "verified", score: 85 },
  { skill: "Node.js", status: "not-started", score: 0 },
];

const RECOMMENDED_JOBS = [
  { title: "Senior Frontend Developer", company: "Tokopedia", abbr: "T", color: "#00AE68", match: 94, salary: "Rp 15–25jt", mode: "Hybrid", location: "Jakarta" },
  { title: "React Native Developer", company: "GoJek", abbr: "G", color: "#00AA13", match: 91, salary: "Rp 18–28jt", mode: "Remote", location: "Jakarta" },
  { title: "Full Stack Engineer", company: "Shopee", abbr: "S", color: "#EE4D2D", match: 87, salary: "Rp 16–26jt", mode: "Hybrid", location: "Jakarta" },
  { title: "Frontend Lead", company: "OVO", abbr: "O", color: "#4B2177", match: 83, salary: "Rp 22–35jt", mode: "Full Remote", location: "Jakarta" },
  { title: "Software Engineer", company: "Lazada", abbr: "Lz", color: "#F57224", match: 81, salary: "Rp 14–22jt", mode: "Hybrid", location: "Jakarta" },
  { title: "Frontend Developer", company: "Tiket.com", abbr: "Tk", color: "#E74694", match: 79, salary: "Rp 13–20jt", mode: "Remote", location: "Bali" },
  { title: "UI Engineer", company: "KAI", abbr: "KAI", color: "#003580", match: 76, salary: "Rp 12–18jt", mode: "On-site", location: "Bandung" },
  { title: "Mobile Developer", company: "Traveloka", abbr: "Tv", color: "#0079FF", match: 75, salary: "Rp 16–24jt", mode: "Hybrid", location: "Jakarta" },
  { title: "Frontend Engineer", company: "Blibli", abbr: "Bl", color: "#0077C8", match: 73, salary: "Rp 13–21jt", mode: "Hybrid", location: "Jakarta" },
  { title: "React Developer", company: "Bukalapak", abbr: "BL", color: "#E31E26", match: 71, salary: "Rp 12–19jt", mode: "Remote", location: "Jakarta" },
  { title: "Web Developer", company: "Pertamina", abbr: "PTM", color: "#009A44", match: 68, salary: "Rp 14–22jt", mode: "On-site", location: "Jakarta" },
  { title: "Software Developer", company: "BCA Digital", abbr: "BCA", color: "#005BAC", match: 66, salary: "Rp 15–23jt", mode: "Hybrid", location: "Jakarta" },
];

const RADAR_SKILLS = [
  { skill: "Frontend", value: 92 },
  { skill: "Backend", value: 65 },
  { skill: "UI/UX", value: 70 },
  { skill: "DevOps", value: 45 },
  { skill: "Mobile", value: 55 },
  { skill: "Testing", value: 60 },
];

const MATCH_DATA = [
  { name: "Technical Skills", score: 92, color: "#0F4CFF" },
  { name: "Experience", score: 85, color: "#7C4DFF" },
  { name: "Soft Skills", score: 78, color: "#00A8A8" },
  { name: "Education", score: 80, color: "#F59E0B" },
  { name: "Portfolio", score: 60, color: "#EF4444" },
];

const completedItems = PROFILE_ITEMS.filter((x) => x.done).length;
const completionPct = Math.round((completedItems / PROFILE_ITEMS.length) * 100);

export function JobConnectPage() {
  const [tab, setTab] = useState<"matches" | "analysis">("matches");

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #00A8A8 100%)" }}
      >
        {/* Background orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-60px",
              width: "340px",
              height: "340px",
              borderRadius: "50%",
              background: "rgba(0,168,168,0.18)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-80px",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              background: "rgba(59,130,246,0.15)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              background: "rgba(124,77,255,0.1)",
              filter: "blur(60px)",
            }}
          />
          {/* Dot mesh */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs"
            style={{ background: "rgba(0,168,168,0.2)", color: "#99F6E4", border: "1px solid rgba(0,168,168,0.3)" }}
          >
            <Activity className="w-3.5 h-3.5" /> Job-Connect AI
          </div>
          <h1
            className="text-3xl md:text-5xl mb-3"
            style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#fff" }}
          >
            AI Matching yang Presisi
          </h1>
          <p className="text-blue-100 max-w-xl mx-auto">
            Sistem AI kami mencocokkan profil Anda secara menyeluruh — bukan hanya kata kunci, tapi konteks dan potensi nyata Anda.
          </p>
        </div>
      </div>

      {/* Content area */}
      <div style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left: Profile & Skills */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {/* Profile Completeness */}
              <div
                className="bg-white p-6"
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <h3 className="font-semibold mb-4" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
                  Kelengkapan Profil
                </h3>
                <div className="relative w-28 h-28 mx-auto mb-4">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90 w-full h-full">
                    <circle cx="50" cy="50" r="38" fill="none" stroke="#F1F5F9" strokeWidth="10" />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      fill="none"
                      stroke="#0F4CFF"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 38 * completionPct / 100} ${2 * Math.PI * 38}`}
                      style={{ filter: "drop-shadow(0 0 6px rgba(15,76,255,0.4))" }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
                      {completionPct}%
                    </span>
                    <span className="text-xs text-gray-400">Lengkap</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {PROFILE_ITEMS.map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-sm">
                      {item.done
                        ? <CheckCircle className="w-4 h-4 shrink-0" style={{ color: "#22C55E" }} />
                        : <Circle className="w-4 h-4 shrink-0 text-gray-300" />
                      }
                      <span style={{ color: item.done ? "#0F172A" : "#94A3B8" }}>{item.label}</span>
                      {!item.done && (
                        <span className="ml-auto text-xs" style={{ color: "#0F4CFF" }}>Lengkapi</span>
                      )}
                    </div>
                  ))}
                </div>
                <button
                  className="mt-4 w-full py-2.5 rounded-xl text-sm font-medium text-white"
                  style={{ background: "linear-gradient(135deg, #0F4CFF, #1A73E8)" }}
                >
                  Lengkapi Profil
                </button>
              </div>

              {/* Skill Verification */}
              <div
                className="bg-white p-6"
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
                    Verifikasi Skill
                  </h3>
                  <span
                    className="text-xs px-2 py-1 rounded-full"
                    style={{ background: "#F0FDF4", color: "#15803D" }}
                  >
                    3/5 Terverifikasi
                  </span>
                </div>
                <div className="space-y-3">
                  {SKILL_VERIFICATIONS.map((sv) => (
                    <div key={sv.skill} className="flex items-center gap-3">
                      <div className="flex-1">
                        <div className="flex items-center justify-between text-sm mb-1">
                          <span className="font-medium" style={{ color: "#0F172A" }}>{sv.skill}</span>
                          {sv.status === "verified" && (
                            <span className="flex items-center gap-1 text-xs" style={{ color: "#22C55E" }}>
                              <CheckCircle className="w-3 h-3" /> {sv.score}
                            </span>
                          )}
                          {sv.status === "pending" && (
                            <span className="text-xs text-yellow-500">Pending</span>
                          )}
                          {sv.status === "not-started" && (
                            <button className="text-xs" style={{ color: "#0F4CFF" }}>Verifikasi</button>
                          )}
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{
                              width:
                                sv.status === "verified"
                                  ? `${sv.score}%`
                                  : sv.status === "pending"
                                  ? "50%"
                                  : "0%",
                              background:
                                sv.status === "verified"
                                  ? "#22C55E"
                                  : sv.status === "pending"
                                  ? "#F59E0B"
                                  : "#E2E8F0",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AI Match Score */}
              <div
                className="rounded-2xl p-6"
                style={{
                  background: "linear-gradient(135deg, #0F4CFF, #7C4DFF)",
                  borderRadius: "24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle orb inside card */}
                <div
                  style={{
                    position: "absolute",
                    top: "-20px",
                    right: "-20px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    filter: "blur(20px)",
                  }}
                />
                <div className="flex items-center gap-2 mb-3" style={{ position: "relative", zIndex: 1 }}>
                  <Sparkles className="w-5 h-5 text-white" />
                  <h3 className="font-semibold text-white" style={{ fontFamily: "Poppins" }}>
                    AI Match Score
                  </h3>
                </div>
                <div
                  className="text-5xl font-black text-white mb-1"
                  style={{ fontFamily: "Poppins", position: "relative", zIndex: 1 }}
                >
                  87<span className="text-2xl opacity-70">%</span>
                </div>
                <p className="text-blue-100 text-sm mb-4" style={{ position: "relative", zIndex: 1 }}>
                  Profil Anda sangat kuat untuk posisi Frontend Developer
                </p>
                <div className="space-y-2" style={{ position: "relative", zIndex: 1 }}>
                  {["Top 5% pelamar", "Match dengan 124 lowongan", "Skill gap minimal"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-blue-100">
                      <CheckCircle className="w-3.5 h-3.5 text-green-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Tabs + Content */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex gap-3">
                {(["matches", "analysis"] as const).map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className="px-5 py-2.5 text-sm font-medium transition-all"
                    style={
                      tab === t
                        ? {
                            background: "#0F4CFF",
                            color: "#fff",
                            borderRadius: "14px",
                            boxShadow: "0 4px 14px rgba(15,76,255,0.25)",
                            border: "none",
                          }
                        : {
                            background: "#fff",
                            color: "#64748B",
                            border: "1px solid #E2E8F0",
                            borderRadius: "14px",
                          }
                    }
                  >
                    {t === "matches" ? "Rekomendasi Lowongan" : "Analisis Profil"}
                  </button>
                ))}
              </div>

              {tab === "matches" && (
                <>
                  <div className="space-y-4 max-h-[680px] overflow-y-auto pr-1">
                    {RECOMMENDED_JOBS.map((job, index) => {
                      const r = 18;
                      const circ = 2 * Math.PI * r;
                      const dash = circ * (job.match / 100);
                      return (
                        <motion.div
                          key={job.title}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.06, duration: 0.4 }}
                          whileHover={{ y: -3, boxShadow: "0 12px 36px rgba(0,0,0,0.1)" }}
                          className="bg-white p-5"
                          style={{
                            borderRadius: "24px",
                            border: "1px solid rgba(0,0,0,0.05)",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            transition: "box-shadow 0.2s",
                          }}
                        >
                          <div className="flex items-start gap-4">
                            <div
                              className="w-12 h-12 rounded-xl flex items-center justify-center text-white font-bold shrink-0"
                              style={{ background: job.color }}
                            >
                              {job.abbr}
                            </div>
                            <div className="flex-1">
                              <div className="flex items-start justify-between gap-2 flex-wrap">
                                <div>
                                  <h3 className="font-semibold text-sm" style={{ color: "#0F172A" }}>
                                    {job.title}
                                  </h3>
                                  <p className="text-xs text-gray-400">
                                    {job.company} • {job.location}
                                  </p>
                                </div>
                                <div
                                  className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold"
                                  style={{ background: "rgba(15,76,255,0.08)", color: "#0F4CFF" }}
                                >
                                  <Sparkles className="w-3 h-3" />{job.match}% Match
                                </div>
                              </div>
                              <div className="flex items-center gap-3 mt-2 flex-wrap">
                                <span className="text-sm font-medium" style={{ color: "#0F172A" }}>
                                  {job.salary}
                                </span>
                                <span
                                  className="px-2 py-0.5 rounded-full text-xs"
                                  style={{ background: "#F0FFF4", color: "#059669" }}
                                >
                                  {job.mode}
                                </span>
                              </div>
                              <div className="mt-3 flex items-center gap-3">
                                {/* SVG progress ring */}
                                <div className="relative w-10 h-10 shrink-0">
                                  <svg
                                    viewBox="0 0 40 40"
                                    className="w-full h-full"
                                    style={{ transform: "rotate(-90deg)" }}
                                  >
                                    <circle
                                      cx="20"
                                      cy="20"
                                      r={r}
                                      fill="none"
                                      stroke="rgba(15,76,255,0.12)"
                                      strokeWidth="3.5"
                                    />
                                    <circle
                                      cx="20"
                                      cy="20"
                                      r={r}
                                      fill="none"
                                      stroke="url(#matchGrad)"
                                      strokeWidth="3.5"
                                      strokeLinecap="round"
                                      strokeDasharray={`${dash} ${circ}`}
                                      style={{ filter: "drop-shadow(0 0 3px rgba(15,76,255,0.6))" }}
                                    />
                                    <defs>
                                      <linearGradient id="matchGrad" x1="0" y1="0" x2="1" y2="1">
                                        <stop offset="0%" stopColor="#3B82F6" />
                                        <stop offset="100%" stopColor="#7C4DFF" />
                                      </linearGradient>
                                    </defs>
                                  </svg>
                                  <div className="absolute inset-0 flex items-center justify-center">
                                    <span
                                      style={{
                                        fontFamily: "Inter, sans-serif",
                                        fontWeight: 700,
                                        fontSize: "0.5rem",
                                        color: "#3B82F6",
                                      }}
                                    >
                                      {job.match}%
                                    </span>
                                  </div>
                                </div>
                                <span className="text-xs text-gray-400 shrink-0">Match score</span>
                              </div>
                            </div>
                            <button
                              className="shrink-0 px-4 py-2 rounded-xl text-xs font-medium text-white"
                              style={{ background: "#0F4CFF" }}
                            >
                              Apply
                            </button>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                  <Link
                    to="/"
                    className="flex items-center justify-center gap-2 text-sm font-medium py-3 bg-white"
                    style={{
                      color: "#0F4CFF",
                      border: "1px solid #E2E8F0",
                      borderRadius: "16px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
                    }}
                  >
                    Lihat semua lowongan yang cocok <ChevronRight className="w-4 h-4" />
                  </Link>
                </>
              )}

              {tab === "analysis" && (
                <div className="space-y-6">
                  {/* Skills Radar */}
                  <motion.div
                    className="bg-white p-6"
                    style={{
                      borderRadius: "24px",
                      border: "1px solid rgba(0,0,0,0.05)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0, duration: 0.4 }}
                  >
                    <h3 className="font-semibold mb-4" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
                      Skills Radar Chart
                    </h3>
                    <ResponsiveContainer width="100%" height={280}>
                      <RadarChart data={RADAR_SKILLS}>
                        <PolarGrid stroke="#E2E8F0" />
                        <PolarAngleAxis dataKey="skill" tick={{ fontSize: 11, fill: "#64748B" }} />
                        <Radar
                          dataKey="value"
                          stroke="#0F4CFF"
                          fill="#0F4CFF"
                          fillOpacity={0.2}
                          dot={{ fill: "#0F4CFF", r: 4 }}
                        />
                      </RadarChart>
                    </ResponsiveContainer>
                  </motion.div>

                  {/* Match Breakdown */}
                  <motion.div
                    className="bg-white p-6"
                    style={{
                      borderRadius: "24px",
                      border: "1px solid rgba(0,0,0,0.05)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.08, duration: 0.4 }}
                  >
                    <h3 className="font-semibold mb-5" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
                      Candidate Strength Analysis
                    </h3>
                    <div className="space-y-4">
                      {MATCH_DATA.map((item) => (
                        <div key={item.name}>
                          <div className="flex justify-between text-sm mb-1.5">
                            <span className="font-medium" style={{ color: "#0F172A" }}>{item.name}</span>
                            <span className="font-semibold" style={{ color: item.color }}>{item.score}%</span>
                          </div>
                          <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all"
                              style={{ width: `${item.score}%`, background: item.color }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>

                  {/* Visual Matching Graph */}
                  <motion.div
                    className="bg-white p-6"
                    style={{
                      borderRadius: "24px",
                      border: "1px solid rgba(0,0,0,0.05)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                    }}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.16, duration: 0.4 }}
                  >
                    <h3 className="font-semibold mb-4" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
                      Visual Matching Graph
                    </h3>
                    <ResponsiveContainer width="100%" height={200}>
                      <BarChart data={MATCH_DATA} barSize={32}>
                        <XAxis
                          dataKey="name"
                          tick={{ fontSize: 10, fill: "#64748B" }}
                          axisLine={false}
                          tickLine={false}
                        />
                        <YAxis
                          tick={{ fontSize: 10, fill: "#64748B" }}
                          axisLine={false}
                          tickLine={false}
                          domain={[0, 100]}
                        />
                        <Tooltip formatter={(v) => [`${v}%`, "Score"]} />
                        <Bar dataKey="score" radius={[6, 6, 0, 0]}>
                          {MATCH_DATA.map((entry, i) => (
                            <Cell key={`match-cell-${i}`} fill={entry.color} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </motion.div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
