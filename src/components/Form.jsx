import { Button, Paper, TextField } from "@mui/material";
import React, { useState } from "react";

export default function Form({ todoHandler }) {
    const [text, setText] = useState(null);
    const [id, setId] = useState(0);

    const todoCreate = (text) => {
    const todoObj = {text: text, id: id };
    setId(id + 1);
    todoHandler(todoObj);
    document.getElementById("outlined-basic").value = null;
      
    }


    return (
        <Paper styled={{ padding: "'1em"}}>
            <div styled={{ display: "flex", justifyContent: "center" }}> 
              <TextField id="outlined-basic" label="Lista de Tarefas" variant="outlined" 
              fullWidth 
              onChange={(e) => setText(e.target.value)} />
              <Button variant="contained" fullWidth 
              onClick={() => todoCreate(text)}
              
              style={{ backgroundColor: "#4C3575", color: "#EFEFEF" 
        }}>Adicionar</Button>
              </div>  
        </Paper>
    )
};