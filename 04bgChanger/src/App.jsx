import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}>

        <div className="fixed flex flex-wrap flex-col justify-center left-12 inset-y-0 py-2"> {/*Vertical Button Group*/}
            <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button
                onClick={() => setColor("red")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "red"}}>Red
                </button>               
            </div>
            <div  className="flex mt-1 flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button
                onClick={() => setColor("green")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "green"}}>Green
                </button>               
            </div>
            <div className="flex mt-1 flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button onClick={() => setColor("blue")}
                className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
                style={{backgroundColor: "blue"}}>Blue
                </button>               
            </div>            
        </div>
    </div>
    </>
  )
}

export default App
