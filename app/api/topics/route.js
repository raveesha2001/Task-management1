import connectMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { Title, Information, Priority, Statuses } = await request.json();
    await connectMongoDB();
    await Topic.create({ Title, Information, Priority, Statuses });
    return NextResponse.json({message: "Task Created" }, { status: 201 });
}

export async function GET() {
    await connectMongoDB();
    const topics = await Topic.find();
    return NextResponse.json({ topics });
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id");
    await connectMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message: "Task Deleted" }, { status: 200 }); 
}