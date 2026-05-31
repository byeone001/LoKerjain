import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  BookOpen,
  Clock,
  Star,
  Award,
  Play,
  Users,
  ChevronRight,
  CheckCircle,
  Zap,
  Filter,
  Search,
  TrendingUp,
  Layers,
} from "lucide-react";

const CATEGORIES = [
  { id: "all", label: "Semua", icon: Layers, count: 120 },
  { id: "digital-marketing", label: "Digital Marketing", icon: TrendingUp, count: 18 },
  { id: "data", label: "Data Analytics", icon: Zap, count: 24 },
  { id: "uiux", label: "UI/UX Design", icon: Star, count: 16 },
  { id: "product", label: "Product Management", icon: BookOpen, count: 14 },
  { id: "ai", label: "AI Fundamentals", icon: Zap, count: 20 },
  { id: "dev", label: "Software Development", icon: Play, count: 28 },
];

const COURSES = [
  {
    id: 1,
    cat: "data",
    title: "Data Analytics with Python & SQL",
    instructor: "Dr. Ahmad Fauzi",
    rating: 4.9,
    students: 12450,
    duration: "60 jam",
    level: "Intermediate",
    levelColor: "#F59E0B",
    progress: 0,
    price: "Rp 299.000",
    badge: true,
    tags: ["Python", "SQL", "Tableau"],
    bg: "linear-gradient(135deg, #0F4CFF, #00A8A8)",
    bestseller: true,
  },
  {
    id: 2,
    cat: "uiux",
    title: "UI/UX Design: Dari Figma hingga Prototype",
    instructor: "Sari Dewi, Senior Designer",
    rating: 4.8,
    students: 9870,
    duration: "35 jam",
    level: "Beginner",
    levelColor: "#22C55E",
    progress: 65,
    price: "Rp 249.000",
    badge: true,
    tags: ["Figma", "Prototyping", "Research"],
    bg: "linear-gradient(135deg, #7C4DFF, #0F4CFF)",
    bestseller: false,
  },
  {
    id: 3,
    cat: "ai",
    title: "AI Fundamentals & Prompt Engineering",
    instructor: "Tim LokerjainAI",
    rating: 4.9,
    students: 15200,
    duration: "30 jam",
    level: "Beginner",
    levelColor: "#22C55E",
    progress: 0,
    price: "Rp 199.000",
    badge: true,
    tags: ["ChatGPT", "Prompt", "AI Tools"],
    bg: "linear-gradient(135deg, #0F172A, #312E81)",
    bestseller: true,
  },
  {
    id: 4,
    cat: "product",
    title: "Product Management A-Z: Strategy to Launch",
    instructor: "Budi Santoso, ex-Tokopedia PM",
    rating: 4.7,
    students: 8340,
    duration: "50 jam",
    level: "Intermediate",
    levelColor: "#F59E0B",
    progress: 30,
    price: "Rp 349.000",
    badge: true,
    tags: ["Roadmap", "Agile", "Metrics"],
    bg: "linear-gradient(135deg, #EE4D2D, #F59E0B)",
    bestseller: false,
  },
  {
    id: 5,
    cat: "digital-marketing",
    title: "Digital Marketing Mastery 2026",
    instructor: "Rini Pratiwi, Growth Hacker",
    rating: 4.8,
    students: 11200,
    duration: "40 jam",
    level: "Beginner",
    levelColor: "#22C55E",
    progress: 0,
    price: "Rp 229.000",
    badge: false,
    tags: ["SEO", "Google Ads", "Social Media"],
    bg: "linear-gradient(135deg, #00A8A8, #0F4CFF)",
    bestseller: true,
  },
  {
    id: 6,
    cat: "dev",
    title: "Full Stack Development: React + Node.js",
    instructor: "Kevin Zhang, Senior Engineer",
    rating: 4.9,
    students: 18900,
    duration: "80 jam",
    level: "Advanced",
    levelColor: "#EF4444",
    progress: 0,
    price: "Rp 449.000",
    badge: true,
    tags: ["React", "Node.js", "PostgreSQL"],
    bg: "linear-gradient(135deg, #1E40AF, #7C4DFF)",
    bestseller: false,
  },
];

const PROJECTS = [
  { title: "Build an E-Commerce Dashboard", skill: "Data Analytics", duration: "2 minggu", icon: Zap, color: "#0F4CFF" },
  { title: "Redesign Mobile App: Case Study", skill: "UI/UX Design", duration: "3 minggu", icon: Star, color: "#7C4DFF" },
  { title: "AI Chatbot for Customer Service", skill: "AI Development", duration: "4 minggu", icon: Zap, color: "#00A8A8" },
  { title: "SEO & Content Strategy Campaign", skill: "Digital Marketing", duration: "2 minggu", icon: TrendingUp, color: "#F59E0B" },
];

