// import { useState } from 'react'
import { Fragment } from "react"
import "./styles/globals.scss"
import Header from "./components/home/header/header"
import Apresentation from "./components/home/apresentation/apresentation"
import Mission from "./components/mission/mission"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Fragment>
      <section className="sectionBackground">
        <Header />
        <Apresentation />
      </section>
      <section className="main">
        <Mission />
        <Apresentation />
      </section>
    </Fragment>
  )
}

export default App
