"use client"
import { useBlog } from '@/components/blog/blog-context/BlogContext';
import BlogCard from '@/components/blog/BlogCard';
import UpdateCard from '@/components/blog/Update_Card';
import Navbar from '@/components/landing-page/Navbar'
import React, { useEffect, useState } from 'react'

interface dataFormat{
  title: String,
  content: String,
  _id: String,
  ownerId: String
}

const page = () => {
  const [data, setData] = useState([]);
  const {update, setUpdate} = useBlog()
  
  useEffect(()=>{
    fetchData()
  }, [])
  
  useEffect(()=>{
    fetchData()
  }, [update])


  const fetchData = async ()=>{
    console.log("gfgf");
    
    const res = await fetch("/api/blog")
    // const res = await fetch("http://localhost:3000/api/blog")
    const toSave = await res.json();
    console.log(toSave);
    setData(toSave.data)
  }

  return (
    <div className="relative min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
      <Navbar blog={true} />

      <div className="container pt-8 gap-4 flex flex-wrap justify-start h-auto">
        {
          data.map((item: dataFormat, index)=> (
            <BlogCard title={item.title} body={item.content} id={item._id} ownerId={item.ownerId} />
          ))
        }
      </div>


{/*       
      <div className='absolute top-[90vh] right-4'>
        <UpdateCard create={true} />
      </div> */}
    </div>
  )
}

export default page