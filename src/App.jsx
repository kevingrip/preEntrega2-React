import './App.css'
import Navbar from './components/Navbar/Navbar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={"Distribuidora KHG"}/>}/>   
          <Route path='/item/:id' element={<ItemDetailContainer/>}/> 
          <Route path='/category/:id' element={<ItemListContainer/>}/>              
        </Routes>        
      </BrowserRouter>
    </>
  )    
}

export default App