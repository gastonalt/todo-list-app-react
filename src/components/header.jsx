import { AppBar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function Header(){
    return(
    <Box>
        <AppBar component="nav">
            <Toolbar>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6" sx={{ my: 2 }}>
                        App para tomar notas by: gastonalt :)
                    </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    </Box>
    )
}