import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Img from "gatsby-image"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'

const ContactPage = () => {

    const data = useStaticQuery(graphql`
        query {
            allWordpressWpCustomPage(filter: {categories: {elemMatch: {wordpress_id: {eq: 20}}}}) {
                edges {
                    node {
                        title
                        content
                        featured_media {
                            localFile {
                                childImageSharp {
                                    sizes(maxWidth: 900) {
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
            <Layout>
                <SEO title={post.node.title} />
                <ClientsBanner>
                    <ImageBackground>
                        
                    </ImageBackground>

                    <HeroTitle
                        data-sal="slide-right"
                        data-sal-duration="1000"
                        data-sal-delay="600"
                        data-sal-easing="ease"
                    >
                        <h1>{post.node.title}</h1>
                        <p>Optomi <span>Professional</span> Services</p>
                    </HeroTitle>

                    <HeroContent>
                        <ContactImg sizes={post.node.featured_media.localFile.childImageSharp.sizes} alt={post.node.title} />
                        <ContactInfo
                        data-sal="zoom-in"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                        dangerouslySetInnerHTML={{ __html: post.node.content }}
                        />
                    </HeroContent>

                    <HeroBottom
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                    >
                        <h2>Locations</h2>
                    </HeroBottom>

                    <HeroSocials
                        data-sal="fade"
                        data-sal-duration="1000"
                        data-sal-delay="900"
                        data-sal-easing="ease"
                    >
                        <a href="https://twitter.com/OptomiServices" target="_blank" rel="noopener noreferrer"><FaTwitter size={42}/></a>
                        <a href="https://www.linkedin.com/company/27003541/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn size={42}/></a>
                    </HeroSocials>
                </ClientsBanner>
                <SectionOne id={"section_one"}>
                    <SectionOneRow>
                        <p>Locations go here</p>
                    </SectionOneRow>
                </SectionOne>
                <SectionTwo>
                    <SectionTwoRow
                        data-sal="slide-up"
                        data-sal-duration="1000"
                        data-sal-delay="300"
                        data-sal-easing="ease"
                    >
                        <p>Google Map Goes here</p>
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
    @media (max-width:600px) {
        display: block;
    }
`
const ContactImg = styled(Img)`
    width: 70%;
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
        @media(max-width:500px) {
            font-size: 52px;
        }
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
        @media(max-width:500px) {
            font-size: 18px;
        }
    }
    @media(max-width: 600px) {
        position: relative;
        top: auto;
        left: auto;
        padding: 20px;
        padding-top: 100px;
        text-align: center;
    }
`

const HeroContent = styled.div`
    position: relative;
    z-index: 10;
    max-width: 1440px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    margin-top: 100px;
    margin: 0 auto;
    display: flex;
    align-items: flex-end;
    h2 {
        font-family: "Helvetica Thin";
        max-width: 850px;
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
            font-size: 91px;
        }
        @media(max-width:600px) {
            font-size: 42px;
        }
        @media(max-width:500px) {
            font-size: 28px;
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
        @media(max-width:600px) {
            font-size: 24px;
        }
        @media(max-width:500px) {
            font-size: 18px;
            color: #fff;
        }
    }
    @media(max-width:600px) {
        margin-top: 30px;
    }
`

const ContactInfo = styled.div`
    width: 30%;
    text-align: right;
    margin-bottom: 100px;
    a {
        font-family: "Helvetica Thin";
        line-height: 1.1;
        margin: 0px;
        padding: 0px;
        letter-spacing: 0px;
        font-weight: 400;
        font-size: 23px;
        color: #8b8f91;
        text-decoration: none;
        text-transform: lowercase;
        &:hover {
            color: #61b1e8;
        }
    }
    p {
        font-family: "Helvetica Thin";
        margin-bottom: 5px;
        &.small {
            color: #61b1e8;
            font-size: 18px;
            line-height: 1;
            letter-spacing: 1px;
        }
        &.big {
            font-size: 35px;
            line-height: 1;
        }
        &.phone {
            font-weight: 400;
            font-size: 23px;
            line-height: 1.1;
            color: rgb(140, 145, 146);
        }
    }
`

const HeroBottom = styled.div`
    position: absolute;
    bottom: 50px;
    width: 100%;
    text-align: center;
    z-index: 1;
    h2 {
        font-family: "Helvetica Thin";
        color: #5ab3e8;
        font-size: 60px;
        line-height: 1;
        font-weight: 100;
        text-transform: uppercase;
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
    @media(max-width:1000px) {
        flex-wrap: wrap;
        justify-content: center;
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

export default ContactPage