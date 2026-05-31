import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { FeaturesAndPricingSection } from "../components/FeaturesAndPricingSection";
import {
  Search,
  MapPin,
  Briefcase,
  Star,
  Zap,
  TrendingUp,
  Users,
  Building2,
  Clock,
  BookOpen,
  ArrowRight,
  ChevronRight,
  CheckCircle,
  Sparkles,
  BarChart2,
  Award,
  Globe,
} from "lucide-react";

const JOBS = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tokopedia",
    abbr: "T",
    color: "#00AE68",
    location: "Jakarta Selatan",
    salary: "Rp 15jt – 25jt",
    type: "Full Time",
    mode: "Hybrid",
    match: 94,
    tags: ["React", "TypeScript", "GraphQL"],
    posted: "2 hari lalu",
    desc: "Bergabunglah dengan tim engineering Tokopedia untuk membangun pengalaman frontend yang luar biasa bagi jutaan pengguna Indonesia. Anda akan bekerja dengan teknologi modern dan tim kelas dunia.",
    requirements: ["5+ tahun pengalaman React/TypeScript", "Pengalaman dengan state management", "Familiar dengan CI/CD pipeline"],
    benefits: ["BPJS Kesehatan & Ketenagakerjaan", "Laptop MacBook Pro", "Hybrid WFH 3x/minggu", "Learning Budget Rp 5jt/tahun"],
  },
  {
    id: 2,
    title: "Data Scientist",
    company: "GoJek",
    abbr: "G",
    color: "#00AA13",
    location: "Jakarta Pusat",
    salary: "Rp 20jt – 35jt",
    type: "Full Time",
    mode: "Remote",
    match: 87,
    tags: ["Python", "ML", "TensorFlow"],
    posted: "1 hari lalu",
    desc: "Gojek sedang mencari Data Scientist berbakat untuk membangun model prediktif yang mengoptimalkan layanan transportasi dan pengiriman kami di seluruh Asia Tenggara.",
    requirements: ["3+ tahun pengalaman Data Science", "Expert Python & ML frameworks", "Pengalaman dengan big data pipeline"],
    benefits: ["Saham perusahaan (stock options)", "Remote penuh", "Asuransi kesehatan keluarga", "Bonus tahunan kompetitif"],
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Shopee",
    abbr: "S",
    color: "#EE4D2D",
    location: "Jakarta Barat",
    salary: "Rp 18jt – 28jt",
    type: "Full Time",
    mode: "Hybrid",
    match: 82,
    tags: ["Product Strategy", "Agile", "Analytics"],
    posted: "3 hari lalu",
    desc: "Shopee mencari Product Manager berpengalaman untuk memimpin pengembangan fitur baru dalam platform e-commerce terbesar di Asia Tenggara.",
    requirements: ["4+ tahun sebagai Product Manager", "Pengalaman dengan A/B testing", "Kemampuan analisis data yang kuat"],
    benefits: ["Tunjangan transport", "Makan siang gratis", "Gym membership", "Career development program"],
  },
  {
    id: 4,
    title: "UX Designer",
    company: "Traveloka",
    abbr: "Tv",
    color: "#0079FF",
    location: "Jakarta Selatan",
    salary: "Rp 12jt – 20jt",
    type: "Full Time",
    mode: "Hybrid",
    match: 79,
    tags: ["Figma", "User Research", "Prototyping"],
    posted: "5 hari lalu",
    desc: "Traveloka mencari UX Designer kreatif untuk menciptakan pengalaman pengguna yang mulus di platform travel terkemuka Asia Tenggara.",
    requirements: ["3+ tahun pengalaman UX Design", "Portfolio kuat dengan case studies", "Familiar dengan design system"],
    benefits: ["Travel allowance", "Flexible working hours", "MacBook & design tools", "25 hari cuti/tahun"],
  },
  {
    id: 5,
    title: "Backend Engineer",
    company: "OVO",
    abbr: "O",
    color: "#4B2177",
    location: "Jakarta Selatan",
    salary: "Rp 16jt – 26jt",
    type: "Full Time",
    mode: "Full Remote",
    match: 76,
    tags: ["Go", "Microservices", "Kubernetes"],
    posted: "1 minggu lalu",
    desc: "OVO sedang mencari Backend Engineer handal untuk membangun infrastruktur pembayaran digital yang aman, skalabel, dan reliable untuk jutaan pengguna.",
    requirements: ["4+ tahun pengalaman backend", "Expert Go atau Java", "Pengalaman dengan distributed systems"],
    benefits: ["Fully remote", "Equity program", "BPJS + asuransi swasta", "Peralatan kerja disediakan"],
  },
  {
    id: 6,
    title: "Software Engineer",
    company: "Lazada",
    abbr: "Lz",
    color: "#F57224",
    location: "Jakarta Pusat",
    salary: "Rp 14jt – 22jt",
    type: "Full Time",
    mode: "Hybrid",
    match: 81,
    tags: ["Java", "Spring Boot", "Kafka"],
    posted: "2 hari lalu",
    desc: "Lazada membuka peluang bagi Software Engineer untuk bergabung dalam tim platform e-commerce dengan skala transaksi jutaan per hari di Asia Tenggara.",
    requirements: ["3+ tahun pengalaman backend/fullstack", "Familiar dengan microservices", "Pengalaman high-traffic system"],
    benefits: ["Tunjangan makan & transport", "Asuransi kesehatan", "Employee discount Lazada", "Remote 2x/minggu"],
  },
  {
    id: 7,
    title: "Frontend Developer",
    company: "Tiket.com",
    abbr: "Tk",
    color: "#E74694",
    location: "Bali",
    salary: "Rp 13jt – 20jt",
    type: "Full Time",
    mode: "Remote",
    match: 79,
    tags: ["Vue.js", "Nuxt", "Tailwind"],
    posted: "3 hari lalu",
    desc: "Tiket.com mencari Frontend Developer untuk membangun antarmuka pemesanan tiket perjalanan yang cepat, responsif, dan menyenangkan bagi jutaan traveler Indonesia.",
    requirements: ["2+ tahun pengalaman frontend", "Mahir Vue.js atau React", "Perhatian tinggi terhadap performa web"],
    benefits: ["Full remote", "Travel credit gratis", "MacBook disediakan", "Flexible hours"],
  },
  {
    id: 8,
    title: "UI Engineer",
    company: "KAI",
    abbr: "KAI",
    color: "#003580",
    location: "Bandung",
    salary: "Rp 12jt – 18jt",
    type: "Full Time",
    mode: "On-site",
    match: 74,
    tags: ["React", "Next.js", "REST API"],
    posted: "4 hari lalu",
    desc: "PT Kereta Api Indonesia membuka posisi UI Engineer untuk mendukung transformasi digital layanan KAI, mulai dari aplikasi pemesanan tiket hingga sistem internal operasional.",
    requirements: ["2+ tahun pengalaman UI/Frontend", "Pengalaman integrasi REST API", "Komunikasi lintas tim yang baik"],
    benefits: ["Tiket kereta gratis", "BPJS Kesehatan & Ketenagakerjaan", "Tunjangan perumahan", "Jenjang karier PNS/BUMN"],
  },
  {
    id: 9,
    title: "Mobile Developer (Android)",
    company: "Traveloka",
    abbr: "Tv",
    color: "#0079FF",
    location: "Jakarta Selatan",
    salary: "Rp 16jt – 27jt",
    type: "Full Time",
    mode: "Hybrid",
    match: 72,
    tags: ["Kotlin", "Jetpack Compose", "Firebase"],
    posted: "5 hari lalu",
    desc: "Traveloka mencari Mobile Developer Android berpengalaman untuk memperkuat tim yang membangun aplikasi travel terbaik di Asia Tenggara dengan lebih dari 40 juta pengguna.",
    requirements: ["3+ tahun pengalaman Android native", "Mahir Kotlin & Jetpack Compose", "Familiar dengan CI/CD mobile"],
    benefits: ["Travel allowance", "Asuransi keluarga", "MacBook + gadget allowance", "25 hari cuti"],
  },
  {
    id: 10,
    title: "Full Stack Developer",
    company: "Blibli",
    abbr: "Bl",
    color: "#0077C8",
    location: "Jakarta Barat",
    salary: "Rp 13jt – 21jt",
    type: "Full Time",
    mode: "Hybrid",
    match: 70,
    tags: ["React", "Node.js", "PostgreSQL"],
    posted: "6 hari lalu",
    desc: "Blibli membuka posisi Full Stack Developer untuk memperkuat platform belanja online yang melayani jutaan pelanggan setia di seluruh Indonesia.",
    requirements: ["3+ tahun fullstack development", "Pengalaman React & Node.js", "Kemampuan desain database relasional"],
    benefits: ["Tunjangan transport", "BPJS + asuransi tambahan", "Employee discount", "Program pelatihan tahunan"],
  },
  {
    id: 11,
    title: "DevOps Engineer",
    company: "Bukalapak",
    abbr: "BL",
    color: "#E31E26",
    location: "Jakarta Pusat",
    salary: "Rp 15jt – 25jt",
    type: "Full Time",
    mode: "Remote",
    match: 68,
    tags: ["Kubernetes", "Terraform", "AWS"],
    posted: "1 minggu lalu",
    desc: "Bukalapak membuka peluang DevOps Engineer untuk menjaga dan meningkatkan keandalan infrastruktur cloud yang mendukung ekosistem marketplace dan fintech kami.",
    requirements: ["3+ tahun pengalaman DevOps/SRE", "Expert Kubernetes & cloud AWS/GCP", "Pengalaman IaC dengan Terraform"],
    benefits: ["Fully remote", "Stock option program", "Gadget allowance", "Health insurance keluarga"],
  },
  {
    id: 12,
    title: "IT Analyst",
    company: "Pertamina",
    abbr: "PTM",
    color: "#009A44",
    location: "Jakarta Pusat",
    salary: "Rp 14jt – 22jt",
    type: "Full Time",
    mode: "On-site",
    match: 65,
    tags: ["SAP", "Business Analysis", "SQL"],
    posted: "1 minggu lalu",
    desc: "Pertamina membuka posisi IT Analyst untuk mendukung transformasi digital di salah satu BUMN terbesar Indonesia, meliputi analisis sistem ERP dan pengembangan solusi bisnis.",
    requirements: ["3+ tahun pengalaman IT Analysis", "Familiar SAP atau ERP lainnya", "Kemampuan komunikasi bisnis & teknis"],
    benefits: ["Gaji kompetitif BUMN", "BPJS + asuransi swasta", "Tunjangan jabatan", "Program pensiun"],
  },
  {
    id: 13,
    title: "Software Developer",
    company: "BCA Digital",
    abbr: "BCA",
    color: "#005BAC",
    location: "Jakarta Selatan",
    salary: "Rp 15jt – 23jt",
    type: "Full Time",
    mode: "Hybrid",
    match: 63,
    tags: ["Spring Boot", "React", "Docker"],
    posted: "2 minggu lalu",
    desc: "BCA Digital membuka kesempatan bagi Software Developer untuk bergabung dalam pengembangan produk perbankan digital next-generation yang melayani nasabah milenial Indonesia.",
    requirements: ["2+ tahun pengalaman development", "Pengalaman Spring Boot atau React", "Pemahaman keamanan aplikasi perbankan"],
    benefits: ["Tunjangan perumahan", "Asuransi kesehatan premium", "Bonus kinerja tahunan", "Hybrid 3x WFO/minggu"],
  },
];

