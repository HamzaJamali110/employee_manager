const express = require('express');
const cors = require('cors');
const pool = require('./db');
const App= express();
//middleware
App.use(cors());



App.use(express.json()); // this gives us access to body of request
//routes
//add a todo
App.post("/todos",async (req,res) =>{
    try{
      console.log("hhello");
      const { description } = req.body;
      console.log(description);
      const addtodo = await pool.query('INSERT INTO todo (decription) VALUES($1) RETURNING id',[description]);
      res.json(addtodo);
    }
    catch(err){
      console.log(err.message);
    }
});  
  App.get("/todos/:id",async (req,res) =>{
    try {
      const { id }=req.params;
      const gettodo = await pool.query("SELECT * FROM todo WHERE id=($1) RETURNING *",[id])
      res.json(gettodo.rows[0]);
    } catch (error) {
      console.log(error.message);
    }

  });

  //update todo
  App.put("/todos/:id",async (req,res) =>{
    try {
      const { id }=req.params;
      const {
        description
      } = req.body;
      const updatetodo = await pool.query("UPDATE todo SET Decription=$1 where id=$2 RETURNING *",[description ,id])
      res.json("TODO HAS BEEN UPDATED");
    } catch (error) {
      console.log(error.message);
    }

  });
  //view all todo
  App.get("/todos",async (req,res) =>{
    try {
      const alltodo = await pool.query("Select * from todo");
      res.json(alltodo.rows);
    } catch (error) {
      console.log(error.message);
    }

  });
  //view delete todo
  App.delete("/todos/:id",async (req,res) =>{
    try {
      const {id}=req.params;
      const deletetodo = await pool.query("DELETE from todo where id=$1",[id]);
      res.json(deletetodo);
    } catch (error) {
      console.log(error.message);
    }

  });
  App.listen(5000,()=>{
    console.log("Server is listening at port 5000")});
  