import { getUsers } from "../../api/users.api";

import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { getRoles } from "../../api/roles.api";
import { Box, Button, CircularProgress } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useDataLoad } from "../../hooks/useDataLoad";
import { Role, User } from "../../types";


export default function ListUsers() {

    const { data: users, isLoading: isLoadingUsers } = useDataLoad<User[]>(getUsers)
    const { data: roles, isLoading: isLoadingRoles } = useDataLoad<Role[]>(getRoles)

    const navigate = useNavigate()
    if (isLoadingUsers || isLoadingRoles) {
        return <CircularProgress />
    }

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 90 },
        { field: 'name', headerName: 'Name', flex: 1 },
        { field: 'email', headerName: 'Email', flex: 1, minWidth: 200 },
        {
            field: 'roleId', headerName: 'Role', flex: 1, valueGetter: (value: number) => {
                const role = roles?.find((role) => role.id === value)
                return role?.name
            }
        },
    ];

    return (
        <div>
            <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
                <h3>Users</h3>
                <Button variant="contained" color="primary">
                    <Link to={'/users/add'} style={{ textDecoration: 'none', color: 'white' }}>Add User</Link>
                </Button>
            </Box>
            <DataGrid
                onRowClick={({ id }) => navigate(`/users/${id}`)}
                style={{ height: 300, width: '100%' }}
                rows={users || []}
                columns={columns}
                disableRowSelectionOnClick
            />
        </div>
    )
}