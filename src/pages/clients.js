import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaChevronDown } from 'react-icons/fa'

const ClientsPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 10}}}}) {
                edges {
                    node {
                        title
                        content
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
                            section_one {
                                column_one_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 347) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                column_one_copy
                                column_two_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 347) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                column_two_copy
                                column_three_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 347) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                column_three_copy
                            }
                            section_two {
                                section_two_image {
                                    localFile {
                                        childImageSharp {
                                            sizes(maxWidth: 450) {
                                                ...GatsbyImageSharpSizes
                                            }
                                        }
                                    }
                                }
                                section_two_copy
                                section_two_link_copy
                                section_two_link
                            }
                        }
                    }
                }
            }
        }
    `)

    return(
        
        data.allWordpressWpCustomPage.edges.map(post => (
            <Layout>
                <SEO title="Clients" />
                <ClientsBanner>
                    <ImageBackground>
                        <BackgroundImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                    </ImageBackground>

                    <HeroTitle
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <h1>{post.node.title}</h1>
                        <p>Optomi <span>Professional</span> Services</p>
                    </HeroTitle>

                    <HeroContent 
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.content }}
                    />

                    <HeroBottom
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <a href="#section_one"><FaChevronDown size={32}/></a>
                        <p>{post.node.acf.bottom_subtitle}</p>
                    </HeroBottom>

                    <HeroSocials
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <a href="https://twitter.com/OptomiServices" target="_blank" rel="noopener noreferrer"><FaTwitter size={42}/></a>
                        <a href="https://www.linkedin.com/company/27003541/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={42}/></a>
                    </HeroSocials>
                </ClientsBanner>
                <SectionOne id={"section_one"}>
                    <SectionOneRow
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <SectionOneCol>
                            <SectionOneImage sizes={post.node.acf.section_one.column_one_image.localFile.childImageSharp.sizes} alt={"Clients Image"}/>
                            <SectionOneCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.column_one_copy }}/>
                        </SectionOneCol>
                        <SectionOneCol>
                            <SectionOneImage sizes={post.node.acf.section_one.column_two_image.localFile.childImageSharp.sizes} alt={"Clients Image"}/>
                            <SectionOneCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.column_two_copy }}/>
                        </SectionOneCol>
                        <SectionOneCol>
                            <SectionOneImage sizes={post.node.acf.section_one.column_three_image.localFile.childImageSharp.sizes} alt={"Clients Image"}/>
                            <SectionOneCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_one.column_three_copy }}/>
                        </SectionOneCol>
                    </SectionOneRow>
                </SectionOne>
                <SectionTwo>
                    <SectionTwoRow
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <SectionTwoImage sizes={post.node.acf.section_two.section_two_image.localFile.childImageSharp.sizes} alt={"Clients Image"}/>
                        <SectionTwoCopy dangerouslySetInnerHTML={{ __html: post.node.acf.section_two.section_two_copy }}/>
                        <SectionTwoLink to={post.node.acf.section_two.section_two_link}>{post.node.acf.section_two.section_two_link_copy}</SectionTwoLink>
                    </SectionTwoRow>
                </SectionTwo>
            </Layout>
            
        ))
    )
}

const ClientsBanner = styled.div`
    position: relative; 
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`
const BackgroundImg = styled(Img)`
    height: 100vh;
    width: 100vw;
    img {
        margin-bottom: 0;
    }
`

const ImageBackground = styled.div`
    position: absolute;
    height: 100vh;
    width: 100vw;
    top: 0;
    left: 0;
`

const HeroTitle = styled.div`
    position: absolute;
    top: 100px;
    left: 150px;
    h1 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        margin-bottom: 0;
        text-transform: lowercase;
        font-size: 90px;
        font-weight: 100;
        line-height: 1;
    }
    p {
        font-family: "Helvetica Thin";
        letter-spacing: 2px;
        width: 100%;
        text-align: center;
        z-index: 1;
        font-size: 20px;
        color: rgb(140,145,146);
        span {
            color: #5ab3e8;
        }
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    min-width: 100vw;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    margin-top: 100px;
    h2 {
        font-family: "Helvetica Thin";
        max-width: 800px;
        width: 100%;
        color: #fff;
        margin: 0 auto;
        margin-bottom: 20px;
        font-size: 72px;
        font-weight: 100;
        line-height: 1;
        span {
            color: #5ab3e8;
            font-family: 'Freeland';
            font-style: italic;
        }
    }
    p {
        font-family: "Helvetica Thin";
        width: 100%;
        z-index: 1;
        font-size: 32px;
        color: #5ab3e8;
        text-transform: uppercase;
        line-height: 1.2;
    }
`

const HeroBottom = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
    z-index: 1;
    p {
        font-family: "Helvetica Thin";
        text-align: center;
        margin: 0;
        color: rgb(140, 145, 146);
    }
    a {
        color: #5ab3e8;
    }
`

const HeroSocials = styled.div`
    position: absolute;
    right: 20px;
    bottom: 40px;
    width: 60px;
    border-left: 1px solid rgba(255, 255, 255, 0.5);
    padding: 0 10px;
    z-index: 1;
    display: flex;
    flex-direction: column;
    a {
        display: inline-block;
        &:first-child {
            color: #5ab3e8;
        }
        &:last-child {
            color: #8c9192;
        }
    }
`

const SectionOne = styled.div`
    background-color: #fff;
`

const SectionOneRow = styled.div`
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
`

const SectionOneCol = styled.div`
    width: 30%;
    text-align: center;
`

const SectionOneImage = styled(Img)`
    max-width: 245px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    img {
        margin-bottom: 0;
    }
`

const SectionOneCopy = styled.div`
    h3 {
        font-size: 40px;
        line-height: 40px;
        text-transform: lowercase;
        font-family: "Helvetica Thin";
        font-weight: 600;
        color: #000;
    }
    p {
        font-size: 22px;
        line-height: 25px;
        color: #000;
        font-family: "Helvetica Thin";
        letter-spacing: 1px;
    }
`

const SectionTwo = styled.div`
    background-color: #000;
    padding-bottom: 50px;
`

const SectionTwoRow = styled.div`
    max-width: 1140px;
    padding-left: 20px;
    padding-right: 20px;
    margin: 0 auto;
    width: 100%;
    text-align: center;
`

const SectionTwoImage = styled(Img)`
    max-width: 600px;
    width: 100%;
    height: auto;
    margin: 0 auto;
    img {
        margin-bottom: 0;
    }
`

const SectionTwoCopy = styled.div`
    h2 {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 50px;
        line-height: 50px;
    }
    p {
        font-family: "Helvetica Thin";
        font-size: 28px;
        line-height: 35px;
        color: #fff;
    }
`

const SectionTwoLink = styled(Link)`
    color: #5ab3e8;
    font-family: 'Freeland';
    font-style: italic;
    font-size: 52px;
    line-height: 52px;
    padding-top: 15px;
    text-decoration: none !important;
    text-align: center;
`

export default ClientsPage