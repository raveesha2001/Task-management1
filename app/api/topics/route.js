import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { title, information, priority, statuses } = await request.json();
    await connectMongoDB();
    await Topic.create({ title, information, priority, statuses });
    return NextResponse.json({message: "Task Created" }, { status: 201 });
}