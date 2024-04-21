import mongoose, { Schema } from "mongoose";


const topicSchema = new Schema(
    {
        Title: String,
        Informaton: String,
        Priority: String,
        Statuses: String,
    


    },
    {
        timestamps: true,
    }
);

const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;