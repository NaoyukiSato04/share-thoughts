import React, { useState } from 'react'
import { Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"


export default function Home() {
    const [error, setError] = useState("")
    const { logout } = useAuth()
    const history = useHistory()

    async function handleLogout() {
      setError("")
  
      try {
        await logout()
        history.push("/login")
      } catch {
        setError("ログアウトに失敗しました")
      }
    }

    return (
        <>
          {error && <Alert variant="danger">{error}</Alert>}
            Home
            <Link to="/Profile">Profile</Link>
            <Link to="/Header">Header</Link>
            <Button variant="link" onClick={handleLogout}>
                ログアウト
            </Button>
        </>
    )
}
