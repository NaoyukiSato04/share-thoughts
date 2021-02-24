import React from 'react'
import { Navbar, Nav, NavDropdown } from "react-bootstrap"


export default function Header() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Brand href="#home">share-thoughts</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto">
                    {/* <NavDropdown title="ユーザー情報" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="/Profile">プロフィール</NavDropdown.Item>
                        <NavDropdown.Item href="/Login">ログアウト</NavDropdown.Item>
                    </NavDropdown> */}
                    <Nav.Link href="/Profile">プロフィール</Nav.Link>
                    <Nav.Link href="/Login">ログアウト</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
