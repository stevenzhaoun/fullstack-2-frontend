// import './App.css'
import { CssBaseline } from '@mui/material'
import Layout from './components/Layout'
import { Routes, Route } from 'react-router'
import ListUsers from './modules/Users/ListUsers'
import Dashboard from './modules/Dashboard/Dashboard'
import ListRoles from './modules/Roles/ListRoles'
import Login from './components/Login'
import CreateOrUpdateUser from './modules/Users/CreateOrUpdateUser'

function App() {
  return (
    <>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/users" element={<ListUsers />} />
          <Route path="/users/:id" element={<CreateOrUpdateUser />} />

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/roles" element={<ListRoles />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
