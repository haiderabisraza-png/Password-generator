import React, { useEffect,useRef } from 'react'
import { useCallback,useState } from 'react';

function App() {
   const [length,setLength]=useState(8);
   const [numberAllowed,setNumberAllowed]=useState(false);
   const [characterAllowed,setCharacterAllowed]=useState(false);
   const [Password,setPassword]=useState("");

   const passwordRef=useRef(null);

   const generatePassword=useCallback(()=>{
    let pass="";
    let string="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed){
      string+="0123456789";
    }
    if(characterAllowed){
      string+="!@#$%^&*()_+";
    }
    for(let i=0;i<length;i++){
      const index=Math.floor(Math.random()*string.length+1);
      pass+=string[index];
    }
    setPassword(pass);

  },[length,numberAllowed,characterAllowed,setPassword]);
    const copytoclipboard=useCallback(()=>{
      passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password); 
    },[Password]);

   useEffect(()=>{
    generatePassword();
   },[length,generatePassword,numberAllowed,characterAllowed]);
  return (
   
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800">
      <h1 className='text-white text-center my-1'>Password Generator</h1>
      <div className='display-flex flex-row'>
      <input 
      type="text"
      value={Password}
         className='w-90 py-1 px-3 text-black bg-white rounded-md my-2  '
         placeholder='Password'
         readOnly
         ref={passwordRef}
         
         />
         <button onClick={copytoclipboard} className='bg-blue-900 p-1.5 ml-1.5 cursor-pointer my-1'>copy</button>
         </div>
         <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}} />
              <label className='text-amber-50 ml-1.5'>length:{length}</label>
            </div>
            <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={()=>{setNumberAllowed((prev)=>!prev);
              }
              }
                />
              <label className='text-amber-50 ml-0.5'>Numbers</label>
            </div>
             <div className='flex items-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked={characterAllowed}
              onChange={()=>{setCharacterAllowed((prev)=>!prev);
              }
              }
                />
              <label className='text-amber-50 ml-0.5'>Characters</label>
            </div>
 
         </div>
    </div>  
  )
}


export default App;
