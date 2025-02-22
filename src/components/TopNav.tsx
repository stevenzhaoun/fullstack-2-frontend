import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useAppSelector } from '../hooks/useAppSelector';
import useUser from '../hooks/useUser';


export default function TopNav() {
    const user = useAppSelector(state => state.user.user)
    const { logout } = useUser()
    return (
        <Box>
            <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Business Management System
                    </Typography>
                    {user ? <Box display={'flex'} gap={2} alignItems={'center'}>
                        <Typography>{user.name}</Typography>
                        <Button color="inherit" onClick={logout}>Logout</Button>
                    </Box> : <Button color="inherit">Login</Button>}
                </Toolbar>
            </AppBar>
        </Box>
    )
}