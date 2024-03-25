import { useState } from 'react'
import './App.css'
import { Button, Image } from 'antd'

function App() {
  const [pepeOpacity, setPepeOpacity] = useState(0)

  return (
    <>
      <div>
      </div>
      <div className='block'>
      <h1>Hey, I'm Hellscaped.</h1>
      <div className="card">
        <div alt="Hellscaped" className='pfp'/>
        <p>Just a casual programmer.</p>
        <p>I know Python 3 (7+ Years), Web Trio (HTML, CSS, JS), and Java.</p>
        <p>Currently learning Rust.</p>

        <Button type="primary" href="https://github.com/Hellscaped">
          <i className="fab fa-github"></i> GitHub
        </Button>
          
        <Button type="primary" onClick={() => {setPepeOpacity(pepeOpacity+1)}}>
          hehe clicky clicky
        </Button>
      </div>
      </div>
      <img src="/pepe.png" alt="pepe" id='pepe' style={{ opacity: `${pepeOpacity}%` }} />
    </>
  )
}

export default App
