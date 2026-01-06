import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import ProtectedRoute from "@/components/ProtectedRoute";

// Public pages
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";

// Portal pages
import Dashboard from "./pages/portal/Dashboard";
import Units from "./pages/portal/Units";
import Tenants from "./pages/portal/Tenants";
import Billing from "./pages/portal/Billing";
import Leads from "./pages/portal/Leads";
import { PastDue, Reports, YieldManagement, Comms, Settings } from "./pages/portal/PlaceholderPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />

            {/* Protected portal routes */}
            <Route path="/portal" element={<Navigate to="/portal/dash" replace />} />
            <Route path="/portal/dash" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/portal/units" element={<ProtectedRoute><Units /></ProtectedRoute>} />
            <Route path="/portal/tenants" element={<ProtectedRoute><Tenants /></ProtectedRoute>} />
            <Route path="/portal/billing" element={<ProtectedRoute><Billing /></ProtectedRoute>} />
            <Route path="/portal/leads" element={<ProtectedRoute><Leads /></ProtectedRoute>} />
            <Route path="/portal/past-due" element={<ProtectedRoute><PastDue /></ProtectedRoute>} />
            <Route path="/portal/reports" element={<ProtectedRoute><Reports /></ProtectedRoute>} />
            <Route path="/portal/yield-management" element={<ProtectedRoute><YieldManagement /></ProtectedRoute>} />
            <Route path="/portal/comms" element={<ProtectedRoute><Comms /></ProtectedRoute>} />
            <Route path="/portal/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

            {/* Catch-all */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
