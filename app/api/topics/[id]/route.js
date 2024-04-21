import connectMongoDB from "@/libs/mongodb";
import { NextResponse } from "next/server";
import Topic from "@/models/topic";

export async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: Title, newInformation: Information, newPriority: Priority, newStatuses: Statuses} = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, { Title, Information, Priority, Statuses});
    return NextResponse.json({ message: "Task Updated"}, { status: 200});

}

export async function GET(request, { params }) {
    const { id } = params;
    await connectMongoDB();
    const topic = await Topic.findOne({_id: id});
    return NextResponse.json({ topic }, { status: 200});
    
}