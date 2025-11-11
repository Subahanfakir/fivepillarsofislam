import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Shahada from "./pages/Shahada";
import Salah from "./pages/Salah";
import Zakat from "./pages/Zakat";
import Ramadan from "./pages/Ramadan";
import Hajj from "./pages/Hajj";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/fivepillarsofislam">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/shahada" element={<Shahada />} />
          <Route path="/salah" element={<Salah />} />
          <Route path="/zakat" element={<Zakat />} />
          <Route path="/ramadan" element={<Ramadan />} />
          <Route path="/hajj" element={<Hajj />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
