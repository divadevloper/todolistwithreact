import './App.css';
import { useState } from 'react';

const App = () => {
    
  const [name, setname] = useState("")
  const [todo, setTodo] = useState("")
  const [alltodo, setalltodo] = useState([])



  const add = ()=>{
    let todos = {
      names:name,
      todod:todo
    } 
      setalltodo([...alltodo,todos])
      console.log(alltodo);
      // console.log(todos);
  }

  const deleteitem = (index) => {
    console.log(index);
    // Create a copy of the array with the item at the given index removed
    setalltodo(()=>{
      let updatedTodo = [...alltodo];
      console.log(updatedTodo);
        updatedTodo.splice(index,1)
    // Return the updated array or do something else with it
        return updatedTodo;

    })
};


    const edit = ()=> {

    }

  return (
    <div className="App">
       <div className='sub-app'>
        <h2 className='myh2'>Todo List ❤️</h2>
        <div>
          <input className='nameinput' onChange={(e)=> setname(e.target.value)} type="text" placeholder='Enter your name'/>
         </div>
        <div>
          <input className='nameinput' onChange={(e)=>setTodo(e.target.value)} type="text" placeholder='Todo....'/>
         </div>
         <button onClick={add} className='button'>Add</button>

          <div className='bigtodolist'>
          {alltodo.map((el,index) => (
          <div key={index} className='todolist'>
            <p>{el.names}</p>
            <h3>{el.todod}</h3>
            <div>
            <button id='delete' onClick={deleteitem} ><i className="fa fa-trash"></i></button>
            <button onClick={edit}>Edit</button>
            </div>
          </div>
         ))}
          </div>
       </div>
    </div>
  );
}

export default App;
