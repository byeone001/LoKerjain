import { useState } from "react";
import { Link } from "react-router";
import logoImg from "../../imports/Logo_LoKerjain_2.png";
import {
  LayoutDashboard,
  User,
  Briefcase,
  BookOpen,
  Award,
  Sparkles,
  Bell,
  ChevronRight,
  TrendingUp,
  CheckCircle,
  Clock,
  MapPin,
  Star,
  LogOut,
  Settings,
  Menu,
  X,
  Send,
  Home,
} from "lucide-react";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const SIDEBAR_LINKS = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard", hidden: true },
  { icon: User, label: "Profil", id: "profile", hidden: false },
  { icon: Briefcase, label: "Portfolio", id: "portfolio", hidden: false },
  { icon: Send, label: "Lamaran", id: "applications", hidden: false },
  { icon: Award, label: "Sertifikat", id: "certificates", hidden: false },
  { icon: BookOpen, label: "Belajar", id: "learning", hidden: false },
  { icon: Sparkles, label: "AI Rekomendasi", id: "ai", hidden: false },
];

const APPLICATIONS = [
  { company: "Tokopedia", title: "Senior Frontend Dev", status: "Interview", statusColor: "#0F4CFF", date: "28 Mei 2026", abbr: "T", color: "#00AE68" },
  { company: "GoJek", title: "Data Scientist", status: "Review", statusColor: "#F59E0B", date: "25 Mei 2026", abbr: "G", color: "#00AA13" },
  { company: "Shopee", title: "Product Manager", status: "Applied", statusColor: "#64748B", date: "22 Mei 2026", abbr: "S", color: "#EE4D2D" },
  { company: "Traveloka", title: "UX Designer", status: "Rejected", statusColor: "#EF4444", date: "18 Mei 2026", abbr: "Tv", color: "#0079FF" },
];

const RECOMMENDED = [
  { title: "Full Stack Engineer", company: "OVO", match: 91, salary: "Rp 18–28jt", abbr: "O", color: "#4B2177" },
  { title: "React Native Dev", company: "BCA Digital", match: 88, salary: "Rp 15–25jt", abbr: "B", color: "#005BAC" },
  { title: "Frontend Lead", company: "Dana", match: 85, salary: "Rp 22–35jt", abbr: "D", color: "#5F98FF" },
];

const LEARNING_ITEMS = [
  { title: "Data Analytics with Python", progress: 65, total: "60 jam" },
  { title: "UI/UX Design Fundamentals", progress: 100, total: "35 jam" },
  { title: "AI Fundamentals", progress: 20, total: "30 jam" },
];

const TREND_DATA = [
  { week: "W1", score: 72 },
  { week: "W2", score: 75 },
  { week: "W3", score: 79 },
  { week: "W4", score: 82 },
  { week: "W5", score: 85 },
  { week: "W6", score: 87 },
];

