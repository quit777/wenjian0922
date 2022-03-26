import React, { Component } from 'react'
import './index.css'
import axios from 'axios'
export default class Show extends Component {
  state = {
    List: [],
    index: 0
  }
  componentDidMount() {
    window.addEventListener('scroll', this.scrollGetData)
    this.geiList()

  }
  geiList = () => {
    axios.get(`/api/RoomApi/live/LOL?offset=${this.state.index * 30}`).then((result) => {
      console.log(result.data.data);
      const { List } = this.state
      const newList = List.concat(result.data.data)
      this.setState({ List: newList })
    })

  }

  scrollGetData = () => {
    // 窗口高度
    let winHeight = document.documentElement.clientHeight;

    // 文档高度
    let domHeight = document.documentElement.scrollHeight;
    // 获取页面卷起的高度
    let sTop = document.body.scrollTop || document.documentElement.scrollTop
    if (sTop > domHeight - winHeight ) {
        this.setState({ index: this.state.index + 1 })
        this.geiList()

    }

  }

  render() {

    return (
      <div>
        <h1>英雄联盟</h1>
        {this.state.List.map((itemLi, i) =>

          <a key={i} href={itemLi.url}>
            <li>
              <img className="fengmian" src={itemLi.room_src} alt="" />
              <p className="mincheng">{itemLi.room_name}</p>
              <p>
                <span className="nametext">{itemLi.nickname}</span>
                <span className="renqitext">{(itemLi.hn / 10000).toFixed(2)}万</span>
              </p>
            </li>
          </a>

        )}
      </div>

    )
  }
}
