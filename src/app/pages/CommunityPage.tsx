import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  MessageSquare,
  Heart,
  Share2,
  Bookmark,
  TrendingUp,
  Users,
  BookOpen,
  Star,
  ChevronRight,
  Search,
  Plus,
  Clock,
  Tag,
  Award,
  Lightbulb,
  Video,
  Filter,
} from "lucide-react";

const FEED_TABS = ["Semua", "Diskusi", "Artikel", "Success Story", "Lowongan"];
const INDUSTRY_TAGS = ["Tech", "Fintech", "E-Commerce", "Healthcare", "Education", "Design", "Data Science", "AI/ML"];

const FEED_POSTS = [
  {
    id: 1,
    type: "article",
    author: "Sari Dewi",
    role: "Senior UX Designer @ Gojek",
    avatar: "SD",
    color: "#0F4CFF",
    time: "2 jam lalu",
    title: "5 Tips Pivot Karier dari IT ke Product Management",
    content: "Setelah 4 tahun jadi developer, saya memutuskan pivot ke PM. Ini perjalanan dan pelajaran yang saya dapatkan selama proses transisi...",
    tag: "Career Pivot",
    tagColor: "#7C4DFF",
    likes: 342,
    comments: 48,
    bookmarks: 127,
    read: "5 mnt baca",
    featured: true,
  },
  {
    id: 2,
    type: "discussion",
    author: "Ahmad Fauzi",
    role: "Freelance Data Analyst",
    avatar: "AF",
    color: "#00A8A8",
    time: "4 jam lalu",
    title: "Bagaimana cara meningkatkan salary di industri tech?",
    content: "Saya sudah 3 tahun di posisi yang sama dengan kenaikan minimal. Ada yang punya tips atau pengalaman berhasil nego gaji atau dapat offer lebih baik?",
    tag: "Diskusi",
    tagColor: "#0F4CFF",
    likes: 89,
    comments: 67,
    bookmarks: 23,
    featured: false,
  },
  {
    id: 3,
    type: "success",
    author: "Budi Santoso",
    role: "ex-Barista → Frontend Dev @ Tokopedia",
    avatar: "BS",
    color: "#22C55E",
    time: "1 hari lalu",
    title: "Dari Barista ke Frontend Developer dalam 8 Bulan! ☕→💻",
    content: "Dua tahun lalu saya masih bikin kopi. Hari ini saya baru saja bergabung sebagai Frontend Developer di Tokopedia dengan gaji 3x lipat gaji sebelumnya. Terima kasih LokerjainJain!",
    tag: "Success Story",
    tagColor: "#22C55E",
    likes: 1247,
    comments: 203,
    bookmarks: 445,
    featured: true,
  },
  {
    id: 4,
    type: "insight",
    author: "LokerjainJain Research",
    role: "Official Account",
    avatar: "LJ",
    color: "#0F4CFF",
    time: "2 hari lalu",
    title: "Tren Industri: 10 Skill Paling Dicari Perusahaan Indonesia 2026",
    content: "Berdasarkan analisis dari 250.000+ lowongan kerja, inilah skill yang paling banyak dibutuhkan dan menawarkan gaji tertinggi di Indonesia tahun ini...",
    tag: "Industry Insight",
    tagColor: "#F59E0B",
    likes: 567,
    comments: 89,
    bookmarks: 234,
    read: "8 mnt baca",
    featured: false,
  },
];

const MENTORS = [
  { name: "Rini Pratiwi", role: "Head of Growth @ Shopee", avatar: "RP", color: "#EE4D2D", rating: 4.9, sessions: 120, expertise: ["Growth Hacking", "Digital Marketing", "Career Pivot"] },
  { name: "Kevin Zhang", role: "Engineering Lead @ GoJek", avatar: "KZ", color: "#00AA13", rating: 4.8, sessions: 85, expertise: ["Tech Leadership", "System Design", "Career Growth"] },
  { name: "Dewi Kusuma", role: "Head of Design @ Traveloka", avatar: "DK", color: "#0079FF", rating: 4.9, sessions: 97, expertise: ["UX Design", "Design System", "Portfolio Review"] },
];

const SUCCESS_STORIES = [
  { name: "Rina H.", from: "Guru SD", to: "Data Analyst", time: "10 bulan", salary: "+180%", color: "#0F4CFF" },
  { name: "Dani P.", from: "Admin Kantor", to: "Digital Marketer", time: "6 bulan", salary: "+120%", color: "#00A8A8" },
  { name: "Fitri A.", from: "Fresh Graduate", to: "UI/UX Designer", time: "4 bulan", salary: "First Job!", color: "#7C4DFF" },
];

