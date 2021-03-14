import React, { useState, useEffect } from 'react'
import { Card } from "react-bootstrap"
import { thoughts } from "../../firebase"

function usePosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    thoughts
    .orderBy("createdAt", "desc")
    .onSnapshot(snapshot => {
        const newPosts = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))

        setPosts(newPosts)
    })
  }, []);

  return posts
}

export default function PostCard() {
  const posts = usePosts()
  console.log()

  return (
    <>
        {posts.map((post) =>
            <Card key={post.id}>
                <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>
                    {post.about}
                </Card.Text>
                <div className="text-right">
                    <Card.Text>xx秒前</Card.Text>
                </div>
                </Card.Body>
            </Card>
        )}
    </>
  )
}
