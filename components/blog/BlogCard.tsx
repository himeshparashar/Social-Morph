import React from 'react'
import UpdateCard from './Update_Card'
import { Trash2 } from 'lucide-react'
import { useBlog } from './blog-context/BlogContext'
import { useUser } from '@clerk/nextjs'

const BlogCard = ({title, body, id, ownerId}: {title: String, body: String, id: String, ownerId:String}) => {
    const {update, setUpdate} = useBlog()
    const { user } = useUser()
    console.log(user)
    const del= async ()=>{
        const data = {
            id: user?.id,
            blogId: id,
            isAdmin: "false"
        }
        const res = await fetch("/api/blog", {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer your-token' // if needed
            },
            body: JSON.stringify(data)
        })

        console.log(res)
        setUpdate(!update)
    }
  return (
    <>
        <div className="max-w-lg min-w-[250px] md:min-w-[300px] mx-auto">
            <div className="bg-white shadow-md border border-gray-200 rounded-lg max-w-sm mb-5">
                <a href="#">
                    <img className="rounded-t-lg p-5" src="https://picsum.photos/400/200" alt="" />
                </a>
                <div className="px-5 pb-5">
                    <a href="#">
                        <h5 className="text-[#803aba] font-bold text-2xl tracking-tight mb-2">{title}</h5>
                    </a>
                    <p className="font-normal text-gray-700 mb-3">
                        {
                            body.length > 50 ? body.substring(0,150) + "..." : body
                        }
                    </p>
                    <div className='flex justify-between'>
                        <UpdateCard title={title} body={body} id={id} />
                        <button onClick={()=>del()} className='p-2 rounded-md'>
                            <Trash2 />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default BlogCard