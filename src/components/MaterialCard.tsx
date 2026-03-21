import { FileText, Presentation, BookOpen, ClipboardList, Download, Calendar, User } from "lucide-react";
import type { Material } from "@/lib/mockData";

const typeIcons: Record<Material["type"], typeof FileText> = {
  pdf: FileText,
  notes: BookOpen,
  slides: Presentation,
  "question-paper": ClipboardList,
};

const typeColors: Record<Material["type"], string> = {
  pdf: "bg-red-500/10 text-red-600 dark:text-red-400",
  notes: "bg-primary/10 text-primary",
  slides: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
  "question-paper": "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
};

export default function MaterialCard({ material, showDownload = true }: { material: Material; showDownload?: boolean }) {
  const Icon = typeIcons[material.type];

  return (
    <div className="glass-card group cursor-pointer">
      <div className="flex items-start gap-4">
        <div className={`rounded-lg p-2.5 ${typeColors[material.type]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-medium text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
            {material.title}
          </h3>
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground">
              {material.subject}
            </span>
            <span className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground">
              Sem {material.semester}
            </span>
            <span className="inline-flex items-center rounded-md bg-muted/60 px-2 py-0.5 text-xs text-muted-foreground">
              {material.size}
            </span>
          </div>
          <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <User className="h-3 w-3" />
              {material.uploadedBy}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {new Date(material.uploadedAt).toLocaleDateString("en-IN", { day: "numeric", month: "short" })}
            </span>
          </div>
        </div>
      </div>
      {showDownload && (
        <div className="mt-4 flex items-center justify-between border-t border-border/40 pt-3">
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Download className="h-3 w-3" />
            {material.downloads} downloads
          </span>
          <button className="rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 active:scale-95 transition-all">
            Download
          </button>
        </div>
      )}
    </div>
  );
}
