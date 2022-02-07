import React, {useState} from 'react';
import Signin from './Signin';

export default () => {
  const [name, setName] = useState('');
  console.log({name});
  return <Signin setName={setName} />;
};
