import Nav from "./components/Nav"
import Hero from "./components/Hero"
import Card from "./components/Card"

import experiencesData from "../data"

function App() {
  const data = experiencesData.map(x => <Card key={x.id} item={x}/>)
  
  return (
    <div className="App">
      <Nav />
      <Hero />
      <div className="card-flex">
        {data}
      </div>
    </div>
  )
}

export default App