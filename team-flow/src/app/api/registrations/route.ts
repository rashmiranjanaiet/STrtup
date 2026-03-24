import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import { Registration } from "@/models/Registration";

const allowedRoles = new Set(["student", "college", "sponsor"]);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const role = typeof body.role === "string" ? body.role.toLowerCase() : "";
    const fullName = typeof body.fullName === "string" ? body.fullName.trim() : "";
    const email = typeof body.email === "string" ? body.email.trim() : "";
    const phone = typeof body.phone === "string" ? body.phone.trim() : "";
    const organizationName =
      typeof body.organizationName === "string" ? body.organizationName.trim() : "";
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!allowedRoles.has(role)) {
      return NextResponse.json({ message: "Invalid registration type." }, { status: 400 });
    }

    if (!fullName || !email || !phone || !organizationName) {
      return NextResponse.json({ message: "Please fill all required fields." }, { status: 400 });
    }

    await connectToDatabase();

    const registration = await Registration.create({
      role,
      fullName,
      email,
      phone,
      organizationName,
      message,
    });

    return NextResponse.json(
      { message: "Registration submitted.", id: String(registration._id) },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration API error", error);
    return NextResponse.json(
      { message: "Could not save registration. Check MONGODB_URI configuration." },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connectToDatabase();
    const registrations = await Registration.find().sort({ createdAt: -1 }).limit(20).lean();

    return NextResponse.json({ registrations }, { status: 200 });
  } catch (error) {
    console.error("Registration fetch error", error);
    return NextResponse.json({ message: "Unable to fetch registrations." }, { status: 500 });
  }
}