export function LearningPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = COURSES.filter((c) => {
    const matchCat = activeCategory === "all" || c.cat === activeCategory;
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
    return matchCat && matchSearch;
  });

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="py-14 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #0F4CFF 100%)" }}
      >
        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Blue orb — top right */}
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-40px",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(15,76,255,0.55) 0%, rgba(15,76,255,0) 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Teal orb — bottom left */}
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-60px",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,168,168,0.45) 0%, rgba(0,168,168,0) 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Purple orb — center */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "500px",
              height: "300px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124,77,255,0.3) 0%, rgba(124,77,255,0) 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Dot mesh overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        {/* Hero content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ position: "relative", zIndex: 1 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs" style={{ background: "rgba(255,255,255,0.1)", color: "#93C5FD", border: "1px solid rgba(255,255,255,0.15)" }}>
            <BookOpen className="w-3.5 h-3.5" /> LokerjainUp Learning Platform
          </div>
          <h1 className="text-3xl md:text-5xl mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#fff" }}>
            Upgrade Skill,<br />Upgrade Karier
          </h1>
          <p className="text-blue-200 mb-8 max-w-xl mx-auto">120+ kursus berbasis proyek nyata, dibimbing oleh praktisi industri terbaik, dengan sertifikat yang diakui perusahaan top.</p>

          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari kursus atau skill..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3.5 text-sm outline-none"
              style={{
                background: "rgba(255,255,255,0.95)",
                color: "#0F172A",
                borderRadius: "24px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            />
          </div>

          {/* Stats row with dividers */}
          <div className="flex justify-center mt-8">
            {[{ v: "120+", l: "Kursus" }, { v: "50K+", l: "Pelajar" }, { v: "95%", l: "Kepuasan" }, { v: "100%", l: "Bersertifikat" }].map((s, i, arr) => (
              <div key={s.l} className="flex items-center">
                <div className="text-center px-6">
                  <p className="text-xl font-bold text-white" style={{ fontFamily: "Poppins" }}>{s.v}</p>
                  <p className="text-xs text-blue-200">{s.l}</p>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ width: "1px", height: "36px", background: "rgba(255,255,255,0.15)" }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content area */}
      <div style={{ background: "#f8faff" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Categories */}
          <div className="flex gap-3 overflow-x-auto pb-2 mb-8 scrollbar-hide">
            {CATEGORIES.map(({ id, label, count }) => (
              <button
                key={id}
                onClick={() => setActiveCategory(id)}
                className="shrink-0 flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-medium transition-all"
                style={
                  activeCategory === id
                    ? { background: "#0F4CFF", color: "#fff", boxShadow: "0 4px 14px rgba(15,76,255,0.25)" }
                    : { background: "#fff", color: "#64748B", border: "1px solid #E2E8F0" }
                }
              >
                {label}
                <span className="px-1.5 py-0.5 rounded-full text-xs" style={activeCategory === id ? { background: "rgba(255,255,255,0.2)" } : { background: "#F1F5F9" }}>
                  {count}
                </span>
              </button>
            ))}
          </div>

          {/* Course Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {filtered.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, boxShadow: "0 12px 36px rgba(0,0,0,0.1)" }}
                className="bg-white overflow-hidden group"
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                {/* Thumbnail */}
                <div className="h-44 relative flex items-center justify-center" style={{ background: course.bg }}>
                  {course.bestseller && (
                    <div className="absolute top-3 left-3 px-2 py-1 rounded text-xs font-bold" style={{ background: "#F59E0B", color: "#fff" }}>
                      Bestseller
                    </div>
                  )}
                  {course.badge && (
                    <div className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full" style={{ background: "rgba(255,255,255,0.2)" }}>
                      <Award className="w-4 h-4 text-white" />
                    </div>
                  )}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <Play className="w-7 h-7 text-white ml-1" />
                  </div>
                  {course.progress > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 h-1.5" style={{ background: "rgba(0,0,0,0.2)" }}>
                      <div className="h-full" style={{ width: `${course.progress}%`, background: "#22C55E" }} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-0.5 rounded text-xs font-medium" style={{ background: `${course.levelColor}15`, color: course.levelColor }}>
                      {course.level}
                    </span>
                    {course.progress > 0 && (
                      <span className="text-xs text-gray-400">{course.progress}% selesai</span>
                    )}
                  </div>
                  <h3 className="font-semibold text-sm mb-1 line-clamp-2 group-hover:text-blue-600 transition-colors" style={{ color: "#0F172A" }}>
                    {course.title}
                  </h3>
                  <p className="text-xs text-gray-400 mb-3">{course.instructor}</p>

                  <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1"><Star className="w-3 h-3" style={{ color: "#F59E0B" }} />{course.rating}</span>
                    <span className="flex items-center gap-1"><Users className="w-3 h-3" />{course.students.toLocaleString()}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{course.duration}</span>
                  </div>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {course.tags.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded text-xs" style={{ background: "#EEF2FF", color: "#4F46E5" }}>{t}</span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif", fontWeight: 700 }}>{course.price}</span>
                    <button
                      className="px-4 py-2 text-xs font-medium transition-all hover:opacity-90"
                      style={{
                        background: course.progress > 0 ? "#0F4CFF" : "linear-gradient(135deg, #0F4CFF, #1A73E8)",
                        color: "#fff",
                        borderRadius: "12px",
                        boxShadow: "0 4px 12px rgba(15,76,255,0.2)",
                      }}
                    >
                      {course.progress > 0 ? "Lanjutkan" : "Daftar Sekarang"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project-Based Learning */}
          <div className="mb-12">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="flex items-end justify-between mb-6"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#0F4CFF" }}>Project-Based Learning</p>
                <h2 className="text-2xl" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#0F172A" }}>Belajar Sambil Bangun Portfolio Nyata</h2>
              </div>
              <button className="hidden sm:flex items-center gap-1 text-sm font-medium" style={{ color: "#0F4CFF" }}>
                Lihat semua <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {PROJECTS.map(({ title, skill, duration, icon: Icon, color }, index) => (
                <motion.div
                  key={title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-5 cursor-pointer group"
                  style={{
                    borderRadius: "24px",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4"
                    style={{
                      background: `${color}15`,
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                  >
                    <Icon className="w-5 h-5" style={{ color }} />
                  </div>
                  <h3 className="font-semibold text-sm mb-1 group-hover:text-blue-600 transition-colors" style={{ color: "#0F172A" }}>{title}</h3>
                  <p className="text-xs text-gray-400 mb-3">{skill}</p>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="w-3 h-3" />{duration}</span>
                    <span
                      className="text-xs font-medium px-3 py-1"
                      style={{
                        color,
                        border: `1px solid ${color}40`,
                        borderRadius: "999px",
                        background: `${color}08`,
                      }}
                    >
                      Mulai →
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Verified Portfolio */}
          <div className="overflow-hidden" style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)", borderRadius: "24px", position: "relative" }}>
            {/* Floating orbs inside dark section */}
            <div className="pointer-events-none" style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
              <div
                style={{
                  position: "absolute",
                  top: "-80px",
                  right: "10%",
                  width: "300px",
                  height: "300px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(124,77,255,0.4) 0%, rgba(124,77,255,0) 70%)",
                  filter: "blur(60px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "-60px",
                  left: "5%",
                  width: "280px",
                  height: "280px",
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(15,76,255,0.35) 0%, rgba(15,76,255,0) 70%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            <div className="p-8 md:p-10 grid md:grid-cols-2 gap-8 items-center" style={{ position: "relative", zIndex: 1 }}>
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs" style={{ background: "rgba(34,197,94,0.15)", color: "#86EFAC", border: "1px solid rgba(34,197,94,0.25)" }}>
                  <Award className="w-3.5 h-3.5" /> Verified Portfolio
                </div>
                <h2 className="text-2xl mb-2" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#fff" }}>
                  Portfolio yang Diverifikasi Perusahaan
                </h2>
                <p className="text-blue-200 text-sm mb-6 leading-relaxed">
                  Setiap proyek yang Anda selesaikan akan masuk ke portfolio terverifikasi yang bisa langsung dilihat oleh recruiter dan perusahaan mitra LokerjainJain.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Terverifikasi Blockchain", "Diakui 500+ Perusahaan", "Export ke LinkedIn"].map((item) => (
                    <div key={item} className="flex items-center gap-1 text-xs" style={{ color: "#93C5FD" }}>
                      <CheckCircle className="w-3.5 h-3.5" style={{ color: "#22C55E" }} />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { n: "Budi S.", title: "Data Analyst", proj: "3 proyek", match: "92%" },
                  { n: "Siti R.", title: "UX Designer", proj: "5 proyek", match: "88%" },
                  { n: "Ahmad F.", title: "PM", proj: "4 proyek", match: "85%" },
                  { n: "Dewi K.", title: "Frontend Dev", proj: "6 proyek", match: "91%" },
                ].map((c) => (
                  <div
                    key={c.n}
                    className="p-3 transition-all"
                    style={{
                      borderRadius: "16px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(124,77,255,0.5)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 0 20px rgba(124,77,255,0.15)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.border = "1px solid rgba(255,255,255,0.1)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                    }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold" style={{ background: "linear-gradient(135deg, #0F4CFF, #7C4DFF)", color: "#fff" }}>
                        {c.n[0]}
                      </div>
                      <div>
                        <p className="text-xs font-medium text-white">{c.n}</p>
                        <p className="text-xs text-blue-300">{c.title}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-blue-200">{c.proj}</span>
                      <span className="text-xs font-bold" style={{ color: "#22C55E" }}>{c.match} match</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
