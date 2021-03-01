import React from 'react'
import Header from './Header'
import PostCard from './PostCard'
import Modal from './Modal'


export default function Home() {

    return (
        <>
          <Header/>
          <div className="d-flex align-items-center justify-content-center" style={{ maxWidth: "1200px" }}>
              Home
            <Modal />
            <PostCard />
          </div>
        </>
    )
}
