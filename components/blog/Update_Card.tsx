"use client"
import React, { useState } from 'react'
import { useBlog } from './blog-context/BlogContext';
import { useUser } from '@clerk/nextjs';

const UpdateCard = ({title, body, id, create}: {title?: String, body?: String, id?: String, create?:boolean}) => {
    const [hidden, setHidden] = useState(true)
    const [titleVar, setTitleVar] = useState(title ? title+"" : "");
    const [bodyVar, setBodyVar] = useState(body ? body+"" : "")
    // const router = useRouter();
    const {update, setUpdate} = useBlog()
    const { user } = useUser()

    const createBlog = async ()=>{
        // if(!user){
        //     return
        // }
        const data = {
            id: user?.id,
            title: titleVar,
            body: bodyVar
        }
        const response = await fetch("/api/blog", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer your-token'
            },
            body: JSON.stringify(data)
        });
        const res = await response.json()
        

        setHidden(!hidden);
        setUpdate(!update)
    }

    const submit = async () => {
        const data = {
            id: user?.id,
            blogId: id,
            title: titleVar,
            body: bodyVar
        }

        const response = await fetch("/api/blog", {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer your-token' // if needed
            },
            body: JSON.stringify(data)
        });

        
        setHidden(!hidden);
        setUpdate(!update)
    }

  return (
    <>
        <button data-modal-target="authentication-modal" onClick={()=>setHidden(!hidden)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            {create ? "Add" : "Update"}
        </button>

        <div id="authentication-modal"  className={`${hidden ? 'hidden' : ""} overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center flex items-center w-full md:inset-0 h-full max-h-full bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20`}>
            <div className="relative p-4 w-full max-w-md max-h-full">
            
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {create ? "Add new blog" : "Update your blog"}
                        </h3>
                        <button onClick={()=>setHidden(!hidden)} type="button" className="end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="authentication-modal">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" stroke-linejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <div className="p-4 md:p-5">
                        <form className="space-y-4" action="#">
                            <div>
                                <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Title
                                </label>
                                <input type="text" name="title" value={titleVar} onChange={(e)=>setTitleVar(e.target.value)} id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Title" required />
                            </div>
                            <div>
                                <label htmlFor="content" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Content
                                </label>
                                <input type="text" name="content" value={bodyVar} onChange={(e)=>setBodyVar(e.target.value)} id="content" placeholder="Body" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                            </div>
                            <div className="flex justify-between">
                                { 
                                    create ? <div className="flex items-start">
                                        <button data-modal-target="authentication-modal" onClick={()=>createBlog()} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                            Add
                                        </button>
                                    </div> : 
                                    <div className="flex items-start">
                                        <button data-modal-target="authentication-modal" onClick={()=>submit()} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                            Update
                                        </button>
                                    </div>
                                }
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </>
  )
}

export default UpdateCard