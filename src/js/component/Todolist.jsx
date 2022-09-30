import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

const Todolist = () => {
  const [task, setTask] = useState("");

  const [list, setList] = useState([]);

 

  const handleForm = (ev) => { //ev es el evento o el nombre del evento
    if (ev.keyCode === 13) { //13=tecla enter

      ev.preventDefault(); //prevenir para que no recargue la página para que no se elimine lo ingresado
      if (task) {
        const id = uuidv4 ();
        const newTask = {id, task}
        setList((ls) => { // 
          return [...ls, newTask]; //ls es el parametro de "lista" que tengamos hasta el momento // ... es para que ponga lo nuevo sin borrar lo anterior
        });
        setTask(""); //esto es para que borre lo que habías escrito, poner una linea nueva y no tener que borrarla 
        console.log(i);
        console.log(newTask);
      }
    }
  };

  const taskDelete = (i) => {
    setList(list.filter( (value, task) => task !== i )) //value ponerlo aunque esté vacío, para que el list.filter funcione
  }

  return (
    <div className="completelist">
      <form className="input" onKeyDown={handleForm}>
        <input
          type="text"
          onChange={(e) => setTask(e.target.value)}// e es el cambio que haces, con cada tecla que preseionas.
          value={task}
        />
      </form>
      <div className="list">
        <ul>
          {
            list.map(
              (task, index) => (
                <li className= "list" key={index} > {task.task}
                <button className="deleteButton" onClick={() => taskDelete(index)}/> </li>
              
              ) //map, por cada elemento va a retornar todo lo que está dentro de esa función. Pasamos al map una funcion; como parámetro está pasando el value y el index. I es el index, para un "key" unico y value es lo que retorna que metes en el teclado
            ) // Si no pone el {i} es como guardar todos los valores en el mismo parking
          }
        </ul>
      </div>
    </div>
  );
};

export default Todolist;