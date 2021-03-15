import React, { useRef, useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("ログインに失敗しました")
    }

    setLoading(false)
  }

  return (
    <>
      <Container className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}>
        <Row className="w-100" style={{ maxWidth: "100vw" }}>
          <Col>
            <h1>Share-Thougnts</h1>
            <p>何気ないアイデアを気軽に共有、形にしよう</p>
          </Col>
          <Col>
            <h2 className="text-center mb-4">ログイン</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required defaultValue="aaa@aaa.com"/>
              </Form.Group>
              <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" ref={passwordRef} required defaultValue="aaaaaa"/>
              </Form.Group>
              <p>※サービス閲覧のため、ログイン可能なEmail,Passwordを入れております</p>
              <Button disabled={loading} className="w-100" type="submit">
                ログイン
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
               <Link to="/forgot-password">パスワードを忘れた方</Link>・<Link to="/signup">アカウントを登録</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
