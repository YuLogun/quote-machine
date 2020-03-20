import React, { useState, useEffect } from 'react';
import './App.scss';

const App = () => {
  const [input, changeInput] = useState('')
  const handleChange = e => {
    changeInput(e.target.value)
  }

  const [quotes, setQuotes] = useState([])
  useEffect(
    () => {
      fetch('https://gist.githubusercontent.com/YuLogun/3177417dd47c1223df69d896f9b108fd/raw/1ddbe5507edf0999aa8a60a646e09e5c03a2a383/gaiman-pratchett')
      .then(res => res.json())
      .then(res => setQuotes(res.quotes))
    },
    []
  )
 
  const [randomIndex, setRandomIndex] = useState('')
  const handleClick = () => {
    if (input) {
      setRandomIndex(Math.floor(Math.random() * 30))
      setShow(true)
    }
  }

  const [show, setShow] = useState(false)
  const handleClick2 = () => {
    changeInput('')
    setShow(false)
  }

  let response = quotes.map(it => it.quote)[randomIndex]
  let author = quotes.map(it => it.author)[randomIndex]
  
  return (
    <div className="App">
      <div className="intro-container">
        <h1 className="heading">Ask Neil &amp; Terry!</h1>
        <h3>'When I find myself in times of trouble...' Neil and Terry come to me!</h3>
        <p className="description">These two are the most brilliant minds of our generation and I often find myself turning to their books to acquire wisdom, hope, or just have a good laugh.</p>
        <p className="description">Don't believe me? Ask them right now and find for yourself!</p>
      </div>
      <div className="search-container">
        <input type="text" onChange={handleChange} value={input} placeholder="Try your luck" />
        <button onClick={handleClick}>Ask!</button>
        <button onClick={handleClick2}>Clear</button>
      </div>
      <div className="response">
        <h3>{show && response}</h3>
        <h5>{show && author}</h5>
      </div>
      <footer>
        <div>
          <a href="https://github.com/YuLogun" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-github" aria-label="github" />
          </a>
          <a href="https://twitter.com/YuLogun" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-twitter" aria-label="twitter" />
          </a>
          <a href="http://linkedin.com/in/iuliia-logunova-982939190" target="_blank" rel="noopener noreferrer">
            <i className="fa fa-linkedin" aria-label="linkedin" />
          </a> 
        </div>
        <p>Made with <i className="fa fa-heart-o" aria-label="heart" /> by Iuliia</p>
      </footer>
    </div>
  );
}

export default App;