const FILTER_CHIPS = ["Remote", "Full Time", "Hybrid", "Fresh Graduate", "Gaji 10jt+", "Tech Industry"];

const STATS = [
  { icon: Briefcase, value: "250K+", label: "Lowongan Aktif", color: "#0F4CFF" },
  { icon: Building2, value: "15K+", label: "Perusahaan Terdaftar", color: "#00A8A8" },
  { icon: Users, value: "2.5M+", label: "Pencari Kerja", color: "#7C4DFF" },
  { icon: Award, value: "94%", label: "Tingkat Kepuasan", color: "#F59E0B" },
];

const HOW_IT_WORKS = [
  { icon: BookOpen, step: "01", title: "Buat Profil AI", desc: "Upload CV dan biarkan AI menganalisis skill serta pengalaman Anda secara otomatis." },
  { icon: Sparkles, step: "02", title: "Dapatkan Rekomendasi", desc: "AI kami mencocokkan profil Anda dengan ribuan lowongan yang paling relevan." },
  { icon: TrendingUp, step: "03", title: "Upgrade Skill", desc: "Ikuti kursus terarah untuk menutup gap skill dan perkuat peluang diterima." },
  { icon: CheckCircle, step: "04", title: "Apply & Terima Kerja", desc: "Apply dengan sekali klik dan pantau status lamaran Anda secara real-time." },
];

