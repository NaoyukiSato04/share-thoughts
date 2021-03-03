import React from 'react'
import { Button } from 'react-bootstrap'
import { db } from '../../firebase'

export default function SortButton() {
  // 並べ替え
  const up = document.querySelector('.up')
  const doun = document.querySelector('.doun')

  up.addEventListener('click', () => {
    db.collection("thoughts").orderBy("createdAt").onSnapshot((querySnapshot) => {
      const div = document.getElementById("thoughts")
      div.innerHTML = ""
      querySnapshot.forEach((doc) => {
        // 取得できたデータをforEach
        // 取得できたデータをulタグに追加
        const card = document.createElement("div")
        card.className = "card"
        const item = document.createElement("div")
        item.className = "card-body"
        const title = document.createElement("h5")
        title.className = "card-title"
        const about = document.createElement("p")
        about.className = "card-text"
        const time = document.createElement("p")
        time.className = "card-text"
        time.style = "text-align: right"

        //○○秒前表示
        const Time = (unixTime)  => {

          let date = new Date(unixTime);
          let diff = new Date().getTime() - date.getTime();
          let d = new Date(diff);
          let test 
                                    
          if (d.getUTCFullYear() - 1970) {
            test = d.getUTCFullYear() - 1970 + "年前";
          } else if (d.getUTCMonth()) {
            test = d.getUTCMonth() + "ヶ月前";
          } else if (d.getUTCDate() - 1) {
            test = d.getUTCDate() - 1 + "日前";
          } else if (d.getUTCHours()) {
            test = d.getUTCHours() + "時間前";
          } else if (d.getUTCMinutes()) {
            test = d.getUTCMinutes() + "分前";
          } else {
            test = d.getUTCSeconds() + "秒前";
          }

          return test;
        };

        title.innerText = doc.data().title
        about.innerText = doc.data().about
        time.innerText = Time(doc.data().createdAt.toMillis())

        div.appendChild(card)
        card.appendChild(item)
        item.appendChild(title)
        item.appendChild(about)
        item.appendChild(time)
      })
    })
  })

  doun.addEventListener('click', () => {
    db.collection("thoughts").orderBy("createdAt", "desc").onSnapshot((querySnapshot) => {
      const div = document.getElementById("thoughts")
      div.innerHTML = ""
      querySnapshot.forEach((doc) => {
        // 取得できたデータをforEach
        // 取得できたデータをulタグに追加
        const card = document.createElement("div")
        card.className = "card"
        const item = document.createElement("div")
        item.className = "card-body"
        const title = document.createElement("h5")
        title.className = "card-title"
        const about = document.createElement("p")
        about.className = "card-text"
        const time = document.createElement("p")
        time.className = "card-text"
        time.style = "text-align: right"

        //○○秒前表示
        const Time = (unixTime)  => {

          let date = new Date(unixTime);
          let diff = new Date().getTime() - date.getTime();
          let d = new Date(diff);
          let test 
              
          if (d.getUTCFullYear() - 1970) {
            test = d.getUTCFullYear() - 1970 + "年前";
          } else if (d.getUTCMonth()) {
            test = d.getUTCMonth() + "ヶ月前";
          } else if (d.getUTCDate() - 1) {
            test = d.getUTCDate() - 1 + "日前";
          } else if (d.getUTCHours()) {
            test = d.getUTCHours() + "時間前";
          } else if (d.getUTCMinutes()) {
            test = d.getUTCMinutes() + "分前";
          } else {
            test = d.getUTCSeconds() + "秒前";
          }

          return test;
        };

        title.innerText = doc.data().title
        about.innerText = doc.data().about
        time.innerText = Time(doc.data().createdAt.toMillis())

        div.appendChild(card)
        card.appendChild(item)
        item.appendChild(title)
        item.appendChild(about)
        item.appendChild(time)
      })
    })
  })

  return (
    <>
      <div style="text-align: right;">
        <Button variant="outline-secondary">
          <a class="doun" href="#">新着順</a>
        </Button>
        <Button variant="outline-secondary">
          <a class="up" href="#page-bottom">投稿順</a>
        </Button>
        <Button variant="outline-secondary">
          <a href="#page-bottom">ページの一番下へ</a>
        </Button>
      </div>
    </>
  )
}
