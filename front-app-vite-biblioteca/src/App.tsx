// import { useState } from 'react'
import { Fragment } from "react"
import "./styles/globals.scss"
import Header from "./components/home/header/header"
import Apresentation from "./components/home/apresentation/apresentation"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Fragment>
      <section className="sectionBackground">
        <Header />
        <Apresentation />
      </section>
    </Fragment>
  )
}

export default App