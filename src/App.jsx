import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"

import katie from "./assets/katie-zaferes.png"

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="card-flex">
        <Card
          cardImage={katie}
          rating="5.0"
          reviews={6}
          country="USA"
          cardTitle ="Life lessons with Katie Zaferes"
          price={136}
        />
      </div>
      
    </div>
  )
}

export default App