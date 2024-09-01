import { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';
import { useDispatch, useSelector } from 'react-redux';
import { decreament, increament } from './features/counters/CountersSlice';
import Posts from './components/Posts'
// const initialCounters = [
//   {
//     id: 1,
//     value: 0,
//   }, {
//     id: 2, 
//     value: 0,
//   }
// ];

function App() {
  const counters = useSelector(state => state.counters);
  const dispatch = useDispatch();
  console.log("Counters: ", counters);
  const totalCount = counters.reduce((sum,current)=>{
    return sum+current.value;
  },0)
  const add = (counterId) => {
    dispatch(increament(counterId));
  }
  const sub = (counterId) => {
    dispatch(decreament(counterId));
  }
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center space-y-6 p-8 border-2 border-sky-500">
      {counters.map((counter) => {
        return <Counter key={counter.id} add={() => { add(counter.id) }} sub={() => { sub(counter.id) }} count={counter.value}/>
      })}
      <Stats totalCount={totalCount} />
      <Posts/>
    </div>
  );
}

export default App;
