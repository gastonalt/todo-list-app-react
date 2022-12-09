import { Button, Card, CardActions, CardContent , MenuItem, Select, Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch, useSelector } from "react-redux";
import { changeCategoria, deleteById, toggleEstado } from "../states/todoListSlice";
import CancelIcon from '@mui/icons-material/Cancel';
import CircleIcon from '@mui/icons-material/Circle';
import { useState } from "react";

export default function Todo(props){

    const categorias = useSelector((state) => state.categoriasSlice.categorias)

    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(props.todo.categoriaId);
    
    const dispatch = useDispatch();

    const deleteHandler = () =>{
        dispatch(deleteById(props.todo));
    }

    const toggleEstadoTodo = ()=>{
        dispatch(toggleEstado(props.todo));
    }

    const handleCategoriaChange = event =>{
        setCategoriaSeleccionada(event.target.value);
        const action = {
            id: props.todo.id,
            categoriaId: event.target.value
        };
        dispatch(changeCategoria(action));
    }

    return(
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
            <Select
                value={categoriaSeleccionada}
                onChange={handleCategoriaChange}
                sx={{margin: 0, float: "right"}}
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
            </Select>
            {/* <CircleIcon sx={{color: categorias[props.todo.categoriaId - 1].color, fontSize: '24pt', float: "right"}}/> */}
            <Typography sx={{ fontSize: 10 }} color="text.secondary" gutterBottom>
                {props.todo.fecha.toString()}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                {props.todo.estado}
            </Typography>
            <Typography variant="body2">
                {props.todo.text}
            </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'space-between'}}>
                <Button startIcon={!props.todo.completado ? <CheckCircleIcon/> : <CancelIcon/>} onClick={toggleEstadoTodo} variant="contained">
                    Marcar como {props.todo.completado ? 'Incompleto' : 'Completado'}
                </Button>
                <Button startIcon={<DeleteIcon/>} onClick={deleteHandler}>
                    Eliminar
                </Button>
            </CardActions>
        </Card>
    )
}