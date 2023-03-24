import React from 'react'

export const Tarjeta = ({img,title,descripcion,precio,categoria}) => {
  return (
    <div>

        <div>
            <img src={img} alt="" />
        </div>
        <div>
            <h4>{title}</h4> 
            <p>{descripcion}</p>
            <p>${precio}</p>
            <p>{categoria}</p>
        </div>
    </div>

    
  )
}
