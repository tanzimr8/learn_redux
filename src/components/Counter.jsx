import React, { useState } from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items center">
        <div>Counter: {counter}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Increament
        </button>
        <button className="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
          Decreament
        </button>
      </div>

    </>
  )
}

export default Counter;