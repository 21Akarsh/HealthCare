// import { Toaster } from "@/components/ui/toaster";
// import { Toaster as Sonner } from "@/components/ui/sonner";
// import { TooltipProvider } from "@/components/ui/tooltip";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Index from "./pages/Index";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Dashboard from "./pages/Dashboard";
// import BookAppointment from "@/pages/BookAppointment";
// import DiagnosticCenters from "./pages/DiagnosticCenters";
// import CenterDetails from "./pages/CenterDetails";
// import DiagnosticTests from "./pages/DiagnosticTests";
// import AdminDashboard from "./pages/AdminDashboard";
// import UserManagement from "./pages/UserManagement";
// import CenterManagement from "./pages/CenterManagement";
// import SystemSettings from "./pages/SystemSettings";
// import DiagnosticCenterAdminDashboard from "./pages/DiagnosticCenterAdminDashboard";
// import AddTest from "./pages/AddTest";
// import ManageTests from "./pages/ManageTests";
// import TestResultsManagement from "./pages/TestResultsManagement";
// import UserTestResults from "./pages/UserTestResults";
// import NotFound from "./pages/NotFound";

// const queryClient = new QueryClient();

// const App = () => (
//   <QueryClientProvider client={queryClient}>
//     <TooltipProvider>
//       <Toaster />
//       <Sonner />
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Index />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/appointments/book" element={<BookAppointment />} />
//           <Route path="/centers" element={<DiagnosticCenters />} />
//           <Route path="/centers/:id" element={<CenterDetails />} />
//           <Route path="/tests" element={<DiagnosticTests />} />
//           <Route path="/diagnostic-tests" element={<DiagnosticTests />} />
//           <Route path="/admin" element={<AdminDashboard />} />
//           <Route path="/admin/users" element={<UserManagement />} />
//           <Route path="/admin/centers" element={<CenterManagement />} />
//           <Route path="/admin/settings" element={<SystemSettings />} />
//           <Route path="/diagnostic-center-admin" element={<DiagnosticCenterAdminDashboard />} />
//           <Route path="/diagnostic-center-admin/add-test" element={<AddTest />} />
//           <Route path="/diagnostic-center-admin/manage-tests" element={<ManageTests />} />
//           <Route path="/diagnostic-center-admin/test-results" element={<TestResultsManagement />} />
//           <Route path="/my-test-results" element={<UserTestResults />} />
//           {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </TooltipProvider>
//   </QueryClientProvider>
// );

// export default App;


import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import VerifyOTP from "./pages/VerifyOTP";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Dashboard from "./pages/Dashboard";
import BookAppointment from "@/pages/BookAppointment";
import DiagnosticCenters from "./pages/DiagnosticCenters";
import CenterDetails from "./pages/CenterDetails";
import DiagnosticTests from "./pages/DiagnosticTests";
import AdminDashboard from "./pages/AdminDashboard";
import UserManagement from "./pages/UserManagement";
import CenterManagement from "./pages/CenterManagement";
import SystemSettings from "./pages/SystemSettings";
import DiagnosticCenterAdminDashboard from "./pages/DiagnosticCenterAdminDashboard";
import AddTest from "./pages/AddTest";
import ManageTests from "./pages/ManageTests";
import TestResultsManagement from "./pages/TestResultsManagement";
import UserTestResults from "./pages/UserTestResults";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOTP />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/appointments/book" element={<BookAppointment />} />
          <Route path="/centers" element={<DiagnosticCenters />} />
          <Route path="/centers/:id" element={<CenterDetails />} />
          <Route path="/tests" element={<DiagnosticTests />} />
          <Route path="/diagnostic-tests" element={<DiagnosticTests />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/users" element={<UserManagement />} />
          <Route path="/admin/centers" element={<CenterManagement />} />
          <Route path="/admin/settings" element={<SystemSettings />} />
          <Route path="/diagnostic-center-admin" element={<DiagnosticCenterAdminDashboard />} />
          <Route path="/diagnostic-center-admin/add-test" element={<AddTest />} />
          <Route path="/diagnostic-center-admin/manage-tests" element={<ManageTests />} />
          <Route path="/diagnostic-center-admin/test-results" element={<TestResultsManagement />} />
          <Route path="/my-test-results" element={<UserTestResults />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

