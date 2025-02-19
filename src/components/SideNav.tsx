import React from 'react'
import { Box, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar } from '@mui/material'
import { Link } from 'react-router'

const drawerWidth = 240;

const links = [
    { label: 'Dashboard', url: '/dashboard' },
    { label: 'User', url: '/users' },
    { label: 'Roles', url: '/roles' },
    { label: 'Products', url: '/products' },
    { label: 'Orders', url: '/orders' },
]

export default function SideNav() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
            }}
        >
            <Toolbar />
            <Box sx={{ overflow: 'auto' }}>
                <List>
                    {links.map((link) => (
                        <Link key={link.label} to={link.url}>
                            <ListItem  disablePadding>
                                <ListItemButton>
                                    <ListItemText primary={link.label} />
                                </ListItemButton>
                            </ListItem>
                        </Link>
                    ))}
                </List>
            </Box>
        </Drawer>
    )
}