import React, {useState, useEffect} from 'react';
import './App.css';
import { Hello } from './hello';
import { useFetch } from './useFetch';

const App = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [count, setCount] = useState(0)
  const [showHello, setShowHello] = useState(true)
  const  [mouseLocation, setMouseLocation] = useState(1)
  useEffect(()=> {
    const onMouseMove = e => setMouseLocation (e)
    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove')
    }
  },[email])
  const {data, loading} = useFetch(`http://numbersapi.com/${count}/trivia`)
  return (
  <div>
    
    <input name="email" value ={email} onChange={ e =>setEmail( e.target.value)}/>
    <input name="password" value={password} type="password" onChange={ e => setPassword(e.target.value)}/>
    <div>mouse location  </div>
    <div>X:{mouseLocation.screenX} Y:{mouseLocation.screenY} </div>
    <button onClick={()=> setCount(count+1)}>increament</button>
    <div>{loading ? "loading..." : data}</div>
  </div>
  )
}

export default App;
