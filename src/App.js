import { useState } from 'react';
import Counter from './components/Counter';
import Stats from './components/Stats';

const initialCounters = [
  {
    id: 1,
    value: 0,
  }, {
    id: 2,
    value: 0,
  }
];

function App() {
  const [counters, setCounters] = useState(initialCounters);
  const totalCount = counters.reduce((sum,current)=>{
    return sum+current.value;
  },0)
  const add = (getId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === getId) {
        return {
          ...counter,
          value: counter.value + 1,
        }
      }
      return counter
    })
    setCounters(updatedCounters);
  }
  const sub = (getId) => {
    const updatedCounters = counters.map((counter) => {
      if (counter.id === getId) {
        return {
          ...counter,
          value: counter.value - 1,
        }
      }
      return counter
    })
    setCounters(updatedCounters);
  }
  return (
    <div className="min-h-screen w-full flex flex-col justify-center items-center space-y-6 p-8 border-2 border-sky-500">
      {counters.map((counter) => {
        return <Counter key={counter.id} add={() => { add(counter.id) }} sub={() => { sub(counter.id) }} count={counter.value}/>
      })}
      <Stats totalCount={totalCount} />
    </div>
  );
}

export default App;
