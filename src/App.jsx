import React, { Fragment, useState } from 'react';

function App() {
  // let myTitle = 'Ahmet Demir';
  const [state, setState] = useState('Ahmet Demir')

  function handleTitleChange() {
    console.log("run!");
    // myTitle = 'Emin Başbayan';
    setState('Emin Başbayan')
    // console.log(myTitle);
  }

  return (
    <Fragment>
      <h1>{state}</h1>
      <button onClick={handleTitleChange}>İsmi Değiştir</button>
    </Fragment>
  );
}

export default App;
