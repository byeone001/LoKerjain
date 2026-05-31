import { useState } from "react";
import { Link } from "react-router";
import logoImg from "../../imports/Logo_LoKerjain_2.png";
import {
  LayoutDashboard,
  Users,
  Briefcase,
  BarChart2,
  Settings,
  LogOut,
  Bell,
  Plus,
  ChevronRight,
  TrendingUp,
  Star,
  Clock,
  CheckCircle,
  Sparkles,
  Calendar,
  Menu,
  MessageSquare,
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  Line,
  CartesianGrid,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const SIDEBAR_LINKS = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard" },
  { icon: Briefcase, label: "Manajemen Lowongan", id: "jobs" },
  { icon: Users, label: "Kandidat", id: "candidates" },
  { icon: Calendar, label: "Interview Pipeline", id: "interviews" },
  { icon: BarChart2, label: "Analytics", id: "analytics" },
  { icon: MessageSquare, label: "Pesan", id: "messages" },
];

const CANDIDATES = [
  { name: "Budi Santoso", role: "Frontend Dev", exp: "5 tahun", match: 92, skills: ["React", "TypeScript", "Node.js"], status: "Shortlist", avatar: "BS", color: "#0F4CFF" },
  { name: "Siti Rahayu", role: "Data Scientist", exp: "3 tahun", match: 88, skills: ["Python", "ML", "SQL"], status: "Interview", avatar: "SR", color: "#00A8A8" },
  { name: "Ahmad Fauzi", role: "Product Manager", exp: "6 tahun", match: 85, skills: ["Strategy", "Agile", "Analytics"], status: "Shortlist", avatar: "AF", color: "#7C4DFF" },
  { name: "Dewi Kusuma", role: "UX Designer", exp: "4 tahun", match: 81, skills: ["Figma", "Research", "Prototyping"], status: "Applied", avatar: "DK", color: "#F59E0B" },
  { name: "Rizky Pratama", role: "Backend Engineer", exp: "5 tahun", match: 79, skills: ["Go", "Kubernetes", "PostgreSQL"], status: "Applied", avatar: "RP", color: "#EF4444" },
];

const ACTIVE_JOBS = [
  { title: "Senior Frontend Developer", applicants: 124, new: 8, deadline: "15 Jun 2026", status: "Active" },
  { title: "Data Scientist", applicants: 87, new: 5, deadline: "20 Jun 2026", status: "Active" },
  { title: "Product Manager", applicants: 63, new: 3, deadline: "25 Jun 2026", status: "Active" },
  { title: "UX Designer", applicants: 45, new: 2, deadline: "10 Jun 2026", status: "Closing Soon" },
];

const FUNNEL_DATA = [
  { stage: "Melamar", count: 324, color: "#CBD5E1" },
  { stage: "Review", count: 148, color: "#93C5FD" },
  { stage: "Shortlist", count: 67, color: "#60A5FA" },
  { stage: "Interview", count: 28, color: "#3B82F6" },
  { stage: "Offer", count: 12, color: "#0F4CFF" },
  { stage: "Hired", count: 5, color: "#14532D" },
];

const TREND_DATA = [
  { week: "W1 Mei", applicants: 42 },
  { week: "W2 Mei", applicants: 58 },
  { week: "W3 Mei", applicants: 75 },
  { week: "W4 Mei", applicants: 89 },
  { week: "W1 Jun", applicants: 102 },
  { week: "W2 Jun", applicants: 124 },
];

const SOURCE_DATA = [
  { name: "LokerjainJain AI", value: 45, color: "#0F4CFF" },
  { name: "Direct Apply", value: 25, color: "#00A8A8" },
  { name: "Referral", value: 20, color: "#7C4DFF" },
  { name: "Others", value: 10, color: "#E2E8F0" },
];

