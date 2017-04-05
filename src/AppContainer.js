import React, { PropTypes } from "react"

import "./index.global.css"
import "./highlight.global.css"

import DefaultHeadMeta from "./components/DefaultHeadMeta"
import Header from "./components/Header"
import Footer from "./components/Footer"

const AppContainer = ({ children }) => (
  <div className={'container'}>

    <DefaultHeadMeta />

    <Header />

    {children}

    <Footer />

  </div>
)

AppContainer.propTypes = {
  children: PropTypes.node,
}

export default AppContainer
