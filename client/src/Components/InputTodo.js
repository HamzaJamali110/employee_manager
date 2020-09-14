import React,{Fragment,useState} from 'react'

function InputTodo() {
  
  
  const [description , setDescription] = useState("")
  const onSubmitForm = async (e)=>{ 
      e.preventDefault();
      try{
      const body = {description};
      const response = await fetch("http://localhost:5000/todos",{
        method:"POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(body)
        }
      );
      window.location='/';
    } 
    catch(err){
      console.log(err.message);
    }
  }
  return (
    <Fragment>
      <h1 className="text-center mt-5">Input Todos</h1>
      <form className="form-control d-flex mt-5" onSubmit={onSubmitForm}>
      <input 
        type="text" 
        className="form-control" 
        value={description}
        onChange={e => setDescription(e.target.value)}>
      </input>
      <button className="btn btn-primary">ADD</button>
      </form >
    </Fragment>
  )
  }

  export default InputTodo