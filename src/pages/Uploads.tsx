import { useState } from "react";
import { Upload, Plus, X, FileUp } from "lucide-react";
import MaterialCard from "@/components/MaterialCard";
import { userUploads, colleges, departments, semesters } from "@/lib/mockData";

export default function Uploads() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="space-y-8">
      <section className="flex items-start justify-between gap-4 animate-fade-up">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Your Uploads</h1>
          <p className="mt-1 text-muted-foreground text-sm">Materials you've shared with the community.</p>
        </div>
        <button
          onClick={() => setShowForm(!showForm)}
          className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95 transition-all"
        >
          {showForm ? <X className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
          {showForm ? "Cancel" : "Upload"}
        </button>
      </section>

      {/* Upload form */}
      {showForm && (
        <div className="glass-card animate-fade-up space-y-4">
          <h2 className="font-semibold text-sm">Upload New Material</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            <input placeholder="Title" className="rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" />
            <input placeholder="Subject" className="rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-primary/30 transition-shadow" />
            <select className="rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none cursor-pointer">
              <option>Select College</option>
              {colleges.map((c) => <option key={c}>{c}</option>)}
            </select>
            <select className="rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none cursor-pointer">
              <option>Select Department</option>
              {departments.map((d) => <option key={d}>{d}</option>)}
            </select>
            <select className="rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none cursor-pointer">
              <option>Select Semester</option>
              {semesters.map((s) => <option key={s}>Semester {s}</option>)}
            </select>
            <select className="rounded-lg bg-muted/40 px-3 py-2.5 text-sm outline-none cursor-pointer">
              <option>Material Type</option>
              <option>PDF</option>
              <option>Notes</option>
              <option>Slides</option>
              <option>Question Paper</option>
            </select>
          </div>
          <div className="rounded-xl border-2 border-dashed border-border/60 p-8 text-center hover:border-primary/40 transition-colors cursor-pointer">
            <FileUp className="h-8 w-8 text-muted-foreground/40 mx-auto" />
            <p className="mt-2 text-sm text-muted-foreground">Drag & drop your file here, or click to browse</p>
            <p className="mt-1 text-xs text-muted-foreground/60">PDF, DOCX, PPTX up to 50MB</p>
          </div>
          <button className="w-full rounded-xl bg-primary py-2.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all">
            Upload Material
          </button>
        </div>
      )}

      {/* User uploads list */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {userUploads.map((m, i) => (
          <div key={m.id} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
            <MaterialCard material={m} showDownload={false} />
          </div>
        ))}
      </div>

      {userUploads.length === 0 && (
        <div className="glass-card text-center py-12 animate-fade-up">
          <Upload className="h-10 w-10 text-muted-foreground/40 mx-auto" />
          <p className="mt-3 text-sm text-muted-foreground">You haven't uploaded any materials yet.</p>
        </div>
      )}
    </div>
  );
}
