import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Import the new Layout component
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs"; // Import AboutUs page
import Services from "./pages/Services"; // Import Services page
import IndustriesServed from "./pages/IndustriesServed"; // Import IndustriesServed page
import Regulations from "./pages/Regulations"; // Import Regulations page
import Blog from "./pages/Blog"; // Import Blog page
import LoginPage from "./pages/LoginPage"; // Import LoginPage
import RegisterPage from "./pages/RegisterPage"; // Import RegisterPage
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout> {/* Wrap routes with the Layout component */}
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} /> {/* About Us Route */}
            <Route path="/services" element={<Services />} /> {/* Services Route */}
            <Route path="/industries" element={<IndustriesServed />} /> {/* Industries Served Route */}
            <Route path="/regulations" element={<Regulations />} /> {/* Regulations Route */}
            <Route path="/blog" element={<Blog />} /> {/* Blog Route */}
            <Route path="/login" element={<LoginPage />} /> {/* Login Route */}
            <Route path="/register" element={<RegisterPage />} /> {/* Register Route */}
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;