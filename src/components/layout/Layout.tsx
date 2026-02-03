import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper component
 * Provides consistent header and footer across all pages
 * Homepage has its own navbar and footer, so we skip the global ones
 */
export function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const isHomepage = location.pathname === '/';

  // Homepage uses its own Navbar and Footer from portfolio components
  if (isHomepage) {
    return (
      <div className="min-h-screen flex flex-col">
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main 
        id="main-content" 
        className="flex-1 pt-16"
        tabIndex={-1}
      >
        {children}
      </main>
      <Footer />
    </div>
  );
}
