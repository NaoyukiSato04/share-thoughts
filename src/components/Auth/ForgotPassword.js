import React, { useRef, useState } from "react"
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../../contexts/AuthContext"
import { Link } from "react-router-dom"

export default function ForgotPassword() {
  const emailRef = useRef()
  const { resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setMessage("")
      setError("")
      setLoading(true)
      await resetPassword(emailRef.current.value)
      setMessage("メールを確認してください")
    } catch {
      setError("パスワードのリセットに失敗しました")
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
            <p>登録済みのメールアドレスを入力すると<br/>パスワード再設定ページへのリンクが送られます。</p>
          </Col>
          <Col>
            <h2 className="text-center mb-4">パスワード再設定</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            {message && <Alert variant="success">{message}</Alert>}
            <Form onSubmit={handleSubmit}>
              <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" ref={emailRef} required />
              </Form.Group>
              <Button disabled={loading} className="w-100" type="submit">
              再設定
              </Button>
            </Form>
            <div className="w-100 text-center mt-3">
              <Link to="/signup">アカウントを登録</Link>・<Link to="/login">ログイン</Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
