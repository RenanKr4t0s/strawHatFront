import { Routes, Route,} from 'react-router-dom'
import CardView from './CardView'
import Home from './Home'
import CardGame from './CardGame'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path ='/cardview' element={<CardView />} />
        <Route path ='/cardgame' element={<CardGame />} />
      </Routes>
    </>
  )
}

export default App
