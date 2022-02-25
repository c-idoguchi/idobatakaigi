import React, { useState } from 'react'
import { Avatar, Grid, makeStyles } from '@material-ui/core'
import gravatarPath from '../gravatar'
import MessageField from './MessageField'

const useStyles = makeStyles({
  root: {
    gridRow: 2,
    margin: '26px'
  }
})

const MessageInputField = ({name}) => {
  const [text, setText] = useState('');
  const classes = useStyles();
  const avatarPath =gravatarPath(name)

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid xs={1}>
          <Avatar src={avatarPath}/>
        </Grid>
        <Grid xs={10}>
          <MessageField name={name} text={text} setText={setText} />
        </Grid>
        <Grid xs={1}>ボタン</Grid>
      </Grid>
    </div>
  )
}

export default MessageInputField