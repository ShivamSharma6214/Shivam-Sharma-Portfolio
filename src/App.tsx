import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Index = lazy(() => import("./pages/Index"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));

const fallback = (
  <div className="flex min-h-screen items-center justify-center bg-[#050508] px-6 text-center text-sm uppercase tracking-[0.22em] text-[#f0ede8]/70">
    Loading Experience
  </div>
);

const App = () => (
  <BrowserRouter>
    <Suspense fallback={fallback}>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default App;
