import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newInformation: information, newPriority: priority, newStatuses: statuses} = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { title, information, priority, statuses});
    return NextResponse.json({ message: "Task Updated"}, { status: 200});

}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({ topic }, { status: 200});
    
}