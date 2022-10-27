import React, {useState, useEffect} from 'react'

const SampleComp = () => {
  const [count, setCount] = useState(0);
  useEffect(()=>{
    console.log('Mounting...');
    return ()=>{
      console.log('Unmounting...');
    }
  })
  return (
    <div>
      <h1>This is sample component : {count}</h1>
      <button onClick={()=>setCount(count+1)}> Increment</button>
    </div>
  )
}

export default SampleComp