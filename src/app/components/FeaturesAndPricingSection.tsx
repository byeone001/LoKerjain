import { useState } from "react";
import {
  GraduationCap,
  BrainCircuit,
  Handshake,
  Check,
  ArrowRight,
  Zap,
  University,
  Building2,
  Landmark,
  ShieldCheck,
} from "lucide-react";

/* ─── Data ─────────────────────────────────────────────────────────── */

const CORE_FEATURES = [
  {
    icon: GraduationCap,
    name: "LoKerjain-Up",
    tag: "Learning & Collaboration",
    desc: "Kelas intensif dan proyek kelompok TIK untuk mengasah kemampuan Digital Communication and Collaboration.",
    accent: "#3B82F6",
    accentBg: "rgba(59,130,246,0.07)",
    gradient: "linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)",
  },
  {
    icon: BrainCircuit,
    name: "Career-Pivot AI",
    tag: "AI-Powered Career Tool",
    desc: "Alat analisis AI untuk merekomendasikan transisi karier antar-sektor berdasarkan kedekatan basis keahlian.",
    accent: "#7C3AED",
    accentBg: "rgba(124,58,237,0.07)",
    gradient: "linear-gradient(135deg, #F5F3FF 0%, #EDE9FE 100%)",
  },
  {
    icon: Handshake,
    name: "Job-Connect",
    tag: "Smart Matchmaking",
    desc: "Matchmaking engine pintar yang menghubungkan kandidat dengan perusahaan secara presisi, mengurangi bias waktu seleksi.",
    accent: "#0891B2",
    accentBg: "rgba(8,145,178,0.07)",
    gradient: "linear-gradient(135deg, #ECFEFF 0%, #CFFAFE 100%)",
  },
];

const PARTNERS = [
  { icon: University, label: "Universitas Indonesia" },
  { icon: University, label: "ITB Bandung" },
  { icon: Landmark, label: "Kemendikbud RI" },
  { icon: ShieldCheck, label: "BPJS Ketenagakerjaan" },
  { icon: Building2, label: "Tokopedia" },
  { icon: Building2, label: "Telkom Indonesia" },
  { icon: Building2, label: "GoJek" },
  { icon: Building2, label: "Bank BCA" },
];

const PLANS = [
  {
    id: "free",
    name: "FREE",
    price: "Rp 0",
    priceSub: "/bulan · Selamanya gratis",
    badge: null as string | null,
    tagline: "Cocok untuk semua pencari kerja.",
    valueQuote: null as string | null,
    benefits: [
      "Buat profil kandidat",
      "Cari lowongan kerja",
      "Lamar lowongan",
      "Simpan lowongan favorit",
      "Notifikasi lowongan terbaru",
      "Upload CV",
      "Melihat status lamaran dasar",
    ],
    limits: [
      "Tidak ada CV ATS Checker",
      "Tidak ada review CV",
      "Tidak ada simulasi interview",
      "Tidak ada akses lowongan eksklusif",
    ],
    cta: "Mulai Gratis",
    ctaVariant: "outline" as const,
  },
  {
    id: "basic",
    name: "BASIC",
    price: "Rp 29.000",
    priceSub: "/bulan",
    badge: null as string | null,
    tagline: "Cocok untuk fresh graduate dan pencari kerja aktif.",
    valueQuote: '"CV saya jadi lebih bagus dan peluang dipanggil HR lebih besar."',
    benefits: [
      "Semua fitur FREE +",
      "CV ATS Checker (5 kali/bulan)",
      "Template CV Premium",
      "AI perbaikan CV",
      "AI generator surat lamaran",
      "Analisis kekuatan dan kelemahan CV",
      "Notifikasi lowongan lebih cepat",
    ],
    limits: [] as string[],
    cta: "Mulai Basic",
    ctaVariant: "secondary" as const,
  },
  {
    id: "pro",
    name: "PRO",
    price: "Rp 79.000",
    priceSub: "/bulan",
    badge: "Terpopuler" as string | null,
    tagline: "Cocok untuk yang sedang serius mencari kerja.",
    valueQuote: '"Saya tidak hanya mencari lowongan, tapi juga dibimbing sampai lebih siap diterima kerja."',
    benefits: [
      "Semua fitur BASIC +",
      "CV ATS Checker tanpa batas",
      "AI Career Coach",
      "Simulasi interview AI",
      "Prediksi kecocokan dengan lowongan",
      "Rekomendasi pekerjaan personal",
      "Akses lowongan eksklusif",
      "Prioritas tampil ke recruiter",
      "Tracking semua lamaran",
      "Konsultasi karier grup bulanan",
    ],
    limits: [] as string[],
    cta: "Mulai Pro Sekarang",
    ctaVariant: "primary" as const,
  },
];

