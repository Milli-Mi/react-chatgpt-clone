

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
        <div className="bottom-section"></div>
      </section>
    </div>
  )
}

export default App;
