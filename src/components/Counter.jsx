import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const add = ()=>{
    setCounter( prev=> prev+1);
  }
  const sub = ()=>{
    setCounter( prev=> prev-1);

  }
  return (
    <>
      <div className="min-h-screen w-full flex flex-col justify-center items-center space-y-2">
        <div>Counter: {counter}</div>
        <div className="flex space-x-2">
          <button onClick={add} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Increament
          </button>
          <button onClick={sub} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
            Decreament
          </button>
        </div>

      </div>

    </>
  )
}

export default Counter;