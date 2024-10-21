import dbConnect from "@/lib/dbConnect"
import BlogModel, { Blog } from "@/models/Blog.model";
import UserModel from "@/models/User.model";

export async function GET(request: Request){
    try {
        await dbConnect();

        const data = await BlogModel.find();
    
        if(!data){
            return Response.json({
                success: false,
                message: "no blog found"
            }, {
                status: 400
            })
        }
    
        return Response.json({
            success: true,
            message: "Blog fetched",
            data: data
        }, {
            status: 200
        })
    } catch (error: any) {
        return Response.json({
            success: false,
            message: error.message,
        }, {
            status: 500
        })
    }
}

export async function POST(request: Request){
    try {
        await dbConnect();
        const { id, title, body } = await request.json();
    
        let user = await UserModel.findOne({userId: id});
    
        if(!user){
            user = await UserModel.create({
                userId: id
            })
        }
    
        const blog = await BlogModel.create({
            ownerId: id,
            title: title,
            content: body
        })
    
        user.blogs.push(blog);
        await blog.save();
        await user.save()
    
        return Response.json({
            success: true,
            message: "blog created successfully",
            data: user
        }, {
            status: 200
        })
    } catch (error: any) {
        return Response.json({
            success: false,
            message: error.message
        }, {
            status: 500
        })
    }
}

export async function DELETE(request: Request){
    try {
        await dbConnect()
        const { id, blogId, isAdmin } = await request.json();
    
        const blog = await BlogModel.findOne({_id: blogId})
    
        if(!blog){
            return Response.json({
                success: false,
                message: "blog not found"
            }, {
                status: 404
            })
        }
    
        const user = await UserModel.findOne({userId: id})
    
        if(!user){
            return Response.json({
                success: false,
                message: "user not found"
            }, {
                status: 404
            })
        }
    
        if(!isAdmin && blog.ownerId != id){
            return Response.json({
                success: false,
                message: "UnAuthorized to perform action"
            }, {
                status: 404
            })
        }
    
        await user.updateOne({
            userId: id,
        }, {
            $pull: {
                blogs: {
                    _id: blogId
                }
            }
        })
    
        await user.save()
    
        await BlogModel.deleteOne({
            _id: blogId
        })
    
        return Response.json({
            success: true,
            message: "blog deleted"
        }, {
            status: 200
        })
    } catch (error: any) {
        return Response.json({
            success: false,
            message: error.message
        }, {
            status: 500
        })
    }
}

export async function PATCH(request: Request){
    try {
        await dbConnect()
        const { id, blogId, title, body } = await request.json();
    
        const blog = await BlogModel.findOne({_id: blogId});
    
        if(!blog){
            return Response.json({
                success: false,
                message: "Blog not found"
            }, {
                status: 404
            })
        }
    
        if(blog.ownerId != id){
            return Response.json({
                success: false,
                message: "Unauthorized"
            }, {
                status: 401
            })
        }
    
        if(title){
            blog.title = title
        }
        if(body){
            blog.content = body
        }
    
        await blog.save();
    
        return Response.json({
            success: true,
            message: "Blog updated"
        }, {
            status: 200
        })
    } catch (error: any) {
        return Response.json({
            success: false,
            message: error.message
        }, {
            status: 500
        })
    }
}