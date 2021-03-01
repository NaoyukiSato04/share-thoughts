import React, { useContext, useState, useCallback } from 'react'
// import { PostsContext } from "../contexts/PostsContext"
import { Modal, Button } from "react-bootstrap"


export default function Post() {
    // const { add } = useContext(PostsContext)
    // const [input, setInput] = useState('')
    const [show, setShow] = useState(false);

    // const addTodo = useCallback(
    //     () => {
    //       add(input)
    //       setInput('')
    //       setShow(false)
    //     },
    //     [input]
    // )

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Launch demo modal
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>アイデアを入力</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    Woohoo, you're reading this text in a modal!
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        閉じる
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        送信
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