/* ─── SectionLabel ──────────────────────────────────────────────────── */

function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center justify-center gap-2 mb-4">
      <div className="h-px w-8 rounded-full" style={{ background: "#3B82F6" }} />
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "#3B82F6" }}>
        {text}
      </span>
      <div className="h-px w-8 rounded-full" style={{ background: "#3B82F6" }} />
    </div>
  );
}

/* ─── FeatureCard ───────────────────────────────────────────────────── */

function FeatureCard({ feat }: { feat: typeof CORE_FEATURES[0] }) {
  const [hovered, setHovered] = useState(false);
  const Icon = feat.icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative rounded-2xl p-8 cursor-default overflow-hidden"
      style={{
        background: "#ffffff",
        border: `1.5px solid ${hovered ? feat.accent + "40" : "rgba(0,0,0,0.06)"}`,
        boxShadow: hovered
          ? `0 20px 50px -10px ${feat.accent}25, 0 4px 16px rgba(0,0,0,0.06)`
          : "0 2px 12px rgba(0,0,0,0.05)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "all 0.3s",
      }}
    >
      <div
        className="absolute top-0 right-0 w-32 h-32 rounded-full pointer-events-none"
        style={{
          background: feat.gradient,
          opacity: hovered ? 1 : 0.5,
          filter: "blur(24px)",
          transform: "translate(30%, -30%)",
          transition: "opacity 0.3s",
        }}
      />
      <div
        className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-5"
        style={{ background: feat.accentBg, color: feat.accent }}
      >
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: feat.accent }} />
        {feat.tag}
      </div>
      <div
        className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5"
        style={{
          background: hovered ? feat.gradient : `${feat.accent}12`,
          border: `1px solid ${feat.accent}20`,
          transition: "all 0.3s",
        }}
      >
        <Icon className="w-7 h-7" style={{ color: feat.accent }} strokeWidth={1.75} />
      </div>
      <h3
        className="mb-2"
        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#0F172A" }}
      >
        {feat.name}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
        {feat.desc}
      </p>
      <div
        className="flex items-center gap-1.5 mt-5 text-xs font-semibold"
        style={{ color: hovered ? feat.accent : "#94A3B8", transition: "color 0.2s" }}
      >
        Pelajari lebih lanjut
        <ArrowRight
          className="w-3.5 h-3.5"
          style={{
            transform: hovered ? "translateX(3px)" : "translateX(0)",
            transition: "transform 0.2s",
          }}
        />
      </div>
    </div>
  );
}

/* ─── PricingCard ───────────────────────────────────────────────────── */

