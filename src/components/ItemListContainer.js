import React, { useEffect, useState } from 'react'
import customFetch from '../utilities.js/customFetch'
import { datos } from '../utilities.js/datos'
import ItemDetail from './ItemDetail'

const ItemListContainer = () => {

  const [info,setInfo] = useState([])

  //Montamos el componente

  useEffect(() =>{
    customFetch(2000,datos)
      .then(response => setInfo(datos))
      .catch(error => console.log(error))
  },[])


  return (
    <>
    {
      info.map(item => (
        <ItemDetail
        key={item.id}
        thumbnail={item.thumbnail}
        title={item.title}
        condition={item.condition}
        description={item.description}
        price={item.price}
        />
      ))
    }
    </>
  )
}

export default ItemListContainer