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

      {/* Mobile header */}
      <header className="glass-strong sticky top-0 z-50 flex items-center justify-between px-4 py-3 md:hidden">
        <Link to="/" className="flex items-center gap-2 font-semibold text-lg">
          <BookOpen className="h-5 w-5 text-primary" />
          <span><span style={{ color: 'hsl(0, 72%, 51%)' }}>PARA</span><span style={{ color: 'hsl(221, 83%, 30%)' }}>DOCS</span></span>
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-lg hover:bg-muted/50 active:scale-95 transition-all">
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </header>

      {/* Mobile nav overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMobileOpen(false)}>
          <div className="absolute inset-0 bg-background/40 backdrop-blur-sm" />
          <nav className="glass-strong absolute top-14 left-3 right-3 rounded-xl p-2 animate-fade-up" onClick={(e) => e.stopPropagation()}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                  pathname === item.to ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

      <div className="flex">
        {/* Desktop sidebar */}
        <aside className="glass-strong hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 z-30">
          <div className="flex h-16 items-center gap-2.5 px-6 border-b border-border/50">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-lg font-semibold tracking-tight">StudyVault</span>
          </div>
          <nav className="flex-1 space-y-1 px-3 py-4">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200 ${
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
          <div className="px-4 py-4 border-t border-border/50">
            <div className="glass-card p-3 text-center">
              <p className="text-xs text-muted-foreground">Study smarter, not harder ✨</p>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 md:ml-64 min-h-screen">
          <div className="mx-auto max-w-6xl px-4 py-6 md:px-8 md:py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
