import { useState } from 'react'
import Effect from './useEffect/Effect'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Effect/>
        
    </div>
  )
}

export default App
