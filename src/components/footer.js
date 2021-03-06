import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import styled from "styled-components"
import Image from 'gatsby-image';

import FooterLogo from "../components/logos/footer-logo"
// import InstaFeed from "../components/insta-feed"
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

const Footer = () => {

    const data = useStaticQuery(graphql`
        query {
            footerInstaImages: allWordpressWpFooterSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 33}}}}) {
                edges {
                    node {
                        content
                        acf {
                            image_one {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 300) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            image_two {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 300) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            image_three {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 300) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            image_four {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 300) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            image_five {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 300) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                            image_six {
                                localFile {
                                    childImageSharp {
                                        sizes(maxWidth: 300) {
                                            ...GatsbyImageSharpSizes
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            footerSectionOne: allWordpressWpFooterSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 32}}}}) {
                edges {
                    node {
                        content
                        acf {
                            footer_twitter_link
                            footer_linkedin_link
                            footer_instagram_link
                        }
                    }
                }
            }
            footerSectionTwo: allWordpressWpFooterSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 31}}}}) {
                edges {
                    node {
                        content
                    }
                }
            }
            footerSectionThree: allWordpressWpFooterSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 30}}}}) {
                edges {
                    node {
                        content
                    }
                }
            }
            footerCopyright: allWordpressWpFooterSection(filter: {categories: {elemMatch: {wordpress_id: {eq: 29}}}}) {
                edges {
                    node {
                        content
                    }
                }
            }
        }
    `)
    return(
        <FooterMain>
            <FooterRow>
                {data.footerSectionOne.edges.map(sectionOne => (
                <FooterCol>
                    <FooterLogo/>
                    <div dangerouslySetInnerHTML={{ __html: sectionOne.node.content }} />
                    <div class={"socials"}>
                        <a href={ sectionOne.node.acf.footer_twitter_link } target="_blank" rel="noopener noreferrer" aria-label="Link"><FaTwitter/></a>
                        <a href={ sectionOne.node.acf.footer_linkedin_link } target="_blank" rel="noopener noreferrer" aria-label="Link"><FaLinkedinIn/></a>
                        <a href={ sectionOne.node.acf.footer_instagram_link } target="_blank" rel="noopener noreferrer" aria-label="Link"><FaInstagram/></a>
                    </div>
                </FooterCol>
                ))}
                {data.footerSectionTwo.edges.map(sectionTwo => (
                <FooterCol dangerouslySetInnerHTML={{ __html: sectionTwo.node.content }}/>
                ))}
                {data.footerSectionThree.edges.map(sectionThree => (
                <FooterCol dangerouslySetInnerHTML={{ __html: sectionThree.node.content }}/>
                ))}
                {data.footerInstaImages.edges.map(instaImage => (
                <FooterCol>
                    <div dangerouslySetInnerHTML={{ __html: instaImage.node.content }}/>
                    <InstaFlex>
                        <InstaImage>
                            <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer">
                            <Image sizes={instaImage.node.acf.image_one.localFile.childImageSharp.sizes}/>
                            </a>
                        </InstaImage>
                        <InstaImage>
                            <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer">
                            <Image sizes={instaImage.node.acf.image_two.localFile.childImageSharp.sizes}/>
                            </a>
                        </InstaImage>
                        <InstaImage>
                            <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer">
                            <Image sizes={instaImage.node.acf.image_three.localFile.childImageSharp.sizes}/>
                            </a>
                        </InstaImage>
                        <InstaImage>
                            <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer">
                            <Image sizes={instaImage.node.acf.image_four.localFile.childImageSharp.sizes}/>
                            </a>
                        </InstaImage>
                        <InstaImage>
                            <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer">
                            <Image sizes={instaImage.node.acf.image_five.localFile.childImageSharp.sizes}/>
                            </a>
                        </InstaImage>
                        <InstaImage>
                            <a href="https://www.instagram.com/optomi_/" target="_blank" rel="noopener noreferrer">
                            <Image sizes={instaImage.node.acf.image_six.localFile.childImageSharp.sizes}/>
                            </a>
                        </InstaImage>
                    </InstaFlex>
                </FooterCol>
                ))}
            </FooterRow>
            {data.footerCopyright.edges.map(copyright => (
                <FooterBottom dangerouslySetInnerHTML={{ __html: copyright.node.content }} />
            ))}
        </FooterMain>
    )
    
}

const FooterMain = styled.div`
    background-color: #262626;
    padding-top: 50px;
    position: relative;
    z-index: 99;
`

const FooterRow = styled.div`
    max-width: 1140px;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 50px;
    margin: 0 auto;
    display: flex;
    @media(max-width:1200px) {
        max-width: 990px;
    }
    @media(max-width:700px) {
        flex-wrap: wrap;
    }
`

const FooterCol = styled.div`
    width: 25%;
    .gatsby-image-wrapper {
        width: 150px;
        height: 74px;
        margin-bottom: 15px;
        @media(max-width:700px) {
            margin: 0 auto;
            margin-bottom: 15px;
        }
    }
    h4 {
        font-family: "Helvetica Thin";
        color: #fff;
        font-size: 15px;
        line-height: 1;
        margin-bottom: 20px;
        text-transform: uppercase;
        font-weight: 600;
        letter-spacing: 1px;
    }
    p {
        font-family: "Helvetica Thin";
        color: #818181;
        font-size: 14px;
        line-height: 1.5;
        font-weight: 600;
    }
    a {
        font-family: "Helvetica Thin";
        color: #818181;
        text-decoration: none !important;
        transition-duration: .3s;
        font-weight: 600;
        &:hover {
            color: #fff;
        }
    }
    ul {
        list-style: none;
        padding-left: 0;
        margin-left: 0;
        li {
            font-family: "Helvetica Thin";
            font-size: 14px;
            margin-bottom: 15px;
        }
    }
    svg {
        color: #818181;
        margin-right: 15px;
    }
    @media(max-width:700px) {
        width: 100%;
        text-align: center;
        margin-bottom: 20px;
    }
`

const FooterBottom = styled.div`
    background-color: #1b1b1b;
    padding: 10px 20px;
    text-align: center;
    p {
        font-family: "Helvetica Thin";
        font-size: 12px;
        line-height: 22px;
        color: #818181;
        margin-bottom: 0;
        a {
            color: #5ab3e8;
            font-weight: 600;
            text-decoration: none !important;
        }
    }
`

const InstaFlex = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media(max-width:700px) {
        max-width: 350px;
        margin: 0 auto;
        justify-content: center;
    }
`

const InstaImage = styled.div`
    width: 75px;
    height: 75px;
    margin-right: 10px;
    margin-bottom: 10px;
    @media(max-width:1200px) {
        width: 105px;
        height: 105px;
    }
    @media(max-width:980px) {
        width: 50px;
        height: 50px;
    }
    @media(max-width:700px) {
        width: 105px;
        height: 105px;
    }
    .gatsby-image-wrapper {
        width: 75px !important;
        height: 75px !important;
        overflow: hidden;
        @media(max-width:1200px) {
            width: 105px !important;
            height: 105px !important;
        }
        @media(max-width:980px) {
            width: 50px !important;
            height: 50px !important;
        }
        @media(max-width:700px) {
            width: 105px !important;
            height: 105px !important;
        }
        img {
            object-fit: cover;
            margin-bottom: 0; 
        }
    }
`

export default Footer