export function CandidateDashboard() {
  const [activeNav, setActiveNav] = useState("profile");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" style={{ fontFamily: "Inter, sans-serif", background: "#F8FAFC" }}>
      {/* Sidebar Overlay (mobile) */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/40 z-30 md:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 z-40 flex flex-col w-64 bg-white border-r transition-transform md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ borderColor: "rgba(0,0,0,0.07)" }}
      >
        {/* Logo */}
        <div className="flex items-center px-5 h-16 border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <img
            src={logoImg}
            alt="LoKerjain"
            style={{ height: "30px", width: "auto", objectFit: "contain" }}
          />
        </div>

        {/* User Info */}
        <div className="px-5 py-4 border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold" style={{ background: "linear-gradient(135deg, #0F4CFF, #7C4DFF)" }}>
              BS
            </div>
            <div>
              <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>Budi Santoso</p>
              <p className="text-xs text-gray-400">Senior Frontend Dev</p>
            </div>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {SIDEBAR_LINKS.filter((l) => !l.hidden).map(({ icon: Icon, label, id }) => (
            <button
              key={id}
              onClick={() => { setActiveNav(id); setSidebarOpen(false); }}
              className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all"
              style={
                activeNav === id
                  ? { background: "rgba(15,76,255,0.08)", color: "#0F4CFF" }
                  : { color: "#64748B" }
              }
            >
              <Icon className="w-4 h-4 shrink-0" />
              <span className="font-medium">{label}</span>
              {id === "ai" && (
                <span className="ml-auto px-1.5 py-0.5 rounded-full text-xs" style={{ background: "#0F4CFF", color: "#fff" }}>
                  New
                </span>
              )}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="px-3 py-4 border-t space-y-1" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <Link
            to="/home"
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm transition-all hover:bg-blue-50"
            style={{ color: "#0F4CFF" }}
          >
            <Home className="w-4 h-4" />
            <span className="font-medium">Beranda</span>
          </Link>
          <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-gray-500">
            <Settings className="w-4 h-4" />Pengaturan
          </button>
          <Link to="/" className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-400">
            <LogOut className="w-4 h-4" />Keluar
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b px-5 h-16 flex items-center justify-between shrink-0" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <div className="flex items-center gap-3">
            <button className="md:hidden p-1.5 rounded-lg text-gray-500" onClick={() => setSidebarOpen(true)}>
              <Menu className="w-5 h-5" />
            </button>
            <h1 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
              {SIDEBAR_LINKS.find((l) => l.id === activeNav)?.label || "Dashboard"}
            </h1>
          </div>
          <div className="flex items-center gap-2">
            <button className="relative p-2 rounded-xl hover:bg-gray-50">
              <Bell className="w-5 h-5 text-gray-500" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full" style={{ background: "#0F4CFF" }} />
            </button>
            <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: "linear-gradient(135deg, #0F4CFF, #7C4DFF)" }}>
              BS
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <main className="flex-1 overflow-y-auto p-5 md:p-8">
          {/* Greeting */}
          <div className="mb-6">
            <h2 className="text-xl" style={{ fontFamily: "Poppins", fontWeight: 700, color: "#0F172A" }}>
              Selamat datang kembali, Budi! 👋
            </h2>
            <p className="text-sm text-gray-500">Berikut ringkasan karier Anda hari ini.</p>
          </div>

          {/* Widgets */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: "AI Match Score", value: "87%", sub: "+3% minggu ini", icon: Sparkles, color: "#0F4CFF", bg: "rgba(15,76,255,0.08)" },
              { label: "Lamaran Aktif", value: "12", sub: "4 menunggu respons", icon: Send, color: "#00A8A8", bg: "rgba(0,168,168,0.08)" },
              { label: "Profil Lengkap", value: "67%", sub: "Perlu 3 item lagi", icon: User, color: "#7C4DFF", bg: "rgba(124,77,255,0.08)" },
              { label: "Progress Belajar", value: "3/5", sub: "Kursus aktif", icon: BookOpen, color: "#F59E0B", bg: "rgba(245,158,11,0.08)" },
            ].map(({ label, value, sub, icon: Icon, color, bg }) => (
              <div key={label} className="bg-white rounded-2xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <p className="text-xs text-gray-400 font-medium">{label}</p>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: bg }}>
                    <Icon className="w-4 h-4" style={{ color }} />
                  </div>
                </div>
                <p className="text-2xl" style={{ fontFamily: "Poppins", fontWeight: 700, color: "#0F172A" }}>{value}</p>
                <p className="text-xs mt-0.5" style={{ color }}>{sub}</p>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Match Score Trend */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-5">
                <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Tren AI Match Score</h3>
                <span className="flex items-center gap-1 text-xs font-medium text-green-500">
                  <TrendingUp className="w-3.5 h-3.5" />+15% dalam 6 minggu
                </span>
              </div>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={TREND_DATA}>
                  <CartesianGrid key="grid" strokeDasharray="3 3" stroke="#F1F5F9" />
                  <XAxis key="x" dataKey="week" tick={{ fontSize: 11, fill: "#64748B" }} axisLine={false} tickLine={false} />
                  <YAxis key="y" tick={{ fontSize: 11, fill: "#64748B" }} axisLine={false} tickLine={false} domain={[60, 100]} />
                  <Tooltip key="tooltip" formatter={(v) => [`${v}%`, "Match Score"]} />
                  <Line key="score" type="monotone" dataKey="score" stroke="#0F4CFF" strokeWidth={2.5} dot={{ fill: "#0F4CFF", r: 4 }} activeDot={{ r: 6 }} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* AI Recommended Jobs */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-4 h-4" style={{ color: "#0F4CFF" }} />
                <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Rekomendasi AI</h3>
              </div>
              <div className="space-y-3">
                {RECOMMENDED.map((job) => (
                  <div key={job.title} className="flex items-center gap-3 p-3 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: job.color }}>
                      {job.abbr}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate" style={{ color: "#0F172A" }}>{job.title}</p>
                      <p className="text-xs text-gray-400">{job.company} · {job.salary}</p>
                    </div>
                    <span className="text-xs font-bold shrink-0" style={{ color: "#0F4CFF" }}>{job.match}%</span>
                  </div>
                ))}
              </div>
              <Link to="/job-connect" className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: "#0F4CFF" }}>
                Lihat semua <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Applications */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Status Lamaran</h3>
                <button className="text-xs font-medium" style={{ color: "#0F4CFF" }}>Lihat semua</button>
              </div>
              <div className="space-y-3">
                {APPLICATIONS.map((app) => (
                  <div key={app.title} className="flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 transition-colors">
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: app.color }}>
                      {app.abbr}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium" style={{ color: "#0F172A" }}>{app.title}</p>
                      <p className="text-xs text-gray-400">{app.company} · {app.date}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: `${app.statusColor}15`, color: app.statusColor }}>
                      {app.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Learning Progress */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="w-4 h-4" style={{ color: "#0F4CFF" }} />
                <h3 className="font-semibold" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Progress Belajar</h3>
              </div>
              <div className="space-y-4">
                {LEARNING_ITEMS.map((item) => (
                  <div key={item.title}>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="font-medium text-gray-700 truncate pr-2">{item.title}</span>
                      <span className="shrink-0" style={{ color: item.progress === 100 ? "#22C55E" : "#0F4CFF" }}>{item.progress}%</span>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${item.progress}%`, background: item.progress === 100 ? "#22C55E" : "#0F4CFF" }} />
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/learning" className="mt-4 flex items-center gap-1 text-xs font-medium" style={{ color: "#0F4CFF" }}>
                Ke Platform Belajar <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
