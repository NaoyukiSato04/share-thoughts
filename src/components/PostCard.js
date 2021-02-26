import React from 'react'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { Card, Button } from "react-bootstrap"

const db = firebase.firestore();

db.collection("thoughts").get().then(function(querySnapshot) {
  querySnapshot.forEach(function(doc) {
      console.log(doc.data().title);
      console.log(doc.data().about);
      console.log(doc.data().createdAt.toMillis());
  });
});

export default function PostCard() {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>doc.data().title</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
        </Card>
    )
}
