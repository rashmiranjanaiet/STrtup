import { NextResponse } from "next/server";

const DEFAULT_MODEL = "meta-llama/Llama-3.1-8B-Instruct";
const HF_CHAT_URL = "https://router.huggingface.co/v1/chat/completions";

export async function POST(request: Request) {
  try {
    const { message } = await request.json();

    if (typeof message !== "string" || !message.trim()) {
      return NextResponse.json({ message: "Message is required." }, { status: 400 });
    }

    const hfApiKey = process.env.HF_API_KEY;

    if (!hfApiKey) {
      return NextResponse.json(
        { message: "Flow AI is not configured. Set HF_API_KEY on server." },
        { status: 500 }
      );
    }

    const model = process.env.HF_MODEL || DEFAULT_MODEL;

    const hfResponse = await fetch(HF_CHAT_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${hfApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          {
            role: "system",
            content:
              "You are Flow AI for TEAM FLOW platform. Be concise, practical, and helpful for students, colleges, sponsors, and innovation teams.",
          },
          {
            role: "user",
            content: message.trim(),
          },
        ],
        max_tokens: 240,
        temperature: 0.7,
      }),
      cache: "no-store",
    });

    const rawText = await hfResponse.text();
    let hfData: unknown = null;

    try {
      hfData = JSON.parse(rawText);
    } catch {
      hfData = null;
    }

    if (!hfResponse.ok) {
      const errorText =
        typeof (hfData as { error?: unknown } | null)?.error === "string"
          ? (hfData as { error: string }).error
          : rawText || "Flow AI provider error. Please try again.";

      return NextResponse.json({ message: errorText }, { status: hfResponse.status });
    }

    const replyCandidate =
      (hfData as { choices?: Array<{ message?: { content?: string } }> } | null)?.choices?.[0]?.message
        ?.content || "I am here to help with TEAM FLOW ideas, project plans, and strategy.";

    const reply = replyCandidate.trim();

    return NextResponse.json({ reply }, { status: 200 });
  } catch (error) {
    console.error("Flow AI route error", error);
    return NextResponse.json(
      { message: "Flow AI is temporarily unavailable. Please try again." },
      { status: 500 }
    );
  }
}
