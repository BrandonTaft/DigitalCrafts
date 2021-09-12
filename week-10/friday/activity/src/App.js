
import React,{useState} from 'react'


function App(){

  const [count, setCount] = useState(99)

  const handleIncrement = () => {
    setCount(count + 1)
  }
  const handleDecrement = () => {
    setCount(count - 1)
  }
return(
  <div>
  
  <h1>{count}</h1>
  <button onClick = {handleIncrement}>Increment</button>
  <button onClick = {handleDecrement}>Decrement</button>
  
  </div>
)
}
export default App