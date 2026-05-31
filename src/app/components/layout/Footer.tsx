import { Link } from "react-router";
import { Twitter, Linkedin, Instagram, Youtube } from "lucide-react";
import logoImg from "../../../imports/Logo_LoKerjain_2.png";

export function Footer() {
  return (
    <footer className="bg-white border-t" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center mb-4">
              <img
                src={logoImg}
                alt="LoKerjain"
                style={{ height: "30px", width: "auto", objectFit: "contain" }}
              />
            </Link>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              Platform AI yang membantu Anda beralih karier, meningkatkan kompetensi, dan terhubung dengan peluang kerja terbaik di Indonesia.
            </p>
            <p className="text-xs text-blue-600 font-medium mt-2">Pivot. Upgrade. Connect.</p>
            <div className="flex items-center gap-3 mt-4">
              {[Twitter, Linkedin, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              title: "Pencari Kerja",
              links: ["Cari Lowongan", "Career Pivot AI", "LokerjainUp", "Job-Connect", "Sertifikasi"],
            },
            {
              title: "Job-Connect",
              links: ["Pasang Lowongan", "Employer Dashboard", "Employer Branding", "Talent Pipeline", "Harga"],
            },
            {
              title: "LokerjainUp",
              links: ["Semua Kursus", "Digital Marketing", "Data Analytics", "UI/UX Design", "AI & ML"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-gray-500 hover:text-blue-600 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t flex flex-col sm:flex-row justify-between items-center gap-3" style={{ borderColor: "rgba(0,0,0,0.07)" }}>
          <p className="text-xs text-gray-400">© 2026 LoKerjain. All rights reserved.</p>
          <div className="flex items-center gap-4">
            {["Kebijakan Privasi", "Syarat & Ketentuan", "Cookie Policy"].map((item) => (
              <a key={item} href="#" className="text-xs text-gray-400 hover:text-blue-600 transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
