import { useEffect, useState } from "react"
import { getUsers } from "../../api/users.api";

import { DataGrid, GridRowsProp, GridColDef, GridValueGetter } from '@mui/x-data-grid';
import { getRoles } from "../../api/roles.api";
import { Role, User } from "../../types";
import { Box, Button } from "@mui/material";
import { Link, useNavigate } from "react-router";
import { useDataLoad } from "../../hooks/useDataLoad";


export default function ListRoles() {
    const navigate = useNavigate()
    const { data, isLoading } = useDataLoad(getRoles)

    if (isLoading) {
        return <div>Loading...</div>
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', flex: 1 },
    ];

    return (
        <div>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <h3>Roles</h3>
                <Button variant="contained" color="primary">
                    <Link to={'/users/add'} style={{ textDecoration: 'none', color: 'white' }}>Add Role</Link>
                </Button>
            </Box>
            <DataGrid
                onRowClick={({ id }) => navigate(`/roles/${id}`)}
                style={{ height: 300, width: '100%' }}
                rows={data}
                columns={columns}
                disableRowSelectionOnClick
            />
        </div>
    )
}