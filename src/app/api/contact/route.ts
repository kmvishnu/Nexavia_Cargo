import { NextResponse } from "next/server";
import { Resend } from "resend";

// Resend client is initialized with the API key loaded from env.local
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, company, phone, service } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Design a premium HTML layout styled with Nexavia's brand colors
    const htmlLayout = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>Nexavia Web Lead</title>
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f7f9fc; margin: 0; padding: 20px; color: #1e293b; }
            .container { max-width: 600px; margin: 0 auto; background: #ffffff; padding: 30px; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
            .header { border-bottom: 2px solid #d4a24a; padding-bottom: 15px; margin-bottom: 25px; }
            .header h2 { margin: 0; color: #0a1f44; font-size: 24px; font-weight: 700; letter-spacing: -0.025em; }
            .lead-info { width: 100%; border-collapse: collapse; margin-bottom: 25px; }
            .lead-info td { padding: 10px 0; border-bottom: 1px solid #f1f5f9; vertical-align: top; }
            .label { font-weight: 600; color: #64748b; width: 150px; text-transform: uppercase; font-size: 11px; letter-spacing: 0.05em; }
            .val { font-size: 14px; color: #0f172a; }
            .message-box { background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 6px; padding: 15px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
            .footer { margin-top: 30px; font-size: 12px; color: #94a3b8; text-align: center; border-top: 1px solid #e2e8f0; padding-top: 15px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>New Lead Submission</h2>
            </div>
            <table class="lead-info">
              <tr>
                <td class="label">Full Name</td>
                <td class="val"><strong>${name}</strong></td>
              </tr>
              <tr>
                <td class="label">Email Address</td>
                <td class="val">${email}</td>
              </tr>
              <tr>
                <td class="label">Company</td>
                <td class="val">${company || "N/A"}</td>
              </tr>
              <tr>
                <td class="label">Phone</td>
                <td class="val">${phone || "N/A"}</td>
              </tr>
              <tr>
                <td class="label">Service of Interest</td>
                <td class="val">${service || "General Inquiry"}</td>
              </tr>
            </table>
            <div class="label" style="margin-bottom: 8px;">Message Details</div>
            <div class="message-box">${message}</div>
            <div class="footer">
              <p>Submitted via Nexavia Global Cargo Web Lead Form.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Mail request using Resend SDK
    const response = await resend.emails.send({
      from: "Nexavia Web Form <no-reply@nexaviaglobalcargo.com>",
      to: "info@nexaviaglobalcargo.com",
      replyTo: email,
      subject: `New Lead: ${service || "General Inquiry"} - ${name}`,
      html: htmlLayout,
    });

    if (response.error) {
      return NextResponse.json({ error: response.error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: response.data?.id });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
