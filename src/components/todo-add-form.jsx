import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, MenuItem, Select, Tooltip } from '@mui/material';
import { useState } from 'react';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Todo } from '../models/todo';
import { add } from '../states/todoListSlice';
import styled from '@emotion/styled';
import CircleIcon from '@mui/icons-material/Circle';
import { addCategoria, resetCategorias } from '../states/categoriasSlice';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FlexInputContainer = styled.div`
  display:flex;
`

export default function TodoAddForm(){

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const count = useSelector((state) => state.todoList.currentIdCounter)
    const dispatch = useDispatch()

    const categorias = useSelector((state) => state.categoriasSlice.categorias)

    const todos = useSelector((state) => state.todoList.todos)

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(categorias[0].id);

    const [todo, setTodo] = useState('');

    const addTodo = (e)=>{
        const newTodo = new Todo({
            id: count,
            text: todo,
            fecha: new Date(),
            categoriaId: categoriaSeleccionada
        })
        dispatch(add(newTodo));
        setTodo('');
    }

    const checkIsEnter = event =>{
        (event.key === 'Enter') ? addTodo() : setTodo(event.target.value);
    }

    const handleChange = event => {
      setTodo(event.target.value);
    };

    const handleCategoriaChange = event =>{
      switch (event.target.value) {

        case 'resetCategorias':
          handleRestartCategorias();
          break;
      
        default:
          setCategoriaSeleccionada(event.target.value);
          break;
      }
    }

    const handleAddCategoria = () => {
      dispatch(addCategoria())
      setCategoriaSeleccionada(categorias[0].id)
    }

    const handleRestartCategorias = () => {
      let categoriaCustomEnUsoFlag = false;
      todos.forEach((todo)=>{
        if(todo.categoriaId > 3){
          categoriaCustomEnUsoFlag = true;
        }
      })
      setCategoriaSeleccionada(1);
      if(categoriaCustomEnUsoFlag){
        handleClickOpen()
      }else{
        dispatch(resetCategorias())
      }
    }

    return(<>
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Atención</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Alguna de las categorías creadas está siendo utilizada por
            una o más tareas. Por favor cambie la/s categoría/s de esta/s
            tarea/s para continuar con la operación.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
        <FlexInputContainer>
              <Select
                value={categoriaSeleccionada}
                onChange={handleCategoriaChange}
                sx={{marginRight: '10px'}}
                variant="standard"
                disableUnderline
                IconComponent={() => null}
                inputProps={{ sx:{padding: '0 10px !important'} }}
              >
                {categorias.map((categoria, id)=>{
                  return(
                    <MenuItem key={id} value={categoria.id}>
                      <CircleIcon sx={{color: categoria.color, fontSize: '24pt'}}/>
                    </MenuItem>
                  )
                })}
                  <MenuItem onClick={handleAddCategoria}>
                    <AddIcon sx={{fontSize: '24pt'}}/>
                  </MenuItem>
                  <MenuItem value={'resetCategorias'}>
                    <RestartAltIcon sx={{fontSize: '24pt'}}/>
                  </MenuItem>
              </Select>
            <TextField onKeyDown={checkIsEnter} onChange={handleChange} value={todo} fullWidth label="Agregar nueva nota" variant="outlined" InputProps={{endAdornment:<Tooltip title="Agregar">
                <IconButton onClick={addTodo}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
              }}/>
            </FlexInputContainer>
          </>
    )
}