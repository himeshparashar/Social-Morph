import Signin from "@/components/auth/Signin";





export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-400 to-purple-900 flex items-center justify-center">

      <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-4xl h-auto lg:h-[70vh]">


        <div className="hidden lg:flex w-1/2 bg-purple-100 justify-center items-center">

          <img src="/6343825.jpg" alt="Signin " className="w-3/4" />
        </div>


        <div className="w-full lg:w-1/2 p-8 lg:p-16 flex justify-center items-center">
          <Signin />
        </div>
      </div>
    </div>
  )
}
