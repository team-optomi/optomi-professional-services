import React from "react"
import { useStaticQuery, graphql, Link } from 'gatsby'
import BlogLayout from "../components/blog-layout"
import SEO from "../components/seo"
import styled from 'styled-components'
import Img from "gatsby-image"


const TownhallSuccessPage = () => {

  const data = useStaticQuery(graphql`
  query {
      allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 27}}}}) {
        edges {
          node {
              title
              featured_media {
                  localFile {
                      childImageSharp {
                          sizes(maxWidth: 600) {
                              ...GatsbyImageSharpSizes
                          }
                      }
                  }
              }
          }
        }
      }
  }
`)

return(
        
  data.allWordpressWpCustomPage.edges.map(post => (

    <BlogLayout>
      <SEO title="Townhall Registration Success" />
      <div
      data-sal="slide-up"
      data-sal-duration="1000"
      data-sal-delay="300"
      data-sal-easing="ease"
      >
          <WebinarImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
      </div> 
      <MainContent>
        <h1>Thank you for signing up for our next Town Hall. More details to follow soon.</h1>
        <Return to="/">Return to Homepage</Return>
      </MainContent>
    </BlogLayout>
    ))
    )
}
  
const WebinarImg = styled(Img)`
    max-width: 320px;
    margin: 0 auto;
    margin-bottom: 50px;
    margin-top: 100px;
`

  const MainContent = styled.div`
    background-color: #fff;
    padding: 100px 20px;
    text-align: center;
    h1 {
      font-family: "Raleway";
      font-size: 20px;
      text-transform: uppercase;
      color: #303030;
      margin-bottom: 100px;
    }
  `

  const Return = styled(Link)`
    font-family: "Helvetica Thin";
    padding: 0 20px;
    text-align: center;
    color: #000;
    text-decoration: none;
    font-size: 20px;
    font-style: italic;
    letter-spacing: 1px;
  `
  
  export default TownhallSuccessPage