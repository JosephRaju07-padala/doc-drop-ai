export interface Material {
  id: string;
  title: string;
  subject: string;
  type: "pdf" | "notes" | "slides" | "question-paper";
  college: string;
  department: string;
  semester: number;
  uploadedBy: string;
  uploadedAt: string;
  downloads: number;
  size: string;
}

export const colleges = ["MIT", "Stanford", "IIT Madras", "NIT Trichy", "Anna University"];
export const departments = ["Computer Science", "Electronics", "Mechanical", "Civil", "Mathematics"];
export const semesters = [1, 2, 3, 4, 5, 6, 7, 8];

export const mockMaterials: Material[] = [
  { id: "1", title: "Data Structures & Algorithms - Complete Notes", subject: "DSA", type: "notes", college: "Anna University", department: "Computer Science", semester: 3, uploadedBy: "Priya Sharma", uploadedAt: "2026-03-18", downloads: 342, size: "4.2 MB" },
  { id: "2", title: "Digital Signal Processing - Unit 1 to 5", subject: "DSP", type: "pdf", college: "Anna University", department: "Electronics", semester: 5, uploadedBy: "Rahul Menon", uploadedAt: "2026-03-15", downloads: 189, size: "8.1 MB" },
  { id: "3", title: "Engineering Mathematics III - Solved Papers", subject: "Math III", type: "question-paper", college: "Anna University", department: "Computer Science", semester: 3, uploadedBy: "Dr. Kavitha R.", uploadedAt: "2026-03-10", downloads: 567, size: "2.8 MB" },
  { id: "4", title: "Operating Systems - Chapter Wise Slides", subject: "OS", type: "slides", college: "Anna University", department: "Computer Science", semester: 4, uploadedBy: "Arjun Dev", uploadedAt: "2026-03-08", downloads: 211, size: "12.4 MB" },
  { id: "5", title: "Thermodynamics - Lecture Notes", subject: "Thermo", type: "notes", college: "IIT Madras", department: "Mechanical", semester: 3, uploadedBy: "Prof. Venkat S.", uploadedAt: "2026-03-05", downloads: 98, size: "5.6 MB" },
  { id: "6", title: "DBMS - Previous Year Papers Bundle", subject: "DBMS", type: "question-paper", college: "Anna University", department: "Computer Science", semester: 4, uploadedBy: "Nisha Patel", uploadedAt: "2026-03-01", downloads: 445, size: "3.3 MB" },
  { id: "7", title: "Computer Networks - Complete Reference", subject: "CN", type: "pdf", college: "NIT Trichy", department: "Computer Science", semester: 5, uploadedBy: "Karthik M.", uploadedAt: "2026-02-28", downloads: 312, size: "9.7 MB" },
  { id: "8", title: "Structural Analysis - Formula Sheet", subject: "Structures", type: "notes", college: "Anna University", department: "Civil", semester: 5, uploadedBy: "Deepa Krishnan", uploadedAt: "2026-02-25", downloads: 76, size: "1.1 MB" },
];

export const userUploads: Material[] = mockMaterials.filter((_, i) => i < 3);
export const userDownloads: Material[] = mockMaterials.filter((_, i) => i >= 2 && i < 6);
