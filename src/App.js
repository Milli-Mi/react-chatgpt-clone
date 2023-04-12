

const App = () => {
  return (
    <div className="app">
      <section className="side-bar">
        <button>+ New chat</button>
        <ul className="history">
          <li>BLUGH</li>
        </ul>
        <nav>
          <p>Made by Tanya</p>
        </nav>
      </section>
      <section className="main">
        <h1>TanyaGPT</h1>
        <ul className="feed"></ul>
        <div className="bottom-section">
          <div className="input-container">
            <input/>
            <div id="submit">➢ </div>
          </div>
          <p className="info">We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.</p>
        </div>
      </section>
    </div>
  )
}

export default App;
