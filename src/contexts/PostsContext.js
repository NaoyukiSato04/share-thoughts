import React, { useState, useMemo, useCallback } from "react"
// import { AuthContext } from "./AuthContext"
import { db } from "../firebase"

const PostsContext = React.createContext()

const PastsProvider = ({ children }) => {
    const [posts, setPosts] = useState([])
    // const { currentUser } = useContext(AuthContext)
  
    const collection = useMemo(() => {
      const col = db.collection('thoughts')
  
      // 更新イベント監視
      // col.where('uid', '==', currentUser.uid).onSnapshot　条件はwhereで追加
      col.onSnapshot((querySnapshot) => {
        const data = []
        querySnapshot.forEach((doc) => data.push({ ...doc.data(), docId: doc.id }))
        setPosts(data)
      })
  
      return col
    }, [])
        
    const add = useCallback(async text => {
        await collection.add({
        // uid: currentUser.uid,
        // title: ,
        // text: ,
        createdAt: new Date(),
        })
    }, [])

    const value = {
        posts,
        add
    }

    return (
        <PostsContext.Provider value={value}>
          {children}
        </PostsContext.Provider>
    )
}

export { PostsContext, PastsProvider }