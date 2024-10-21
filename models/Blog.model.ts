import mongoose, {Schema, Document} from "mongoose";

export interface Blog extends Document{
    ownerId: string,
    title: string,
    content: string
}

export const BlogSchema: Schema<Blog> = new Schema({
    ownerId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
})


const BlogModel = (
    mongoose.models.Blog as mongoose.Model<Blog>   // previous schema made
) || (
    mongoose.model<Blog>("Blog", BlogSchema)  // creating new schema
)

export default BlogModel;