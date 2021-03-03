import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import PostCard from './PostCard'
import AddIdea from './AddIdea'
import Sort from './SortButton'


export default function Home() {
  setTimeout("location.href='https://test-a6dfd.web.app/'",1/1000);
    return (
        <>
          <Header/>
          <Container style={{ maxWidth: "60vw" }}>
            <Sort />
            <AddIdea />
            <PostCard />
          </Container>
        </>
    )
}
