"use client"
import { useSearchParams } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"



export default function Home() {

  const data = useSearchParams()
  const [url,setUrl] = useState("")
  const [shortUrl,setShortUrl] = useState(data.get('short'))
  const {push} = useRouter()
  const handleOnChange = (e)=>{
    setUrl(e.target.value)
  }

  return (
    <>
    <main className="grid place-items-center bg-white text-black w-auto h-screen">
      <div className='grid place-items-center w-auto'>
      <h1 className="text-5xl text-center lg:text-7xl font-bold"><span className="text-blue-600">Ez</span>Short</h1>
      <div className='sm:flex sm:justify-center grid place-items-center mt-6 w-full'>
      <input onChange={handleOnChange} placeholder='https://www.google.com'
       className='text-sm border-2 rounded-t-lg sm:rounded-t-none sm:rounded-l-xl p-3 sm:w-auto border-gray-300
       focus:outline-none'></input>
      <button onClick={()=>{
        push(`/api/postUrl?shorturl=${Math.random().toString(20).substr(2, 6)}&url=${url}`)
      }} className='border-2 rounded-b-lg sm:rounded-b-none sm:rounded-r-xl p-2.5 px-4 border-gray-300 
      bg-gray-300 font-bold
      hover:bg-gray-400 hover:text-white hover:border-gray-400 duration-300 w-56 sm:w-auto'>Send</button>
      </div>
      <p className={`${data.get('short') != null ? 'show' : 'hide'} mt-1 text-blue-700 text-sm text-left justify-start w-auto sm:w-72`}>
        https://ezshort-five.vercel.app/api/{shortUrl}</p>
      </div>
    </main>
      <footer className="p-4 bg-white text-black border-t border-gray-300">
        <p>-Copyright © - Bautista Cariaga 2023</p>
      </footer>
      </>
  )
}
