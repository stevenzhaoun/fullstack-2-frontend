import React from 'react'
import TopNav from './TopNav';
import { Box } from '@mui/material';
import SideNav from './SideNav';
import MainContent from './MainContent';


function Layout() {
    return (
        <>
            <TopNav />
            <Box display="flex">
                <SideNav />
                <MainContent />
            </Box>
        </>
    )
}

export default Layout