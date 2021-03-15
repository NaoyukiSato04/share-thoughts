import React from 'react'
import { Navbar, Nav } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { useHistory } from "react-router-dom"


export default function Header() {
    const { logout, currentUser } = useAuth()
    const history = useHistory()

    async function handleLogout() {
      try {
        await logout()
        history.push("/login")
      } catch {
        console.log("ログアウトに失敗しました")
      }
    }

    function handleProfile() {
      history.push("/Profile")
    } 
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">share-thoughts</Navbar.Brand>
            {currentUser.email}さん、こんにちは
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={handleProfile}>プロフィール</Nav.Link>
                    <Nav.Link onClick={handleLogout}>ログアウト</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
