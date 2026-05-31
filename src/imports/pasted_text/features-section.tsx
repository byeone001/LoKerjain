import { GraduationCap, Compass, Zap, ArrowRight, Users, Brain, Target } from "lucide-react";

const features = [
  {
    id: "lokerjain-up",
    icon: GraduationCap,
    accentIcon: Users,
    tag: "Upskilling Platform",
    name: "LoKerjain-Up",
    tagline: "Wujudkan Potensi Digital Anda",
    description:
      "Kelas intensif dan proyek ICT kolaboratif yang dirancang untuk membekali Anda dengan kompetensi digital yang dibutuhkan industri masa kini.",
    highlights: ["Sertifikasi BNSP terstandar", "Mentor berpengalaman industri", "Proyek nyata berbasis kolaborasi", "Modul adaptif berbasis AI"],
    color: "#3B82F6",
    bg: "#EFF6FF",
    gradient: "linear-gradient(135deg, #3B82F6 0%, #1D4ED8 100%)",
    imageUrl: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw0fHxwZW9wbGUlMjB3b3JraW5nJTIwdGVjaG5vbG9neSUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3ODAwNDU5MTR8MA&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    id: "career-pivot",
    icon: Compass,
    accentIcon: Brain,
    tag: "AI Career Tool",
    name: "Career-Pivot AI",
    tagline: "Navigasi Transisi Karier Cerdas",
    description:
      "Alat cerdas berbasis AI untuk transisi karier lintas sektor, dipandu pemetaan skill mendalam yang menyesuaikan profil unik Anda.",
    highlights: ["Pemetaan skill komprehensif", "Rekomendasi lintas industri", "Analisis kesenjangan real-time", "Roadmap karier personal"],
    color: "#8B5CF6",
    bg: "#F5F3FF",
    gradient: "linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)",
    imageUrl: "https://images.unsplash.com/photo-1592220769343-8a128527c5f1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwY2FyZWVyJTIwbGVhcm5pbmclMjBJbmRvbmVzaWElMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzgwMDQ1OTE5fDA&ixlib=rb-4.1.0&q=80&w=600",
  },
  {
    id: "job-connect",
    icon: Zap,
    accentIcon: Target,
    tag: "Smart Matchmaking",
    name: "Job-Connect",
    tagline: "Terhubung dengan Peluang Terbaik",
    description:
      "Sistem matchmaking AI presisi tinggi yang menghubungkan talenta terbaik dengan perusahaan terkemuka secara akurat dan efisien.",
    highlights: ["Matching berbasis AI canggih", "Ribuan perusahaan terverifikasi", "Notifikasi peluang real-time", "Profil Verified Talent"],
    color: "#10B981",
    bg: "#ECFDF5",
    gradient: "linear-gradient(135deg, #10B981 0%, #059669 100%)",
    imageUrl: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxwZW9wbGUlMjB3b3JraW5nJTIwdGVjaG5vbG9neSUyMG9mZmljZSUyMG1vZGVybnxlbnwxfHx8fDE3ODAwNDU5MTR8MA&ixlib=rb-4.1.0&q=80&w=600",
  },
];

export function FeaturesSection() {
  return (
    <section id="fitur" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-200"
            style={{ background: "#EFF6FF" }}>
            <Zap size={14} style={{ color: "#3B82F6" }} />
            <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.8rem", color: "#3B82F6" }}>
              Ekosistem Terintegrasi
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
            Tiga Pilar Utama{" "}
            <span style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              LoKerjain
            </span>
          </h2>
          <p
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: 400,
              fontSize: "1rem",
              color: "#64748b",
              maxWidth: "520px",
              lineHeight: "1.7",
            }}
          >
            Solusi komprehensif dari belajar, pivot karier, hingga mendapatkan pekerjaan impian Anda.
          </p>
        </div>

        {/* Feature cards */}
        <div className="flex flex-col gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            const AccentIcon = feature.accentIcon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={feature.id}
                className="grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                style={{ border: "1px solid rgba(0,0,0,0.06)", background: "white" }}
              >
                {/* Image side */}
                <div
                  className={`relative h-64 lg:h-auto overflow-hidden ${isEven ? "lg:order-2" : ""}`}
                  style={{ minHeight: "280px" }}
                >
                  <img
                    src={feature.imageUrl}
                    alt={feature.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: `linear-gradient(135deg, ${feature.color}33, transparent)` }}
                  />
                  {/* Floating tag on image */}
                  <div
                    className="absolute top-4 left-4 px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.9)", backdropFilter: "blur(8px)" }}
                  >
                    <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.75rem", color: feature.color }}>
                      {feature.tag}
                    </span>
                  </div>
                </div>

                {/* Content side */}
                <div className={`p-8 lg:p-10 flex flex-col justify-center gap-6 ${isEven ? "lg:order-1" : ""}`}>
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
                      style={{ background: feature.bg }}
                    >
                      <IconComponent size={22} style={{ color: feature.color }} />
                    </div>
                    <div>
                      <h3
                        style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.4rem", color: "#0f172a", lineHeight: "1.2" }}
                      >
                        {feature.name}
                      </h3>
                      <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 500, fontSize: "0.875rem", color: feature.color }}>
                        {feature.tagline}
                      </p>
                    </div>
                  </div>

                  <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.95rem", color: "#64748b", lineHeight: "1.7" }}>
                    {feature.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    {feature.highlights.map((hl) => (
                      <div key={hl} className="flex items-center gap-2">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: feature.bg }}
                        >
                          <AccentIcon size={10} style={{ color: feature.color }} />
                        </div>
                        <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#374151" }}>
                          {hl}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="flex items-center gap-2 group/btn w-fit"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.875rem", color: feature.color }}
                  >
                    Pelajari lebih lanjut
                    <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}