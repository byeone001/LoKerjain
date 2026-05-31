import { Outlet } from "react-router";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";

export function MainLayout() {
  return (
    <div style={{ fontFamily: "Inter, Poppins, sans-serif", backgroundColor: "#F8FAFC" }} className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
