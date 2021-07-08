  
import React, { useState } from 'react'


export const Sesion = ({ handleSubmited,handleStars}) => {

   const [usuario, setUsuario] = useState('')

   let jugador ={};
   
   const [estrella, setEstrella] = useState(0)

   const handleSubmit = (e) => {
       e.preventDefault()
       jugador.usuario=usuario
       jugador.puntuacion=0
       handleSubmited(jugador)
       handleStars(estrella)
   }
   return (
       <div className="sesion">
           <center>
           <form onSubmit={handleSubmit}>
               <h1 className="h1">USUARIO</h1>
               <input
               className="input"
                 id=""
                 label="Ingrese usuario"
                 value ={usuario}
                 onChange = {e => setUsuario(e.target.value)}
                 required
               />
               <h1 className="h1">INGRESE NUMERO DE ESTRELLAS</h1>
                 <input
                 id=""
                 className="input"
                 label=""
                 value ={estrella}
                 onChange = {e => setEstrella(e.target.value)}
                 required
               /><br/>
               <br/>
                <button className="button">INGRESAR</button>
               
           </form>
           </center>

          
       </div>
   )
} 