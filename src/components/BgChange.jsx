import React, { useState } from 'react'

const BgChange = () => {
    const [color,setColor]=useState("olive")

    
  return (
    <div className={`w-full h-screen `} style={{backgroundColor:color}}>
        
      <div className='fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor("red")} className='outline-none px-4 py-1 bg-red-600 rounded-full text-white shadow-lg'>Red</button>
            <button onClick={() => setColor("green")} className='outline-none px-4 py-1 bg-green-600 rounded-full text-white shadow-lg'>Green</button>
            <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 bg-blue-600 rounded-full text-white shadow-lg'>Blue</button>
            <button onClick={() => setColor("yellow")} className='outline-none px-4 py-1 bg-yellow-600 rounded-full text-white shadow-lg'>Yellow</button>
            <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 bg-purple-600 rounded-full text-white shadow-lg'>Purple</button>
            <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 bg-pink-600 rounded-full text-white shadow-lg'>Pink</button>
            <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 bg-orange-600 rounded-full text-white shadow-lg'>Orange</button>
            <button onClick={() => setColor("indigo")} className='outline-none px-4 py-1 bg-indigo-600 rounded-full text-white shadow-lg'>Indigo</button>
            <button onClick={() => setColor("teal")} className='outline-none px-4 py-1 bg-teal-600 rounded-full text-white shadow-lg'>Teal</button>
        </div>
      </div>
    </div>
  )
}

export default BgChange
