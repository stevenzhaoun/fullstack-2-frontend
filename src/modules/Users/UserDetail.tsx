import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { getUserById } from "../../api/users.api"
import { Role, User } from "../../types"
import { getRoles } from "../../api/roles.api"
import { CircularProgress } from "@mui/material"
import { useDataLoad } from "../../hooks/useDataLoad"

export default function UserDetail() {
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()

    const { data: user, isLoading: isLoadingUser } = useDataLoad<User>(() => {
        if (params.id) {
            return getUserById(params.id)
        }
        return Promise.resolve(null)
    })

    const { data: roles, isLoading: isLoadingRoles } = useDataLoad<Role[]>(getRoles)

    if (isLoading) {
        return <CircularProgress />
    }

    const role = roles?.find((role) => role.id === user?.roleId)
    return <div>
        <h3>User Detail</h3>
        <p>Name: {user?.name}</p>
        <p>Email: {user?.email}</p>
        <p>Role: {role?.name}</p>
    </div>
}