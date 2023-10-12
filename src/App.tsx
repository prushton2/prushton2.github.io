// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import favicon from '/favicon.ico'
import {Helmet} from "react-helmet";
import './App.css'

function App() {

  return (
    <>
      <Helmet>

        <title>prushton.com</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />

        <meta property="og:title" content="prushton.com" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://prushton.com" />
        <meta property="og:image" content="https://prushton.com/favicon.ico" />
        <meta property="og:description" content="Peter Rushton - UMass Lowell" />
      </Helmet>

      <label className="name">Peter Rushton</label> <br />
      <label className="subtitle">UMass Lowell - Computer Science</label> <br />
      <h2><a href="https://github.com/prushton2" className="url"><u>Github</u></a></h2>
    </>
  )
}

export default App
