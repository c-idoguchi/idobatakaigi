import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import { pushMessage } from '../firebase';

const MessageField = ({name, text, setText}) => {
  const [isComposed, setIsComposed] = useState(false);
  return (
    <TextField
      fullWidth={true}
      onChange={(e) => {setText(e.target.value)}}
      onKeyDown={(e) => {
        if (isComposed) return;

        const text = e.target.value
        if (text === '') return;

        if (e.key === 'Enter'){
          pushMessage({name, text}) //firebaseにデータを登録
          setText('')
          e.preventDefault();
        }
      }}
      // 日本語入力を編集中かを判定する
      onCompositionStart={() => setIsComposed(true)}
      onCompositionEnd={() => setIsComposed(false)}
      value={text}
    />
  )
}

export default MessageField