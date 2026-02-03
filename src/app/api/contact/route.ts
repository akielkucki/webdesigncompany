import { NextRequest, NextResponse } from "next/server";
import "dotenv"

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL as string;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, company, budget, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required" },
        { status: 400 }
      );
    }

    const discordMessage = {
      embeds: [
        {
          title: "New Contact Form Submission",
          color: 0x3b82f6,
          fields: [
            {
              name: "Name",
              value: name,
              inline: true,
            },
            {
              name: "Email",
              value: email,
              inline: true,
            },
            {
              name: "Company",
              value: company || "Not provided",
              inline: true,
            },
            {
              name: "Budget",
              value: budget || "Not selected",
              inline: true,
            },
            {
              name: "Message",
              value: message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Northon Studios Contact Form",
          },
        },
      ],
    };

    const response = await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(discordMessage),
    });
    console.log(response.status, response.statusText, await response.text())
    if (!response.ok || response.status !== 204) {
      throw new Error("Failed to send to Discord");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to submit form" },
      { status: 500 }
    );
  }
}
