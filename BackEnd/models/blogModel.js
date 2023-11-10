import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema(
    {
        title: {
            type: "string",
            required: true, 
        },
        author: {
            type: "string",
            required: true,
        },
        description: {
            type: "string",
            required: true,
        }
    },
    {
        timestamps: true,
    }
)

export const BlogContent = mongoose.model('Blog',BlogSchema);