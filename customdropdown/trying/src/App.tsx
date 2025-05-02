import { useState } from 'react'

import './App.css'
import { ArrowDown } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <button className='fixed cursor-pointer bg-slate-100 p-4 border-1 rounded-lg flex items-center gap-4 w-[150px]' onClick={()=>{
        setIsOpen(!isOpen);
      }}>open dropdown <ArrowDown className='size-4'></ArrowDown></button>
      {isOpen ? (
        <div className='transition-initial duration-700 translate-y-1/12 '>
          <ul className='flex flex-col gap-2 mt-3 w-[150px] rounded-lg justify-center items-center bg-slate-100 border-1 '>
            <li className='border-b-1 w-full flex justify-center rounded-md p-4 cursor-pointer'>hi</li>
            <li className='border-b-1 w-full flex justify-center rounded-md p-4 cursor-pointer'>asdf</li>
            <li className='border-b-1 w-full flex justify-center rounded-md p-4 cursor-pointer'>asdf</li>
            <li className='border-b-1 w-full flex justify-center rounded-md p-4 cursor-pointer'>asdf</li>
            <li className='border-b-1 w-full flex justify-center rounded-md p-4 cursor-pointer'>dfg</li>
            <li className='border-b-1 w-full flex justify-center rounded-md p-4 cursor-pointer'>gfhjf</li>
            <li className='border-b-1 w-full flex justify-center rounded-md p-4 cursor-pointer'onClick={()=>{
              setIsOpen(false);
            }}>close</li>
          </ul>
        </div>
      ) : (<div></div>)}

    </div>

    </>
  )
}

export default App
