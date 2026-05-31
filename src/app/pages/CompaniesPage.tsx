import { Link } from "react-router";
import { MapPin, Users, Briefcase, Star, CheckCircle, Search } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const COMPANIES = [
  {
    id: 1,
    name: "Tokopedia",
    abbr: "T",
    color: "#00AE68",
    sector: "E-Commerce & Technology",
    location: "Jakarta",
    employees: "5.000–10.000",
    openJobs: 28,
    rating: 4.5,
    tags: ["E-Commerce", "AI/ML", "Fintech"],
    verified: true,
  },
  {
    id: 2,
    name: "GoJek",
    abbr: "G",
    color: "#00AA13",
    sector: "Super App & Ride-Hailing",
    location: "Jakarta",
    employees: "10.000+",
    openJobs: 42,
    rating: 4.6,
    tags: ["Super App", "Logistics", "Fintech"],
    verified: true,
  },
  {
    id: 3,
    name: "Shopee",
    abbr: "S",
    color: "#EE4D2D",
    sector: "E-Commerce",
    location: "Jakarta",
    employees: "5.000–10.000",
    openJobs: 35,
    rating: 4.3,
    tags: ["E-Commerce", "Marketing", "Data"],
    verified: true,
  },
  {
    id: 4,
    name: "Traveloka",
    abbr: "Tv",
    color: "#0079FF",
    sector: "Travel & Lifestyle",
    location: "Jakarta",
    employees: "3.000–5.000",
    openJobs: 19,
    rating: 4.4,
    tags: ["Travel Tech", "Mobile", "UX"],
    verified: true,
  },
  {
    id: 5,
    name: "OVO",
    abbr: "O",
    color: "#4B2177",
    sector: "Fintech & Digital Payment",
    location: "Jakarta",
    employees: "1.000–3.000",
    openJobs: 14,
    rating: 4.2,
    tags: ["Fintech", "Backend", "Security"],
    verified: true,
  },
  {
    id: 6,
    name: "Lazada",
    abbr: "Lz",
    color: "#F57224",
    sector: "E-Commerce",
    location: "Jakarta",
    employees: "3.000–5.000",
    openJobs: 22,
    rating: 4.1,
    tags: ["E-Commerce", "Logistics", "Data"],
    verified: true,
  },
  {
    id: 7,
    name: "Tiket.com",
    abbr: "Tk",
    color: "#E74694",
    sector: "Travel Tech",
    location: "Bali",
    employees: "500–1.000",
    openJobs: 11,
    rating: 4.3,
    tags: ["Travel", "Frontend", "Remote-Friendly"],
    verified: true,
  },
  {
    id: 8,
    name: "KAI",
    abbr: "KAI",
    color: "#003580",
    sector: "Transportasi & BUMN",
    location: "Bandung",
    employees: "10.000+",
    openJobs: 17,
    rating: 4.0,
    tags: ["BUMN", "IT Transformation", "Railway"],
    verified: true,
  },
  {
    id: 9,
    name: "Blibli",
    abbr: "Bl",
    color: "#0077C8",
    sector: "E-Commerce",
    location: "Jakarta",
    employees: "1.000–3.000",
    openJobs: 16,
    rating: 4.2,
    tags: ["E-Commerce", "Full Stack", "Cloud"],
    verified: true,
  },
  {
    id: 10,
    name: "Bukalapak",
    abbr: "BL",
    color: "#E31E26",
    sector: "E-Commerce & Fintech",
    location: "Jakarta",
    employees: "1.000–3.000",
    openJobs: 13,
    rating: 4.1,
    tags: ["E-Commerce", "DevOps", "Remote"],
    verified: true,
  },
  {
    id: 11,
    name: "Pertamina",
    abbr: "PTM",
    color: "#009A44",
    sector: "Energi & BUMN",
    location: "Jakarta",
    employees: "10.000+",
    openJobs: 9,
    rating: 4.0,
    tags: ["BUMN", "IT Analyst", "ERP"],
    verified: true,
  },
  {
    id: 12,
    name: "BCA Digital",
    abbr: "BCA",
    color: "#005BAC",
    sector: "Perbankan Digital",
    location: "Jakarta",
    employees: "500–1.000",
    openJobs: 12,
    rating: 4.4,
    tags: ["Perbankan", "Fintech", "Hybrid"],
    verified: true,
  },
  {
    id: 13,
    name: "Dana",
    abbr: "D",
    color: "#5F98FF",
    sector: "Digital Wallet",
    location: "Jakarta",
    employees: "500–1.000",
    openJobs: 10,
    rating: 4.3,
    tags: ["Fintech", "Mobile", "Payment"],
    verified: true,
  },
  {
    id: 14,
    name: "Grab",
    abbr: "Gr",
    color: "#00B14F",
    sector: "Super App & Ride-Hailing",
    location: "Jakarta",
    employees: "5.000–10.000",
    openJobs: 24,
    rating: 4.4,
    tags: ["Super App", "Mobility", "Delivery"],
    verified: true,
  },
  {
    id: 15,
    name: "Telkom Indonesia",
    abbr: "TLK",
    color: "#E40521",
    sector: "Telekomunikasi & BUMN",
    location: "Bandung",
    employees: "10.000+",
    openJobs: 20,
    rating: 4.1,
    tags: ["BUMN", "Telco", "Cloud"],
    verified: true,
  },
  {
    id: 16,
    name: "Bank Mandiri",
    abbr: "BM",
    color: "#003087",
    sector: "Perbankan & Keuangan",
    location: "Jakarta",
    employees: "10.000+",
    openJobs: 15,
    rating: 4.2,
    tags: ["Perbankan", "IT", "Digital Banking"],
    verified: true,
  },
];

