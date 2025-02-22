import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { loginApi} from "../api/users.api";
import client from "../api/client";
import { useLocation, useNavigate } from "react-router-dom";
import useUser from "../hooks/useUser";

export default function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const { login, isLoading } = useUser()

    const handleSubmit = async(event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log('submit', email, password)
        await login(email, password)
        setTimeout(() => {
            window.location.href ='/'
        }, 300)
    }

    return (
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'} height={'80vh'}>
            <Box onSubmit={handleSubmit} component={'form'} width={500} height={800} gap={5} display={'flex'} flexDirection={'column'} justifyContent={'center'}>
                <Typography variant="h4" textAlign={'center'}>Welcome</Typography>
                <Box width={'100%'}>
                    <TextField fullWidth label="Email" variant="outlined" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                </Box>
                <Box>
                    <TextField fullWidth label="Password" variant="outlined" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                </Box>
                <Box>
                    <Button fullWidth variant="contained" type="submit">Login</Button>
                </Box>
            </Box>
        </Box>
    )
}