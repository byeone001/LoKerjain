import { createBrowserRouter } from "react-router";
import { MainLayout } from "./layouts/MainLayout";
import { LandingPage } from "./pages/LandingPage";
import { HomePage } from "./pages/HomePage";
import { CareerPivotPage } from "./pages/CareerPivotPage";
import { LearningPage } from "./pages/LearningPage";
import { JobConnectPage } from "./pages/JobConnectPage";
import { CandidateDashboard } from "./pages/CandidateDashboard";
import { EmployerDashboard } from "./pages/EmployerDashboard";
import { CompanyProfilePage } from "./pages/CompanyProfilePage";
import { CompaniesPage } from "./pages/CompaniesPage";
import { CommunityPage } from "./pages/CommunityPage";

export const router = createBrowserRouter([
  { path: "/", Component: LandingPage },
  {
    Component: MainLayout,
    children: [
      { path: "home", Component: HomePage },
      { path: "career-pivot", Component: CareerPivotPage },
      { path: "learning", Component: LearningPage },
      { path: "job-connect", Component: JobConnectPage },
      { path: "companies", Component: CompaniesPage },
      { path: "company/:id", Component: CompanyProfilePage },
      { path: "community", Component: CommunityPage },
    ],
  },
  { path: "/candidate", Component: CandidateDashboard },
  { path: "/employer", Component: EmployerDashboard },
]);
