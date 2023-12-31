import Hero from './components/hero.jsx'
import Demo from './components/demo.jsx'

import './app.css'

const App = () => {
  return (
    <main>
      <div className='main'> 
        <div className='gradient'/>
      </div>

      <div className='app'>
        <Hero />
        <Demo />
      </div>
    </main>
  )
}

export default App