export function CommunityPage() {
  const [activeTab, setActiveTab] = useState("Semua");
  const [likedPosts, setLikedPosts] = useState<number[]>([]);
  const [savedPosts, setSavedPosts] = useState<number[]>([]);
  const [search, setSearch] = useState("");

  const toggleLike = (id: number) =>
    setLikedPosts((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  const toggleSave = (id: number) =>
    setSavedPosts((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #7C4DFF 100%)" }}
      >
        {/* Orb layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-80px",
              width: "380px",
              height: "380px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124,77,255,0.55) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-80px",
              left: "-60px",
              width: "320px",
              height: "320px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "45%",
              transform: "translate(-50%, -50%)",
              width: "260px",
              height: "260px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(20,184,166,0.35) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Dot mesh overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ position: "relative", zIndex: 1 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs" style={{ background: "rgba(124,77,255,0.2)", color: "#C4B5FD", border: "1px solid rgba(124,77,255,0.3)" }}>
            <Users className="w-3.5 h-3.5" /> Komunitas Profesional
          </div>
          <h1 className="text-3xl md:text-5xl mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#fff" }}>
            Berkembang Bersama
          </h1>
          <p className="text-blue-200 mb-8 max-w-lg mx-auto">
            Terhubung dengan 250.000+ profesional, belajar dari mentor terbaik, dan bagikan perjalanan karier Anda.
          </p>
          <div className="max-w-lg mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari diskusi, artikel, atau topik..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl text-sm outline-none"
              style={{ background: "rgba(255,255,255,0.95)", color: "#0F172A" }}
            />
          </div>
          <div className="flex justify-center gap-6 mt-8">
            {[{ v: "250K+", l: "Anggota" }, { v: "18K+", l: "Diskusi" }, { v: "500+", l: "Mentor" }, { v: "10K+", l: "Artikel" }].map((s) => (
              <div key={s.l}>
                <p className="text-xl font-bold text-white" style={{ fontFamily: "Poppins" }}>{s.v}</p>
                <p className="text-xs text-blue-200">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: "#f8faff" }}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Feed */}
            <div className="lg:col-span-2 space-y-6">
              {/* Compose */}
              <div
                className="bg-white p-4 flex items-center gap-3"
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0" style={{ background: "linear-gradient(135deg, #0F4CFF, #7C4DFF)" }}>
                  Anda
                </div>
                <div className="flex-1 px-4 py-2.5 rounded-xl cursor-pointer" style={{ background: "#F8FAFC", border: "1px solid #E2E8F0" }}>
                  <p className="text-sm text-gray-400">Bagikan pengalaman atau tanya sesuatu...</p>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-sm font-medium text-white" style={{ background: "linear-gradient(135deg, #0F4CFF, #1A73E8)" }}>
                  <Plus className="w-4 h-4" /><span className="hidden sm:inline">Post</span>
                </button>
              </div>

              {/* Tabs */}
              <div className="flex gap-2 overflow-x-auto pb-1">
                {FEED_TABS.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className="shrink-0 px-4 py-2 text-sm font-medium transition-all"
                    style={
                      activeTab === tab
                        ? { background: "#0F4CFF", color: "#fff", borderRadius: "14px", boxShadow: "0 4px 12px rgba(15,76,255,0.25)" }
                        : { background: "#fff", color: "#64748B", border: "1px solid #E2E8F0", borderRadius: "14px" }
                    }
                  >
                    {tab}
                  </button>
                ))}
              </div>

              {/* Posts */}
              {FEED_POSTS.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="bg-white p-5 hover:shadow-md transition-shadow"
                  style={{
                    borderRadius: "24px",
                    border: "1px solid rgba(0,0,0,0.05)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                >
                  {post.featured && (
                    <div
                      className="flex items-center gap-1.5 text-xs font-medium mb-3 pb-3 border-b"
                      style={{
                        color: "#F59E0B",
                        borderColor: "rgba(0,0,0,0.05)",
                        borderLeft: "3px solid #F59E0B",
                        paddingLeft: "10px",
                        marginLeft: "-20px",
                        paddingRight: "4px",
                        borderRadius: "0 0 0 0",
                      }}
                    >
                      <Star className="w-3.5 h-3.5 fill-current" />
                      Featured Post
                    </div>
                  )}
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                      style={{ background: post.color, boxShadow: `0 2px 8px ${post.color}40` }}
                    >
                      {post.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{post.author}</p>
                      <p className="text-xs text-gray-400">{post.role} · <Clock className="w-3 h-3 inline" /> {post.time}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-medium shrink-0" style={{ background: `${post.tagColor}15`, color: post.tagColor }}>
                      {post.tag}
                    </span>
                  </div>

                  <h3 className="font-semibold mb-2" style={{ color: "#0F172A" }}>{post.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.content}</p>

                  {post.read && (
                    <div className="flex items-center gap-1 text-xs text-gray-400 mb-4">
                      <BookOpen className="w-3 h-3" />{post.read}
                    </div>
                  )}

                  <div className="flex items-center gap-1 pt-3 border-t" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
                    <button
                      onClick={() => toggleLike(post.id)}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm transition-all hover:bg-gray-50"
                      style={{
                        color: likedPosts.includes(post.id) ? "#EF4444" : "#64748B",
                        borderRadius: "12px",
                      }}
                    >
                      <Heart className={`w-4 h-4 ${likedPosts.includes(post.id) ? "fill-current" : ""}`} />
                      {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                    </button>
                    <button
                      className="flex items-center gap-1.5 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"
                      style={{ borderRadius: "12px" }}
                    >
                      <MessageSquare className="w-4 h-4" />{post.comments}
                    </button>
                    <button
                      onClick={() => toggleSave(post.id)}
                      className="flex items-center gap-1.5 px-3 py-2 text-sm transition-all hover:bg-gray-50"
                      style={{
                        color: savedPosts.includes(post.id) ? "#0F4CFF" : "#64748B",
                        borderRadius: "12px",
                      }}
                    >
                      <Bookmark className={`w-4 h-4 ${savedPosts.includes(post.id) ? "fill-current" : ""}`} />
                      {post.bookmarks}
                    </button>
                    <button
                      className="ml-auto flex items-center gap-1.5 px-3 py-2 text-sm text-gray-500 hover:bg-gray-50"
                      style={{ borderRadius: "12px" }}
                    >
                      <Share2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Industry Tags / Topik Trending */}
              <div
                className="bg-white p-5"
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <h3 className="font-semibold mb-3 text-sm" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Topik Trending</h3>
                <div className="flex flex-wrap gap-2">
                  {INDUSTRY_TAGS.map((tag) => (
                    <button
                      key={tag}
                      className="flex items-center gap-1 px-3 py-1.5 text-xs transition-all hover:bg-blue-50"
                      style={{ background: "#F1F5F9", color: "#64748B", borderRadius: "999px" }}
                    >
                      <Tag className="w-3 h-3" />{tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mentor Sessions */}
              <div
                className="bg-white p-5"
                style={{
                  borderRadius: "24px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <Video className="w-4 h-4" style={{ color: "#0F4CFF" }} />
                  <h3 className="font-semibold text-sm" style={{ fontFamily: "Poppins", color: "#0F172A" }}>Mentor Sessions</h3>
                </div>
                <div className="space-y-4">
                  {MENTORS.map((mentor) => (
                    <div key={mentor.name} className="flex gap-3 items-start">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                        style={{ background: mentor.color, boxShadow: `0 2px 8px ${mentor.color}40` }}
                      >
                        {mentor.avatar}
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{mentor.name}</p>
                        <p className="text-xs text-gray-400 mb-1">{mentor.role}</p>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="flex items-center gap-0.5 text-yellow-500"><Star className="w-3 h-3 fill-current" />{mentor.rating}</span>
                          <span className="text-gray-400">· {mentor.sessions} sesi</span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1.5">
                          {mentor.expertise.slice(0, 2).map((e) => (
                            <span key={e} className="px-1.5 py-0.5 rounded text-xs" style={{ background: "#EEF2FF", color: "#4F46E5" }}>{e}</span>
                          ))}
                        </div>
                      </div>
                      <button
                        className="shrink-0 px-3 py-1.5 text-xs font-medium"
                        style={{
                          background: "rgba(15,76,255,0.08)",
                          color: "#0F4CFF",
                          borderRadius: "12px",
                          boxShadow: "0 2px 8px rgba(15,76,255,0.15)",
                        }}
                      >
                        Book
                      </button>
                    </div>
                  ))}
                </div>
                <button className="mt-4 w-full flex items-center justify-center gap-1 text-xs font-medium" style={{ color: "#0F4CFF" }}>
                  Lihat semua mentor <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Success Stories */}
              <div
                className="p-5 overflow-hidden relative"
                style={{ background: "linear-gradient(135deg, #0F172A, #1E3A8A)", borderRadius: "24px", border: "1px solid rgba(0,0,0,0.05)", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
              >
                {/* Floating orbs inside dark card */}
                <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ borderRadius: "24px" }}>
                  <div
                    style={{
                      position: "absolute",
                      top: "-40px",
                      right: "-40px",
                      width: "160px",
                      height: "160px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(124,77,255,0.4) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "-40px",
                      left: "-30px",
                      width: "140px",
                      height: "140px",
                      borderRadius: "50%",
                      background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
                      filter: "blur(40px)",
                    }}
                  />
                </div>

                <div className="relative" style={{ zIndex: 1 }}>
                  <div className="flex items-center gap-2 mb-4">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <h3 className="font-semibold text-sm text-white" style={{ fontFamily: "Poppins" }}>Success Stories</h3>
                  </div>
                  <div className="space-y-3">
                    {SUCCESS_STORIES.map((s) => (
                      <div
                        key={s.name}
                        className="p-3"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          borderRadius: "16px",
                        }}
                      >
                        <div className="flex items-center gap-2 mb-2">
                          <div className="w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: s.color }}>
                            {s.name[0]}
                          </div>
                          <p className="text-xs font-medium text-white">{s.name}</p>
                        </div>
                        <p className="text-xs text-blue-200">{s.from} → <span className="text-white font-medium">{s.to}</span></p>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-xs text-blue-300"><Clock className="w-3 h-3 inline mr-0.5" />{s.time}</span>
                          <span className="text-xs font-bold" style={{ color: "#22C55E" }}>{s.salary}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <Link to="/career-pivot" className="mt-4 flex items-center justify-center gap-1 text-xs font-medium text-blue-200">
                    Mulai perjalanan Anda <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
