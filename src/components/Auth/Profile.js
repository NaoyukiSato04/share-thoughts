import React from "react"
import { Container, Card } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function Profile() {
  const { currentUser } = useAuth()

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        <div className="w-100" style={{ maxWidth: "400px" }}>
          <Card>
            <Card.Body>
              <h2 className="text-center mb-4">ユーザー情報</h2>
              <strong>Email:</strong> {currentUser.email}
              <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
                更新
              </Link>
            </Card.Body>
          </Card>
          <div className="w-100 text-center mt-2">
            <Link to="/">戻る</Link>
          </div>
        </div>
      </Container>
    </>
  )
}
