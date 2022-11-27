import { Button, Card, CardActions, CardContent , Typography } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useDispatch } from "react-redux";
import { deleteById, toggleEstado } from "../states/todoListSlice";

export default function Todo(props){
    
    const dispatch = useDispatch();

    const deleteHandler = () =>{
        dispatch(deleteById(props.todo))
    }

    const toggleEstadoTodo = ()=>{
        dispatch(toggleEstado(props.todo))
    }

    return(
        <Card sx={{ minWidth: 275 }}>
        <CardContent>
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
            <Button startIcon={<CheckCircleIcon/>} onClick={toggleEstadoTodo} variant="contained">
                Marcar como {props.todo.completado ? 'Incompleto' : 'Completado'}
            </Button>
            <Button startIcon={<DeleteIcon/>} onClick={deleteHandler}>
                Eliminar
            </Button>
        </CardActions>
      </Card>
    )
}