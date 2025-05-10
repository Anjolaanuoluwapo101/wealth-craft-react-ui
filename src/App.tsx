
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import DummyPage from "./pages/DummyPage";
import "./App.css";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            
            {/* Dummy Pages for Links */}
            <Route path="/register" element={<DummyPage />} />
            <Route path="/contact" element={<DummyPage />} />
            <Route path="/recommended-funds" element={<DummyPage />} />
            <Route path="/about" element={<DummyPage />} />
            <Route path="/mutual-fund" element={<DummyPage />} />
            <Route path="/insurance" element={<DummyPage />} />
            <Route path="/blog" element={<DummyPage />} />
            <Route path="/bonds" element={<DummyPage />} />
            <Route path="/pms" element={<DummyPage />} />
            <Route path="/tools" element={<DummyPage />} />
            <Route path="/unlisted-shares" element={<DummyPage />} />
            <Route path="/terms" element={<DummyPage />} />
            <Route path="/privacy" element={<DummyPage />} />
            <Route path="/disclaimer" element={<DummyPage />} />
            <Route path="/important-links" element={<DummyPage />} />
            <Route path="/disclosure" element={<DummyPage />} />
            <Route path="/privacy-policy" element={<DummyPage />} />
            <Route path="/sid-sai-kim" element={<DummyPage />} />
            <Route path="/code-of-conduct" element={<DummyPage />} />
            <Route path="/sebi-circulars" element={<DummyPage />} />
            <Route path="/amfi-risk-factors" element={<DummyPage />} />
            
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
