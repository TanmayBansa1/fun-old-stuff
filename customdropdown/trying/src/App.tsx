import { useState } from 'react'

import './App.css'
import { ArrowDown } from 'lucide-react';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <div className='flex flex-col justify-center items-center min-h-screen'>
      <button className='cursor-pointer bg-muted-foreground p-4 border-1 rounded-lg flex items-center gap-4' onClick={()=>{
        setIsOpen(true);
      }}>open dropdown <ArrowDown className='size-4'></ArrowDown></button>
      {isOpen ? (
        <div className='flex'>
          <ul>
            <li>hi</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>asdf</li>
            <li>dfg</li>
            <li>gfhjf</li>
            <li className='cursor-pointer' onClick={()=>{
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
