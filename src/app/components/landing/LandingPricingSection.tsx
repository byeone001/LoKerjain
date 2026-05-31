import { useState } from "react";
import type { ElementType } from "react";
import { Check, Star, Zap, Crown } from "lucide-react";
import { motion } from "motion/react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  badge: string;
  badgeIcon: ElementType;
  name: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  popular: boolean;
  features: PlanFeature[];
  color: string;
  bg: string;
  gradient: string;
  verticalOffset: string;
}

const plans: Plan[] = [
  {
    id: "free",
    badge: "Gratis Selamanya",
    badgeIcon: Star,
    name: "FREE",
    price: "Rp 0",
    period: "/bulan · Selamanya gratis",
    description: "Cocok untuk semua pencari kerja.",
    cta: "Mulai Gratis",
    popular: false,
    color: "#64748b",
    bg: "rgba(248,250,252,0.8)",
    gradient: "linear-gradient(135deg, #64748b, #475569)",
    verticalOffset: "mt-8",
    features: [
      { text: "Buat profil kandidat", included: true },
      { text: "Cari & lamar lowongan kerja", included: true },
      { text: "Upload CV & simpan lowongan favorit", included: true },
      { text: "Notifikasi lowongan terbaru", included: true },
      { text: "CV ATS Checker", included: false },
      { text: "AI perbaikan CV & surat lamaran", included: false },
      { text: "Simulasi interview AI", included: false },
      { text: "Akses lowongan eksklusif", included: false },
    ],
  },
  {
    id: "basic",
    badge: "Fresh Graduate",
    badgeIcon: Crown,
    name: "BASIC",
    price: "Rp 29.000",
    period: "/bulan",
    description: "Cocok untuk fresh graduate dan pencari kerja aktif.",
    cta: "Mulai Basic",
    popular: false,
    color: "#0891B2",
    bg: "rgba(236,254,255,0.8)",
    gradient: "linear-gradient(135deg, #0891B2, #0E7490)",
    verticalOffset: "mt-6",
    features: [
      { text: "Semua fitur FREE +", included: true },
      { text: "CV ATS Checker (5 kali/bulan)", included: true },
      { text: "Template CV Premium", included: true },
      { text: "AI perbaikan CV", included: true },
      { text: "AI generator surat lamaran", included: true },
      { text: "Analisis kekuatan dan kelemahan CV", included: true },
      { text: "Notifikasi lowongan lebih cepat", included: true },
      { text: "Simulasi interview AI", included: false },
    ],
  },
  {
    id: "pro",
    badge: "Terpopuler 🔥",
    badgeIcon: Zap,
    name: "PRO",
    price: "Rp 79.000",
    period: "/bulan",
    description: "Cocok untuk yang sedang serius mencari kerja.",
    cta: "Mulai Pro Sekarang",
    popular: true,
    color: "#3B82F6",
    bg: "rgba(239,246,255,0.85)",
    gradient: "linear-gradient(135deg, #3B82F6, #2563EB)",
    verticalOffset: "mt-0",
    features: [
      { text: "Semua fitur BASIC +", included: true },
      { text: "CV ATS Checker tanpa batas", included: true },
      { text: "AI Career Coach", included: true },
      { text: "Simulasi interview AI", included: true },
      { text: "Prediksi kecocokan dengan lowongan", included: true },
      { text: "Akses lowongan eksklusif", included: true },
      { text: "Prioritas tampil ke recruiter", included: true },
      { text: "Konsultasi karier grup bulanan", included: true },
    ],
  },
];

