import { useState, useMemo } from "react";
import { Search, Filter, TrendingUp, BookOpen, Users, FileText } from "lucide-react";
import MaterialCard from "@/components/MaterialCard";
import { mockMaterials, colleges, departments, semesters } from "@/lib/mockData";

const stats = [
  { icon: FileText, label: "Materials", value: "2,847" },
  { icon: Users, label: "Contributors", value: "612" },
  { icon: TrendingUp, label: "Downloads", value: "18.3k" },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const [college, setCollege] = useState("");
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState<number | "">("");

  const filtered = useMemo(() => {
    return mockMaterials.filter((m) => {
      if (search && !m.title.toLowerCase().includes(search.toLowerCase()) && !m.subject.toLowerCase().includes(search.toLowerCase())) return false;
      if (college && m.college !== college) return false;
      if (department && m.department !== department) return false;
      if (semester && m.semester !== semester) return false;
      return true;
    });
  }, [search, college, department, semester]);

  return (
    <div className="space-y-8">
      {/* Hero */}
      <section className="animate-fade-up">
        <h1 className="text-3xl font-bold tracking-tight text-balance leading-tight md:text-4xl">
          Find your study materials
        </h1>
        <p className="mt-2 text-muted-foreground max-w-lg">
          Access notes, PDFs, question papers and slides shared by students and teachers from your college.
        </p>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 animate-fade-up" style={{ animationDelay: "100ms" }}>
        {stats.map((s) => (
          <div key={s.label} className="glass-card flex items-center gap-3 !p-4">
            <div className="rounded-lg bg-primary/10 p-2">
              <s.icon className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-lg font-semibold tabular-nums">{s.value}</p>
              <p className="text-xs text-muted-foreground">{s.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Search and filters */}
      <div className="space-y-3 animate-fade-up" style={{ animationDelay: "200ms" }}>
        <div className="glass-card !p-3 flex items-center gap-3">
          <Search className="h-4 w-4 text-muted-foreground shrink-0" />
          <input
            type="text"
            placeholder="Search materials, subjects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/60"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <select value={college} onChange={(e) => setCollege(e.target.value)} className="glass rounded-lg px-3 py-2 text-xs bg-transparent outline-none cursor-pointer">
            <option value="">All Colleges</option>
            {colleges.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
          <select value={department} onChange={(e) => setDepartment(e.target.value)} className="glass rounded-lg px-3 py-2 text-xs bg-transparent outline-none cursor-pointer">
            <option value="">All Departments</option>
            {departments.map((d) => <option key={d} value={d}>{d}</option>)}
          </select>
          <select value={semester} onChange={(e) => setSemester(e.target.value ? Number(e.target.value) : "")} className="glass rounded-lg px-3 py-2 text-xs bg-transparent outline-none cursor-pointer">
            <option value="">All Semesters</option>
            {semesters.map((s) => <option key={s} value={s}>Semester {s}</option>)}
          </select>
        </div>
      </div>

      {/* Materials grid */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((m, i) => (
          <div key={m.id} className="animate-fade-up" style={{ animationDelay: `${300 + i * 80}ms` }}>
            <MaterialCard material={m} />
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="col-span-full glass-card text-center py-12">
            <BookOpen className="h-10 w-10 text-muted-foreground/40 mx-auto" />
            <p className="mt-3 text-sm text-muted-foreground">No materials found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
}
