import Ticket from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("POST RAN");
  console.log(req); 
  try {
    const body = await req.json();
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ message: "Ticket Created" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try{
    const tickets = await Ticket.find(); // find all tickets (you can also try to find open tickets only)
    return NextResponse.json({tickets}, { status: 200 });

  }
  catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}