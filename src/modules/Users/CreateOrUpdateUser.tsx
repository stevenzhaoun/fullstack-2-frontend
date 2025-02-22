import { Box, Button, CircularProgress, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { Role, User } from "../../types";
import { getRoles } from "../../api/roles.api";
import { createUser, getUserById, updateUser } from "../../api/users.api";
import { useNavigate, useParams } from "react-router-dom";
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import { useDataLoad } from "../../hooks/useDataLoad";

const DEFAULT_PASSWORD = '123456'

export default function CreateOrUpdateUser() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const params = useParams()

    const isAdd = params.id === 'add'

    const { data: user, isLoading: isLoadingUser, setData: setUser } = useDataLoad<Partial<User>>(() => {
        if (!isAdd && params.id) {
            return getUserById(params.id)
        }
        return Promise.resolve(null)
    })

    const { data: roles, isLoading: isLoadingRoles } = useDataLoad<Role[]>(getRoles)




    const handleSnakbarClose = () => {
        setOpen(false)
    }

    const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser({ ...user, [field]: e.target.value })
    }

    const onSelectChange = (e: SelectChangeEvent<string>) => {
        setUser({ ...user, roleId: parseInt(e.target.value) })
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
        if (!user) {
            return
        }
        if (isAdd) {
            const response = await createUser({...user, password: DEFAULT_PASSWORD})
            navigate('/users')
        } else {
            if (params.id) {
                await updateUser(params.id, user)
            }
        }
        setOpen(true)
        setIsSubmitting(false)
    }

    if (isLoadingUser || isLoadingRoles) {
        return <CircularProgress />
    }
    return (
        <div>
            <h3>{isAdd ? 'Add New User' : 'User Details'}</h3>
            <Box component={'form'} display={'flex'} flexDirection={'column'} gap={2} width={500} onSubmit={handleSubmit}>
                <TextField label="Name" value={user?.name} onChange={handleChange('name')} required />
                <TextField label="Email" type="email" value={user?.email} onChange={handleChange('email')} required />
                <FormControl fullWidth>
                    <InputLabel id="role-select">Role</InputLabel>
                    <Select
                        labelId="role-select"
                        id="demo-simple-select"
                        value={user?.roleId?.toString()}
                        label="Role"
                        onChange={onSelectChange}
                    >
                        {roles?.map(role => {
                            return <MenuItem key={role.id} value={role.id}>{role.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
                <Button loading={isSubmitting} type="submit" variant="contained" color="primary">{isAdd ? 'Create' : 'Update'}</Button>
            </Box>
            <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleSnakbarClose}
                message="Successfully"
            />
        </div>
    )
}