const COMPANIES = ["Tokopedia", "GoJek", "Shopee", "Traveloka", "OVO", "Lazada", "Tiket.com", "KAI", "Blibli", "Bukalapak", "Pertamina", "BCA Digital", "Mandiri", "Telkom", "Grab", "Dana"];

export function HomePage() {
  const [activeJob, setActiveJob] = useState(JOBS[0]);
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLocation, setSearchLocation] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const [hoveredJobId, setHoveredJobId] = useState<number | null>(null);

  const toggleFilter = (f: string) =>
    setActiveFilters((prev) => (prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]));

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* ─── Hero ─── */}
      <section
        className="relative overflow-hidden py-16 md:py-24"
        style={{
          background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #0F4CFF 100%)",
        }}
      >
        {/* Floating orb layers */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Blue orb top-right */}
          <div
            className="absolute"
            style={{
              top: "-10%",
              right: "-5%",
              width: "480px",
              height: "480px",
              background: "radial-gradient(circle, rgba(59,130,246,0.45) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Teal orb bottom-left */}
          <div
            className="absolute"
            style={{
              bottom: "-15%",
              left: "-8%",
              width: "420px",
              height: "420px",
              background: "radial-gradient(circle, rgba(0,168,168,0.38) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Purple orb center */}
          <div
            className="absolute"
            style={{
              top: "30%",
              left: "40%",
              transform: "translate(-50%, -50%)",
              width: "360px",
              height: "360px",
              background: "radial-gradient(circle, rgba(124,77,255,0.3) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          {/* Dot mesh overlay */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.08) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center" style={{ zIndex: 1 }}>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-xs font-medium" style={{ background: "rgba(255,255,255,0.1)", color: "#93C5FD", border: "1px solid rgba(255,255,255,0.15)" }}>
            <Sparkles className="w-3.5 h-3.5" />
            Platform AI Karier #1 di Indonesia
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl mx-auto mb-4" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#FFFFFF", lineHeight: 1.15 }}>
            Temukan Karier yang Cocok
            <span className="block" style={{ background: "linear-gradient(90deg, #60A5FA, #A78BFA)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              dengan Skill Anda
            </span>
          </h1>

          <p className="text-base md:text-lg max-w-2xl mx-auto mb-10" style={{ color: "rgba(255,255,255,0.7)", fontFamily: "Inter, sans-serif" }}>
            Platform AI yang membantu Anda beralih karier, meningkatkan kompetensi, dan terhubung dengan peluang kerja terbaik.
          </p>

          {/* Search Bar */}
          <div
            className="max-w-3xl mx-auto bg-white p-2 flex flex-col sm:flex-row gap-2 transition-all duration-300"
            style={{
              borderRadius: "24px",
              boxShadow: searchFocused
                ? "0 0 0 4px rgba(59,130,246,0.12), 0 8px 32px rgba(59,130,246,0.15)"
                : "0 8px 40px rgba(0,0,0,0.18)",
            }}
          >
            <div className="flex items-center gap-2 flex-1 px-3 py-1">
              <Search className="w-5 h-5 shrink-0" style={{ color: "#0F4CFF" }} />
              <input
                type="text"
                placeholder="Posisi atau Skill (mis. Product Manager, React)"
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-1 outline-none text-sm bg-transparent"
                style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <div className="hidden sm:block w-px bg-gray-200 my-2" />
            <div className="flex items-center gap-2 flex-1 px-3 py-1">
              <MapPin className="w-5 h-5 shrink-0" style={{ color: "#0F4CFF" }} />
              <input
                type="text"
                placeholder="Lokasi (mis. Jakarta, Remote)"
                value={searchLocation}
                onChange={(e) => setSearchLocation(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                className="flex-1 outline-none text-sm bg-transparent"
                style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}
              />
            </div>
            <button
              className="px-6 py-3 text-white font-medium text-sm transition-all hover:opacity-90 shadow-lg shrink-0"
              style={{ background: "linear-gradient(135deg, #0F4CFF 0%, #1A73E8 100%)", borderRadius: "18px" }}
            >
              <span className="hidden sm:inline">Cari Lowongan</span>
              <Search className="w-4 h-4 sm:hidden" />
            </button>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-2 mt-4">
            {FILTER_CHIPS.map((chip) => (
              <button
                key={chip}
                onClick={() => toggleFilter(chip)}
                className="px-4 py-1.5 rounded-full text-xs font-medium transition-all"
                style={
                  activeFilters.includes(chip)
                    ? { background: "#0F4CFF", color: "#fff" }
                    : { background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.8)", border: "1px solid rgba(255,255,255,0.2)" }
                }
              >
                {chip}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="py-10 bg-white border-b" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map(({ icon: Icon, value, label, color }, index) => (
              <motion.div
                key={label}
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: `${color}15` }}>
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <div>
                  <p className="text-2xl" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#0F172A" }}>{value}</p>
                  <p className="text-xs text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>{label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Featured Jobs ─── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#0F4CFF", fontFamily: "Inter, sans-serif" }}>Rekomendasi AI</p>
              <h2 className="text-2xl" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#0F172A" }}>Lowongan Pilihan untuk Anda</h2>
            </div>
            <Link to="/job-connect" className="hidden sm:flex items-center gap-1 text-sm font-medium" style={{ color: "#0F4CFF", fontFamily: "Inter, sans-serif" }}>
              Lihat semua <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* Job List */}
            <div className="lg:col-span-2 space-y-3">
              {JOBS.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setActiveJob(job)}
                  onMouseEnter={() => setHoveredJobId(job.id)}
                  onMouseLeave={() => setHoveredJobId(null)}
                  className="bg-white cursor-pointer transition-all duration-300 hover:-translate-y-0.5 border-2"
                  style={{
                    borderRadius: "24px",
                    borderColor: activeJob.id === job.id ? "#0F4CFF" : "rgba(0,0,0,0.05)",
                    border: activeJob.id === job.id ? "2px solid #0F4CFF" : "1px solid rgba(0,0,0,0.05)",
                    boxShadow:
                      activeJob.id === job.id
                        ? "0 0 0 4px rgba(15,76,255,0.08), 0 8px 32px rgba(15,76,255,0.12)"
                        : hoveredJobId === job.id
                        ? "0 8px 32px rgba(15,76,255,0.12)"
                        : "0 1px 4px rgba(0,0,0,0.06)",
                    padding: "16px",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white font-bold text-sm shrink-0" style={{ background: job.color }}>
                      {job.abbr}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm truncate" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}>{job.title}</h3>
                      <p className="text-xs text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>{job.company}</p>
                      <div className="flex items-center gap-2 mt-1.5 flex-wrap">
                        <span className="flex items-center gap-1 text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>
                          <MapPin className="w-3 h-3" />{job.location}
                        </span>
                        <span className="text-xs font-medium" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-2">
                        <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: "#F0FFF4", color: "#059669", fontFamily: "Inter, sans-serif" }}>{job.mode}</span>
                        <div className="flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-semibold" style={{ background: "rgba(15,76,255,0.08)", color: "#0F4CFF", fontFamily: "Inter, sans-serif" }}>
                          <Sparkles className="w-3 h-3" />{job.match}% Match
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Job Detail */}
            <div
              className="lg:col-span-3 bg-white sticky top-20"
              style={{
                borderRadius: "24px",
                maxHeight: "calc(100vh - 100px)",
                overflowY: "auto",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
              }}
            >
              {/* Header area with subtle gradient */}
              <div
                className="p-6 pb-5"
                style={{
                  background: "linear-gradient(135deg, #F8FAFF 0%, #F0F4FF 100%)",
                  borderRadius: "24px 24px 0 0",
                  borderBottom: "1px solid rgba(0,0,0,0.05)",
                }}
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-lg shrink-0" style={{ background: activeJob.color }}>
                    {activeJob.abbr}
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#0F172A" }}>{activeJob.title}</h2>
                    <p className="text-gray-500" style={{ fontFamily: "Inter, sans-serif" }}>{activeJob.company} • {activeJob.location}</p>
                    <div className="flex flex-wrap items-center gap-2 mt-2">
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "#F0F9FF", color: "#0369A1", fontFamily: "Inter, sans-serif" }}>{activeJob.type}</span>
                      <span className="px-2.5 py-1 rounded-full text-xs font-medium" style={{ background: "#F0FFF4", color: "#059669", fontFamily: "Inter, sans-serif" }}>{activeJob.mode}</span>
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: "rgba(15,76,255,0.08)", color: "#0F4CFF", fontFamily: "Inter, sans-serif" }}>
                        <Sparkles className="w-3 h-3" />{activeJob.match}% AI Match
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between py-3 rounded-2xl px-4" style={{ background: "rgba(255,255,255,0.8)", border: "1px solid rgba(0,0,0,0.05)" }}>
                  <div>
                    <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>Estimasi Gaji</p>
                    <p className="font-semibold" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}>{activeJob.salary}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>Diposting</p>
                    <p className="font-medium text-sm" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}>{activeJob.posted}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400" style={{ fontFamily: "Inter, sans-serif" }}>Tags</p>
                    <div className="flex gap-1 flex-wrap">
                      {activeJob.tags.map((t) => (
                        <span key={t} className="text-xs px-1.5 py-0.5 rounded" style={{ background: "#EEF2FF", color: "#4F46E5", fontFamily: "Inter, sans-serif" }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <h4 className="font-semibold text-sm mb-2" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}>Deskripsi Pekerjaan</h4>
                  <p className="text-sm text-gray-600 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{activeJob.desc}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}>Persyaratan</h4>
                  <ul className="space-y-1.5">
                    {activeJob.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-gray-600" style={{ fontFamily: "Inter, sans-serif" }}>
                        <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" style={{ color: "#0F4CFF" }} />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm mb-2" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}>Benefit</h4>
                  <div className="flex flex-wrap gap-2">
                    {activeJob.benefits.map((b) => (
                      <span key={b} className="px-3 py-1 rounded-full text-xs" style={{ background: "#F0FDF4", color: "#15803D", border: "1px solid #BBF7D0", fontFamily: "Inter, sans-serif" }}>{b}</span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-6">
                  <button className="flex-1 py-3 rounded-2xl text-white font-medium text-sm transition-all hover:opacity-90" style={{ background: "linear-gradient(135deg, #0F4CFF, #1A73E8)", fontFamily: "Inter, sans-serif" }}>
                    Quick Apply
                  </button>
                  <button className="px-4 py-3 rounded-2xl text-sm font-medium border-2 transition-all hover:border-blue-400" style={{ borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "Inter, sans-serif" }}>
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: "#0F4CFF", fontFamily: "Inter, sans-serif" }}>Cara Kerja</p>
            <h2 className="text-3xl" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#0F172A" }}>Mulai Karier Impian dalam 4 Langkah</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_IT_WORKS.map(({ icon: Icon, step, title, desc }, index) => (
              <motion.div
                key={step}
                className="relative p-6"
                style={{ background: "#F8FAFC", borderRadius: "24px" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute top-4 right-4 text-5xl font-black opacity-5" style={{ color: "#0F4CFF", fontFamily: "Poppins" }}>{step}</div>
                <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center" style={{ background: "linear-gradient(135deg, #0F4CFF15, #7C4DFF15)" }}>
                  <Icon className="w-6 h-6" style={{ color: "#0F4CFF" }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#0F172A", fontFamily: "Inter, sans-serif" }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Career Pivot AI Promo ─── */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className="rounded-3xl p-8 md:p-12 overflow-hidden relative"
            style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #312E81 100%)" }}
          >
            {/* Floating orbs inside dark box */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <div
                className="absolute"
                style={{
                  top: "-20%",
                  right: "10%",
                  width: "320px",
                  height: "320px",
                  background: "radial-gradient(circle, rgba(124,77,255,0.4) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
              <div
                className="absolute"
                style={{
                  bottom: "-10%",
                  left: "5%",
                  width: "280px",
                  height: "280px",
                  background: "radial-gradient(circle, rgba(59,130,246,0.35) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
              <div
                className="absolute"
                style={{
                  top: "40%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: "240px",
                  height: "240px",
                  background: "radial-gradient(circle, rgba(124,77,255,0.2) 0%, transparent 70%)",
                  filter: "blur(60px)",
                }}
              />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 text-xs" style={{ background: "rgba(124,77,255,0.2)", color: "#C4B5FD", border: "1px solid rgba(124,77,255,0.3)", fontFamily: "Inter, sans-serif" }}>
                  <Sparkles className="w-3.5 h-3.5" /> AI-Powered Career Tool
                </div>
                <h2 className="text-3xl mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#FFFFFF" }}>
                  Bingung Mau Pivot Karier?
                </h2>
                <p className="text-blue-200 mb-6 leading-relaxed" style={{ fontFamily: "Inter, sans-serif" }}>
                  AI kami menganalisis profil, skill, dan tren pasar untuk memberikan rekomendasi jalur karier terbaik yang cocok untuk Anda — lengkap dengan roadmap belajar dan proyeksi gaji.
                </p>
                <Link
                  to="/career-pivot"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-medium transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, #7C4DFF, #0F4CFF)", color: "#fff", fontFamily: "Inter, sans-serif" }}
                >
                  Coba Career Pivot AI <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="space-y-3">
                {[
                  { label: "Analisis Skill Gap", value: 85, color: "#60A5FA" },
                  { label: "Kesesuaian Karier", value: 92, color: "#A78BFA" },
                  { label: "Potensi Gaji Baru", value: 78, color: "#34D399" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between text-xs text-blue-200 mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
                      <span>{item.label}</span><span>{item.value}%</span>
                    </div>
                    <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{ width: `${item.value}%`, background: item.color }} />
                    </div>
                  </div>
                ))}
                <div className="grid grid-cols-2 gap-3 mt-4">
                  {[{ val: "12+", lbl: "Jalur Karier" }, { val: "3 Bln", lbl: "Estimasi Pivot" }].map((s) => (
                    <div key={s.lbl} className="rounded-3xl p-3" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                      <p className="text-xl font-bold text-white" style={{ fontFamily: "Poppins" }}>{s.val}</p>
                      <p className="text-xs text-blue-200" style={{ fontFamily: "Inter, sans-serif" }}>{s.lbl}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Features & Pricing ─── */}
      <FeaturesAndPricingSection />

      {/* ─── Top Companies ─── */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>Dipercaya oleh perusahaan-perusahaan terkemuka Indonesia</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {COMPANIES.map((name) => (
              <div
                key={name}
                className="text-gray-300 text-sm tracking-wide transition-all duration-200 cursor-pointer hover:text-gray-600 hover:font-semibold"
                style={{ fontFamily: "Inter, sans-serif" }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        className="py-16 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0f9ff 100%)" }}
      >
        {/* Subtle orbs in CTA */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute"
            style={{
              top: "-30%",
              right: "-5%",
              width: "300px",
              height: "300px",
              background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            className="absolute"
            style={{
              bottom: "-20%",
              left: "-5%",
              width: "280px",
              height: "280px",
              background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </div>
        <motion.div
          className="relative max-w-2xl mx-auto px-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#0F172A" }}>Siap Mulai Perjalanan Karier Anda?</h2>
          <p className="text-gray-500 mb-8" style={{ fontFamily: "Inter, sans-serif" }}>Daftar gratis dan mulai temukan peluang karier terbaik dengan kekuatan AI.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/candidate"
              className="px-8 py-3.5 rounded-xl font-medium text-white transition-all hover:opacity-90 shadow-lg"
              style={{ background: "linear-gradient(135deg, #0F4CFF, #1A73E8)", fontFamily: "Inter, sans-serif" }}
            >
              Daftar Gratis Sekarang
            </Link>
            <Link
              to="/employer"
              className="px-8 py-3.5 rounded-xl font-medium border-2 transition-all hover:border-blue-400"
              style={{ borderColor: "#CBD5E1", color: "#0F172A", fontFamily: "Inter, sans-serif" }}
            >
              Pasang Lowongan
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
