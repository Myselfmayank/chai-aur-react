import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
        <div>
            <h1>Custom App!</h1>
        </div>
    )
}

// Js object containing html element which can be rendered just by mentioning name in render method
const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotherUser = 'Mayank'

//pre provided method by React
//Babble inject this method into DOM
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank'},
    'click me to visit google',
    anotherUser
)

ReactDOM.createRoot(document.getElementById('root')).render(
    //reactElement
    <App/>
)
