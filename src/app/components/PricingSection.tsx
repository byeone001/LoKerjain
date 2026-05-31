import { Check, Star, Zap, Crown } from "lucide-react";

interface PlanFeature {
  text: string;
  included: boolean;
}

interface Plan {
  id: string;
  badge: string;
  badgeIcon: React.ElementType;
  name: string;
  label: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  popular: boolean;
  features: PlanFeature[];
  color: string;
  bg: string;
  gradient: string;
}

const plans: Plan[] = [
  {
    id: "basic",
    badge: "Starter",
    badgeIcon: Star,
    name: "Basic",
    label: "Gratis",
    price: "Rp 0",
    period: "Selamanya",
    description: "Sempurna untuk memulai perjalanan karier digital Anda.",
    cta: "Mulai Gratis",
    popular: false,
    color: "#64748b",
    bg: "#F8FAFC",
    gradient: "linear-gradient(135deg, #64748b, #475569)",
    features: [
      { text: "Akses loker publik terbatas", included: true },
      { text: "1 Modul dasar LoKerjain-Up (Pengenalan TIK)", included: true },
      { text: "Analisis Career-Pivot AI dasar (1x per bulan)", included: true },
      { text: "Profil standar di Job-Connect", included: true },
      { text: "Akses semua modul sertifikasi", included: false },
      { text: "Unlimited Career-Pivot AI analysis", included: false },
      { text: "Lencana Verified Talent", included: false },
      { text: "Sesi Mentoring 1-on-1", included: false },
    ],
  },
  {
    id: "premium",
    badge: "Professional",
    badgeIcon: Zap,
    name: "Premium",
    label: "Berbayar",
    price: "Rp 199K",
    period: "/bulan",
    description: "Untuk profesional yang serius membangun karier digital terbaik.",
    cta: "Coba 7 Hari Gratis",
    popular: true,
    color: "#3B82F6",
    bg: "#EFF6FF",
    gradient: "linear-gradient(135deg, #3B82F6, #1D4ED8)",
    features: [
      { text: "Semua fitur Paket Basic", included: true },
      { text: "Akses penuh semua modul sertifikasi LoKerjain-Up", included: true },
      { text: "Unlimited Career-Pivot AI analysis", included: true },
      { text: "Lencana 'Verified Talent' di Job-Connect", included: true },
      { text: "Analisis kesenjangan skill (Skill-gap analysis)", included: true },
      { text: "Akses komunitas eksklusif", included: true },
      { text: "Sesi Mentoring 1-on-1", included: false },
      { text: "Job-Connect Priority Matching", included: false },
    ],
  },
  {
    id: "expert",
    badge: "Expert & Career Switcher",
    badgeIcon: Crown,
    name: "Premium Plus",
    label: "Berbayar",
    price: "Rp 449K",
    period: "/bulan",
    description: "Paket lengkap untuk percepatan karier dan transisi industri.",
    cta: "Hubungi Kami",
    popular: false,
    color: "#7C3AED",
    bg: "#F5F3FF",
    gradient: "linear-gradient(135deg, #7C3AED, #6D28D9)",
    features: [
      { text: "Semua fitur Paket Premium", included: true },
      { text: "Sesi Mentoring 1-on-1 dengan pakar industri", included: true },
      { text: "Proyek kelompok eksklusif berbasis industri", included: true },
      { text: "Prioritas utama matchmaking (Job-Connect Priority)", included: true },
      { text: "Review portofolio & simulasi wawancara AI", included: true },
      { text: "Akses program inkubasi karier", included: true },
      { text: "Dedicated career advisor", included: true },
      { text: "Laporan progress bulanan", included: true },
    ],
  },
];

