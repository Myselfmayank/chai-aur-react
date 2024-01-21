import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    // we use hooks to propagagte js variable on UI.
    // UseState is one of the hook of react
    let [counter,setCounter] = useState(5)

    //let counter = 5;
    const addValue = () =>{
        //counter = counter + 1;
        if(counter <= 19)
        setCounter(counter+1);
    }

    const decreaseValue = () =>{
        if(counter >= 1)
        setCounter(counter - 1);
    }
  
    return (
    <>
     <h1>Chai aur react</h1>
     <h2>Counter value: {counter} </h2>

     <button
     onClick={addValue}
     >Add value {counter}</button>
     <br/>
     <button
     onClick={decreaseValue}
     >Decrease value {counter}</button>
    </>
  )
}

export default App
