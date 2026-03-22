import { ReactNode, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Upload, Download, Settings, BookOpen, Menu, X } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const navItems = [
  { to: "/", icon: Home, label: "Home" },
  { to: "/uploads", icon: Upload, label: "Uploads" },
  { to: "/downloads", icon: Download, label: "Downloads" },
  { to: "/settings", icon: Settings, label: "Settings" },
];

export default function AppLayout({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 -z-10">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-30 dark:opacity-20" />
        <div className="absolute inset-0 bg-background/70 dark:bg-background/80" />
      </div>

      {/* Top navbar */}
      <header className="glass-strong sticky top-0 z-50">
        <div className="mx-auto max-w-6xl flex items-center justify-between px-4 py-3 md:px-8">
          {/* Brand */}
          <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
            <BookOpen className="h-5 w-5 text-primary" />
            <span>
              <span style={{ color: 'hsl(0, 72%, 51%)' }}>PARA</span>
              <span style={{ color: 'hsl(221, 83%, 30%)' }}>DOCS</span>
            </span>
          </Link>

          {/* Desktop nav items */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                  pathname === item.to
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-muted/50 active:scale-95 transition-all md:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile dropdown nav */}
        {mobileOpen && (
          <nav className="border-t border-border/50 px-4 pb-3 pt-1 flex flex-col gap-0.5 md:hidden animate-fade-up">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors ${
                  pathname === item.to ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </header>

      {/* Main content */}
      <main className="min-h-[calc(100vh-56px)]">
        <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
