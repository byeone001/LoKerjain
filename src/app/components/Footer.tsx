import { MapPin, Mail, Phone, Twitter, Linkedin, Instagram } from "lucide-react";

const footerLinks = {
  Platform: ["LoKerjain-Up", "Career-Pivot AI", "Job-Connect", "Sertifikasi"],
  Perusahaan: ["Tentang Kami", "Tim", "Karier", "Blog"],
  Dukungan: ["Pusat Bantuan", "Hubungi Kami", "Kebijakan Privasi", "Syarat Layanan"],
};

export function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Brand col */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "linear-gradient(135deg, #3B82F6, #1D4ED8)" }}>
                <span className="text-white text-sm" style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700 }}>LK</span>
              </div>
              <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "white" }}>
                Lo<span style={{ color: "#3B82F6" }}>Kerjain</span>
              </span>
            </div>
            <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.9rem", color: "#94a3b8", lineHeight: "1.7", maxWidth: "280px" }}>
              Orkestrator ekosistem ketenagakerjaan digital Indonesia. Bersama kita pulihkan produktivitas nasional.
            </p>
            <div className="flex flex-col gap-3">
              {[
                { icon: MapPin, text: "Jakarta, Indonesia" },
                { icon: Mail, text: "halo@lokerjain.id" },
                { icon: Phone, text: "+62 21 1234 5678" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={14} style={{ color: "#3B82F6", flexShrink: 0 }} />
                  <span style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#94a3b8" }}>{text}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-3">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <button
                  key={i}
                  className="w-9 h-9 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors duration-200"
                  style={{ background: "#1e293b" }}
                >
                  <Icon size={15} style={{ color: "#94a3b8" }} />
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="flex flex-col gap-4">
              <h4 style={{ fontFamily: "Poppins, sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "white" }}>
                {title}
              </h4>
              <div className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.85rem", color: "#94a3b8" }}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#64748b" }}>
            © 2026 LoKerjain. Hak cipta dilindungi.
          </p>
          <p style={{ fontFamily: "Poppins, sans-serif", fontWeight: 400, fontSize: "0.8rem", color: "#64748b" }}>
            Dibuat dengan ❤️ untuk kemajuan Indonesia
          </p>
        </div>
      </div>
    </footer>
  );
}
