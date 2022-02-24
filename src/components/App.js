import React, {useState} from 'react';
import Signin from './Signin';
import Main from './Main'
import config from '../config.json'


console.log(config)

export default () => {
  const [name, setName] = useState('');
  console.log({name});

  if (config.signInEnabled && name === '') {
    return <Signin setName={setName} />;
  } else {
    return <Main name={name}/>
  }
};
