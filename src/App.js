import './App.css';
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import React from 'react'



const App = () => {
  return (
    <>
      <NavBar/>
      <ItemListContainer texto = 'Aqui va mi catalago de productos' />
      
    </>
  )
}

export default App;
