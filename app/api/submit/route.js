// pages/api/submit.js
import connectDB from "@/utils/db";
import Contact from "@/models/Contact";
import { NextResponse } from 'next/server';

export async function POST(req, res) {
  try {
    await connectDB();
    const { name, email, message } = await req.json();
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    return NextResponse.json({ success: true, message: 'Message submitted successfully!' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, message: 'Error submitting message' });
  }
}
