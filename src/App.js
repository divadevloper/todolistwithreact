import './App.css';
import { useState,useEffect } from 'react';

const App = () => {
    
  const [name, setname] = useState("")
  const [todo, setTodo] = useState("")
  const [alltodo, setalltodo] = useState( JSON.parse(localStorage.getItem("todolist"))|| [])
  const [onetodo, setonetodo] = useState({})
  const [index, setindex] = useState("")
 
  useEffect(() => {
    
    localStorage.setItem("todolist",JSON.stringify(alltodo))
  },[alltodo])
  


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
    localStorage.setItem("todolist",JSON.stringify(alltodo))

    // Return the updated array or do something else with it
        return updatedTodo;

    })
};


    const edit = (index,el)=> {
      console.log(index,el);
      setindex(index)
      setonetodo({...el})
    }
    const save = ()=>{
      alltodo[index] = onetodo
      console.log(onetodo);
      setalltodo([...alltodo])
    localStorage.setItem("todolist",JSON.stringify(alltodo))

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
            <h4>{el.todod}</h4>
            <div>
            <button id='delete'  class="btn btn-danger" onClick={deleteitem} ><i className="fa fa-trash"></i></button>
            <button  class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"onClick={()=>edit(index,el)}>Edit</button>
            </div>
          </div>
         ))}



<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Todo</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <input value={onetodo.names} onChange={(e)=>setonetodo({...onetodo,names:e.target.value})} className='form-control mt-3' type="text" />
        <input value={onetodo.todod} onChange={(e)=>setonetodo({...onetodo,todod:e.target.value})} className='form-control mt-3' type="text" />
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" onClick={save} class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          </div>
       </div>

    </div>
  );
}

export default App;