export function EmployerDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: "Inter, sans-serif", background: "#F8FAFC" }}>
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 flex flex-col w-64 bg-white border-r transition-transform md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
        style={{ borderColor: "rgba(0,0,0,0.07)" }}
      >
        <div className="flex items-center gap-3 px-5 h-16 border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <img
            src={logoImg}
            alt="LoKerjain"
            style={{ height: "28px", width: "auto", objectFit: "contain" }}
          />
          <div className="border-l pl-3" style={{ borderColor: "rgba(0,0,0,0.1)" }}>
            <p className="text-xs font-bold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Tokopedia</p>
            <p style={{ fontSize: "0.65rem" }} className="text-gray-400">Employer Account</p>
          </div>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {SIDEBAR_LINKS.map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => { setActiveNav(id); setSidebarOpen(false); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all"
              style={activeNav === id ? { background: "rgba(15,76,255,0.08)", color: "#0F4CFF" } : { color: "#64748B" }}
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="font-medium">{label}</span>
            </button>
          ))}
        </nav>

        <div className="px-3 py-4 border-t space-y-1" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500"><Settings className="w-4 h-4" />Pengaturan</button>
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400"><LogOut className="w-4 h-4" />Keluar</Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white border-b px-5 h-16 flex items-center justify-between shrink-0" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <div className="flex items-center gap-3">
            <button className="md:hidden p-1.5 rounded-lg text-gray-500" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Employer Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-white"
              style={{ background: "linear-gradient(135deg, #0F4CFF, #1A73E8)" }}
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">Pasang Lowongan</span>
            </button>
            <button className="relative p-2 rounded-xl hover:bg-gray-50">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: "#EF4444" }} />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-5 md:p-8">
          {/* Overview Widgets */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "Total Pelamar", value: "324", sub: "+18 hari ini", icon: Users, color: "#0F4CFF", bg: "rgba(15,76,255,0.08)", trend: true },
              { label: "Lowongan Aktif", value: "4", sub: "1 closing soon", icon: Briefcase, color: "#00A8A8", bg: "rgba(0,168,168,0.08)", trend: false },
              { label: "Top Kandidat", value: "67", sub: "Siap interview", icon: Star, color: "#7C4DFF", bg: "rgba(124,77,255,0.08)", trend: true },
              { label: "Hired Bulan Ini", value: "5", sub: "Target: 8 posisi", icon: CheckCircle, color: "#22C55E", bg: "rgba(34,197,94,0.08)", trend: true },
            ].map(({ label, value, sub, icon: Icon, color, bg, trend }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                </div>
                <p className="text-2xl" style={{ fontFamily: "Poppins", fontWeight: 700, color: "#0F172A" }}>{value}</p>
                <p className="text-xs mt-0.5 flex items-center gap-1" style={{ color }}>
                  {trend && <TrendingUp className="w-3 h-3" />}{sub}
                </p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            {/* Hiring Funnel */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-5" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Hiring Funnel</h3>
              <div className="space-y-3">
                {FUNNEL_DATA.map((stage, i) => (
                  <div key={stage.stage} className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-20 shrink-0">{stage.stage}</span>
                    <div className="flex-1 h-8 bg-gray-50 rounded-lg overflow-hidden relative">
                      <div
                        className="h-full rounded-lg flex items-center pl-3 text-xs font-medium"
                        style={{
                          width: `${(stage.count / 324) * 100}%`,
                          minWidth: "10%",
                          background: stage.color,
                          color: i > 2 ? "#fff" : "#0F172A",
                        }}
                      >
                        {stage.count}
                      </div>
                    </div>
                    <span className="text-xs text-gray-400 w-14 text-right shrink-0">
                      {Math.round((stage.count / 324) * 100)}%
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Source */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-4" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Sumber Pelamar</h3>
              <ResponsiveContainer width="100%" height={180}>
                <PieChart>
                  <Pie key="pie" data={SOURCE_DATA} cx="50%" cy="50%" innerRadius={50} outerRadius={80} dataKey="value">
                    {SOURCE_DATA.map((entry, i) => (
                      <Cell key={`source-cell-${i}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip key="tooltip" formatter={(v) => [`${v}%`, ""]} />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-1.5 mt-2">
                {SOURCE_DATA.map((s) => (
                  <div key={s.name} className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{ background: s.color }} />
                      <span className="text-gray-600">{s.name}</span>
                    </div>
                    <span className="font-medium" style={{ color: "#0F172A" }}>{s.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Applicant Trend */}
          <div className="bg-white rounded-2xl p-6 shadow-sm mb-6">
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Tren Pelamar</h3>
              <span className="flex items-center gap-1 text-xs text-green-500"><TrendingUp className="w-3.5 h-3.5" />+195% dalam 6 minggu</span>
            </div>
            <ResponsiveContainer width="100%" height={180}>
              <LineChart data={TREND_DATA}>
                <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#F1F5F9" />
                <XAxis key="x" dataKey="week" tick={{ fontSize: 10, fill: "#64748B" }} axisLine={false} tickLine={false} />
                <YAxis key="y" tick={{ fontSize: 10, fill: "#64748B" }} axisLine={false} tickLine={false} />
                <Tooltip key="tooltip" />
                <Line key="applicants" type="monotone" dataKey="applicants" stroke="#0F4CFF" strokeWidth={2.5} dot={{ fill: "#0F4CFF", r: 4 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* AI Candidate Ranking */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-5">
                <Sparkles className="w-4 h-4" style={{ color: "#0F4CFF" }} />
                <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>AI Candidate Ranking</h3>
              </div>
              <div className="space-y-3">
                {CANDIDATES.map((c, i) => (
                  <div key={c.name} className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors">
                    <span className="text-sm font-bold w-5 text-center" style={{ color: i < 3 ? "#F59E0B" : "#94A3B8" }}>#{i + 1}</span>
                    <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: c.color }}>
                      {c.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{c.name}</p>
                        <span className="text-xs text-gray-400">·</span>
                        <p className="text-xs text-gray-400">{c.role} · {c.exp}</p>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {c.skills.map((s) => (
                          <span key={s} className="px-1.5 py-0.5 rounded text-xs" style={{ background: "#EEF2FF", color: "#4F46E5" }}>{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className="text-right shrink-0">
                      <div className="flex items-center gap-1 text-sm font-bold" style={{ color: "#0F4CFF" }}>
                        <Sparkles className="w-3 h-3" />{c.match}%
                      </div>
                      <span className="text-xs px-2 py-0.5 rounded-full" style={{
                        background: c.status === "Interview" ? "#EEF2FF" : c.status === "Shortlist" ? "#F0FDF4" : "#F8FAFC",
                        color: c.status === "Interview" ? "#4F46E5" : c.status === "Shortlist" ? "#15803D" : "#64748B",
                      }}>
                        {c.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Active Jobs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Lowongan Aktif</h3>
                <button className="text-xs font-medium" style={{ color: "#0F4CFF" }}>Kelola</button>
              </div>
              <div className="space-y-3">
                {ACTIVE_JOBS.map((job) => (
                  <div key={job.title} className="p-3 rounded-xl" style={{ background: "#F8FAFC" }}>
                    <p className="text-sm font-medium mb-1" style={{ color: "#0F172A" }}>{job.title}</p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="flex items-center gap-1"><Users className="w-3 h-3" />{job.applicants} pelamar</span>
                      {job.new > 0 && <span className="px-1.5 py-0.5 rounded-full" style={{ background: "#0F4CFF15", color: "#0F4CFF" }}>+{job.new} baru</span>}
                    </div>
                    <div className="flex items-center justify-between mt-2">
                      <span className="flex items-center gap-1 text-xs text-gray-400"><Clock className="w-3 h-3" />{job.deadline}</span>
                      <span className="px-2 py-0.5 rounded-full text-xs font-medium"
                        style={job.status === "Closing Soon"
                          ? { background: "#FFF7ED", color: "#C2410C" }
                          : { background: "#F0FDF4", color: "#15803D" }}>
                        {job.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <button className="mt-4 w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm text-white" style={{ background: "linear-gradient(135deg, #0F4CFF, #1A73E8)" }}>
                <Plus className="w-4 h-4" /> Pasang Lowongan Baru
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
