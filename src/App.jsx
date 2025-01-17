import React, { useCallback, useEffect, useState } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [password, setPassword] = useState("");

   const passwordGenerator = useCallback(()=>{
   let pass = ""
   let str = "ABCDEFIJKLMNOPQRSTUVWXYZabcdefijklmnopqrstuvwxyz"

   if(numberAllow) str += "0123456789"
   if(charAllow) str+= "!@#$%^&*()[]{}:;<>,./?~`_+-="
   for (let index = 1; index <=length; index++) {
    let char = Math.floor(Math.random() * str.length);
    pass += str.charAt(char)
   }
   setPassword(pass)

  }, [length, numberAllow, charAllow, setPassword])

  useEffect(()=>{
    passwordGenerator();
  }, [length, numberAllow, charAllow, passwordGenerator])

  return (
   <div className='flex justify-center'>
     <div className='flex flex-col items-center w-full max-w-md  rounded-md bg-gray-700 justify-center px-5 py-4 my-4 mt-10 text-orange-600 '>
       <h1 className='text-white mb-4 text-2xl'>Password Generator</h1>
        <div className='flex w-full'>
        <input type="text" value={password} readOnly className='overflow-hidden px-3 py-1 outline-none rounded-l-md w-full placeholder:text-gray-500  ' placeholder='Password'/>
        <button className='bg-blue-700 text-white rounded-r-md text-lg font-semibold px-3 py-0.5 text-center shrink-0'>Copy</button>
      </div>
      <div className='flex text-sm gap-x-5 mt-6'>
        <div className='flex items-center gap-x-2'>
          <input type="range" min={1} max={20} value={length} className='cursor-pointer' onChange={(e)=> setLength(e.target.value)}/>
          <label >Length {length}</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" defaultChecked={numberAllow} className='cursor-pointer' onChange={()=> setNumberAllow((prev)=> !prev)}/>
          <label>Numbers</label>
        </div>
        <div className='flex items-center gap-x-2'>
          <input type="checkbox" defaultChecked={charAllow} className='cursor-pointer' onChange={()=>{setCharAllow((prev) => !prev);}}/>
          <label>Characters</label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default App
