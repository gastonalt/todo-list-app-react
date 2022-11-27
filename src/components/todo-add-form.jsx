import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../models/todo';
import { add } from '../states/todoListSlice';

export default function TodoAddForm(){

    const count = useSelector((state) => state.todoList.currentIdCounter)
    const dispatch = useDispatch()

    const [todo, setTodo] = useState('');

    const addTodo = (e)=>{
        const newTodo = new Todo({
            id: count,
            text: todo,
            fecha: new Date()
        })
        dispatch(add(newTodo));
        setTodo('');
    }

    const checkIsEnter = event =>{
        if (event.key === 'Enter') addTodo();
    }

    const handleChange = event => {
        setTodo(event.target.value);
    };

    return(
        <>
            <TextField onKeyDown={checkIsEnter} onChange={handleChange} value={todo} id="todoBody" fullWidth label="Todo nuevo" variant="outlined" />
            <Tooltip title="Agregar">
                <IconButton onClick={addTodo}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
        </>
    )
}