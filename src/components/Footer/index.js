import React, { PropTypes } from "react"

import styles from "./index.css"

const Footer = (props, { metadata: { title } }) => (
  <footer className={styles.footer}>
    <small>{`© ${title} ${new Date().getFullYear()}`}</small>
  </footer>
)

Footer.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

Footer.propTypes = {
  props: PropTypes.object,
}

export default Footer
