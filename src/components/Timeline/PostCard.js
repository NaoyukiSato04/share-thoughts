import React, { useEffect } from 'react'
import { Card } from "react-bootstrap"
import { thoughts } from "../../firebase"
import { useAuth } from "../../contexts/AuthContext"
import styled from 'styled-components'

export default function PostCard() {
    const { currentUser } = useAuth()
    
    useEffect(() => {
        thoughts.orderBy("createdAt", "desc").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                console.log(doc.id, " => ", doc.data().title);
            });
        });
    });
    

    const Right = styled.div`
        text-align: right;
    `;

    return (
        <>
            <Card>
                <Card.Body>
                    {currentUser.uid}
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
