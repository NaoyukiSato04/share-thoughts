import React from 'react'
import { Container } from 'react-bootstrap'
import Header from './Header'
import PostCard from './PostCard'
import AddIdea from './AddIdea'
import Sort from './SortButton'
import Top from './TopButton'


export default function Home() {
    return (
        <>
          <Header/>
          <Container style={{ maxWidth: "60vw" }}>
            <Sort />
            <AddIdea />
            <PostCard />
            <Top />
          </Container>
        </>
    )
}