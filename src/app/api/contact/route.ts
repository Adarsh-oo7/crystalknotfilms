import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json(); // parse JSON
    console.log("📩 Received from frontend:", data);

    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbwLJKaMBctvpf8Kz1g-oUx10WNO5GV7T9NLa6jEY08DBkpso9zXGgALIMWuvoDlgvY/exec";

    // Convert JSON → FormData for Google Script
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, String(value));
    });

    const res = await fetch(googleScriptUrl, {
      method: "POST",
      body: formData,
    });

    const text = await res.text();
    console.log("📨 Google Script raw response:", text);

    if (!res.ok) {
      throw new Error(`Google Script failed: ${res.status} ${res.statusText} → ${text}`);
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (err: any) {
    console.error("❌ API error:", err);
    return NextResponse.json(
      { success: false, error: err.message || "Unknown error" },
      { status: 500 }
    );
  }
}
