import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header>
        <nav className='flex justify-around'>
          <div className="logo">
            <h1> 
              <img className='w-10' src="src/assets/logo.png" alt="logo" />
            </h1>
          </div>
          <div>
            <ul className='flex gap-4'>
              <li>Home</li>
              <li>Apps</li>
              <li>Installation</li>
            </ul>
          </div>
          <div>
            <button>Contribute</button>
          </div>
        </nav>
      </header>
    </>
  )
}

export default App
