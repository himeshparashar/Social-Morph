import mongoose, {Schema, Document} from "mongoose";
import { Blog, BlogSchema } from "./Blog.model";

export interface User extends Document{
    userId: string,
    role: string,
    blogs: Blog[]
}

const UserSchema: Schema<User> = new Schema({
    userId: {
        type: String,
    },
    role: {
        type: String,
        default: "User"
    },
    blogs: [BlogSchema]
})


const UserModel = (
    mongoose.models.User as mongoose.Model<User>   // previous schema made
) || (
    mongoose.model<User>("User", UserSchema)  // creating new schema
)

export default UserModel;