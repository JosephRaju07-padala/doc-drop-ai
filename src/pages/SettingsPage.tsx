import { useState, useEffect } from "react";
import { Sun, Moon, User, GraduationCap, Building, Hash } from "lucide-react";
import { colleges, departments, semesters } from "@/lib/mockData";

export default function SettingsPage() {
  const [dark, setDark] = useState(() => document.documentElement.classList.contains("dark"));
  const [profile, setProfile] = useState({
    name: "Alex Kumar",
    email: "alex.kumar@university.edu",
    college: "Anna University",
    department: "Computer Science",
    semester: 4,
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <div className="space-y-8 max-w-2xl">
      <section className="animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tight">Settings</h1>
        <p className="mt-1 text-muted-foreground text-sm">Manage your profile and preferences.</p>
      </section>

      {/* Theme */}
      <div className="glass-card space-y-4 animate-fade-up" style={{ animationDelay: "100ms" }}>
        <h2 className="font-semibold text-sm">Appearance</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setDark(false)}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-all active:scale-95 ${
              !dark ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            <Sun className="h-4 w-4" />
            Light
          </button>
          <button
            onClick={() => setDark(true)}
            className={`flex-1 flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium transition-all active:scale-95 ${
              dark ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" : "bg-muted/40 text-muted-foreground hover:text-foreground"
            }`}
          >
            <Moon className="h-4 w-4" />
            Dark
          </button>
        </div>
      </div>

      {/* Profile */}
      <div className="glass-card space-y-4 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <h2 className="font-semibold text-sm">Profile</h2>

        {/* Avatar */}
        <div className="flex items-center gap-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center text-primary text-xl font-bold">
            {profile.name.split(" ").map((n) => n[0]).join("")}
          </div>
          <div>
            <p className="font-medium">{profile.name}</p>
            <p className="text-sm text-muted-foreground">{profile.email}</p>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <User className="h-3 w-3" /> Full Name
            </label>
            <input
              value={profile.name}
              onChange={(e) => setProfile({ ...profile, name: e.target.value })}
              className="w-full rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-shadow"
            />
          </div>
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Building className="h-3 w-3" /> College
            </label>
            <select
              value={profile.college}
              onChange={(e) => setProfile({ ...profile, college: e.target.value })}
              className="w-full rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none cursor-pointer"
            >
              {colleges.map((c) => <option key={c}>{c}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <GraduationCap className="h-3 w-3" /> Department
            </label>
            <select
              value={profile.department}
              onChange={(e) => setProfile({ ...profile, department: e.target.value })}
              className="w-full rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none cursor-pointer"
            >
              {departments.map((d) => <option key={d}>{d}</option>)}
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Hash className="h-3 w-3" /> Semester
            </label>
            <select
              value={profile.semester}
              onChange={(e) => setProfile({ ...profile, semester: Number(e.target.value) })}
              className="w-full rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none cursor-pointer"
            >
              {semesters.map((s) => <option key={s} value={s}>Semester {s}</option>)}
            </select>
          </div>
        </div>

        <button className="w-full rounded-xl bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all">
          Save Profile
        </button>
      </div>
    </div>
  );
}
