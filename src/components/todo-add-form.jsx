import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, InputBase, MenuItem, Select, Tooltip } from '@mui/material';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../models/todo';
import { add } from '../states/todoListSlice';
import { styled } from '@mui/material/styles';
import CircleIcon from '@mui/icons-material/Circle';

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

    const BootstrapInput = styled(InputBase)(({ theme }) => ({
        'label + &': {
          marginTop: theme.spacing(3)
        },
        '& .MuiInputBase-input': {
          borderRadius: 4,
          position: 'relative',
          backgroundColor: theme.palette.background.paper,
          border: '1px solid #ced4da',
          fontSize: 12,
          padding: '10px 26px 10px 12px',
          transition: theme.transitions.create(['border-color', 'box-shadow']),
          // Use the system font instead of the default Roboto font.
          fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
          },
        },
      }));

      const [age, setAge] = useState('');

    return(
        <>
            <TextField onKeyDown={checkIsEnter} onChange={handleChange} value={todo} fullWidth label="Agregar nueva nota" variant="outlined" InputProps={{endAdornment:<Tooltip title="Agregar">
                <IconButton onClick={addTodo}>
                    <AddIcon />
                </IconButton>
            </Tooltip>, startAdornment:
              <Select
                value={age}
                onChange={handleChange}
                displayEmpty
                sx={{marginRight: '10px'}}
                variant="standard"
                disableUnderline
              >
                <MenuItem value="">
                    <CircleIcon sx={{color: 'red'}}/>
                </MenuItem>
                <MenuItem value={10}><CircleIcon/></MenuItem>
                <MenuItem value={20}><CircleIcon/></MenuItem>
                <MenuItem value={30}><CircleIcon/></MenuItem>
              </Select>}}/>
        </>
    )
}