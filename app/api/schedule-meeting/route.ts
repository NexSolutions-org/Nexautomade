import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

function createTransporter() {
  return nodemailer.createTransport({
    host: "smtp.hostinger.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.MEETING_EMAIL_USER,
      pass: process.env.MEETING_EMAIL_PASS,
    },
  });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, website, service, budget, timeslot, requirements } = await req.json();

    if (!name || !email || !phone || !service || !requirements) {
      return NextResponse.json({ error: "Please fill all required fields." }, { status: 400 });
    }

    if (!process.env.MEETING_EMAIL_USER || !process.env.MEETING_EMAIL_PASS) {
      console.error("Email credentials not configured");
      return NextResponse.json({ error: "Email service not configured." }, { status: 500 });
    }

    const transporter = createTransporter();

    const detailsTable = `
      <table style="width:100%;font-size:14px;color:#333;border-collapse:collapse;">
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px 0;font-weight:600;width:140px;color:#555;">Full Name</td><td style="padding:10px 0;">${name}</td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px 0;font-weight:600;color:#555;">Email</td><td style="padding:10px 0;"><a href="mailto:${email}" style="color:#6B3FA0;">${email}</a></td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px 0;font-weight:600;color:#555;">Phone</td><td style="padding:10px 0;">${phone}</td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px 0;font-weight:600;color:#555;">Website</td><td style="padding:10px 0;">${website || "—"}</td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px 0;font-weight:600;color:#555;">Service</td><td style="padding:10px 0;">${service}</td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px 0;font-weight:600;color:#555;">Budget</td><td style="padding:10px 0;">${budget || "Not specified"}</td></tr>
        <tr style="border-bottom:1px solid #eee;"><td style="padding:10px 0;font-weight:600;color:#555;">Preferred Time</td><td style="padding:10px 0;">${timeslot || "Flexible"}</td></tr>
        <tr><td style="padding:10px 0;font-weight:600;color:#555;vertical-align:top;">Requirements</td><td style="padding:10px 0;white-space:pre-line;">${requirements}</td></tr>
      </table>
    `;

    // Email to Nexsolutions team
    await transporter.sendMail({
      from: `"Nex AI — Meeting Requests" <${process.env.MEETING_EMAIL_USER}>`,
      to: process.env.MEETING_EMAIL_USER,
      subject: `New Meeting Request — ${name} (${service})`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:0;">
          <div style="background:linear-gradient(135deg,#4A2880,#0094C6);padding:32px 32px 24px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">New Meeting Request</h1>
            <p style="color:rgba(255,255,255,0.7);margin:6px 0 0;font-size:13px;">Submitted via nexsolutions.org</p>
          </div>
          <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #eee;">
            ${detailsTable}
            <div style="margin-top:24px;padding:16px;background:#f8f5ff;border-left:4px solid #6B3FA0;border-radius:4px;">
              <p style="margin:0;font-size:13px;color:#555;">Reply directly to this email to reach the client at <strong>${email}</strong></p>
            </div>
          </div>
          <p style="text-align:center;font-size:11px;color:#aaa;margin-top:16px;">Nexsolutions · nexsolutions.org · Lahore, Pakistan</p>
        </div>
      `,
      replyTo: email,
    });

    // Confirmation email to customer
    await transporter.sendMail({
      from: `"Nexsolutions" <${process.env.MEETING_EMAIL_USER}>`,
      to: email,
      subject: `Meeting Request Confirmed — Nexsolutions`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:auto;padding:0;">
          <div style="background:linear-gradient(135deg,#4A2880,#0094C6);padding:32px 32px 24px;border-radius:12px 12px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:22px;font-weight:700;">Thanks, ${name}!</h1>
            <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">Your meeting request has been received.</p>
          </div>
          <div style="background:#fff;padding:32px;border-radius:0 0 12px 12px;border:1px solid #eee;">
            <p style="color:#333;font-size:14px;line-height:1.7;margin-top:0;">
              Hi <strong>${name}</strong>, thank you for reaching out to <strong>Nexsolutions</strong>. We have received your meeting request and our team will get back to you within <strong>24 hours</strong> to confirm the schedule.
            </p>
            <div style="background:#f8f9fa;border-radius:10px;padding:20px;margin:20px 0;">
              <p style="margin:0 0 12px;font-size:13px;font-weight:600;color:#555;text-transform:uppercase;letter-spacing:0.05em;">Your Request Summary</p>
              ${detailsTable}
            </div>
            <div style="background:linear-gradient(135deg,rgba(107,63,160,0.08),rgba(0,148,198,0.08));border:1px solid rgba(107,63,160,0.15);border-radius:10px;padding:20px;margin-top:20px;">
              <p style="margin:0 0 8px;font-size:13px;font-weight:600;color:#333;">While you wait, you can reach us directly:</p>
              <p style="margin:4px 0;font-size:13px;color:#555;">📧 <a href="mailto:info@nexsolutions.org" style="color:#6B3FA0;">info@nexsolutions.org</a></p>
              <p style="margin:4px 0;font-size:13px;color:#555;">💬 WhatsApp: <a href="https://wa.me/923062646255" style="color:#6B3FA0;">+92 306 2646255</a></p>
            </div>
          </div>
          <p style="text-align:center;font-size:11px;color:#aaa;margin-top:16px;">© Nexsolutions · nexsolutions.org · Lahore, Pakistan</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Schedule meeting error:", err);
    return NextResponse.json({ error: "Failed to send email. Please try again." }, { status: 500 });
  }
}