export function PricingSection() {
  return (
    <section id="harga" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200"
            style={{ background: "#EFF6FF" }}>
            <Crown size={14} style={{ color: "#3B82F6" }} />
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.8rem", color: "#3B82F6" }}>
              Pilih Paket Terbaik Anda
            </span>
          </div>
          <h2
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              color: "#0f172a",
              letterSpacing: "-0.01em",
              lineHeight: "1.25",
            }}
          >
            Investasi Terbaik untuk{" "}
            <span style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Karier Anda
            </span>
          </h2>
          <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "1rem", color: "#64748b", maxWidth: "480px", lineHeight: "1.7" }}>
            Mulai gratis atau tingkatkan ke paket berbayar untuk akses penuh ke semua fitur ekosistem LoKerjain.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid lg:grid-cols-3 gap-6 items-start">
          {plans.map((plan) => {
            const BadgeIcon = plan.badgeIcon;
            return (
              <div
                key={plan.id}
                className="relative rounded-3xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                style={{
                  border: plan.popular ? `2px solid ${plan.color}` : "1.5px solid rgba(0,0,0,0.08)",
                  background: "white",
                  boxShadow: plan.popular
                    ? `0 20px 60px rgba(59, 130, 246, 0.15), 0 4px 16px rgba(59, 130, 246, 0.1)`
                    : "0 4px 16px rgba(0,0,0,0.04)",
                }}
              >
                {/* Most Popular badge */}
                {plan.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 flex items-center justify-center py-2"
                    style={{ background: plan.gradient }}
                  >
                    <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: "white", letterSpacing: "0.05em" }}>
                      ✦ PALING POPULER ✦
                    </span>
                  </div>
                )}

                <div className={`p-7 flex flex-col gap-6 ${plan.popular ? "pt-12" : ""}`}>
                  {/* Plan header */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <div
                        className="flex items-center gap-2 px-3 py-1.5 rounded-full"
                        style={{ background: plan.bg }}
                      >
                        <BadgeIcon size={13} style={{ color: plan.color }} />
                        <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: plan.color }}>
                          {plan.badge}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0f172a" }}>
                        {plan.name}
                      </h3>
                      <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#94a3b8", marginTop: "2px" }}>
                        {plan.description}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div
                    className="p-4 rounded-2xl flex items-end gap-1"
                    style={{ background: plan.bg }}
                  >
                    <span
                      style={{
                        fontFamily: "Poppins, sans-serif",
                        fontWeight: 800,
                        fontSize: "2rem",
                        color: "#0f172a",
                        lineHeight: 1,
                      }}
                    >
                      {plan.price}
                    </span>
                    <span
                      style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#94a3b8", marginBottom: "2px" }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* CTA Button */}
                  <button
                    style={{
                      fontFamily: "Poppins, sans-serif",
                      fontWeight: 600,
                      fontSize: "0.95rem",
                      background: plan.popular ? plan.gradient : "white",
                      color: plan.popular ? "white" : plan.color,
                      border: plan.popular ? "none" : `1.5px solid ${plan.color}`,
                      borderRadius: "14px",
                      padding: "13px 20px",
                      boxShadow: plan.popular ? `0 8px 24px rgba(59, 130, 246, 0.3)` : "none",
                    }}
                    className="w-full hover:opacity-90 transition-opacity duration-200"
                  >
                    {plan.cta}
                  </button>

                  {/* Divider */}
                  <div className="border-t border-gray-100" />

                  {/* Features list */}
                  <div className="flex flex-col gap-3">
                    <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#374151", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Yang Anda Dapatkan
                    </p>
                    {plan.features.map((feature) => (
                      <div key={feature.text} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{
                            background: feature.included ? plan.bg : "#F1F5F9",
                          }}
                        >
                          <Check
                            size={11}
                            style={{ color: feature.included ? plan.color : "#CBD5E1" }}
                          />
                        </div>
                        <span
                          style={{
                            fontFamily: "Poppins, sans-serif",
                            fontWeight: 400,
                            fontSize: "0.85rem",
                            color: feature.included ? "#374151" : "#CBD5E1",
                            lineHeight: "1.5",
                            textDecoration: feature.included ? "none" : "line-through",
                          }}
                        >
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div className="mt-12 text-center">
          <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.875rem", color: "#94a3b8" }}>
            Semua paket berbayar dilengkapi garansi uang kembali 14 hari. Tidak diperlukan kartu kredit untuk paket Gratis.
          </p>
        </div>
      </div>
    </section>
  );
}
