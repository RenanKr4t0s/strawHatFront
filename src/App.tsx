import { Routes, Route,} from 'react-router-dom'
import CardView from './CardView'
import Home from './Home'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path ='/cardview' element={<CardView />} />
      </Routes>
    </>
  )
}

export default App
