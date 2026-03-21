import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Hi! I'm your study assistant. Ask me anything about your study materials, concepts, or topics — I'll explain them clearly. 📚" },
  ]);
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = () => {
    if (!input.trim() || loading) return;
    const userMsg: Message = { role: "user", content: input.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    // Simulated AI response (will be replaced with real AI via Lovable Cloud)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "That's a great question! To give you a detailed answer powered by AI, we'll need to connect Lovable Cloud. For now, I can tell you that this chatbot will be able to explain any concept from your uploaded materials, summarize PDFs, and help you prepare for exams. 🎓",
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <>
      {/* FAB */}
      <button
        onClick={() => setOpen(!open)}
        className={`fixed bottom-6 right-6 z-50 rounded-full p-4 shadow-2xl transition-all duration-300 active:scale-90 ${
          open
            ? "bg-muted text-muted-foreground rotate-90"
            : "bg-primary text-primary-foreground animate-float shadow-primary/30"
        }`}
      >
        {open ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] glass-strong rounded-2xl overflow-hidden flex flex-col animate-fade-up"
          style={{ height: "min(520px, calc(100vh - 8rem))" }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border/40 px-4 py-3">
            <div className="rounded-lg bg-primary/10 p-2">
              <Sparkles className="h-4 w-4 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold">Study Assistant</p>
              <p className="text-xs text-muted-foreground">AI-powered help</p>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`shrink-0 h-7 w-7 rounded-full flex items-center justify-center text-xs ${
                  msg.role === "user" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                }`}>
                  {msg.role === "user" ? <User className="h-3.5 w-3.5" /> : <Bot className="h-3.5 w-3.5" />}
                </div>
                <div className={`rounded-xl px-3 py-2 text-sm max-w-[80%] leading-relaxed ${
                  msg.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-muted/60 rounded-tl-sm"
                }`}>
                  {msg.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-2">
                <div className="shrink-0 h-7 w-7 rounded-full flex items-center justify-center bg-accent/10 text-accent text-xs">
                  <Bot className="h-3.5 w-3.5" />
                </div>
                <div className="bg-muted/60 rounded-xl rounded-tl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground/40 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-border/40 px-3 py-3">
            <div className="flex items-center gap-2 rounded-xl bg-muted/40 px-3 py-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask about any topic..."
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground/50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="rounded-lg bg-primary p-2 text-primary-foreground hover:bg-primary/90 disabled:opacity-40 active:scale-90 transition-all"
              >
                <Send className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
