import React from 'react'
import { Card, Button } from "react-bootstrap"
import { thoughts } from "../../firebase"

export default function PostCard() {
    thoughts.orderBy("createdAt", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().title);
        });
    });


    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title></Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}
