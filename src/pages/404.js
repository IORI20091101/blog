import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "gatsby-image"

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title
  const bg = data?.bg?.childImageSharp?.fixed

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      {bg && <Image fixed={bg} className="bg-404" />}
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    bg: file(absolutePath: { regex: "/404-bg.jpg/" }) {
      childImageSharp {
        fixed(width: 500, height: 400, quality: 95) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
