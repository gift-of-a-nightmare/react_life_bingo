import './App.css';
import achievements from './achievements.json'
import React, { useEffect } from 'react';
import {BubbleWrapper} from './BubbleWrapper.js'

function App() {
  const [cheevos, setCheevos] = React.useState([]);

  return (
    <div>
      <div className="App">
      <BubbleWrapper/>

        <div className='body'>

          <div className="container">
            {achievements.map((obj, i) => (
              <div key={i}>
                <ContainerCard
                title={obj.title}
                description={obj.description}
                pic={obj.pic}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

  );
}

function ContainerCard(props) {
  const [unlocked, setUnlocked] = React.useState(false);

  function sticker () {
    // Determine a position, on the div. Then, place a sticker with animation.

    setUnlocked(!unlocked);
  }

  return (
    <div className='container-box' onClick={() => sticker()}>

      <div className='container-card' >
        <div className='container-item1'>
          <img className='cheevo-pic' src={`${props.pic}`}/>
        </div>
        <div className='container-item2'>
          <div className='container-title'>
            <h1>{props.title}</h1>
          </div>
          <div className='container-description'>
            <h2>{props.description}</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;
