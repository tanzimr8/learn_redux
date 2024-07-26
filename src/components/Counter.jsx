import React, { useState } from 'react'
import Button from './Button';
import Count from './Count';
const Counter = ({count,add, sub}) => {
  // const [counter, setCounter] = useState(0);
  // const add = () => {
  //   setCounter(prev => prev + 1);
  // }
  // const sub = () => {
  //   setCounter(prev => prev - 1);

  // }
  return (
    <>
      <Count counter={count} />
      <div className="flex space-x-2">
        <Button handler={add} type={'success'}>
          Increament
        </Button>
        <Button handler={sub} type={'danger'}>
          Decreament
        </Button>
      </div>
    </>
  )
}

export default Counter;