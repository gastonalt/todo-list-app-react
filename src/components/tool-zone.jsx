import { Button, ButtonGroup } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HideSourceIcon from '@mui/icons-material/HideSource';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import { useDispatch } from "react-redux";
import { DeleteAll, MarkAllAsComplete, MarkAllAsIncomplete } from "../states/todoListSlice";

export default function ToolZone(){

    const dispatch = useDispatch();

    const MarkAllCompleteHandler = () =>{
        dispatch(MarkAllAsComplete())
    }
    const RemoveAllHandler = () =>{
        dispatch(DeleteAll())
    }
    const MarkAllIncompleteHandler = () =>{
        dispatch(MarkAllAsIncomplete())
    }

    const { innerWidth: width } = window;

    return(
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={MarkAllCompleteHandler} startIcon={<CheckCircleOutlineIcon />}>{width > 500 ? 'Todos completados' : null}</Button>
            <Button onClick={RemoveAllHandler} startIcon={<RemoveCircleOutlineIcon />}>{width > 500 ? 'Borrar todo' : null}</Button>
            <Button onClick={MarkAllIncompleteHandler} startIcon={<HideSourceIcon />}>{width > 500 ? 'Todos incompletos' : null}</Button>
        </ButtonGroup>
    )
}