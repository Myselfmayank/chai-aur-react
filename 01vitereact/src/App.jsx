import Chai from './Chai'

function App() {
    //variable to use in react
    //only evaluated exppression can be used in react
    const userName = "chai aur code with Mayank";

  return (
    // only one html element can be returned at a time.
    // we can use fragments to return multiple elements <> </>
    <>
    <Chai/>
    <h1>chai aur react {userName}</h1>
    <p>Test para</p>
    </>
    
  )
}

export default App
