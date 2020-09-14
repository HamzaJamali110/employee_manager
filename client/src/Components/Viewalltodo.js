import React , {Fragment,useState , useEffect} from 'react'
import EditTodo from './EditTodo'


function Viewalltodo() {
  const [todos, setTodos] = useState([]);
  const getTodo = async ()=>{
    const response = await fetch("http://localhost:5000/todos")
    const jsondata = await response.json();
    setTodos(jsondata);
  }
  useEffect(()=>{
    getTodo();
  },[]);

  const DeleteTodo = async(id)=>{
    
    const response = await fetch(`http://localhost:5000/todos/${id}`,{method:'DELETE'})
    
    setTodos(todos.filter(todo=>todo.id!==id));

  }
  return (
    <Fragment>
      <h1 className="table mt-5 text-center">List of Todos</h1>
      <table className="table table-bordered mt-5">
    <thead>
      <tr>
        <th>Description</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
    todos.map(todo=>{
      return(<tr key={todo.id}>
      <td>{todo.decription}</td>
      <td>
        <EditTodo todo={todo}/>
      </td>
      <td>
        <button className="btn btn-danger" onClick={()=>DeleteTodo(todo.id)}>Delete</button>
      </td>
      </tr>)
        
    })
    }
    
    </tbody>
  </table>
    </Fragment>
  )
}

export default Viewalltodo
