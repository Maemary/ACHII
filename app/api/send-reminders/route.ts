import { NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { resend } from "@/lib/resend";

export async function GET() {
  const threeDaysFromNow = new Date();
  threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

  // Match events happening on that date (whole-day window)
  const startOfDay = new Date(threeDaysFromNow.setHours(0, 0, 0, 0));
  const endOfDay = new Date(threeDaysFromNow.setHours(23, 59, 59, 999));

  const { data: events, error: eventsError } = await supabaseAdmin
    .from("events")
    .select("*")
    .gte("event_date", startOfDay.toISOString())
    .lte("event_date", endOfDay.toISOString())
    .eq("reminder_sent", false);

  if (eventsError) {
    return NextResponse.json({ error: eventsError.message }, { status: 500 });
  }

  if (!events || events.length === 0) {
    return NextResponse.json({ message: "No events to remind about today." });
  }

  const { data: subscribers, error: subsError } = await supabaseAdmin
    .from("subscribers")
    .select("email")
    .eq("active", true);

  if (subsError) {
    return NextResponse.json({ error: subsError.message }, { status: 500 });
  }

  const emailList = subscribers?.map((s) => s.email) ?? [];

  for (const event of events) {
    await resend.emails.send({
      from: "ACHII <updates@yourdomain.org>",
      to: emailList,
      subject: `Reminder: ${event.title} is happening in 3 days`,
      html: `<p>${event.description ?? ""}</p><p>Date: ${new Date(event.event_date).toLocaleString()}</p>`,
    });

    await supabaseAdmin
      .from("events")
      .update({ reminder_sent: true })
      .eq("id", event.id);
  }

  return NextResponse.json({ message: `Sent reminders for ${events.length} event(s).` });
}