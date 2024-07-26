import React, { useState } from 'react'
import Button from './Button';
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
          <Button handler={add} type={'success'}>
            Increament
          </Button>
          <Button handler={sub} type={'danger'}>
            Decreament
          </Button>
        </div>

      </div>

    </>
  )
}

export default Counter;