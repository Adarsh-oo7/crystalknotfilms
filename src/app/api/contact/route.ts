import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data: Record<string, string> = await req.json(); // parse JSON
    console.log("📩 Received from frontend:", data);

    const googleScriptUrl =
      "https://script.google.com/macros/s/AKfycbwLJKaMBctvpf8Kz1g-oUx10WNO5GV7T9NLa6jEY08DBkpso9zXGgALIMWuvoDlgvY/exec";

    // Convert JSON → FormData
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    const res = await fetch(googleScriptUrl, {
      method: "POST",
      body: formData,
    });

    const text = await res.text();
    console.log("📨 Google Script raw response:", text);

    if (!res.ok) {
      return NextResponse.json(
        { success: false, error: `Google Script failed → ${text}` },
        { status: res.status }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully ✅",
    });
  } catch (err) {
    console.error("❌ API error:", err);
    return NextResponse.json(
      { success: false, error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
