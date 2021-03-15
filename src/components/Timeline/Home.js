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
          <a href="https://test-a6dfd.web.app/">一部未完成部分の動作イメージ</a>
          <Container style={{ maxWidth: "60vw" }}>
            <Sort />
            <AddIdea />
            <PostCard />
            <Top />
          </Container>
        </>
    )
}