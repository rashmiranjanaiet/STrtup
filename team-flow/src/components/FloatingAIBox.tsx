"use client";

import { FormEvent, useEffect, useMemo, useRef, useState } from "react";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

const initialMessage: ChatMessage = {
  role: "assistant",
  content:
    "Hi, I am Flow AI. Ask me about TEAM FLOW projects, mentorship, funding, or execution planning.",
};

export function FloatingAIBox() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const scrollRef = useRef<HTMLDivElement>(null);

  const canSend = useMemo(() => input.trim().length > 0 && !loading, [input, loading]);

  useEffect(() => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, open]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cleanInput = input.trim();

    if (!cleanInput || loading) {
      return;
    }

    const userMessage: ChatMessage = { role: "user", content: cleanInput };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/flow-ai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: cleanInput }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.message || "Flow AI could not answer right now.");
      }

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply || "I am here. Could you rephrase your request?",
        },
      ]);
    } catch (error) {
      const text = error instanceof Error ? error.message : "Unexpected error while talking to Flow AI.";
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: text,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`flow-ai-shell ${open ? "open" : ""}`}>
      <button
        type="button"
        className="flow-ai-toggle"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open Flow AI assistant"
      >
        <span className="flow-ai-toggle-badge" />
        Flow AI
      </button>

      {open ? (
        <aside className="flow-ai-panel glass-panel" aria-label="Flow AI panel">
          <header className="flow-ai-header">
            <div>
              <p className="eyebrow">Assistant</p>
              <h3>Flow AI</h3>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close Flow AI">
              Close
            </button>
          </header>

          <div className="flow-ai-messages" ref={scrollRef}>
            {messages.map((message, index) => (
              <article key={`${message.role}-${index}`} className={`flow-ai-msg ${message.role}`}>
                <p>{message.content}</p>
              </article>
            ))}
            {loading ? <p className="flow-ai-thinking">Flow AI is thinking...</p> : null}
          </div>

          <form className="flow-ai-form" onSubmit={handleSubmit}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              placeholder="Ask Flow AI anything..."
              aria-label="Ask Flow AI"
            />
            <button type="submit" className="btn btn-primary" disabled={!canSend}>
              Send
            </button>
          </form>
        </aside>
      ) : null}
    </div>
  );
}