export function LandingPricingSection() {
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);

  return (
    <section
      id="harga"
      className="py-24 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #faf5ff 50%, #f0f9ff 100%)" }}
    >
      {/* Background orbs — visible through glass cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", top: "5%", left: "8%", width: "420px", height: "420px", borderRadius: "50%", background: "rgba(59,130,246,0.1)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", top: "30%", right: "5%", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(124,77,255,0.09)", filter: "blur(80px)" }} />
        <div style={{ position: "absolute", bottom: "5%", left: "28%", width: "380px", height: "380px", borderRadius: "50%", background: "rgba(0,168,168,0.08)", filter: "blur(80px)" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
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
            style={{ background: "rgba(239,246,255,0.8)", backdropFilter: "blur(10px)" }}
          >
            <Crown size={14} style={{ color: "#3B82F6" }} />
            <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 500, fontSize: "0.8rem", color: "#3B82F6" }}>
              Pilih Paket Terbaik Anda
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
            Pilih Paket yang{" "}
            <span style={{ background: "linear-gradient(135deg, #3B82F6, #7C4DFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Tepat untuk Anda
            </span>
          </h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "1rem", color: "#64748b", maxWidth: "480px", lineHeight: "1.7" }}>
            Mulai gratis atau upgrade ke BASIC / PRO untuk fitur AI yang membantu Anda lebih cepat dapat kerja.
          </p>
        </motion.div>

        {/* Pricing cards — staggered heights */}
        <div className="grid lg:grid-cols-3 gap-5 items-start">
          {plans.map((plan, index) => {
            const BadgeIcon = plan.badgeIcon;
            const isHovered = hoveredPlan === plan.id;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -8 }}
                className={`relative overflow-hidden cursor-default transition-all duration-300 ${plan.verticalOffset}`}
                style={{
                  borderRadius: "28px",
                  background: plan.popular
                    ? "rgba(255,255,255,0.72)"
                    : "rgba(255,255,255,0.6)",
                  backdropFilter: "blur(24px)",
                  WebkitBackdropFilter: "blur(24px)",
                  border: plan.popular
                    ? `1.5px solid rgba(59,130,246,0.35)`
                    : "1px solid rgba(255,255,255,0.75)",
                  boxShadow: plan.popular
                    ? "0 20px 60px rgba(59,130,246,0.18), 0 0 0 1px rgba(59,130,246,0.08), inset 0 1px 0 rgba(255,255,255,0.85)"
                    : isHovered
                    ? "0 12px 40px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.7)"
                    : "0 4px 20px rgba(0,0,0,0.05), inset 0 1px 0 rgba(255,255,255,0.6)",
                }}
                onMouseEnter={() => setHoveredPlan(plan.id)}
                onMouseLeave={() => setHoveredPlan(null)}
              >
                {/* Popular banner */}
                {plan.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 flex items-center justify-center py-2.5"
                    style={{ background: plan.gradient }}
                  >
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.72rem", color: "white", letterSpacing: "0.08em" }}>
                      ✦ PALING POPULER ✦
                    </span>
                  </div>
                )}

                {/* Glow overlay for Premium */}
                {plan.popular && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 60%)",
                      borderRadius: "28px",
                    }}
                  />
                )}

                <div className={`p-7 flex flex-col gap-6 ${plan.popular ? "pt-14" : ""}`}>
                  {/* Plan header */}
                  <div className="flex flex-col gap-3">
                    <div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full w-fit"
                      style={{ background: plan.bg, backdropFilter: "blur(8px)" }}
                    >
                      <BadgeIcon size={13} style={{ color: plan.color }} />
                      <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: plan.color }}>
                        {plan.badge}
                      </span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0f172a", letterSpacing: "-0.01em" }}>
                        {plan.name}
                      </h3>
                      <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#94a3b8", marginTop: "2px" }}>
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div
                    className="p-4 rounded-2xl flex items-end gap-1"
                    style={{ background: plan.bg, backdropFilter: "blur(8px)" }}
                  >
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#0f172a", lineHeight: 1 }}>
                      {plan.price}
                    </span>
                    <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#94a3b8", marginBottom: "2px" }}>
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA */}
                  <button
                    className="w-full transition-all duration-200 hover:opacity-90"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      background: plan.popular ? plan.gradient : "rgba(255,255,255,0.8)",
                      color: plan.popular ? "white" : plan.color,
                      border: plan.popular ? "none" : `1.5px solid ${plan.color}50`,
                      borderRadius: "16px",
                      padding: "13px 20px",
                      boxShadow: plan.popular ? "0 8px 24px rgba(59,130,246,0.32)" : "none",
                      backdropFilter: plan.popular ? "none" : "blur(8px)",
                    }}
                  >
                    {plan.cta}
                  </button>

                  <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.06)" }} />

                  {/* Features */}
                  <div className="flex flex-col gap-3">
                    <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "#374151", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                      Yang Anda Dapatkan
                    </p>
                    {plan.features.map((feature, fi) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -6 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: fi * 0.04 + index * 0.1 }}
                        className="flex items-start gap-3"
                      >
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: feature.included ? plan.bg : "rgba(241,245,249,0.8)" }}
                        >
                          <Check size={11} style={{ color: feature.included ? plan.color : "#CBD5E1" }} />
                        </div>
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 400,
                            fontSize: "0.83rem",
                            color: feature.included ? "#374151" : "#CBD5E1",
                            lineHeight: "1.5",
                            textDecoration: feature.included ? "none" : "line-through",
                          }}
                        >
                          {feature.text}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 text-center"
        >
          <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#94a3b8" }}>
            Semua paket berbayar dilengkapi garansi uang kembali 14 hari · Tidak diperlukan kartu kredit untuk paket FREE
          </p>
        </motion.div>
      </div>
    </section>
  );
}
