import React, { PropTypes } from "react"
import enhanceCollection from "phenomic/lib/enhance-collection"
import { Link } from 'phenomic';

import Page from "../Page"

import styles from "./index.css"

const defaultNumberOfPosts = 6

const Homepage = (props, { collection }) => {
  const latestPosts = enhanceCollection(collection, {
    filter: { layout: "Post" },
    sort: "date",
    reverse: true,
  })
    .slice(0, props.numberOfPosts || defaultNumberOfPosts)

  return (
    <Page
      { ...props }>

      <div className={styles.home}>
        {
          latestPosts.length
            ? (
              <ol className={styles.list}
                reversed={true}>
                {
                  latestPosts.map(({ __url, date, description, title }) => {
                    const pageDate = date ? new Date(date) : null;

                    return (
                      <li
                        key={title}>
                        <div className={styles.wrapper}>
                          <Link to={__url} className={styles.title}>
                            <h4>{title}</h4>
                          </Link>
                          <p>{description}</p>
                          {
                            pageDate &&
                            <p>
                              <time key={pageDate.toISOString()}>
                                {pageDate.toDateString()}
                              </time>
                            </p>
                          }
                        </div>
                      </li>
                    )
                  })
                }
              </ol>
            )
            : "No posts yet."
        }
      </div>

    </Page>
  )
}

Homepage.propTypes = {
  numberOfPosts: PropTypes.number,
}

Homepage.contextTypes = {
  collection: PropTypes.array.isRequired,
}

export default Homepage
