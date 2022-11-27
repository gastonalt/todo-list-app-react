import { Button, ButtonGroup } from "@mui/material";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import HideSourceIcon from '@mui/icons-material/HideSource';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

export default function ToolZone(){
    return(
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button startIcon={<CheckCircleOutlineIcon />}>Todos completados</Button>
            <Button startIcon={<RemoveCircleOutlineIcon />}>Borrar todo</Button>
            <Button startIcon={<HideSourceIcon />}>Todos incompletos</Button>
        </ButtonGroup>
    )
}