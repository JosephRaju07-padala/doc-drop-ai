import { Download, Wifi, WifiOff } from "lucide-react";
import MaterialCard from "@/components/MaterialCard";
import { userDownloads } from "@/lib/mockData";

export default function Downloads() {
  return (
    <div className="space-y-8">
      <section className="animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tight">Downloads</h1>
        <p className="mt-1 text-muted-foreground text-sm">Materials you've downloaded. Available offline.</p>
      </section>

      {/* Offline indicator */}
      <div className="glass-card !p-3 flex items-center gap-3 animate-fade-up" style={{ animationDelay: "100ms" }}>
        <div className="rounded-lg bg-emerald-500/10 p-2">
          <Wifi className="h-4 w-4 text-emerald-500" />
        </div>
        <div>
          <p className="text-sm font-medium">Offline Access Ready</p>
          <p className="text-xs text-muted-foreground">{userDownloads.length} materials available offline</p>
        </div>
      </div>

      {/* Downloads list */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {userDownloads.map((m, i) => (
          <div key={m.id} className="animate-fade-up" style={{ animationDelay: `${200 + i * 80}ms` }}>
            <MaterialCard material={m} showDownload={false} />
          </div>
        ))}
      </div>

      {userDownloads.length === 0 && (
        <div className="glass-card text-center py-12 animate-fade-up">
          <Download className="h-10 w-10 text-muted-foreground/40 mx-auto" />
          <p className="mt-3 text-sm text-muted-foreground">No downloads yet. Browse and download materials from the home page.</p>
        </div>
      )}
    </div>
  );
}
