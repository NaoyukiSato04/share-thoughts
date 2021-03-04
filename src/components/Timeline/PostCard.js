import React from 'react'
import { Card } from "react-bootstrap"
import { thoughts } from "../../firebase"
import styled from 'styled-components'

export default function PostCard() {
    thoughts.orderBy("createdAt", "desc").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            const formattedDoc = {
                id: doc.id,
                ...doc.data()
            }
            console.log(formattedDoc);
        });
    });

    const Right = styled.div`
        text-align: right;
    `;

    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Title>sample1</Card.Title>
                    <Card.Text>
                    text1
                    </Card.Text>
                    <Right>
                        <Card.Text>xx秒前</Card.Text>
                    </Right>
                </Card.Body>
            </Card>
        </>
    )
}
