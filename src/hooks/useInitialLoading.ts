import { use, useEffect } from "react"
import useUser from "./useUser"
import { UserState } from "../slices/user"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "./useAppSelector"

const useInitialLoading = () => {

    const { setUserData } = useUser()
    const user = useAppSelector(state => state.user.user)
    const navigate = useNavigate()

    useEffect(() => {
        const userStr = localStorage.getItem('user')
        if(userStr) {
            if(!user) {
                const userData: UserState = JSON.parse(userStr)
                setUserData(userData)
            }
        } else {
            if(!user) {
                navigate('/login')
            }
        }

    }, [user])
}

export default useInitialLoading