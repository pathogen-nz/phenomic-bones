import React, { PropTypes } from "react"

import Page from "../Page"

import styles from "./index.css"

const PageError = (props) => (
  <Page
    {...props}>

    <div className={styles.error}>
      <p>
        {props.error}
      </p>
      <p>
        {props.errorText}
      </p>
    </div>

  </Page>
)

PageError.propTypes = {
  error: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  errorText: PropTypes.string,
}

PageError.defaultProps = {
  error: 404,
  errorText: "Page Not Found",
}

export default PageError
