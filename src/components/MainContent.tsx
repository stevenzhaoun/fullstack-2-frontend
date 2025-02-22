import { Box, Toolbar, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function MainContent() {
    return (
        <Box sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Typography><Outlet /></Typography>
        </Box>
    )
}