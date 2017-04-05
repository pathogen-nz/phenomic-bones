import React, { PropTypes } from "react"
import { BodyContainer } from "phenomic"

import Loading from "../../components/Loading"
import Page from "../Page"

import styles from "./index.css"

const Post = (props) => {
  const pageDate = props.head.date ? new Date(props.head.date) : null;

  return (
    <Page
      { ...props }>

      <div className={styles.post}>

        <article>

          <header className={styles.header}>
            {
              (pageDate)
                ? (
                  <time>
                    {pageDate.toDateString()}
                  </time>
                )
                : null
            }
          </header>

          {
            props.isLoading
              ? (
                <Loading />
              )
              : (
                <BodyContainer>
                  {props.body}
                </BodyContainer>
              )
          }

        </article>

      </div>

    </Page >
  )
}

Post.propTypes = {
  body: PropTypes.string,
  isLoading: PropTypes.bool,
  head: PropTypes.object.isRequired,
}

export default Post
