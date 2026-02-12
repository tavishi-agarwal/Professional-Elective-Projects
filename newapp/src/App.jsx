import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import './components/App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Registration from './components/Registration.jsx'

function App() {
  const [count, setCount] = useState(0)
  const appTitle = "something";


  return (
    
    <div>
       <Header title={appTitle} color = "red" year ="2009" />

      <h1>hello this is my app</h1>
      <h1>This is the 2nd line</h1>
      <card>
        <h4>this is children demo</h4>
        <p>THANKS for reading</p>
      </card>

    </div>
  )
}

export default App //imp , export to main.jsx, for your functional component to be called outside 
