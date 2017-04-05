import React, { PropTypes } from "react"
import Helmet from "react-helmet"
import warning from "warning"
import { joinUri } from "phenomic"

import styles from "./index.css"

const Page = (
  {
    __filename,
    __url,
    head,
    children,
  },
  {
    metadata: { pkg },
  }
) => {
  warning(
    typeof head.title === "string",
    `Your page '${__filename}' needs a title`
  )

  const metaTitle = head.metaTitle ? head.metaTitle : head.title

  const socialImage = head.image && head.image.match("://")
    ? head.image
    : joinUri(process.env.PHENOMIC_USER_URL, head.image)

  const meta = [
    { property: "og:type", content: "article" },
    { property: "og:title", content: metaTitle },
    {
      property: "og:url",
      content: joinUri(process.env.PHENOMIC_USER_URL, __url),
    },
    { property: "og:image", content: socialImage },
    { property: "og:description", content: head.description },
    { name: "twitter:card", content: "summary" },
    { name: "twitter:title", content: metaTitle },
    { name: "twitter:creator", content: `@${pkg.twitter}` },
    { name: "twitter:description", content: head.description },
    { name: "twitter:image", content: socialImage },
    { name: "description", content: head.description },
  ]

  return (
    <main className={styles.main}>

      <Helmet
        title={metaTitle}
        meta={meta}
      />

      {children}

    </main>
  )
}

Page.propTypes = {
  __filename: PropTypes.string,
  __url: PropTypes.string,
  children: PropTypes.node,
  head: PropTypes.object.isRequired,
}

Page.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

export default Page
