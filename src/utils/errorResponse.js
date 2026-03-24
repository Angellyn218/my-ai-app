import { NextResponse } from "next/server";

export const errorResponse = (message, status) => {
    return NextResponse.json({ error: message }, { status });
}
