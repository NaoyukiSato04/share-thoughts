import React, { useState } from 'react'
import { thoughts } from "../../firebase"
import { Modal, Button, Form } from "react-bootstrap"


export default function Post() {
    const [show, setShow] = useState(false);
    const [title, setTitle] = useState("");
    const [about, setAbout] = useState("");

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    function handleSubmit(e) {
        e.preventDefault()

        //
        thoughts.add({
            title: title,
            about: about,
            createdAt: new Date(),
        })

        setTitle("")
        setAbout("")
        handleClose()
    }


    return (
        <>
            <Button variant="outline-primary" block onClick={handleShow}>
                投稿
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>アイデアを入力</Modal.Title>
                </Modal.Header>

                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group>
                            <Form.Label>Title:</Form.Label>
                            <Form.Control
                                type="text"
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label>About:</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                value={about}
                                onChange={e => setAbout(e.target.value)}
                            />
                        </Form.Group>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            閉じる
                        </Button>
                        <Button variant="primary" type="submit">
                            送信
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