const SECTORS = ["Semua", "E-Commerce", "Fintech", "Travel Tech", "BUMN", "Perbankan", "Super App"];

export function CompaniesPage() {
  const [search, setSearch] = useState("");
  const [activeSector, setActiveSector] = useState("Semua");

  const filtered = COMPANIES.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.sector.toLowerCase().includes(search.toLowerCase());
    const matchSector = activeSector === "Semua" || c.tags.some((t) => t.includes(activeSector)) || c.sector.includes(activeSector);
    return matchSearch && matchSector;
  });

  return (
    <div style={{ fontFamily: "Inter, sans-serif" }}>
      {/* Hero */}
      <div
        className="py-12 relative overflow-hidden"
        style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 60%, #0F4CFF 100%)" }}
      >
        {/* Orb layers */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              top: "-60px",
              right: "-80px",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(59,130,246,0.55) 0%, transparent 70%)",
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
              background: "radial-gradient(circle, rgba(20,184,166,0.45) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "40%",
              left: "45%",
              transform: "translate(-50%, -50%)",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(124,77,255,0.35) 0%, transparent 70%)",
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
          <h1 className="text-3xl md:text-4xl mb-3" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#fff" }}>
            Direktori Perusahaan
          </h1>
          <p className="text-blue-100 mb-6 max-w-xl mx-auto text-sm">
            Temukan perusahaan impian Anda — dari startup unicorn hingga BUMN terkemuka Indonesia.
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Cari nama perusahaan atau industri..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl text-sm bg-white outline-none"
              style={{ color: "#0F172A" }}
            />
          </div>
        </div>
      </div>

      <div style={{ background: "#f8faff" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Sector Filter */}
          <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
            {SECTORS.map((s) => (
              <button
                key={s}
                onClick={() => setActiveSector(s)}
                className="shrink-0 px-4 py-2 text-sm font-medium transition-all"
                style={
                  activeSector === s
                    ? {
                        background: "#0F4CFF",
                        color: "#fff",
                        borderRadius: "999px",
                        boxShadow: "0 4px 14px rgba(15,76,255,0.25)",
                      }
                    : {
                        background: "#fff",
                        color: "#64748B",
                        border: "1px solid #E2E8F0",
                        borderRadius: "999px",
                      }
                }
              >
                {s}
              </button>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-sm text-gray-400 mb-5">{filtered.length} perusahaan ditemukan</p>
          </motion.div>

          {/* Company Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filtered.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
                style={{
                  borderRadius: "24px",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                }}
              >
                <Link
                  to={`/company/${company.id}`}
                  className="bg-white p-5 flex flex-col gap-4 block h-full"
                  style={{ border: "1px solid rgba(0,0,0,0.05)", borderRadius: "24px" }}
                >
                  {/* Logo + Name */}
                  <div className="flex items-center gap-3">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center text-white shrink-0"
                      style={{
                        background: company.color,
                        fontFamily: "Poppins",
                        fontWeight: 700,
                        fontSize: "0.8rem",
                        boxShadow: `0 4px 12px ${company.color}30`,
                      }}
                    >
                      {company.abbr}
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5">
                        <p className="font-semibold text-sm truncate" style={{ color: "#0F172A" }}>{company.name}</p>
                        {company.verified && <CheckCircle className="w-3.5 h-3.5 shrink-0" style={{ color: "#22C55E" }} />}
                      </div>
                      <p className="text-xs text-gray-400 truncate">{company.sector}</p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1">
                    {company.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded-full text-xs" style={{ background: "#EEF2FF", color: "#4F46E5" }}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div
                    className="flex items-center justify-between text-xs text-gray-400 pt-2 border-t"
                    style={{ borderColor: "rgba(0,0,0,0.05)" }}
                  >
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {company.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-3 h-3" style={{ color: "#0F4CFF" }} />
                      <span style={{ color: "#0F4CFF", fontWeight: 600 }}>{company.openJobs}</span> loker
                    </div>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3" style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                      {company.rating}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
