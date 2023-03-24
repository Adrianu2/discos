import React, {useState, useEffect} from "react";
import { Tarjeta } from "./tarjeta";
import "./Seccion1.css";
import productos from "../../datos/productos.json";
import productosN from "../../datos/productosN.json";

export const Seccion1 = () => {
  const [mostrar, setMostrar] = useState(false)
  const [articulos, setArticulos] = useState([])
  const [categoria, setCategoria] = useState("")
  useEffect(() => {
    setArticulos(productos,productosN)
  
   // return () => {
   //   second
   // }
  }, [])
  
    const handleClick = (categoria) => {
      setCategoria(categoria)
      setMostrar(!mostrar)
    }
  return (
    <>

    <div className="boton">
    <button className="boton_filter" onClick={()=>handleClick("funk")}>
     <p>Funk</p>  
    </button>
    <button className="boton_filter" onClick={()=>handleClick("novedades")}>
     <p>Novedades</p>  
    </button>
    <button className="boton_filter" onClick={()=>handleClick("boggie")}>
     <p>Boggie</p>  
    </button>
    </div>
   


    <div className="contenedor_producto">
    
      {articulos.filter(articulo=>categoria!=""?categoria==articulo.categoria:true).map((articulo) => {
        return (
         mostrar && (<Tarjeta
            img={articulo.img}
            title={articulo.titulo}
            descripcion={articulo.descripcion}
            precio={articulo.precio}
            categoria={articulo.categoria}
          />)
          
        );
      })}
    </div></>
  );
};
