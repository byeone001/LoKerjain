import { useState } from "react";
import { Link, useParams } from "react-router";
import { motion } from "motion/react";
import {
  MapPin,
  Users,
  Briefcase,
  Star,
  CheckCircle,
  Heart,
  Share2,
  TrendingUp,
  Award,
  ArrowLeft,
} from "lucide-react";
import { getCompanyById } from "../data/companiesData";

export function CompanyProfilePage() {
  const { id } = useParams();
  const company = getCompanyById(Number(id));

  const [activeTab, setActiveTab] = useState<"jobs" | "reviews" | "benefits" | "culture">("jobs");
  const [saved, setSaved] = useState(false);

  if (!company) {
    return (
      <div
        className="min-h-screen flex flex-col items-center justify-center"
        style={{ fontFamily: "Inter, sans-serif", background: "#f8faff" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center gap-5 px-8 py-10"
          style={{
            borderRadius: "24px",
            background: "linear-gradient(135deg, #fff 0%, #f0f4ff 100%)",
            border: "1px solid rgba(15,76,255,0.08)",
            boxShadow: "0 8px 40px rgba(15,76,255,0.08)",
            maxWidth: 380,
            width: "90%",
          }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center"
            style={{
              borderRadius: "20px",
              background: "linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%)",
            }}
          >
            <Briefcase className="w-7 h-7" style={{ color: "#0F4CFF" }} />
          </div>
          <p className="text-xl font-semibold text-center" style={{ color: "#0F172A", fontFamily: "Poppins, sans-serif" }}>
            Perusahaan tidak ditemukan
          </p>
          <p className="text-sm text-gray-400 text-center">
            Halaman yang kamu cari tidak tersedia atau telah dihapus.
          </p>
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium transition-all hover:bg-blue-50"
            style={{
              color: "#0F4CFF",
              border: "1px solid rgba(15,76,255,0.2)",
              borderRadius: "14px",
            }}
          >
            <ArrowLeft className="w-4 h-4" /> Kembali ke Daftar Perusahaan
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#f8faff", minHeight: "100vh" }}>
      {/* Tombol Kembali */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-5">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          className="inline-block"
        >
          <Link
            to="/companies"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all hover:bg-blue-50"
            style={{
              color: "#0F4CFF",
              border: "1px solid rgba(15,76,255,0.2)",
              borderRadius: "14px",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 12px rgba(15,76,255,0.12)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Daftar Perusahaan
          </Link>
        </motion.div>
      </div>

      {/* Banner */}
      <div
        className="h-52 md:h-64 relative overflow-hidden mt-4"
        style={{ background: `linear-gradient(135deg, ${company.gradientFrom} 0%, ${company.gradientTo} 100%)` }}
      >
        {/* Floating orbs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            style={{
              position: "absolute",
              top: "-30%",
              left: "10%",
              width: "360px",
              height: "360px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              filter: "blur(40px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "-20%",
              right: "15%",
              width: "280px",
              height: "280px",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.08)",
              filter: "blur(40px)",
            }}
          />
        </div>
        {/* Dot mesh overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="text-xs font-medium opacity-70 mb-1">{company.name.toUpperCase()}</p>
            <p className="text-sm opacity-50">{company.tagline}</p>
          </div>
        </div>
      </div>

      {/* Profile Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative -mt-12 flex flex-col sm:flex-row items-start sm:items-end gap-4 mb-6">
          {/* Logo Avatar */}
          <div
            className="w-24 h-24 border-4 border-white flex items-center justify-center text-2xl font-bold text-white shadow-xl"
            style={{
              background: company.color,
              fontFamily: "Poppins",
              fontWeight: 700,
              borderRadius: "20px",
              boxShadow: `0 8px 24px ${company.color}40`,
            }}
          >
            {company.abbr}
          </div>
          <div className="flex-1">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 flex-wrap">
              <div>
                <h1
                  className="text-2xl"
                  style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, color: "#0F172A" }}
                >
                  {company.name}
                </h1>
                <p className="text-gray-500 text-sm">{company.sector}</p>
              </div>
              {company.verified && (
                <div
                  className="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium"
                  style={{
                    background: "#F0FDF4",
                    color: "#15803D",
                    border: "1px solid #BBF7D0",
                    borderRadius: "999px",
                    boxShadow: "0 2px 8px rgba(34,197,94,0.2)",
                  }}
                >
                  <CheckCircle className="w-3.5 h-3.5" /> Verified Company
                </div>
              )}
            </div>
          </div>
          {/* Action buttons */}
          <div className="flex gap-2">
            <button
              onClick={() => setSaved(!saved)}
              className="flex items-center gap-1.5 px-4 py-2 text-sm border transition-all"
              style={{
                borderColor: saved ? "#EF4444" : "#E2E8F0",
                color: saved ? "#EF4444" : "#64748B",
                background: saved ? "#FFF5F5" : "#fff",
                borderRadius: "14px",
                boxShadow: saved ? "0 4px 12px rgba(239,68,68,0.2)" : "none",
              }}
            >
              <Heart className={`w-4 h-4 ${saved ? "fill-current" : ""}`} />
              {saved ? "Tersimpan" : "Simpan"}
            </button>
            <button
              className="flex items-center gap-1.5 px-4 py-2 text-sm border"
              style={{ borderColor: "#E2E8F0", color: "#64748B", background: "#fff", borderRadius: "14px" }}
            >
              <Share2 className="w-4 h-4" /> Bagikan
            </button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
          {[
            { icon: Users, label: "Karyawan", value: company.employees },
            { icon: MapPin, label: "Lokasi", value: company.location },
            { icon: Briefcase, label: "Lowongan Aktif", value: `${company.openJobs} Posisi` },
            { icon: Star, label: "Rating", value: `${company.rating}/5.0 (${company.reviewCount} ulasan)` },
          ].map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              className="bg-white p-4"
              style={{
                borderRadius: "20px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 4px 16px rgba(0,0,0,0.05)",
              }}
            >
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              <div className="flex items-center gap-2">
                <div
                  className="w-6 h-6 flex items-center justify-center shrink-0"
                  style={{
                    borderRadius: "8px",
                    background: "rgba(15,76,255,0.08)",
                    boxShadow: "0 2px 8px rgba(15,76,255,0.15)",
                  }}
                >
                  <Icon className="w-3.5 h-3.5" style={{ color: "#0F4CFF" }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: "#0F172A" }}>{value}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* About */}
        <div
          className="bg-white p-6 mb-6"
          style={{
            borderRadius: "24px",
            border: "1px solid rgba(0,0,0,0.05)",
            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          }}
        >
          <h2 className="font-semibold mb-3" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
            Tentang {company.name}
          </h2>
          {company.about.map((para, i) => (
            <p key={i} className="text-sm text-gray-600 leading-relaxed mb-3 last:mb-0">{para}</p>
          ))}
          <div className="flex flex-wrap gap-2 mt-4">
            {company.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs"
                style={{ background: "#EEF2FF", color: "#4F46E5", borderRadius: "999px" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-6 overflow-x-auto pb-1">
          {(["jobs", "reviews", "benefits", "culture"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="shrink-0 px-5 py-2.5 text-sm font-medium transition-all"
              style={
                activeTab === tab
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
              {tab === "jobs"
                ? "Lowongan Kerja"
                : tab === "reviews"
                ? "Ulasan Karyawan"
                : tab === "benefits"
                ? "Benefit & Tunjangan"
                : "Budaya Kerja"}
            </button>
          ))}
        </div>

        {/* Lowongan */}
        {activeTab === "jobs" && (
          <div className="space-y-3 mb-10">
            {company.jobs.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.35 }}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.1)" }}
                className="bg-white p-5 flex items-center gap-4 flex-wrap"
                style={{
                  borderRadius: "20px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <h3 className="font-semibold text-sm" style={{ color: "#0F172A" }}>{job.title}</h3>
                    {job.isNew && (
                      <span className="px-2 py-0.5 rounded text-xs" style={{ background: "#0F4CFF", color: "#fff" }}>
                        New
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-400 mb-2">
                    {job.dept} · <MapPin className="w-3 h-3 inline" /> {job.location}
                  </p>
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full text-xs" style={{ background: "#F0F9FF", color: "#0369A1" }}>
                      {job.type}
                    </span>
                    <span className="text-xs font-medium" style={{ color: "#0F172A" }}>{job.salary}</span>
                    <span className="text-xs font-medium" style={{ color: "#0F4CFF" }}>· {job.match}% Match</span>
                  </div>
                </div>
                <button
                  className="px-4 py-2 text-sm font-medium text-white shrink-0 transition-all"
                  style={{
                    background: `linear-gradient(135deg, ${company.color}, ${company.gradientTo})`,
                    borderRadius: "14px",
                    boxShadow: `0 4px 12px ${company.color}40`,
                  }}
                >
                  Lamar
                </button>
              </motion.div>
            ))}
          </div>
        )}

        {/* Ulasan */}
        {activeTab === "reviews" && (
          <div className="space-y-4 mb-10">
            <div
              className="bg-white p-6 flex items-center gap-6 flex-wrap"
              style={{
                borderRadius: "24px",
                border: "1px solid rgba(0,0,0,0.05)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
              }}
            >
              <div className="text-center">
                <p className="text-5xl font-black" style={{ fontFamily: "Poppins", color: "#0F172A" }}>
                  {company.rating}
                </p>
                <div className="flex gap-0.5 my-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      className="w-4 h-4"
                      style={{
                        color: i <= Math.round(company.rating) ? "#F59E0B" : "#E2E8F0",
                        fill: i <= Math.round(company.rating) ? "#F59E0B" : "none",
                        filter:
                          i <= Math.round(company.rating)
                            ? "drop-shadow(0 0 2px rgba(245,158,11,0.4))"
                            : "none",
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-400">{company.reviewCount} ulasan</p>
              </div>
              <div className="flex-1 min-w-48 space-y-2">
                {company.ratingBreakdown.map(({ label, val }) => (
                  <div key={label} className="flex items-center gap-3">
                    <span className="text-xs text-gray-400 w-32 shrink-0">{label}</span>
                    <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${(val / 5) * 100}%`, background: "#F59E0B" }}
                      />
                    </div>
                    <span className="text-xs font-medium w-6 text-right" style={{ color: "#0F172A" }}>{val}</span>
                  </div>
                ))}
              </div>
            </div>
            {company.reviews.map((r, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
                className="bg-white p-5"
                style={{
                  borderRadius: "20px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-medium text-sm" style={{ color: "#0F172A" }}>{r.author}</p>
                    <p className="text-xs text-gray-400">{r.role} · {r.date}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map((j) => (
                      <Star
                        key={j}
                        className="w-3.5 h-3.5"
                        style={{
                          color: j <= r.rating ? "#F59E0B" : "#E2E8F0",
                          fill: j <= r.rating ? "#F59E0B" : "none",
                          filter:
                            j <= r.rating
                              ? "drop-shadow(0 0 2px rgba(245,158,11,0.4))"
                              : "none",
                        }}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{r.text}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Benefit */}
        {activeTab === "benefits" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
            {company.benefits.map(({ icon: Icon, label, desc }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.35 }}
                className="bg-white p-5"
                style={{
                  borderRadius: "20px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                  style={{
                    background: `${company.color}15`,
                    boxShadow: `0 4px 12px ${company.color}20`,
                  }}
                >
                  <Icon className="w-5 h-5" style={{ color: company.color }} />
                </div>
                <h3 className="font-semibold text-sm mb-1" style={{ color: "#0F172A" }}>{label}</h3>
                <p className="text-xs text-gray-500">{desc}</p>
              </motion.div>
            ))}
          </div>
        )}

        {/* Budaya */}
        {activeTab === "culture" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {company.culture.map(({ color, title, desc }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07, duration: 0.35 }}
                className="bg-white p-6"
                style={{
                  borderRadius: "20px",
                  border: "1px solid rgba(0,0,0,0.05)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div
                  className="w-8 h-8 flex items-center justify-center mb-3"
                  style={{
                    borderRadius: "12px",
                    background: `${color}18`,
                    boxShadow: `0 0 0 1px ${color}30, 0 4px 12px ${color}20`,
                  }}
                >
                  <div
                    className="w-3.5 h-3.5"
                    style={{
                      borderRadius: "6px",
                      background: color,
                      boxShadow: `0 0 6px ${color}80`,
                    }}
                  />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#0F172A" }}>{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
