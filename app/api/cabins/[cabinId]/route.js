import { getBookedDatesByCabinId, getCabin } from "@/app/_lib/data-service.js";
import { NextResponse } from "next/server";

export async function GET(req, context) {
  const { cabinId } = context.params;

  try {
    const [cabin, bookedDates] = await Promise.all([getCabin(cabinId), getBookedDatesByCabinId(cabinId)]);

    return NextResponse.json({
      cabin,
      bookedDates,
    });
  } catch (error) {
    return NextResponse.json({ message: "Cabin not found" }, { status: 404 });
  }
}
