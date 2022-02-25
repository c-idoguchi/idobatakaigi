import React, {useState, useEffect} from 'react'
import { makeStyles } from '@material-ui/core'
import { messagesRef } from '../firebase'

const useStyles = makeStyles({
  root: {
    gridRow: 1,
  }
})

const MessageList = () => {
  const [messages, setMessages] = useState([])
  const classes = useStyles

  useEffect(() => {
    messagesRef
    .orderByKey()
    .limitToLast(3)
    .on('value', (snapshot) => {
      const messages = snapshot.val()
      if (messages === null) return; //データがない場合は以降の処理を実行しない
      const entries = Object.entries(messages)
      const newMesaages = entries.map((entry) => {
        const [key, nameAndText] = entry //可読性を高めるために代入する
        return {key, ...nameAndText}
      })
      setMessages(newMesaages)
    })
  },[]) //第二引数に空の配列を渡すことで、レンダリングされた際に１度だけ第１引数の関数を実行する

  return (
    <div className={classes.root}>MessageList</div>
  )
}

export default MessageList