function PricingCard({ plan }: { plan: typeof PLANS[0] }) {
  const isPro = plan.id === "pro";
  const isBasic = plan.id === "basic";
  const accentColor = isPro ? "#3B82F6" : isBasic ? "#0891B2" : "#64748B";

  return (
    <div style={{ paddingTop: isPro ? "16px" : "0", position: "relative" }}>
      {/* Badge floats above card — must be outside the overflow:hidden card */}
      {plan.badge && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "50%",
            transform: "translateX(-50%)",
            background: "linear-gradient(135deg, #3B82F6, #2563EB)",
            color: "#fff",
            fontSize: "0.75rem",
            fontWeight: 700,
            padding: "6px 16px",
            borderRadius: "9999px",
            whiteSpace: "nowrap",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            boxShadow: "0 4px 14px rgba(59,130,246,0.4)",
            zIndex: 10,
          }}
        >
          <Zap style={{ width: "12px", height: "12px" }} />
          {plan.badge}
        </div>
      )}

      {/* Card */}
      <div
        style={{
          background: "#ffffff",
          border: isPro ? "2px solid #3B82F6" : "1.5px solid rgba(0,0,0,0.07)",
          borderRadius: "16px",
          boxShadow: isPro
            ? "0 24px 60px -12px rgba(59,130,246,0.25), 0 4px 20px rgba(0,0,0,0.06)"
            : "0 2px 16px rgba(0,0,0,0.05)",
          transform: isPro ? "scale(1.03)" : "scale(1)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <div
          style={{
            padding: isPro ? "28px 28px 24px" : "32px 28px 24px",
            background: isPro
              ? "linear-gradient(160deg, #EFF6FF 0%, #DBEAFE 100%)"
              : "transparent",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "16px" }}>
            <span
              style={{
                background: `${accentColor}14`,
                color: accentColor,
                fontSize: "0.7rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "4px 12px",
                borderRadius: "9999px",
              }}
            >
              {plan.name}
            </span>
            {isPro && <span style={{ fontSize: "1.1rem" }}>🔥</span>}
          </div>

          <div style={{ display: "flex", alignItems: "flex-end", gap: "8px", marginBottom: "4px" }}>
            <span
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 800,
                fontSize: "2rem",
                color: "#0F172A",
                lineHeight: 1,
              }}
            >
              {plan.price}
            </span>
            <span style={{ fontSize: "0.75rem", color: "#94A3B8", paddingBottom: "6px" }}>
              {plan.priceSub}
            </span>
          </div>

          <p style={{ fontSize: "0.75rem", color: "#64748B", marginTop: "8px" }}>{plan.tagline}</p>
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: isPro ? "rgba(59,130,246,0.15)" : "rgba(0,0,0,0.06)",
          }}
        />

        {/* Benefits */}
        <div style={{ flex: 1, padding: "20px 28px 8px" }}>
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
            {plan.benefits.map((text, i) => {
              const isInherit = text.startsWith("Semua fitur");
              return (
                <li key={`${plan.id}-b-${i}`} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                  {isInherit ? (
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontStyle: "italic",
                        fontWeight: 600,
                        color: accentColor,
                        paddingTop: "4px",
                        paddingBottom: "2px",
                      }}
                    >
                      {text}
                    </span>
                  ) : (
                    <>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          background: isPro
                            ? "rgba(59,130,246,0.1)"
                            : isBasic
                            ? "rgba(8,145,178,0.08)"
                            : "rgba(0,0,0,0.04)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "2px",
                        }}
                      >
                        <Check
                          style={{ width: "12px", height: "12px", color: accentColor }}
                          strokeWidth={2.5}
                        />
                      </div>
                      <span style={{ fontSize: "0.875rem", color: "#374151" }}>{text}</span>
                    </>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Limitations */}
          {plan.limits.length > 0 && (
            <>
              <div style={{ height: "1px", background: "rgba(0,0,0,0.05)", margin: "16px 0" }} />
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                {plan.limits.map((text, i) => (
                  <li
                    key={`${plan.id}-lim-${i}`}
                    style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}
                  >
                    <div
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "50%",
                        background: "#FEF2F2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        marginTop: "2px",
                        fontSize: "0.6rem",
                        color: "#EF4444",
                        fontWeight: 900,
                      }}
                    >
                      ✕
                    </div>
                    <span style={{ fontSize: "0.875rem", color: "#94A3B8" }}>{text}</span>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Value Quote */}
        {plan.valueQuote && (
          <div
            style={{
              margin: "12px 28px",
              padding: "12px 16px",
              borderRadius: "12px",
              background: isPro ? "rgba(59,130,246,0.06)" : "rgba(8,145,178,0.06)",
              border: `1px solid ${accentColor}18`,
            }}
          >
            <p
              style={{
                fontSize: "0.75rem",
                color: accentColor,
                fontStyle: "italic",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {plan.valueQuote}
            </p>
          </div>
        )}

        {/* CTA */}
        <div style={{ padding: "4px 28px 28px" }}>
          <button
            className="group"
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "12px",
              fontWeight: 600,
              fontSize: "0.875rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              cursor: "pointer",
              transition: "opacity 0.2s",
              ...(plan.ctaVariant === "primary"
                ? {
                    background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 100%)",
                    color: "#fff",
                    border: "none",
                    boxShadow: "0 4px 18px rgba(59,130,246,0.35)",
                  }
                : plan.ctaVariant === "secondary"
                ? {
                    background: "linear-gradient(135deg, #0891B2 0%, #0E7490 100%)",
                    color: "#fff",
                    border: "none",
                    boxShadow: "0 4px 14px rgba(8,145,178,0.25)",
                  }
                : {
                    background: "transparent",
                    color: "#374151",
                    border: "1.5px solid rgba(0,0,0,0.12)",
                  }),
            }}
          >
            {isPro && <Zap style={{ width: "16px", height: "16px" }} />}
            {plan.cta}
            <ArrowRight style={{ width: "16px", height: "16px" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ─── Main Export ───────────────────────────────────────────────────── */

export function FeaturesAndPricingSection() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", background: "#F8FAFC" }}>

      {/* ── Part 1: Core Features ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel text="Platform Kami" />
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "2.25rem",
                color: "#0F172A",
                lineHeight: 1.25,
              }}
            >
              Tiga Pilar Ekosistem
              <span
                className="block"
                style={{
                  background: "linear-gradient(90deg, #3B82F6, #7C3AED)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Ketenagakerjaan Digital
              </span>
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto text-base leading-relaxed"
              style={{ color: "#64748B" }}
            >
              Solusi terintegrasi untuk mengupgrade kompetensi, menavigasi perubahan karier, dan terhubung dengan peluang terbaik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CORE_FEATURES.map((feat) => (
              <FeatureCard key={feat.name} feat={feat} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Part 2: Partnership Banner ── */}
      <section className="overflow-hidden">
        <div
          className="relative py-16 md:py-20 overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0F172A 0%, #1E3A8A 50%, #1E40AF 100%)" }}
        >
          <div
            className="absolute top-0 left-0 w-96 h-96 rounded-full pointer-events-none"
            style={{ background: "rgba(59,130,246,0.15)", filter: "blur(80px)", transform: "translate(-30%, -30%)" }}
          />
          <div
            className="absolute bottom-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "rgba(124,58,237,0.15)", filter: "blur(80px)", transform: "translate(30%, 30%)" }}
          />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 text-xs font-semibold"
                  style={{
                    background: "rgba(59,130,246,0.2)",
                    color: "#93C5FD",
                    border: "1px solid rgba(59,130,246,0.3)",
                  }}
                >
                  <Handshake className="w-3.5 h-3.5" />
                  Kemitraan Strategis
                </div>
                <h2
                  className="mb-4"
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: 700,
                    fontSize: "2rem",
                    color: "#FFFFFF",
                    lineHeight: 1.3,
                  }}
                >
                  Meminimalkan
                  <span className="block" style={{ color: "#93C5FD" }}>
                    Skills Mismatch
                  </span>
                </h2>
                <p
                  className="text-sm leading-relaxed mb-8"
                  style={{ color: "rgba(255,255,255,0.65)", maxWidth: "480px" }}
                >
                  Bekerja sama melalui kemitraan strategis dengan industri, institusi pendidikan, dan pemerintah untuk memulihkan produktivitas nasional.
                </p>
                <div className="flex flex-wrap gap-6">
                  {[
                    { val: "500+", lbl: "Mitra Industri" },
                    { val: "80+", lbl: "Universitas" },
                    { val: "12", lbl: "Kementerian" },
                  ].map((s) => (
                    <div key={s.lbl}>
                      <p
                        style={{
                          fontFamily: "Poppins",
                          fontWeight: 700,
                          fontSize: "1.5rem",
                          color: "#FFFFFF",
                        }}
                      >
                        {s.val}
                      </p>
                      <p className="text-xs" style={{ color: "#93C5FD" }}>
                        {s.lbl}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <p
                  className="text-xs font-medium uppercase tracking-widest mb-5"
                  style={{ color: "rgba(255,255,255,0.35)" }}
                >
                  Dipercaya oleh
                </p>
                <div className="grid grid-cols-4 gap-3">
                  {PARTNERS.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex flex-col items-center justify-center gap-2 rounded-xl p-3 text-center"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: "rgba(255,255,255,0.5)" }}
                        strokeWidth={1.5}
                      />
                      <span
                        style={{
                          color: "rgba(255,255,255,0.55)",
                          fontSize: "0.65rem",
                          lineHeight: 1.3,
                        }}
                      >
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Part 3: Pricing Table ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionLabel text="Harga & Paket" />
            <h2
              style={{
                fontFamily: "Poppins, sans-serif",
                fontWeight: 700,
                fontSize: "2.25rem",
                color: "#0F172A",
                lineHeight: 1.25,
              }}
            >
              Mulai Gratis, Upgrade
              <span className="block" style={{ color: "#3B82F6" }}>
                Sesuai Kebutuhan Anda
              </span>
            </h2>
            <p
              className="mt-4 max-w-lg mx-auto text-sm leading-relaxed"
              style={{ color: "#64748B" }}
            >
              Dari pencari kerja kasual hingga yang serius ingin diterima — tersedia paket yang pas untuk setiap tahap perjalanan karier Anda.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {[
                { label: "FREE", sub: "Rp 0", color: "#64748B", bg: "#F1F5F9" },
                { label: "BASIC", sub: "Rp 29.000/bln", color: "#0891B2", bg: "#ECFEFF" },
                { label: "PRO 🔥", sub: "Rp 79.000/bln", color: "#2563EB", bg: "#EFF6FF" },
              ].map((chip) => (
                <div
                  key={chip.label}
                  className="flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold"
                  style={{ background: chip.bg, color: chip.color }}
                >
                  <span>{chip.label}</span>
                  <span className="opacity-60 font-normal">·</span>
                  <span className="font-normal opacity-80">{chip.sub}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {PLANS.map((plan) => (
              <PricingCard key={plan.id} plan={plan} />
            ))}
          </div>

          <div
            className="flex items-center justify-center gap-2 mt-10 text-sm"
            style={{ color: "#94A3B8" }}
          >
            <ShieldCheck className="w-4 h-4 shrink-0" style={{ color: "#22C55E" }} />
            Garansi uang kembali 30 hari · Tidak ada biaya tersembunyi · Batalkan kapan saja
          </div>
        </div>
      </section>
    </div>
  );
}
