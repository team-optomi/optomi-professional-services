import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import HomeLayout from "../components/home-layout"
import SEO from "../components/seo"

import HomeHero from "../components/home-sections/home-hero"
import HomeCanvas from "../components/home-sections/home-canvas"
import HomeSimple from "../components/home-sections/home-simple"
import HomeMiddle from "../components/home-sections/home-middle"
import HomeThreeCol from "../components/home-sections/home-three-col"
// import LeadershipSection from "../components/leadership-section"
import HomeParallax from "../components/home-sections/home-parallax"
import HomeBottom from "../components/home-sections/home-bottom"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 26}}}}) {
                edges {
                  node {
                    featured_media {
                      localFile {
                          childImageSharp {
                              sizes(maxWidth: 2000) {
                                  ...GatsbyImageSharpSizes
                              }
                          }
                      }
                    }
                    acf {
                      meta_title
                      meta_description
                    }
                  }
                }
              }
        }
    `)
    return(
      data.allWordpressWpCustomPage.edges.map(post => (
      <HomeLayout>
        <SEO 
        title={post.node.acf.meta_title} 
        description={post.node.acf.meta_description}
        image={post.node.featured_media.localFile.childImageSharp.sizes}
        />
        <HomeHero/>
        <HomeCanvas/>
        <HomeSimple/>
        <HomeMiddle/>
        <HomeThreeCol/>
        {/* <LeadershipSection/> */}
        <HomeParallax/>
        <HomeBottom/>
      </HomeLayout>
    ))
  )
}

export default IndexPage
