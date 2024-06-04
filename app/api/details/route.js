// pages/api/submit.js
import connectDB from "@/utils/db";
import Contact from "@/models/Contact";
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    await connectDB();
    const data = await Contact.find({});
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error submitting message' });
  }
}
